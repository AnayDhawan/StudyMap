import type { Metadata } from "next";
import { Download, FileText, FolderOpen } from "lucide-react";

import { getLocalPapers } from "@/lib/papers";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Papers",
  description:
    "Browse past papers and syllabi you keep in your own local papers/ folder. Works offline on localhost.",
};

export const dynamic = "force-dynamic";

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function PapersPage() {
  const groups = getLocalPapers();
  const total = groups.reduce((sum, group) => sum + group.papers.length, 0);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <h1 className="font-heading text-3xl font-bold tracking-tight">Local papers</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        StudyMap never stores papers. Drop your own question papers and syllabi into the{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-sm">papers/</code> folder of
        this project (organised as{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-sm">papers/&lt;board&gt;/file</code>
        ) and they appear here, ready to open offline on localhost.
      </p>

      {total === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-lg border border-dashed py-16 text-center">
          <FolderOpen className="size-8 text-muted-foreground" />
          <p className="font-medium">No local papers yet</p>
          <p className="max-w-md text-sm text-muted-foreground">
            Add files to the <code className="rounded bg-muted px-1">papers/</code>{" "}
            folder, for example{" "}
            <code className="rounded bg-muted px-1">papers/SAT/practice-test-4.pdf</code>,
            then refresh this page. Files there are private to your machine and are never
            committed or uploaded.
          </p>
        </div>
      ) : (
        <div className="mt-8 flex flex-col gap-8">
          {groups.map((group) => (
            <section key={group.group}>
              <div className="mb-3 flex items-center gap-2">
                <h2 className="font-heading text-lg font-semibold">{group.group}</h2>
                <Badge variant="secondary">{group.papers.length}</Badge>
              </div>
              <ul className="divide-y rounded-lg border">
                {group.papers.map((paper) => (
                  <li
                    key={paper.relPath}
                    className="flex items-center gap-3 px-4 py-3"
                  >
                    <FileText className="size-4 shrink-0 text-muted-foreground" />
                    <span className="min-w-0 flex-1 truncate text-sm">{paper.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {formatSize(paper.sizeBytes)}
                    </span>
                    <a
                      href={`/api/papers?download=${encodeURIComponent(paper.relPath)}`}
                      className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
                    >
                      <Download className="size-3.5" />
                      Open
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
