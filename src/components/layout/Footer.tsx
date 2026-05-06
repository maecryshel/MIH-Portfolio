import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/logs", label: "Logs" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-grid">
          <div>
            <p className="footer-logo">
              C. <span>Abella</span>
            </p>
            <p className="footer-copy">
              Web2 Developer Intern at Makerspace Innovhub. Building polished web experiences with a calm, approachable visual tone.
            </p>
          </div>

          <div>
            <p className="footer-heading">Explore</p>
            <nav className="footer-nav" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="footer-heading">Notes</p>
            <p className="footer-note">
              Keep exploring the curated internship journey and project highlights. Every page is optimized for readable storytelling.
            </p>
            <p className="footer-meta">
              © 2026 Cryshel Mae Abella 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}