import type { Metadata } from "next";
import { Mail, Code, MessageCircle } from "lucide-react";

import { site } from "@/lib/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the StudyMap team.",
};

const contactEmail = "anay@studymap.dev";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="font-heading text-3xl font-bold tracking-tight">Get in touch</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Have a question, found a bug, or want to contribute? Here is how to reach us.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {/* Email */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Mail className="size-5" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              For general questions or partnerships:
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              {contactEmail}
            </a>
          </CardContent>
        </Card>

        {/* GitHub Issues */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Code className="size-5" />
              GitHub Issues
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Report bugs or suggest features:
            </p>
            <a
              href={`${site.repo}/issues`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              Open an issue
            </a>
          </CardContent>
        </Card>

        {/* GitHub Discussions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <MessageCircle className="size-5" />
              GitHub Discussions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Ask questions or discuss ideas:
            </p>
            <a
              href={`${site.repo}/discussions`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              Start a discussion
            </a>
          </CardContent>
        </Card>

        {/* Report a bad pin */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Mail className="size-5" />
              Report bad data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Found incorrect place info?
            </p>
            <a
              href={`mailto:${contactEmail}?subject=Report: Incorrect place data&body=Place name: %0ACity: %0AIssue: %0A`}
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              Email us
            </a>
          </CardContent>
        </Card>
      </div>

      {/* FAQ */}
      <div className="mt-12 space-y-6">
        <h2 className="font-heading text-lg font-semibold">Frequently asked</h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">How do I contribute a new place?</h3>
            <p className="text-sm text-muted-foreground">
              See the <a href="/contribute" className="font-medium text-primary hover:underline">Contribute</a> page for step-by-step instructions.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">How long does it take to review my pull request?</h3>
            <p className="text-sm text-muted-foreground">
              Usually 1-3 days. Complex contributions or those needing clarification may take longer. Thanks for your patience.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Can I request a feature?</h3>
            <p className="text-sm text-muted-foreground">
              Yes! Open a GitHub issue or discussion. Features are prioritized based on impact and volunteer availability.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">How do I report a privacy or security issue?</h3>
            <p className="text-sm text-muted-foreground">
              Do not post it publicly. Email {contactEmail} with details. We will respond within 48 hours.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Can I use StudyMap data in my own project?</h3>
            <p className="text-sm text-muted-foreground">
              Yes, it is released under CC0 (public domain). See the <a href="/legal/terms" className="font-medium text-primary hover:underline">Terms</a> page for details.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Is StudyMap free forever?</h3>
            <p className="text-sm text-muted-foreground">
              Yes. StudyMap is open source and will always be free. The code is on GitHub if you want to self-host.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
