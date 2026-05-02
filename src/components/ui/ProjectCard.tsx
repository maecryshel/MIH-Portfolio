import type { Project } from "@/types";
import { Badge } from "./Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isCompleted = project.status === "Completed";
  const hasLinks = project.links && (project.links.live || project.links.repo || project.links.apk);
  const hasFeatures = project.features && project.features.length > 0;

  return (
    <article
      className="card-hover"
      style={{
        background: "#fff",
        border: "1px solid var(--rule)",
        borderRadius: "14px",
        padding: "1.4rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gradient accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "1.4rem",
          right: "1.4rem",
          height: "2px",
          background: isCompleted
            ? "linear-gradient(90deg, var(--mauve), var(--salmon), var(--peach))"
            : "linear-gradient(90deg, var(--sage), var(--sage-light))",
          borderRadius: "0 0 4px 4px",
        }}
      />

      {/* Title + Status */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginTop: "4px" }}>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem",
            fontWeight: 500,
            color: "var(--ink)",
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </h3>
        <Badge variant={isCompleted ? "accent" : "amber"}>
          {project.status}
        </Badge>
      </div>

      {/* Description */}
      <p style={{ fontSize: "0.875rem", color: "var(--ink2)", lineHeight: 1.65, flex: 1 }}>
        {project.description}
      </p>

      {/* Features list */}
      {hasFeatures && (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
          {project.features!.map((f) => (
            <li
              key={f}
              style={{
                fontSize: "12.5px",
                color: "var(--ink2)",
                paddingLeft: "1.1rem",
                position: "relative",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "5px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--salmon)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Tech badges */}
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        <Badge variant="muted">{project.category}</Badge>
        {project.techStack.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {/* Links */}
      {hasLinks && (
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            paddingTop: "0.6rem",
            borderTop: "1px solid var(--rule)",
          }}
        >
          {project.links!.live && (
            <a
              href={project.links!.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "11.5px",
                fontWeight: 500,
                color: "#fff",
                background: "var(--mauve)",
                padding: "5px 13px",
                borderRadius: "99px",
                textDecoration: "none",
                letterSpacing: "0.3px",
                transition: "opacity .15s",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Live Site
            </a>
          )}
          {project.links!.repo && (
            <a
              href={project.links!.repo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "11.5px",
                fontWeight: 500,
                color: "var(--mauve)",
                background: "var(--mauve-bg)",
                border: "1px solid rgba(139,100,113,0.22)",
                padding: "5px 13px",
                borderRadius: "99px",
                textDecoration: "none",
                letterSpacing: "0.3px",
                transition: "opacity .15s",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {project.links!.apk && (
            <a
              href={project.links!.apk}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "11.5px",
                fontWeight: 500,
                color: "var(--sage-dark)",
                background: "var(--sage-light)",
                border: "1px solid rgba(111,140,101,0.22)",
                padding: "5px 13px",
                borderRadius: "99px",
                textDecoration: "none",
                letterSpacing: "0.3px",
                transition: "opacity .15s",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L7 11M12 16L17 11M12 16V4M5 20H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download APK
            </a>
          )}
        </div>
      )}

      {/* Date */}
      <p style={{ fontSize: "11px", color: "var(--ink3)", letterSpacing: "0.3px" }}>
        {isCompleted ? "Completed" : "Target"}&nbsp;
        {new Date(project.completionDate).toLocaleDateString("en-PH", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </article>
  );
}
