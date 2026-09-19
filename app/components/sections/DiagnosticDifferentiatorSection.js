"use client";

import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function DiagnosticDifferentiatorSection() {
  const traditionalSteps = [
    "Low Marks",
    "Study More (Unfocused)",
    "More Chapters",
    "More Practice Questions",
    "Another Test",
    "Low Marks Again (Cycle Repeats)",
  ];

  const cnmSteps = [
    { label: "Low Marks", desc: "Initial Performance Trigger" },
    { label: "AUDIT", desc: "Full Telemetry Scan Across 8 Performance Domains" },
    { label: "Find Performance Leaks", desc: "Pinpoint exact mark drain (e.g. Focus / Calculation / Time)" },
    { label: "Diagnose Root Cause", desc: "Isolate cognitive vs execution vs recall causes" },
    { label: "Build Intervention", desc: "Generate targeted daily mission & focus block protocol" },
    { label: "Execute", desc: "Structured daily work with zero decision friction" },
    { label: "Measure & Adapt", desc: "Re-evaluate accuracy & retention before next retest" },
    { label: "Track Rank Improvement", desc: "Measurable score progression" },
  ];

  return (
    <section
      id="differentiator"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="THE BIG DIFFERENTIATOR"
          title="Stop Guessing What's Wrong. Start Diagnosing It."
          description="Traditional academic support asks: 'Did you study?' CNM System Labs asks: 'Why didn't the studying convert into performance?'"
          center={true}
        />

        {/* 2-Column Comparison Display */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginTop: "3.5rem",
          }}
          className="differentiator-grid"
        >
          {/* LEFT: Traditional Approach */}
          <div
            style={{
              backgroundColor: "rgba(10, 10, 12, 0.6)",
              border: "1px solid var(--color-border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              opacity: 0.85,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "1rem",
                marginBottom: "1.5rem",
                borderBottom: "1px solid var(--color-border-subtle)",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-text-secondary)" }}>
                Traditional Approach
              </h3>
              <span style={{ fontSize: "0.72rem", color: "var(--color-status-red)", fontWeight: 700 }}>
                CLOSED GUESSWORK LOOP
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {traditionalSteps.map((step, idx) => (
                <div
                  key={step}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.85rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)" }}>
                    0{idx + 1}. {step}
                  </span>
                  <span style={{ color: "var(--color-status-amber)", fontSize: "0.8rem" }}>↓</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CNM System Labs Approach (Visually Dominant) */}
          <div
            style={{
              backgroundColor: "var(--color-surface)",
              border: "2px solid var(--color-border-gold)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              boxShadow: "0 20px 50px rgba(0,0,0,0.9), 0 0 30px rgba(212, 175, 55, 0.12)",
              position: "relative",
            }}
          >
            {/* Top Ribbon */}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                right: "24px",
                backgroundColor: "var(--color-gold-bright)",
                color: "#050505",
                fontSize: "0.68rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                padding: "0.2rem 0.75rem",
                borderRadius: "4px",
                boxShadow: "0 4px 12px rgba(212, 175, 55, 0.4)",
              }}
            >
              SYSTEMIC DIAGNOSTIC FEEDBACK LOOP
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "1rem",
                marginBottom: "1.5rem",
                borderBottom: "1px solid var(--color-border-gold)",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>
                CNM System Labs Protocol
              </h3>
              <span style={{ fontSize: "0.75rem", color: "var(--color-status-green)", fontWeight: 700 }}>
                ● MEASURABLE IMPROVEMENT
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {cnmSteps.map((step, idx) => (
                <div
                  key={step.label}
                  style={{
                    backgroundColor: idx === 1 ? "var(--color-surface-gold)" : "rgba(10, 10, 12, 0.8)",
                    border: idx === 1 ? "1px solid var(--color-border-gold-bright)" : "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.85rem 1.1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "0.92rem", fontWeight: 800, color: idx === 1 ? "var(--color-gold-bright)" : "#ffffff" }}>
                      {idx + 1}. {step.label}
                    </span>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", marginTop: "2px" }}>
                      {step.desc}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: idx === 1 ? "var(--color-gold-bright)" : "var(--color-status-green)",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                    }}
                  >
                    {idx === 1 ? "KEY STEP" : "VERIFIED"}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div style={{ marginTop: "1.75rem", textAlign: "center" }}>
              <Button href="#control-room" variant="primary" style={{ padding: "0.85rem 1.75rem" }}>
                SEE HOW THE CONTROL ROOM WORKS →
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .differentiator-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
