export default function VideoPlaceholder({
  title = "CNM Learning - Sample Lesson",
  aspectRatio = "16/9",
  className = "",
}) {
  return (
    <div
      className={`card ${className}`}
      style={{
        aspectRatio,
        backgroundColor: "#0a0a0c",
        color: "var(--color-text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(212, 175, 55, 0.3)",
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.85), 0 0 24px rgba(212, 175, 55, 0.12)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      {/* Subtle background ambient radial light */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Centered Play Button */}
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #fcd85c 0%, #d4af37 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          boxShadow: "0 6px 20px rgba(212, 175, 55, 0.4)",
          position: "relative",
          zIndex: 2,
          cursor: "pointer",
          transition: "transform 0.2s ease, boxShadow 0.2s ease",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#050505"
          stroke="#050505"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginLeft: "3px" }}
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </div>

      {/* Video Title Label */}
      <span
        style={{
          fontFamily: "var(--font-family-heading)",
          fontWeight: 700,
          fontSize: "1.05rem",
          textAlign: "center",
          color: "#ffffff",
          position: "relative",
          zIndex: 2,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </span>

      {/* Badge Indicator */}
      <span
        className="badge badge-accent"
        style={{ marginTop: "0.6rem", fontSize: "0.75rem", position: "relative", zIndex: 2 }}
      >
        4K HD Visual Demo Lesson
      </span>

      {/* Minimal Player UI Control Bar at Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0.6rem 1rem",
          backgroundColor: "rgba(5, 5, 5, 0.75)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold-bright)">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <div
            style={{
              width: "120px",
              height: "4px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "2px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "35%",
                height: "100%",
                backgroundColor: "var(--color-gold-bright)",
                borderRadius: "2px",
              }}
            />
          </div>
        </div>
        <span style={{ fontSize: "0.72rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-family-heading)", fontWeight: 600 }}>
          04:25 / 12:40
        </span>
      </div>
    </div>
  );
}
