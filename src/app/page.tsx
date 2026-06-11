import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Hero } from "@/components/home/hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="kicker">Why StudyMap</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Built by students, for students.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Finding study spots and exam centres takes forever. StudyMap consolidates what students actually need into one free, open-source map.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Button asChild size="sm">
              <Link href="/map">Open Map</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/contribute">Contribute</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
