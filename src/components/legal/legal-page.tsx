import type { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

/**
 * Shared shell for the legal pages. These are placeholder drafts with light
 * context; final wording is handled separately before any public launch.
 */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="font-heading text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated {updated}.</p>
      <div className="mt-8 space-y-6 leading-7 text-foreground/90">{children}</div>
    </div>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-heading text-xl font-semibold tracking-tight">
        {heading}
      </h2>
      {children}
    </section>
  );
}
