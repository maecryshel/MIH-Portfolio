// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  completionDate: string;
  category: "Full-Stack" | "Mobile" | "Research" | "Frontend" | "Documentation";
  status: "Completed" | "In Progress";
  featured?: boolean;
  links?: {
    live?: string;
    repo?: string;
    apk?: string;
  };
  features?: string[];
}

export interface WeekLog {
  slug: string;
  week: number;
  dateRange: string;
  title: string;
  entries: LogEntry[];
}

export interface LogEntry {
  date: string;
  activity: string;
}

export interface LogMeta {
  slug: string;
  week: number;
  dateRange: string;
  title: string;
  excerpt: string;
}
