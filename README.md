# Cryshel Mae Abella — OJT Portfolio

**Web2 Developer Intern · Makerspace Innovhub · UEP College of Information Technology**
2nd Semester 2025–2026 · Practicum 500 hrs

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| Data | Local JSON + Markdown (gray-matter) |
| Deployment | Vercel |

## Project Structure

```
portfolio/
├── content/
│   └── logs/          # Weekly Markdown log files (week-01.md … week-11.md)
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home — hero, stats, featured projects, timeline
│   │   ├── work/
│   │   │   ├── page.tsx      # Server component — passes data to WorkClient
│   │   │   └── WorkClient.tsx # Client component — category & tech stack filter
│   │   └── logs/
│   │       ├── page.tsx      # Logs index
│   │       ├── loading.tsx   # Skeleton loading state
│   │       └── [slug]/
│   │           └── page.tsx  # Dynamic log page (generateStaticParams + generateMetadata)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx       # Sticky nav with active-link styling
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Badge.tsx     # Atom — status/category/tech badges
│   │       └── ProjectCard.tsx # Molecule — project display card
│   ├── lib/
│   │   ├── data.ts           # Data access layer (projects + logs)
│   │   └── projects.json     # Project data source
│   └── types/
│       └── index.ts          # TypeScript interfaces
└── public/
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Content

### Add a new project
Edit `src/lib/projects.json` — no UI code changes required:

```json
{
  "id": "my-project",
  "title": "My Project",
  "description": "...",
  "techStack": ["Next.js", "TypeScript"],
  "completionDate": "2026-05-10",
  "category": "Frontend",
  "status": "Completed",
  "featured": false
}
```

### Add a new weekly log
Create a new `.md` file in `content/logs/`:

```markdown
---
week: 12
dateRange: "May 5–9, 2026"
title: "Week Title"
excerpt: "Short description shown on the logs index."
---

## Overview
...
```

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

## Design Principles (SOLID)

- **Single Responsibility** — `data.ts` handles all data access; UI components only render
- **Open/Closed** — Add projects via JSON without touching components
- **Liskov** — `Badge` variants are interchangeable without breaking layout
- **Interface Segregation** — `LogMeta` and `Project` interfaces are scoped to their use case
- **Dependency Inversion** — Pages depend on `data.ts` abstractions, not file system directly

---

**Supervisor:** Carl Daniel F. Estrada, MIH — Makerspace Innovhub  
**OJT Coordinator:** Jessabel P. Alancado  
**Dean:** Frederick J. Soriano, MIT — College of Information Technology
