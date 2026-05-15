"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/logs", label: "Logs" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile breakpoint */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* Close on route change */
  useEffect(() => { setOpen(false); }, [pathname]);

  /* Lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Focus trap for mobile menu */
  useEffect(() => {
    if (open && isMobile) {
      const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }

        if (e.key === 'Escape') {
          setOpen(false);
        }
      };

      document.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    }
  }, [open, isMobile]);

  return (
    <>
      <header
        style={{
          borderBottom: "1px solid var(--rule)",
          background: "rgba(250,247,244,0.92)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "896px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "60px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--ink)",
              fontSize: "1.15rem",
              fontWeight: 400,
              letterSpacing: "0.01em",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ display: "flex", gap: "3px", alignItems: "center" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--mauve)", display: "inline-block" }} />
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--salmon)", display: "inline-block" }} />
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--sage)", display: "inline-block" }} />
            </span>
            Cryshel Mae <em style={{ color: "var(--mauve)", fontStyle: "italic", marginLeft: "4px" }}>Abella</em>
          </Link>

          {/* Desktop nav — hidden on mobile */}
          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              {links.map((l) => {
                const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href as any}
                    style={{
                      fontSize: "11.5px",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: active ? "var(--mauve)" : "var(--ink3)",
                      background: active ? "var(--mauve-bg)" : "transparent",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      transition: "all .18s ease",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Burger button — mobile only */}
          {isMobile && (
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                width: "36px",
                height: "36px",
                position: "relative",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "var(--mauve)",
                  borderRadius: "99px",
                  transformOrigin: "center",
                  transition: "transform 0.22s ease",
                  transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "var(--mauve)",
                  borderRadius: "99px",
                  transition: "opacity 0.18s ease",
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "var(--mauve)",
                  borderRadius: "99px",
                  transformOrigin: "center",
                  transition: "transform 0.22s ease",
                  transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          )}
        </div>
      </header>

      {/* Backdrop — covers only the area BELOW the header */}
      {isMobile && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(44,34,32,0.35)",
            zIndex: 90,
            backdropFilter: open ? "blur(2px)" : "none",
            WebkitBackdropFilter: open ? "blur(2px)" : "none",
            pointerEvents: open ? "auto" : "none",
            opacity: open ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
        />
      )}

      {/* Mobile drawer */}
      {isMobile && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            zIndex: 95,
            background: "var(--cream)",
            borderBottom: open ? "1px solid var(--rule)" : "none",
            maxHeight: open ? "340px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.32s cubic-bezier(0.22,1,0.36,1)",
            boxShadow: open ? "0 12px 40px rgba(139,100,113,0.12)" : "none",
          }}
        >
          {/* Inner padding wrapper so content doesn't clip during animation */}
          <div style={{ padding: "1.5rem 1.5rem 2rem" }}>
            {/* Palette strip */}
            <div
              style={{
                display: "flex",
                height: "2px",
                borderRadius: "99px",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ flex: 1, background: "var(--mauve)" }} />
              <div style={{ flex: 1, background: "var(--salmon)" }} />
              <div style={{ flex: 1, background: "var(--peach)" }} />
              <div style={{ flex: 1, background: "var(--parchment)", border: "1px solid var(--rule)" }} />
              <div style={{ flex: 1, background: "var(--sage)" }} />
            </div>

            <nav role="navigation" aria-label="Mobile navigation" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {links.map((l) => {
                const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href as any}
                    style={{
                      fontSize: "1.05rem",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                      color: active ? "var(--mauve)" : "var(--ink2)",
                      background: active ? "var(--mauve-bg)" : "transparent",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "background .15s, color .15s",
                      borderLeft: active ? "2px solid var(--mauve)" : "2px solid transparent",
                    }}
                  >
                    {l.label}
                    {active && (
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--mauve)", display: "inline-block" }} />
                    )}
                  </Link>
                );
              })}
            </nav>


          </div>
        </div>
      )}
    </>
  );
}
