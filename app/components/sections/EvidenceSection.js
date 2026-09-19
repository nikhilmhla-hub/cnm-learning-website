"use client";

import SectionHeading from "../ui/SectionHeading";

export default function EvidenceSection() {
  const categories = [
    {
      title: "PERFORMANCE TELEMETRY DATA",
      icon: "📊",
      metrics: [
        { label: "Solving Accuracy Trend", val: "71% ➔ 84%", desc: "Elimination of careless & calculation errors" },
        { label: "Revision Recall Stability", val: "88%", desc: "14-day spaced recall retention rate" },
        { label: "Negative Mark Reduction", val: "-65%", desc: "Reduction in unforced test errors" },
      ],
    },
    {
      title: "BEHAVIOR & EXECUTION DATA",
      icon: "⚡",
      metrics: [
        { label: "Deep Work Focus Duration", val: "50 mins", desc: "Average unbroken analytical concentration block" },
        { label: "Daily Mission Completion", val: "92%", desc: "30-day streak of active execution" },
        { label: "Test Autopsy Frequency", val: "100%", desc: "Every mock test analyzed within 24 hours" },
      ],
    },
    {
      title: "COMPETITIVE TRAJECTORY DATA",
      icon: "🎯",
      metrics: [
        { label: "Predictive Trajectory Accuracy", val: "±4 Marks", desc: "Margin of error between target model & actual tests" },
        { label: "High-Yield Topic Mastery", val: "85%", desc: "Coverage of top 20% mark-dense JEE/NEET topics" },
        { label: "Subject Velocity Balance", val: "1:1:1", desc: "Balanced progression across Physics, Chem & Math" },
      ],
    },
  ];

  return (
    <section
      id="results"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="SYSTEM EVIDENCE ARCHITECTURE"
          title="Performance Data. Behavior Data. Competitive Data."
          description="We measure performance scientifically across three distinct data layers without relying on fabricated claims or superficial testimonials."
          center={true}
        />

        {/* Disclaimer Ribbon */}
        <div
          style={{
            backgroundColor: "rgba(212, 175, 55, 0.08)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-sm)",
            padding: "0.6rem 1.25rem",
            marginBottom: "2.5rem",
            textAlign: "center",
            fontSize: "0.78rem",
            color: "var(--color-gold-bright)",
            fontWeight: 600,
          }}
        >
          NOTE: Data points represent system telemetry models and illustrative performance metrics — actual outcomes depend on starting baseline and student daily execution.
        </div>

        {/* 3 Categories Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {categories.map((c) => (
            <div
              key={c.title}
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--color-border-gold)",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff" }}>
                  {c.title}
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      backgroundColor: "rgba(10, 10, 12, 0.8)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-sm)",
                      padding: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text)" }}>{m.label}</span>
                      <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-gold-bright)" }}>{m.val}</span>
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", marginTop: "3px" }}>
                      {m.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
