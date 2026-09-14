import SectionHeading from "../ui/SectionHeading";

export default function SyllabusSection() {
  const points = [
    "Learn concepts the way your brain loves — visually.",
    "Active student community",
    "Weekly mentorship sessions and doubt-clearing support",
    "Topic-wise notes & cheat sheets",
    "Mock tests with solutions + accuracy trackers",
    "Doubt-solving support via chat & video replies",
    "Animated derivations, intuitive experiments, real-world analogies",
    "Track your completion and rank weekly",
    "Understand your weaknesses instantly",
    "Personalized study plans",
    "Leaderboards & challenge events",
  ];

  return (
    <section id="syllabus" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="COMPLETE PREPARATION"
          title="FULL SYLLABUS TESTS AND MENTORING"
          description="Learn concepts the way your brain loves — visually with structured tests and personal mentorship."
          centered
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          <div className="card card-interactive">
            <h3 style={{ color: "var(--color-gold-bright)", marginBottom: "0.75rem" }}>Physics</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
              Mechanics, Electrodynamics, Optics, Thermodynamics, Modern Physics with 3D animated derivations and visual experiment breakdowns.
            </p>
          </div>
          <div className="card card-interactive">
            <h3 style={{ color: "var(--color-gold-bright)", marginBottom: "0.75rem" }}>Chemistry</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
              Physical, Organic, and Inorganic Chemistry from fundamental concepts to JEE Advanced problem-solving techniques.
            </p>
          </div>
          <div className="card card-interactive">
            <h3 style={{ color: "var(--color-gold-bright)", marginBottom: "0.75rem" }}>Mathematics</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
              Calculus, Algebra, Coordinate Geometry, Vectors & 3D with step-by-step visual problem-solving approaches.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
          {points.map((pt, idx) => (
            <div key={idx} className="card" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 1.25rem" }}>
              <span style={{ color: "var(--color-gold-bright)", fontWeight: 800 }}>✓</span>
              <span style={{ fontSize: "0.92rem", color: "var(--color-text)" }}>{pt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
