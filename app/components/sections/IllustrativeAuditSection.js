"use client";

import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function IllustrativeAuditSection() {
  const metrics = [
    { label: "Overall Score Index", val: 60, target: 74, color: "var(--color-gold-bright)", leak: false },
    { label: "Focus Endurance", val: 38, target: 75, color: "var(--color-status-red)", leak: true },
    { label: "Solving Accuracy", val: 50, target: 78, color: "var(--color-status-amber)", leak: true },
    { label: "Revision Recall", val: 78, target: 88, color: "var(--color-status-green)", leak: false },
    { label: "Time Allocation", val: 68, target: 82, color: "var(--color-gold-bright)", leak: false },
    { label: "Exam Confidence", val: 68, target: 80, color: "var(--color-gold-bright)", leak: false },
  ];

  const interventions = [
    "Structured 50-minute deep-work focus blocks",
    "Digital distraction shielding protocol",
    "Daily mission panel execution tracking",
    "Categorized mock-test error autopsy",
    "Spaced-repetition formula recall interval",
    "Reset engine for missed daily targets",
  ];

  return (
    <section
      id="illustrative-audit"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="CASE STUDY ARCHITECTURE"
          title="Illustrative Student Performance Audit"
          description="How the diagnostic system identifies root-cause leaks and constructs a targeted intervention plan."
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
          NOTE: Illustrative example based on real diagnostic data models — actual results vary by student, starting point, and daily execution.
        </div>

        {/* Main Case Study UI Card */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "2.5rem",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
            }}
            className="audit-grid"
          >
            {/* Left: Starting Metrics Telemetry */}
            <div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "var(--color-text-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                INITIAL TELEMETRY SCAN
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff", marginBottom: "1.5rem" }}>
                Starting Performance Baseline
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {metrics.map((m) => (
                  <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                      <span style={{ fontWeight: 600, color: "var(--color-text)" }}>{m.label}</span>
                      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                        {m.leak && (
                          <span
                            style={{
                              fontSize: "0.65rem",
                              fontWeight: 800,
                              color: m.color,
                              backgroundColor: "rgba(255,255,255,0.03)",
                              padding: "0.1rem 0.4rem",
                              borderRadius: "3px",
                              border: `1px solid ${m.color}`,
                            }}
                          >
                            PRIMARY LEAK
                          </span>
                        )}
                        <span style={{ fontWeight: 800, color: m.color }}>{m.val}%</span>
                      </div>
                    </div>
                    {/* Bar */}
                    <div
                      style={{
                        width: "100%",
                        height: "7px",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${m.val}%`,
                          backgroundColor: m.color,
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Diagnosis, Intervention & Score Trajectory */}
            <div style={{ display: "flex", flexDirection: "column", justifyBetween: "space-between", gap: "1.5rem" }}>
              {/* Primary Diagnosis Box */}
              <div
                style={{
                  backgroundColor: "rgba(10, 10, 12, 0.8)",
                  border: "1px solid var(--color-status-red)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                }}
              >
                <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-status-red)" }}>
                  PRIMARY SYSTEM DIAGNOSIS
                </div>
                <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginTop: "4px" }}>
                  FOCUS & ACCURACY ENDURANCE LEAK
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>
                  Student demonstrates high revision recall (78%), confirming concepts are learned, but loses focus at minute 35, triggering a cascade of accuracy errors.
                </p>
              </div>

              {/* Intervention Protocol List */}
              <div
                style={{
                  backgroundColor: "rgba(10, 10, 12, 0.8)",
                  border: "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                }}
              >
                <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-gold-bright)" }}>
                  RECOMMENDED INTERVENTION PROTOCOL
                </div>
                <ul
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.5rem",
                    marginTop: "0.75rem",
                    paddingLeft: "1rem",
                    fontSize: "0.82rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {interventions.map((item) => (
                    <li key={item} style={{ color: "var(--color-text)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Score Trajectory Summary */}
              <div
                style={{
                  backgroundColor: "var(--color-surface-gold)",
                  border: "1px solid var(--color-border-gold-bright)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
                    SCORE TRANSFORMATION POTENTIAL
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginTop: "4px" }}>
                    <span style={{ fontSize: "1.6rem", fontWeight: 800, color: "#ffffff" }}>CURRENT: 60</span>
                    <span style={{ fontSize: "1.2rem", color: "var(--color-gold-bright)" }}>➔</span>
                    <span style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--color-gold-bright)" }}>TARGET: 74</span>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(34, 197, 94, 0.15)",
                    border: "1px solid var(--color-status-green)",
                    color: "var(--color-status-green)",
                    padding: "0.5rem 1rem",
                    borderRadius: "var(--radius-md)",
                    fontWeight: 800,
                    fontSize: "1rem",
                  }}
                >
                  +14 MARKS
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Button href="#audit" variant="primary" style={{ padding: "0.85rem 1.75rem" }}>
            RUN YOUR PERSONAL PERFORMANCE AUDIT →
          </Button>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .audit-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
