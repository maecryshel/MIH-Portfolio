// src/lib/data.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Project, LogMeta } from "@/types";
import projectsData from "./projects.json";

// ── Projects ──────────────────────────────────────────────────────────────────

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return getAllProjects();
  return getAllProjects().filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  const cats = getAllProjects().map((p) => p.category);
  return ["All", ...Array.from(new Set(cats))];
}

export function getAllTechStacks(): string[] {
  const stacks = getAllProjects().flatMap((p) => p.techStack);
  return Array.from(new Set(stacks)).sort();
}

// ── Logs ──────────────────────────────────────────────────────────────────────

const logsDirectory = path.join(process.cwd(), "content/logs");

export function getAllLogSlugs(): string[] {
  if (!fs.existsSync(logsDirectory)) return [];
  return fs
    .readdirSync(logsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllLogsMeta(): LogMeta[] {
  return getAllLogSlugs()
    .map((slug) => {
      const fullPath = path.join(logsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        week: data.week as number,
        dateRange: data.dateRange as string,
        title: data.title as string,
        excerpt: data.excerpt as string,
      };
    })
    .sort((a, b) => a.week - b.week);
}

export async function getLogBySlug(
  slug: string
): Promise<{ meta: LogMeta; contentHtml: string }> {
  const fullPath = path.join(logsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  return {
    meta: {
      slug,
      week: data.week as number,
      dateRange: data.dateRange as string,
      title: data.title as string,
      excerpt: data.excerpt as string,
    },
    contentHtml: processed.toString(),
  };
}
