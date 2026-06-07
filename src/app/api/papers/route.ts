import fs from "node:fs";
import path from "node:path";

import { getLocalPapers, resolvePaperPath } from "@/lib/papers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIME: Record<string, string> = {
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".docx":
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const download = searchParams.get("download");

  if (!download) {
    return Response.json({ groups: getLocalPapers() });
  }

  const abs = resolvePaperPath(download);
  if (!abs) {
    return new Response("Not found", { status: 404 });
  }

  const data = fs.readFileSync(abs);
  const ext = path.extname(abs).toLowerCase();
  const filename = path.basename(abs);

  return new Response(new Uint8Array(data), {
    headers: {
      "Content-Type": MIME[ext] ?? "application/octet-stream",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Length": String(data.length),
    },
  });
}
