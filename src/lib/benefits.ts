import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BENEFITS_DIR = path.join(process.cwd(), "content", "benefits");

export interface BenefitMeta {
  title: string;
  summary: string;
  order: number;
}

export interface BenefitGuide {
  slug: string;
  meta: BenefitMeta;
  content: string;
}

function readGuide(slug: string): BenefitGuide | null {
  const file = path.join(BENEFITS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    content,
    meta: {
      title: String(data.title ?? slug),
      summary: String(data.summary ?? ""),
      order: Number(data.order ?? 99),
    },
  };
}

export function getBenefitSlugs(): string[] {
  if (!fs.existsSync(BENEFITS_DIR)) return [];
  return fs
    .readdirSync(BENEFITS_DIR)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}

export function getBenefitGuides(): BenefitGuide[] {
  return getBenefitSlugs()
    .map(readGuide)
    .filter((guide): guide is BenefitGuide => guide !== null)
    .sort((a, b) => a.meta.order - b.meta.order);
}

export function getBenefitGuide(slug: string): BenefitGuide | null {
  return readGuide(slug);
}
