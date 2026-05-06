"use client";
import { useState, useMemo } from "react";
import type { Project } from "@/types";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface WorkClientProps {
  projects: Project[];
  categories: string[];
  techStacks: string[];
}

export function WorkClient({ projects, categories, techStacks }: WorkClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const catMatch = activeCategory === "All" || p.category === activeCategory;
      const techMatch = activeTech === "All" || p.techStack.includes(activeTech);
      return catMatch && techMatch;
    });
  }, [projects, activeCategory, activeTech]);

  const pillStyle = (isActive: boolean) => ({
    padding: "6px 16px",
    borderRadius: "99px",
    fontSize: "11px",
    fontWeight: 500,
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: isActive ? "1.5px solid var(--mauve)" : "1px solid var(--rule)",
    background: isActive ? "var(--mauve-bg)" : "#fff",
    color: isActive ? "var(--mauve)" : "var(--ink3)",
  });

  return (
    <div className="page-container">
      {/* 1. Page Header */}
      <header className="hero-section" style={{ paddingBottom: "3rem" }}>
        <p className="section-label">Portfolio</p>
        <h1 className="hero-title">
          Selected <span style={{ fontStyle: "italic" }}>Work</span>
        </h1>
        <p className="hero-desc" style={{ maxWidth: "500px" }}>
          Projects and research completed during the 500-hour practicum at Makerspace Innovhub. 
          Filter by category or technology stack.
        </p>
      </header>

      {/* 2. Filter Controls */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "4rem" }}>
        
        {/* Category Row */}
        <section>
          <h3 className="section-label" style={{ marginBottom: "0.75rem" }}>Category</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {categories.map((c) => (
              <button 
                key={c} 
                style={pillStyle(activeCategory === c)} 
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Technology Row with Result Count */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "0.75rem" }}>
            <h3 className="section-label" style={{ marginBottom: 0 }}>Technology</h3>
            <div className="status-pill">
              <span className="status-dot"></span>
              {filtered.length} Projects
            </div>
          </div>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", maxWidth: "850px" }}>
            {["All", ...techStacks].map((t) => (
              <button 
                key={t} 
                style={pillStyle(activeTech === t)} 
                onClick={() => setActiveTech(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* 3. Projects Grid */}
      <main className="projects-grid projects-grid--compact fade-up">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} compact />
        ))}
      </main>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "6rem 0", border: "1px dashed var(--rule)", borderRadius: "18px" }}>
          <p className="hero-card-label" style={{ fontSize: "1.2rem" }}>✦</p>
          <p style={{ color: "var(--ink3)" }}>No projects match your current selection.</p>
        </div>
      )}
    </div>
  );
}