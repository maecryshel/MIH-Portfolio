import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Home",
  description: "Internship portfolio of Cryshel Mae C. Abella — Web2 Developer Intern at Makerspace Innovhub.",
};

const stats = [
  { n: "11",  label: "Weeks completed" },
  { n: "3",   label: "Core projects" },
  { n: "12", label: "Technologies" },
];

const skills = [
  "Next.js", "Flutter", "Firebase", "Tailwind CSS", "TypeScript",
  "Node.js", "MongoDB", "Vercel", "React", "ASANA", "OrangeHRM", "Git",
];

const timelineWeeks = [
  { week: 1,  dates: "Feb 9–13",       label: "Onboarding & Node.js fundamentals" },
  { week: 2,  dates: "Feb 16–20",      label: "Seminars, field research & OrangeHRM schema" },
  { week: 3,  dates: "Feb 23–27",      label: "Hack4Mapandan kickoff & backlink analysis" },
  { week: 4,  dates: "Mar 3–6",        label: "MediTrack development begins + webinar series" },
  { week: 5,  dates: "Mar 9–13",       label: "Flutter mobile app + Firebase integration" },
  { week: 6,  dates: "Mar 16–19",      label: "Edit Profile, avatar upload & push notifications" },
  { week: 7,  dates: "Mar 23–27",      label: "Bug fixes & UI/UX enhancement sprint" },
  { week: 8,  dates: "Apr 7–10",       label: "WFH — frontend polish & MediTrack PPT" },
  { week: 9,  dates: "Apr 13–17",      label: "Vercel deployment fixes & H4M finalization" },
  { week: 10, dates: "Apr 20–25",      label: "End-to-end testing & connectivity verification" },
  { week: 11, dates: "Apr 27 – May 2", label: "Final fixes, deployment & portfolio build" },
];

const dotColors = [
  "var(--mauve)", "var(--salmon)", "var(--peach)",
  "var(--sage)",  "var(--mauve)", "var(--salmon)",
  "var(--peach)", "var(--sage)",  "var(--mauve)",
  "var(--salmon)", "var(--sage)",
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="page-container">
      {/* ── Hero Section ── */}
      <section className="hero-section fade-up" aria-labelledby="hero-title">
        <div className="hero-inner flex flex-col md:flex-row items-center justify-between gap-12 py-12">

          {/* Left Column: Bio */}
          <div className="hero-left flex-1 text-center md:text-left">
            <h1 id="hero-title" className="hero-title">
              Cryshel Mae{" "}
              <em style={{ color: "var(--mauve)", fontStyle: "italic" }}>Abella</em>
            </h1>

            <p className="hero-desc">
              Web2 Developer Intern building cross-platform health-tech applications at{" "}
              <strong style={{ color: "var(--mauve)", fontWeight: 500 }}>Makerspace Innovhub</strong>.{" "}
              University of Eastern Pangasinan.
            </p>

            <div className="hero-ctas justify-center md:justify-start" role="group" aria-label="Primary actions">
              <Link href="/work" className="btn-primary">View Work</Link>
              <Link href="/logs" className="btn-outline">Read Logs</Link>
            </div>
          </div>

          {/* Right Column: Circular Portrait */}
          <div className="hero-right flex-shrink-0">
            <div className="hero-profile-frame group" role="img" aria-label="Profile photo of Cryshel Mae C. Abella">
              <div className="hero-profile-shadow" aria-hidden="true" />
              <div className="hero-profile-image">
                <Image
                  src="/profile.jpg"
                  alt="Professional headshot of Cryshel Mae C. Abella, Web2 Developer Intern"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
              <div className="hero-profile-ring" aria-hidden="true" />

              <div className="hero-accent-dots" aria-hidden="true">
                {["var(--mauve)", "var(--salmon)", "var(--sage)"].map((c, i) => (
                  <span
                    key={i}
                    style={{ background: c }}
                    className="hero-accent-dot"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="section fade-up" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Internship Statistics</h2>
        <div className="stats-grid" role="list">
          {stats.map((s, i) => {
            const bgs = ["var(--mauve-bg)", "var(--peach-light)", "var(--sage-light)", "var(--parchment)"];
            const fgs = ["var(--mauve)", "var(--salmon)", "var(--sage-dark)", "var(--ink2)"];
            return (
              <div key={s.label} className="stat-card" style={{ background: bgs[i % bgs.length], border: "1px solid var(--rule)" }} role="listitem">
                <div className="stat-number" style={{ color: fgs[i % fgs.length] }} aria-label={`${s.n} ${s.label}`}>{s.n}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Skills Section ── */}
      <section className="section fade-up" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="section-label">Technical Skills</h2>
        <div className="skills-list flex flex-wrap gap-2" role="list" aria-label="Technical skills">
          {skills.map((s) => (
            <span key={s} className="skill-tag" role="listitem">{s}</span>
          ))}
        </div>
      </section>

      {/* ── Featured Projects Section ── */}
      <section className="section fade-up" aria-labelledby="projects-heading">
        <div className="section-header flex justify-between items-end mb-8">
          <div>
            <h2 id="projects-heading" className="section-label">Selected Work</h2>
            <p className="text-2xl font-['Cormorant_Garamond'] italic">Featured Projects</p>
          </div>
          <Link href="/work" className="section-link" aria-label="View all projects">View all →</Link>
        </div>
        <div className="projects-grid projects-grid--homepage" role="list" aria-label="Featured projects">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} compact />
          ))}
        </div>
      </section>

      {/* ── Internship Timeline Section ── */}
      <section className="section section-last fade-up" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="section-label">Internship Journey</h2>
        <div className="timeline mt-10" role="list" aria-label="Internship timeline">
          <div className="timeline-line" aria-hidden="true" />
          {timelineWeeks.map((w, i) => (
            <div key={w.week} className="timeline-item" role="listitem">
              <div
                className="timeline-dot"
                style={{
                  background: dotColors[i % dotColors.length],
                  boxShadow: `0 0 0 4px ${dotColors[i % dotColors.length]}22`
                }}
                aria-hidden="true"
              />
              <div className="pb-8 pl-4">
                <p className="timeline-week text-[10px] font-bold uppercase tracking-widest text-[var(--ink3)]">
                  Week {w.week} &nbsp;·&nbsp; {w.dates}, 2026
                </p>
                <p className="timeline-text text-[var(--ink2)] mt-1">{w.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}