export default function ImagePlaceholder({
  label = "Course Visual",
  aspectRatio = "4/3",
  height,
  className = "",
}) {
  return (
    <div
      className={`card ${className}`}
      style={{
        aspectRatio: height ? undefined : aspectRatio,
        height: height || undefined,
        backgroundColor: "#0d0d10",
        borderColor: "var(--color-border-gold)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        textAlign: "center",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "var(--radius-md)",
          backgroundColor: "var(--color-gold-soft)",
          border: "1px solid var(--color-border-gold)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "0.75rem",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-gold-bright)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      </div>
      <span
        style={{
          fontFamily: "var(--font-family-heading)",
          fontWeight: 600,
          fontSize: "0.95rem",
          color: "var(--color-text)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
