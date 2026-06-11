export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-muted-foreground">Last updated: June 2026</p>

        <div className="prose prose-sm dark:prose-invert mt-8 max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold">Using StudyMap</h2>
            <p>
              StudyMap is free to use. You can view the map and contribute places without signing up.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Your contributions</h2>
            <p>
              When you add a place or resource, it becomes part of the public map. Keep it accurate and relevant.
            </p>
            <p className="mt-2">We reserve the right to remove:</p>
            <ul className="mt-2 list-inside space-y-1 text-muted-foreground">
              <li>Spam or irrelevant places</li>
              <li>Offensive or harmful content</li>
              <li>Duplicate or incorrect information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">No warranties</h2>
            <p>
              StudyMap is provided as-is. We don't guarantee all places are open or accurate. Always verify before visiting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Liability</h2>
            <p>
              We're not responsible for injuries, losses, or issues from using information on StudyMap.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
