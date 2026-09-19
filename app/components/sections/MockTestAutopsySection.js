"use client";

import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function MockTestAutopsySection() {
  const errorCategories = [
    { title: "Concept Gap", count: 9, percentage: "29%", color: "var(--color-status-red)", desc: "Fundamental misunderstanding of core principle" },
    { title: "Misread Question", count: 7, percentage: "23%", color: "var(--color-status-amber)", desc: "Missed 'NOT', wrong units, or incorrect condition" },
    { title: "Calculation Error", count: 6, percentage: "19%", color: "var(--color-status-amber)", desc: "Arithmetic mistake or sign inversion during algebra" },
    { title: "Time Pressure", count: 5, percentage: "16%", color: "var(--color-status-amber)", desc: "Rushed solving in final 20 minutes of exam" },
    { title: "Weak Topic", count: 4, percentage: "13%", color: "var(--color-gold-bright)", desc: "Unmastered sub-topic (e.g. Ionic Equilibrium)" },
  ];

  return (
    <section
      id="mock-autopsy"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="MOCK TEST AUTOPSY SYSTEM"
          title="A Test Score Is Not a Diagnosis."
          description="Two students can score 122 for completely different reasons. Merely looking at the score fixes nothing."
          center={true}
        />

        {/* Comparison Banner: Score vs Autopsy */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginTop: "3.5rem",
          }}
          className="autopsy-grid"
        >
          {/* Traditional Score Output */}
          <div
            style={{
              backgroundColor: "rgba(10, 10, 12, 0.6)",
              border: "1px solid var(--color-border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", color: "var(--color-text-muted)" }}>
              TRADITIONAL TEST RESULT
            </span>
            <div
              style={{
                fontSize: "4rem",
                fontWeight: 800,
                color: "var(--color-text-secondary)",
                lineHeight: 1,
              }}
            >
              122
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", maxWidth: "320px" }}>
              "You scored 122 / 300. Work harder and study more chapters."
            </p>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--color-status-red)",
                backgroundColor: "rgba(239,68,68,0.1)",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--color-status-red)",
              }}
            >
              Zero Diagnostic Insight
            </div>
          </div>

          {/* CNM Test Autopsy Output */}
          <div
            style={{
              backgroundColor: "var(--color-surface)",
              border: "2px solid var(--color-border-gold)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "1rem",
                marginBottom: "1.25rem",
                borderBottom: "1px solid var(--color-border-gold)",
              }}
            >
              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-gold-bright)" }}>
                  CNM SYSTEM LABS • TEST AUTOPSY
                </span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginTop: "2px" }}>
                  122 MARKS <span style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", fontWeight: 400 }}>(31 Inefficient Questions)</span>
                </h3>
              </div>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "var(--color-status-green)",
                  backgroundColor: "rgba(34, 197, 94, 0.12)",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "4px",
                  border: "1px solid var(--color-status-green)",
                }}
              >
                AUTOPSY COMPLETE
              </span>
            </div>

            {/* Error Breakdown List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {errorCategories.map((err) => (
                <div
                  key={err.title}
                  style={{
                    backgroundColor: "rgba(10, 10, 12, 0.8)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.85rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontSize: "0.92rem", fontWeight: 800, color: "#ffffff" }}>{err.title}</span>
                      <span style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>({err.desc})</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: err.color }}>{err.count} Questions</span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        backgroundColor: "rgba(255,255,255,0.05)",
                        padding: "0.15rem 0.45rem",
                        borderRadius: "3px",
                        color: err.color,
                      }}
                    >
                      {err.percentage}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Prescription */}
            <div
              style={{
                marginTop: "1.25rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--color-border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.78rem",
              }}
            >
              <span style={{ color: "var(--color-text-secondary)" }}>Actionable Prescription:</span>
              <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>
                Focus on Concept Gap (9) & Misread Errors (7) for +24 Mark Gain
              </span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Button href="#audit" variant="primary" style={{ padding: "0.85rem 1.75rem" }}>
            ANALYZE MY MOCK TEST PERFORMANCE →
          </Button>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .autopsy-grid {
            grid-template-columns: 0.8fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
