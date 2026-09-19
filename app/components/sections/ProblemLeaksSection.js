"use client";

import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function ProblemLeaksSection() {
  const leaks = [
    {
      title: "FOCUS",
      tagline: "Can't stay locked into deep work.",
      detail: "Attention collapses after 20 minutes, leading to superficial reading without deep retention.",
      indicator: "ATTENTION LEAK",
      statusColor: "var(--color-status-amber)",
    },
    {
      title: "ACCURACY",
      tagline: "Knows the answer but loses marks through mistakes.",
      detail: "Careless calculation errors, misread options, and formula confusion drain 15-30 marks per test.",
      indicator: "ACCURACY LEAK",
      statusColor: "var(--color-status-red)",
    },
    {
      title: "REVISION",
      tagline: "Studies chapters but doesn't retain them.",
      detail: "Without structured active recall, 60% of covered material decays within 14 days.",
      indicator: "RETENTION LEAK",
      statusColor: "var(--color-status-amber)",
    },
    {
      title: "MOCK TESTS",
      tagline: "Takes tests but doesn't learn from them.",
      detail: "Treating tests as mere scoreboards rather than diagnostic tools leaves recurring mistakes unfixed.",
      indicator: "ANALYSIS LEAK",
      statusColor: "var(--color-status-red)",
    },
    {
      title: "TIME",
      tagline: "Runs out of time or spends too long on questions.",
      detail: "Poor question selection and sunk-cost fallacies lead to unattempted high-yield questions.",
      indicator: "PACING LEAK",
      statusColor: "var(--color-status-amber)",
    },
    {
      title: "CONFIDENCE",
      tagline: "Performance collapses under pressure.",
      detail: "Exam anxiety causes mental blocks, second-guessing correct answers, and erratic speed.",
      indicator: "PRESSURE LEAK",
      statusColor: "var(--color-status-red)",
    },
    {
      title: "EXECUTION",
      tagline: "Creates plans but doesn't consistently follow them.",
      detail: "Ambiguous daily goals lead to decision fatigue, task switching, and abandoned timetables.",
      indicator: "CONSISTENCY LEAK",
      statusColor: "var(--color-status-amber)",
    },
    {
      title: "RANK",
      tagline: "Works hard without knowing what is moving the rank.",
      detail: "High study volume without feedback loops leads to stagnant scores despite massive effort.",
      indicator: "DIRECTION LEAK",
      statusColor: "var(--color-status-amber)",
    },
  ];

  return (
    <section
      id="problem-leaks"
      style={{
        padding: "5rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="PERFORMANCE DIAGNOSTICS"
          title="You Don't Need Another Timetable. You Need to Know What's Actually Stopping You."
          description="Most students don't have a knowledge problem. They have a performance execution leak."
          center={true}
        />

        {/* 8 Horizontal Problem Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginTop: "3rem",
          }}
        >
          {leaks.map((leak, idx) => (
            <div
              key={leak.title}
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border-gold)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.backgroundColor = "var(--color-surface-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "var(--color-surface)";
              }}
            >
              <div>
                {/* Header Strip with Indicator */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.85rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      color: "var(--color-gold-bright)",
                    }}
                  >
                    0{idx + 1} • {leak.title}
                  </span>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "4px",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: `1px solid ${leak.statusColor}`,
                      color: leak.statusColor,
                    }}
                  >
                    {leak.indicator}
                  </span>
                </div>

                {/* Card Title & Tagline */}
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {leak.tagline}
                </h3>

                {/* Detail */}
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  {leak.detail}
                </p>
              </div>

              {/* Bottom Diagnostic Bar Indicator */}
              <div
                style={{
                  paddingTop: "0.75rem",
                  borderTop: "1px solid var(--color-border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.72rem",
                  color: "var(--color-text-muted)",
                }}
              >
                <span>Diagnostic Status:</span>
                <span style={{ color: leak.statusColor, fontWeight: 700 }}>Measurable & Fixable</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Button href="#audit" variant="primary" style={{ padding: "0.85rem 1.75rem" }}>
            IDENTIFY MY BIGGEST PERFORMANCE LEAK →
          </Button>
        </div>
      </div>
    </section>
  );
}
