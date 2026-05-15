import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getFeaturedProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

// Lazy load heavy components
const TimelineSection = dynamic(() => import("../components/TimelineSection"), {
  loading: () => <div className="animate-pulse h-64 bg-gray-100 rounded-lg"></div>
});

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
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 256px, 320px"
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
      <TimelineSection />

    </div>
  );
}