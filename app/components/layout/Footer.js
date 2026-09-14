export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#050505",
        color: "var(--color-text)",
        padding: "4rem 0 2.5rem 0",
        borderTop: "1px solid var(--color-border-gold)",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2.5rem",
          marginBottom: "3rem",
        }}
      >
        <div>
          <h4 style={{ color: "#ffffff", marginBottom: "1rem", fontSize: "1.25rem" }}>
            CNM <span style={{ color: "var(--color-gold-bright)" }}>Learning</span>
          </h4>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "0.92rem", lineHeight: "1.6" }}>
            Premier visual learning platform for IIT-JEE aspirants across India. Combining 3D concept visualization with elite mentorship.
          </p>
        </div>
        <div>
          <h5 style={{ color: "#ffffff", marginBottom: "1rem", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Quick Links
          </h5>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem" }}>
            <li><a href="#home" style={{ color: "var(--color-text-secondary)" }}>Home</a></li>
            <li><a href="#videos" style={{ color: "var(--color-text-secondary)" }}>Sample Videos</a></li>
            <li><a href="#pricing" style={{ color: "var(--color-text-secondary)" }}>Explore Courses</a></li>
            <li><a href="#faq" style={{ color: "var(--color-text-secondary)" }}>FAQ</a></li>
          </ul>
        </div>
        <div>
          <h5 style={{ color: "#ffffff", marginBottom: "1rem", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Contact & Support
          </h5>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
            [Original CNM contact information]
          </p>
        </div>
      </div>
      <div
        className="container"
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "1.75rem",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "var(--color-text-muted)",
        }}
      >
        © {new Date().getFullYear()} CNM Learning. All rights reserved. IIT-JEE Visual Preparation Platform.
      </div>
    </footer>
  );
}
