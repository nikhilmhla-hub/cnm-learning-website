"use client";

import SectionHeading from "../ui/SectionHeading";

export default function FeedbackLoopSection() {
  const steps = [
    { num: "01", name: "CONTENT", desc: "Targeted concept delivery" },
    { num: "02", name: "LEARNING", desc: "3D visual understanding" },
    { num: "03", name: "PRACTICE", desc: "First-attempt solving drills" },
    { num: "04", name: "TEST", desc: "Timed pressure examination" },
    { num: "05", name: "DIAGNOSIS", desc: "Telemetry autopsy of mistakes" },
    { num: "06", name: "INTERVENTION", desc: "Targeted daily mission generation" },
    { num: "07", name: "MEASUREMENT", desc: "Accuracy & retention validation" },
    { num: "08", name: "ADAPTATION", desc: "System auto-recalibrates plan" },
  ];

  return (
    <section
      id="feedback-loop"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="SYSTEM DIFFERENTIATION"
          title="Most Platforms Deliver Content. CNM Builds the Feedback Loop."
          description="The value isn't another 100-hour video course. The value is knowing exactly what to do after the lecture, after the problem set, after the test, and after the mistake."
          center={true}
        />

        {/* 8-Step Feedback Loop Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginTop: "3.5rem",
          }}
        >
          {steps.map((s, idx) => {
            const isHighlight = idx >= 4; // Highlight diagnosis, intervention, measurement, adaptation
            return (
              <div
                key={s.num}
                style={{
                  backgroundColor: isHighlight ? "var(--color-surface-gold)" : "var(--color-surface)",
                  border: isHighlight ? "1px solid var(--color-border-gold-bright)" : "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "0.85rem",
                  position: "relative",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        color: isHighlight ? "var(--color-gold-bright)" : "var(--color-text-muted)",
                      }}
                    >
                      STEP {s.num}
                    </span>
                    {isHighlight && (
                      <span
                        style={{
                          fontSize: "0.62rem",
                          fontWeight: 800,
                          backgroundColor: "rgba(212, 175, 55, 0.15)",
                          color: "var(--color-gold-bright)",
                          padding: "0.15rem 0.4rem",
                          borderRadius: "3px",
                        }}
                      >
                        CNM LAB ENGINE
                      </span>
                    )}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      color: isHighlight ? "var(--color-gold-bright)" : "#ffffff",
                      marginTop: "0.4rem",
                    }}
                  >
                    {s.name}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", marginTop: "0.3rem" }}>
                    {s.desc}
                  </p>
                </div>

                <div style={{ fontSize: "0.72rem", color: isHighlight ? "var(--color-status-green)" : "var(--color-text-muted)", fontWeight: 700 }}>
                  {isHighlight ? "● System Intelligence Active" : "Standard Input"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
