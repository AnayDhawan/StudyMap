"use client";

import { useState } from "react";
import { ExternalLink, List, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BOARD_LABELS,
  EXAM_EVENTS,
  eventsByBoard,
  nextUpcomingEvent,
  type ExamBoard,
  type ExamEvent,
} from "@/lib/exam-dates";

const BOARDS: ExamBoard[] = ["SAT", "IB", "IGCSE"];

// Board accent colors for calendar dots
const BOARD_COLORS: Record<ExamBoard, string> = {
  SAT: "#0ea5e9",   // sky-500
  IB:  "#8b5cf6",   // violet-500
  IGCSE: "#10b981", // emerald-500
};

function formatDate(iso: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso;
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatExamWindow(event: ExamEvent): string {
  return event.examStart === event.examEnd
    ? formatDate(event.examStart)
    : `${formatDate(event.examStart)} – ${formatDate(event.examEnd)}`;
}

function EventRow({ event, isNext }: { event: ExamEvent; isNext: boolean }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="flex flex-wrap items-center gap-2">
        <p className="font-medium text-foreground">{event.session}</p>
        {isNext && <Badge>Next up</Badge>}
        {!event.confirmed && (
          <Badge variant="outline" className="text-muted-foreground">
            Provisional
          </Badge>
        )}
      </div>

      <dl className="mt-3 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
        <div className="flex gap-2">
          <dt className="text-muted-foreground">Exam:</dt>
          <dd className="font-medium">{formatExamWindow(event)}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-muted-foreground">Results:</dt>
          <dd className="font-medium">
            {formatDate(event.results)}
            {event.resultsEstimated && (
              <span className="ml-1 text-xs text-muted-foreground">(expected)</span>
            )}
          </dd>
        </div>
      </dl>

      {event.notes && (
        <p className="mt-2 text-xs text-muted-foreground">{event.notes}</p>
      )}

      <a
        href={event.source.url}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
      >
        Source: {event.source.label}
        <ExternalLink className="size-3" />
      </a>
    </div>
  );
}

// ── Calendar grid ────────────────────────────────────────────────────────────

interface CalendarMonth {
  year: number;
  month: number; // 0-indexed
}

function getMonthsToShow(count = 8): CalendarMonth[] {
  const now = new Date();
  const months: CalendarMonth[] = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    months.push({ year: d.getFullYear(), month: d.getMonth() });
  }
  return months;
}

/** Returns all events that overlap the given month. */
function eventsInMonth(year: number, month: number): ExamEvent[] {
  const monthStart = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0, 23, 59, 59);

  return EXAM_EVENTS.filter((ev) => {
    const start = new Date(ev.examStart + "T00:00:00");
    const end = /^\d{4}-\d{2}-\d{2}$/.test(ev.examEnd)
      ? new Date(ev.examEnd + "T23:59:59")
      : start;
    return start <= monthEnd && end >= monthStart;
  });
}

