export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <div style={{ width: "80px", height: "10px", background: "var(--mauve-bg)", borderRadius: "99px", marginBottom: "0.75rem" }} />
      <div style={{ width: "240px", height: "40px", background: "var(--rule)", borderRadius: "8px", marginBottom: "0.6rem" }} />
      <div style={{ width: "400px", height: "15px", background: "var(--rule2)", borderRadius: "4px", marginBottom: "3rem" }} />
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            background: "#fff",
            border: "1px solid var(--rule)",
            borderRadius: "12px",
            padding: "1.1rem 1.35rem",
            marginBottom: "8px",
            borderLeft: "3px solid var(--mauve-bg)",
          }}
        >
          <div style={{ width: "110px", height: "9px", background: "var(--rule2)", borderRadius: "4px", marginBottom: "10px" }} />
          <div style={{ width: "220px", height: "17px", background: "var(--rule)", borderRadius: "4px", marginBottom: "8px" }} />
          <div style={{ width: "360px", height: "12px", background: "var(--rule2)", borderRadius: "4px" }} />
        </div>
      ))}
    </div>
  );
}
