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

export default function TimelineSection() {
  return (
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
  );
}