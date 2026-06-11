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
        <h1 className="font-heading text-3xl font-bold tracking-tight">Exam Calendar</h1>
      </div>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Upcoming SAT, IB, and Cambridge IGCSE exam windows and result dates. Every
        date links back to the official board source. Provisional entries are
        marked until the board confirms its timetable.
      </p>

      <CalendarView />

      <p className="mt-8 text-xs text-muted-foreground">
        Dates last verified 11 June 2026 against College Board, IBO, and Cambridge
        International. Always confirm with your school or test centre before
        planning — boards occasionally revise timetables.{" "}
        <span className="font-medium">{EXAM_EVENTS.length} sessions tracked.</span>
      </p>
    </div>
  );
}
