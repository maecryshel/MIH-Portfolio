export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--rule2)", // Using a lighter rule
        background: "transparent", // Removing the background block makes it feel less "heavy"
        color: "var(--ink3)",
      }}
      className="py-8 mt-12" // Reduced vertical padding and margin
    >
      <div className="page-container">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          
          {/* Left: Minimal Identity */}
          <div className="flex flex-col gap-1">
            <h2 
              style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: "1.1rem", // Scaled down
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              C. <span style={{ fontStyle: "italic", color: "var(--mauve-light)" }}>Abella</span>
            </h2>
            <p style={{ fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase", opacity: 0.6 }}>
              Makerspace Innovhub 
            </p>
          </div>



        </div>
      </div>
    </footer>
  );
}