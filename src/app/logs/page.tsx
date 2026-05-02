import type { Metadata } from "next";
import Link from "next/link";
import { getAllLogsMeta } from "@/lib/data";

export const metadata: Metadata = {
  title: "Weekly Logs",
  description: "Weekly internship activity logs for the 2nd Semester 2025–2026 OJT practicum.",
};

const rowAccents = ["var(--mauve)", "var(--salmon)", "var(--sage)"];

export default function LogsPage() {
  const logs = getAllLogsMeta();

  return (
    <main className="page-container section fade-up">
      {/* Header aligned with Work/Home pages */}
      <header className="hero-section" style={{ paddingBottom: "3.5rem" }}>
        <p className="section-label">Weekly Logs</p>
        <h1 className="hero-title">
          Internship <em style={{ color: "var(--mauve)", fontStyle: "italic" }}>Journal</em>
        </h1>
        <p className="hero-desc">
          A chronological record of activities, learnings, and contributions 
          throughout the internship at Makerspace Innovhub.
        </p>
      </header>

      {/* Logs List */}
      <section style={{ maxWidth: "800px" }}>
        {logs.length === 0 ? (
          <div style={{ padding: "3rem", border: "1px dashed var(--rule)", borderRadius: "16px", textAlign: "center" }}>
            <p style={{ color: "var(--ink3)", fontSize: "14px" }}>
              No logs found. Add Markdown files to <code>/content/logs/</code>.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {logs.map((log, i) => (
              <Link
                key={log.slug}
                href={`/logs/${log.slug}`}
                style={{ textDecoration: "none" }}
                className="group"
              >
                <article
                  className="card-hover"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--rule)",
                    borderRadius: "14px",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1.5rem",
                    borderLeft: `4px solid ${rowAccents[i % rowAccents.length]}`,
                    transition: "transform 0.2s ease"
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--mauve)" }}>
                        Week {log.week}
                      </span>
                      <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--rule)" }}></span>
                      <span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.5px", textTransform: "uppercase", color: "var(--ink3)" }}>
                        {log.dateRange}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        color: "var(--ink)",
                        lineHeight: 1.2,
                        marginBottom: "4px",
                      }}
                    >
                      {log.title}
                    </h2>
                    <p style={{ fontSize: "13.5px", color: "var(--ink2)", lineHeight: 1.5, opacity: 0.8 }} className="line-clamp-1">
                      {log.excerpt}
                    </p>
                  </div>

                  <div 
                    style={{ 
                      color: "var(--mauve-light)", 
                      fontSize: "20px", 
                      transition: "transform 0.2s ease" 
                    }}
                    className="group-hover:translate-x-1"
                  >
                    →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}