import type { Metadata } from "next";
import { ExternalLink, GraduationCap, MapPin, GitFork } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Docs — StudyMap",
  description:
    "Student guides: GitHub Student Developer Pack, finding exam centres, contributing places, and more.",
};

const SOURCES = [
  {
    label: "GitHub Education — Student Developer Pack",
    url: "https://education.github.com/pack",
  },
  {
    label: "GitHub Docs — Apply to GitHub Education as a student",
    url: "https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-education-for-students/apply-to-github-education-as-a-student",
  },
  {
    label: "GitHub Docs — Why was my application not approved?",
    url: "https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-education-for-students/why-wasnt-my-application-for-a-github-education-student-discount-approved",
  },
];

export default function DocsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <h1 className="font-heading text-3xl font-bold tracking-tight">Docs</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Guides for students using StudyMap and the tools around it.
      </p>

      <div className="mt-10 space-y-12">

        {/* ── Block 1: GitHub Student Developer Pack ── */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap className="size-5 text-primary" />
            <h2 className="font-heading text-xl font-semibold">GitHub Student Developer Pack</h2>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            Free developer tools worth hundreds of dollars for verified students:
            cloud credits, domains, IDEs, GitHub Copilot Pro, and more.
          </p>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>1. Check eligibility</CardTitle>
                <CardDescription>You qualify if all of these are true</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="ml-4 list-disc space-y-2 text-sm text-foreground/80">
                  <li>You are at least 13 years old.</li>
                  <li>
                    You are currently enrolled in a degree- or diploma-granting course of
                    study (school, college, university, or a homeschool equivalent).
                  </li>
                  <li>
                    You have a verifiable school-issued email address, or documents that
                    prove your current student status (student ID card, enrolment letter,
                    fee receipt with a current date).
                  </li>
                  <li>You have a personal GitHub account (free tier is fine).</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Prepare your proof</CardTitle>
                <CardDescription>
                  Indian schools rarely issue student emails — documents work too
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="ml-4 list-disc space-y-2 text-sm text-foreground/80">
                  <li>
                    Best: a school email address (e.g.{" "}
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono">you@school.edu.in</code>)
                    added and verified in your GitHub email settings.
                  </li>
                  <li>
                    Otherwise: photograph your school ID card or a dated enrolment
                    document. The name on the document must match your GitHub profile name.
                  </li>
                  <li>
                    GitHub asks you to capture the document with your device camera during
                    the application, so keep the physical document handy.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Apply</CardTitle>
                <CardDescription>Takes about 10 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="ml-4 list-decimal space-y-2 text-sm text-foreground/80">
                  <li>
                    Sign in to GitHub, then go to{" "}
                    <a
                      href="https://education.github.com/pack"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-primary hover:underline"
                    >
                      education.github.com/pack
                    </a>{" "}
                    and click <span className="font-medium">Sign up for Student Developer Pack</span>.
                  </li>
                  <li>Select your school from the list (add it manually if missing).</li>
                  <li>
                    Fill in how you plan to use GitHub, then upload/capture your proof of
                    enrolment.
                  </li>
                  <li>
                    Enable two-factor authentication and complete your GitHub profile
                    (real name + bio) before submitting — incomplete profiles are a common
                    rejection reason.
                  </li>
                  <li>
                    Submit and wait. Most applications process within a few days; peak
                    periods can take longer.
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. After approval</CardTitle>
                <CardDescription>What you actually get</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="ml-4 list-disc space-y-2 text-sm text-foreground/80">
                  <li>GitHub Pro features on your personal account while you remain a student.</li>
                  <li>GitHub Copilot Pro at no cost.</li>
                  <li>
                    Partner offers: free domains (Namecheap, Name.com), cloud credits
                    (DigitalOcean, Azure for Students, Heroku), JetBrains IDEs, and
                    dozens more — each redeemed from the pack page.
                  </li>
                  <li>
                    Benefits expire when you can no longer verify student status; GitHub
                    re-verifies periodically, so keep your proof current.
                  </li>
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">
                  Rejected? Most common causes: mismatched names, undated documents,
                  missing two-factor authentication. Fix the issue and reapply — no penalty.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sources</CardTitle>
                <CardDescription>Official documentation this guide is based on</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {SOURCES.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        {source.label}
                        <ExternalLink className="size-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Block 2: Finding Exam Centres ── */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <MapPin className="size-5 text-primary" />
            <h2 className="font-heading text-xl font-semibold">Finding Exam Centres</h2>
          </div>
          <Card>
            <CardContent className="pt-6 space-y-3 text-sm text-foreground/80">
              <p>
                StudyMap lists SAT, IB, and IGCSE exam centres across Mumbai,
                Thane, and Navi Mumbai. Open the{" "}
                <Link href="/map" className="font-medium text-primary hover:underline">
                  Map
                </Link>{" "}
                and select <span className="font-medium">Exam Centres</span> in the
                filter panel.
              </p>
              <p>
                Each pin shows the centre name, address, and a Directions button
                linking directly to Google Maps. The{" "}
                <Link href="/calendar" className="font-medium text-primary hover:underline">
                  Calendar
                </Link>{" "}
                page lists upcoming exam windows and result dates per board.
              </p>
              <p className="text-xs text-muted-foreground">
                Know a centre that is missing or has moved? Add it via the{" "}
                <Link href="/contribute" className="font-medium text-primary hover:underline">
                  Contribute
                </Link>{" "}
                page.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── Block 3: Contributing ── */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <GitFork className="size-5 text-primary" />
            <h2 className="font-heading text-xl font-semibold">Contributing Places</h2>
          </div>
          <Card>
            <CardContent className="pt-6 space-y-3 text-sm text-foreground/80">
              <p>
                StudyMap is open-source and community-maintained. Every place in
                the database was added by a student. You can contribute a new
                location, flag an inaccuracy, or update stale data.
              </p>
              <p>
                The fastest path: open a GitHub issue with the place name,
                address, coordinates, and type. If you are comfortable with JSON,
                submit a pull request — each category lives in{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                  data/places/&lt;type&gt;.json
                </code>
                .
              </p>
              <a
                href="https://github.com/AnayDhawan/StudyMap/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
              >
                Read the contributing guide
                <ExternalLink className="size-3.5" />
              </a>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}
