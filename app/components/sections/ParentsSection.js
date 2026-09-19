"use client";

import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function ParentsSection() {
  return (
    <section
      id="for-parents"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="PARENTAL VISIBILITY INTELLIGENCE"
          title="Parents Don't Need Another Marks Report. They Need to Know What Is Actually Happening."
          description="Transform vague academic concern into objective, observable study patterns and actionable intervention areas."
          center={true}
        />

        {/* Side-by-Side Comparison: Traditional Vague Feedback vs CNM Observable Telemetry */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginTop: "3.5rem",
          }}
          className="parents-grid"
        >
          {/* LEFT: What Parents Currently Hear */}
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
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                color: "var(--color-status-red)",
                marginBottom: "0.5rem",
              }}
            >
              TRADITIONAL VAGUE REPORTING
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: "1.25rem" }}>
              What Parents Currently Experience
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                "“Marks are low in Physics.”",
                "“Tell your child to study more hours.”",
                "“Need more focus and concentration.”",
                "“Why aren't you studying continuously?”",
                "“You just need to revise everything again.”",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.85rem 1rem",
                    fontSize: "0.9rem",
                    color: "var(--color-text-muted)",
                    fontStyle: "italic",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: What CNM System Labs Provides */}
          <div
            style={{
              backgroundColor: "var(--color-surface)",
              border: "2px solid var(--color-border-gold)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              boxShadow: "0 20px 50px rgba(0,0,0,0.9)",
            }}
          >
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                color: "var(--color-gold-bright)",
                marginBottom: "0.5rem",
              }}
            >
              CNM OBSERVABLE TELEMETRY DASHBOARD
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginBottom: "1.25rem" }}>
              Actionable Signals Provided to Parents
            </h3>

            {/* Telemetry Metric Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <div style={{ backgroundColor: "rgba(10,10,12,0.8)", border: "1px solid var(--color-border)", padding: "0.85rem", borderRadius: "var(--radius-sm)" }}>
                <div style={{ fontSize: "0.68rem", color: "var(--color-text-muted)", fontWeight: 700 }}>FOCUS ENDURANCE</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-gold-bright)" }}>78%</div>
              </div>
              <div style={{ backgroundColor: "rgba(10,10,12,0.8)", border: "1px solid var(--color-border)", padding: "0.85rem", borderRadius: "var(--radius-sm)" }}>
                <div style={{ fontSize: "0.68rem", color: "var(--color-text-muted)", fontWeight: 700 }}>REVISION RETENTION</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-status-green)" }}>82%</div>
              </div>
              <div style={{ backgroundColor: "rgba(10,10,12,0.8)", border: "1px solid var(--color-border)", padding: "0.85rem", borderRadius: "var(--radius-sm)" }}>
                <div style={{ fontSize: "0.68rem", color: "var(--color-text-muted)", fontWeight: 700 }}>SOLVING ACCURACY</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-status-amber)" }}>71%</div>
              </div>
              <div style={{ backgroundColor: "rgba(10,10,12,0.8)", border: "1px solid var(--color-border)", padding: "0.85rem", borderRadius: "var(--radius-sm)" }}>
                <div style={{ fontSize: "0.68rem", color: "var(--color-text-muted)", fontWeight: 700 }}>DAILY CONSISTENCY</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-status-green)" }}>86%</div>
              </div>
            </div>

            {/* Current Active Intervention info */}
            <div
              style={{
                backgroundColor: "var(--color-surface-gold)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-sm)",
                padding: "1rem",
                fontSize: "0.85rem",
              }}
            >
              <div style={{ fontWeight: 800, color: "#ffffff" }}>
                Current Priority Focus: <span style={{ color: "var(--color-gold-bright)" }}>Organic Chemistry Reaction Mechanisms</span>
              </div>
              <div style={{ color: "var(--color-text-secondary)", marginTop: "4px", fontSize: "0.8rem" }}>
                Active Intervention: Targeted formula recall drills + 30-minute focus blocks to fix careless calculation errors.
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Button href="#audit" variant="primary" style={{ padding: "0.85rem 1.75rem" }}>
            UNDERSTAND MY STUDENT'S PERFORMANCE →
          </Button>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .parents-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