/** Days in a month that fall within an event's window. */
function activeDaysForEvent(ev: ExamEvent, year: number, month: number): Set<number> {
  const set = new Set<number>();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(ev.examStart)) return set;
  const windowStart = new Date(ev.examStart + "T00:00:00");
  const windowEnd = /^\d{4}-\d{2}-\d{2}$/.test(ev.examEnd)
    ? new Date(ev.examEnd + "T23:59:59")
    : windowStart;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    const day = new Date(year, month, d);
    if (day >= windowStart && day <= windowEnd) set.add(d);
  }
  return set;
}

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function MonthGrid({ year, month }: CalendarMonth) {
  const events = eventsInMonth(year, month);
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  // Build a map: day → [board colors]
  const dayColors: Record<number, string[]> = {};
  for (const ev of events) {
    const days = activeDaysForEvent(ev, year, month);
    days.forEach((d) => {
      if (!dayColors[d]) dayColors[d] = [];
      if (!dayColors[d].includes(BOARD_COLORS[ev.board])) {
        dayColors[d].push(BOARD_COLORS[ev.board]);
      }
    });
  }

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  // Pad to complete grid
  while (cells.length % 7 !== 0) cells.push(null);

  if (events.length === 0) {
    return (
      <div className="rounded-lg border border-border p-4">
        <p className="text-xs font-semibold text-muted-foreground mb-3">
          {MONTH_NAMES[month]} {year}
        </p>
        <p className="text-xs text-muted-foreground">No exams this month.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border p-4">
      <p className="text-sm font-semibold mb-3">
        {MONTH_NAMES[month]} {year}
        {events.length > 0 && (
          <span className="ml-2 text-xs font-normal text-muted-foreground">
            {events.map((e) => e.board).join(", ")}
          </span>
        )}
      </p>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-1">
        {DAY_NAMES.map((d) => (
          <div key={d} className="text-center text-[10px] font-medium text-muted-foreground py-0.5">
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;
          const colors = dayColors[day] ?? [];
          const hasEvent = colors.length > 0;
          const isToday = isCurrentMonth && today.getDate() === day;

          return (
            <div
              key={day}
              className={`relative flex flex-col items-center justify-center aspect-square rounded text-xs font-medium
                ${hasEvent ? "ring-1 ring-inset ring-primary/20" : ""}
                ${isToday ? "bg-primary/10 font-bold" : ""}
              `}
              title={hasEvent ? events.filter((e) => activeDaysForEvent(e, year, month).has(day)).map((e) => e.session).join(" / ") : undefined}
            >
              <span className={isToday ? "text-primary" : hasEvent ? "text-foreground" : "text-muted-foreground"}>
                {day}
              </span>
              {hasEvent && (
                <div className="flex gap-0.5 mt-0.5">
                  {colors.map((c, ci) => (
                    <span
                      key={ci}
                      className="rounded-full"
                      style={{ width: 4, height: 4, backgroundColor: c }}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
        {events.map((ev) => (
          <div key={ev.id} className="flex items-center gap-1">
            <span className="rounded-full size-2" style={{ backgroundColor: BOARD_COLORS[ev.board] }} />
            <span className="text-[10px] text-muted-foreground">{ev.board}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────

export function CalendarView() {
  const [view, setView] = useState<"list" | "calendar">("list");
  const next = nextUpcomingEvent(new Date());
  const months = getMonthsToShow(8);

  return (
    <>
      {/* Toggle */}
      <div className="mt-6 inline-flex rounded-lg border border-border bg-muted p-0.5 text-sm">
        <button
          onClick={() => setView("list")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-colors ${
            view === "list"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <List className="size-4" />
          List
        </button>
        <button
          onClick={() => setView("calendar")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-colors ${
            view === "calendar"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <CalendarDays className="size-4" />
          Calendar
        </button>
      </div>

      {/* List view */}
      {view === "list" && (
        <div className="mt-8 space-y-6">
          {BOARDS.map((board) => {
            const events = eventsByBoard(board);
            if (events.length === 0) return null;
            return (
              <Card key={board}>
                <CardHeader>
                  <CardTitle>{BOARD_LABELS[board]}</CardTitle>
                  <CardDescription>
                    {board === "SAT" && "Next four international administrations with score-release dates."}
                    {board === "IB" && "Upcoming Diploma Programme sessions and result releases."}
                    {board === "IGCSE" && "Upcoming Cambridge exam series and result releases."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {events.map((event) => (
                    <EventRow key={event.id} event={event} isNext={event.id === next?.id} />
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Calendar grid view */}
      {view === "calendar" && (
        <div className="mt-8">
          {/* Board legend */}
          <div className="mb-4 flex flex-wrap gap-4">
            {BOARDS.map((board) => (
              <div key={board} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <span className="rounded-full size-2.5" style={{ backgroundColor: BOARD_COLORS[board] }} />
                {BOARD_LABELS[board]}
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {months.map((m) => (
              <MonthGrid key={`${m.year}-${m.month}`} year={m.year} month={m.month} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
