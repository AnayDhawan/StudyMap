import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";

import { EXAM_EVENTS } from "@/lib/exam-dates";
import { CalendarView } from "./CalendarView";

export const metadata: Metadata = {
  title: "Exam Calendar",
  description:
    "Upcoming SAT, IB, and Cambridge IGCSE exam and result dates, sourced from the official boards.",
};

export default function CalendarPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <div className="flex items-center gap-3">
        <CalendarDays className="size-7 text-primary" />
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Exam Calendar
        </h1>
      </div>

      <p className="mt-2 max-w-2xl text-muted-foreground">
        Upcoming SAT, IB, and Cambridge IGCSE exam windows and result dates. Every
        date links back to the official board source. Provisional entries are
        marked until the board confirms its timetable.
      </p>

      {/* EVENTS (NOW ABOVE CALENDAR) */}
      <div className="mt-6 space-y-3">
        {EXAM_EVENTS.map((event, i) => (
          <div
            key={i}
            className="rounded-lg border bg-card p-4 text-sm"
          >
            <p className="font-medium">{event.title}</p>
            <p className="text-muted-foreground">
              {event.date}
            </p>
          </div>
        ))}
      </div>

      {/* CALENDAR */}
      <CalendarView />

      <p className="mt-8 text-xs text-muted-foreground">
        Dates last verified 11 June 2026 against College Board, IBO, and Cambridge
        International. Always confirm with your school or test centre before
        planning. Boards occasionally revise timetables.{" "}
        <span className="font-medium">
          {EXAM_EVENTS.length} sessions tracked.
        </span>
      </p>
    </div>
  );
}
