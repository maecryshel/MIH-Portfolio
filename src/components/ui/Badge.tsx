interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "amber" | "muted" | "sage";
}

const styles: Record<string, React.CSSProperties> = {
  default: {
    background: "var(--peach-light)",
    color: "var(--mauve)",
    border: "1px solid rgba(139,100,113,0.18)",
  },
  accent: {
    background: "var(--mauve-bg)",
    color: "var(--mauve)",
    border: "1px solid rgba(139,100,113,0.25)",
  },
  amber: {
    background: "#FFF5E4",
    color: "#8B5E08",
    border: "1px solid rgba(139,94,8,0.2)",
  },
  muted: {
    background: "var(--parchment)",
    color: "var(--ink3)",
    border: "1px solid var(--rule)",
  },
  sage: {
    background: "var(--sage-light)",
    color: "var(--sage-dark)",
    border: "1px solid rgba(111,140,101,0.22)",
  },
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      style={{
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.3px",
        padding: "3px 9px",
        borderRadius: "99px",
        display: "inline-flex",
        alignItems: "center",
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}
