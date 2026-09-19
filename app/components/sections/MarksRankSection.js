"use client";

import SectionHeading from "../ui/SectionHeading";

export default function MarksRankSection() {
  const chainSteps = [
    { name: "BEHAVIOR", desc: "Focus endurance & study habits" },
    { name: "LEARNING", desc: "Visual concept comprehension" },
    { name: "ACCURACY", desc: "First-attempt solving precision" },
    { name: "TEST PERFORMANCE", desc: "Time management under exam pressure" },
    { name: "MARKS", desc: "Raw score output on test paper" },
    { name: "CONSISTENCY", desc: "Repeatable test-to-test stability" },
    { name: "RANK TRAJECTORY", desc: "Expected competitive standings" },
  ];

  return (
    <section
      id="marks-rank"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="PERFORMANCE CAUSALITY"
          title="Marks Are a Number. Rank Is the Consequence."
          description="CNM System Labs does not merely count study hours. We optimize the entire causal chain from daily study habits to competitive rank."
          center={true}
        />

        {/* Behavioral Chain Visualization */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "0.75rem",
            marginTop: "3.5rem",
            backgroundColor: "rgba(10, 10, 12, 0.8)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem 1rem",
          }}
          className="chain-container"
        >
          {chainSteps.map((step, idx) => (
            <div
              key={step.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "0.4rem",
                padding: "0.5rem",
                position: "relative",
              }}
            >
              <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "var(--color-gold-bright)", letterSpacing: "0.1em" }}>
                0{idx + 1}
              </span>
              <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.01em" }}>
                {step.name}
              </span>
              <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", lineHeight: 1.3 }}>
                {step.desc}
              </span>
              {idx < chainSteps.length - 1 && (
                <span className="chain-arrow" style={{ color: "var(--color-gold-bright)", marginTop: "4px", fontSize: "0.8rem" }}>
                  ➔
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Current vs Target Trajectory Visual Box */}
        <div
          style={{
            marginTop: "2.5rem",
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "center",
          }}
          className="trajectory-grid"
        >
          {/* Current State */}
          <div
            style={{
              backgroundColor: "rgba(10, 10, 12, 0.6)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
              CURRENT AUDIT BASELINE
            </div>
            <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#ffffff", margin: "0.5rem 0" }}>
              142 <span style={{ fontSize: "1rem", color: "var(--color-text-muted)" }}>MARKS</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
              <span>Accuracy: <strong style={{ color: "var(--color-gold-bright)" }}>71%</strong></span>
              <span>Consistency: <strong style={{ color: "var(--color-gold-bright)" }}>78%</strong></span>
            </div>
          </div>

          {/* Arrow indicator */}
          <div style={{ textAlign: "center", fontSize: "1.5rem", color: "var(--color-gold-bright)", fontWeight: 800 }}>
            ➔ SYSTEMIC INTERVENTION ➔
          </div>

          {/* Target Trajectory State */}
          <div
            style={{
              backgroundColor: "var(--color-surface-gold)",
              border: "1px solid var(--color-border-gold-bright)",
              borderRadius: "var(--radius-md)",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-gold-bright)" }}>
              TARGET SYSTEMIC TRAJECTORY
            </div>
            <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color-gold-bright)", margin: "0.5rem 0" }}>
              185 <span style={{ fontSize: "1rem", color: "var(--color-text-muted)" }}>MARKS</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
              <span>Accuracy: <strong style={{ color: "var(--color-status-green)" }}>84%</strong></span>
              <span>Consistency: <strong style={{ color: "var(--color-status-green)" }}>90%</strong></span>
            </div>
            <div style={{ marginTop: "0.75rem", fontSize: "0.75rem", color: "var(--color-status-green)", fontWeight: 700 }}>
              EXPECTED OUTPUT: Significantly Higher Competitive Rank Position
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .trajectory-grid {
            grid-template-columns: 1fr 0.3fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
