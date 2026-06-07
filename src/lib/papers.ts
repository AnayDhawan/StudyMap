import "server-only";

import fs from "node:fs";
import path from "node:path";

export const PAPERS_DIR = path.join(process.cwd(), "papers");

const EXCLUDED = new Set([".gitkeep", "readme.md", ".ds_store"]);

export interface LocalPaper {
  name: string;
  relPath: string;
  sizeBytes: number;
}

export interface PaperGroup {
  group: string;
  papers: LocalPaper[];
}

function walk(dir: string, base: string, out: LocalPaper[]) {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.name.startsWith(".") && entry.name !== ".gitkeep") continue;
    const abs = path.join(dir, entry.name);
    const rel = path.relative(base, abs);
    if (entry.isDirectory()) {
      walk(abs, base, out);
    } else if (entry.isFile() && !EXCLUDED.has(entry.name.toLowerCase())) {
      let sizeBytes = 0;
      try {
        sizeBytes = fs.statSync(abs).size;
      } catch {
        sizeBytes = 0;
      }
      out.push({
        name: entry.name,
        relPath: rel.split(path.sep).join("/"),
        sizeBytes,
      });
    }
  }
}

/**
 * List files in the local papers/ folder, grouped by their top-level
 * subfolder (treated as the exam board). Files placed directly in papers/
 * are grouped under "Other". Reads the filesystem, so it only returns
 * content on localhost or a self-hosted Node server.
 */
export function getLocalPapers(): PaperGroup[] {
  const flat: LocalPaper[] = [];
  walk(PAPERS_DIR, PAPERS_DIR, flat);

  const groups = new Map<string, LocalPaper[]>();
  for (const paper of flat) {
    const segments = paper.relPath.split("/");
    const group = segments.length > 1 ? segments[0] : "Other";
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group)!.push(paper);
  }

  return [...groups.entries()]
    .map(([group, papers]) => ({
      group,
      papers: papers.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => a.group.localeCompare(b.group));
}

/**
 * Safely resolve a requested relative path to an absolute path inside
 * PAPERS_DIR. Returns null if the path escapes the papers folder.
 */
export function resolvePaperPath(relPath: string): string | null {
  const abs = path.resolve(PAPERS_DIR, relPath);
  const root = path.resolve(PAPERS_DIR);
  if (abs !== root && !abs.startsWith(root + path.sep)) return null;
  if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) return null;
  return abs;
}
