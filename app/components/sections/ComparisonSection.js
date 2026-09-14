import SectionHeading from "../ui/SectionHeading";

export default function ComparisonSection() {
  const comparisonRows = [
    { feature: "Visual Concept Lessons", cnm: true, other: false },
    { feature: "IITian-Mode Strategy", cnm: true, other: false },
    { feature: "Real-Time Doubt Support", cnm: true, other: false },
    { feature: "Progress Tracking Dashboard", cnm: true, other: false },
    { feature: "Topic-wise Microtests", cnm: true, other: false },
    { feature: "Animated Formula Sheets", cnm: true, other: false },
    { feature: "Weekly Personal Mentoring", cnm: true, other: false },
    { feature: "Clarity-First Teaching Style", cnm: true, other: false },
    { feature: "Motivational Audio Boosters", cnm: true, other: false },
    { feature: "Smart Revision Schedules", cnm: true, other: false },
    { feature: "Student-Only Online Community", cnm: true, other: false },
  ];

  return (
    <section id="comparison" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="THE UNFAIR ADVANTAGE"
          title="With CNM Learning, You're Always Steps Ahead of your competitors"
          description="See how CNM Learning outperforms conventional coaching and online courses across every dimension."
          centered
        />
        <div className="card" style={{ marginTop: "2rem", overflowX: "auto", padding: "0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: "600px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--color-border-gold)", backgroundColor: "rgba(212, 175, 55, 0.05)" }}>
                <th style={{ padding: "1rem 1.25rem", fontFamily: "var(--font-family-heading)", color: "var(--color-gold-bright)" }}>Features</th>
                <th style={{ padding: "1rem 1.25rem", fontFamily: "var(--font-family-heading)", color: "#ffffff", textAlign: "center" }}>CNM Learning</th>
                <th style={{ padding: "1rem 1.25rem", fontFamily: "var(--font-family-heading)", color: "var(--color-text-secondary)", textAlign: "center" }}>Other Courses</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: idx < comparisonRows.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                  <td style={{ padding: "0.9rem 1.25rem", fontWeight: 600, color: "var(--color-text)" }}>{row.feature}</td>
                  <td style={{ padding: "0.9rem 1.25rem", color: "var(--color-gold-bright)", fontWeight: 800, textAlign: "center", fontSize: "1.1rem" }}>✓</td>
                  <td style={{ padding: "0.9rem 1.25rem", color: "var(--color-text-muted)", textAlign: "center", fontSize: "1.1rem" }}>✗</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
