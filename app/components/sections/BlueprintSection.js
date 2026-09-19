"use client";

import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function BlueprintSection() {
  const phases = [
    {
      phase: "PHASE 01",
      title: "FOUNDATION + RECOVERY",
      duration: "Days 01 - 30",
      priority: "Isolate primary performance leaks & recover accumulated topic backlogs.",
      studyFocus: "Core high-yield concepts, active recall revision, and daily focus block habituation.",
      testFrequency: "Bi-weekly diagnostic test autopsy",
      metrics: "Focus endurance target: 75% | Backlog reduction: 80%",
    },
    {
      phase: "PHASE 02",
      title: "ACCELERATION",
      duration: "Days 31 - 60",
      priority: "Speed-accuracy optimization & systematic error elimination.",
      studyFocus: "Mixed-topic problem solving, timed question sets, and formula recall drills.",
      testFrequency: "Weekly full-syllabus mock tests",
      metrics: "Solving accuracy target: 82% | Careless error reduction: -50%",
    },
    {
      phase: "PHASE 03",
      title: "ADVANCED PERFORMANCE",
      duration: "Days 61 - 90",
      priority: "Test strategy refinement, exam pressure simulation, and rank push.",
      studyFocus: "Negative mark reduction, strategic question selection, and mock test autopsies.",
      testFrequency: "2x weekly mock test autopsies",
      metrics: "Negative marks < 8 | Trajectory accuracy: ±3 marks",
    },
  ];

  return (
    <section
      id="blueprint"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="90-DAY RANK BLUEPRINT"
          title="Your Next 90 Days Should Not Be Random."
          description="A structured, phased performance progression that moves your preparation from baseline recovery to advanced competitive performance."
          center={true}
        />

        {/* 3-Phase Horizontal/Vertical Timeline Stack */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "3.5rem",
          }}
        >
          {phases.map((p, idx) => (
            <div
              key={p.phase}
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.5rem",
                position: "relative",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.backgroundColor = "var(--color-surface-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "var(--color-surface)";
              }}
            >
              {/* Phase Header */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      color: "var(--color-gold-bright)",
                      backgroundColor: "var(--color-gold-soft)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "4px",
                      border: "1px solid var(--color-border-gold)",
                    }}
                  >
                    {p.phase}
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", fontWeight: 600 }}>
                    {p.duration}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "1rem",
                  }}
                >
                  {p.title}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.88rem" }}>
                  <div>
                    <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>Priority: </span>
                    <span style={{ color: "var(--color-text-secondary)" }}>{p.priority}</span>
                  </div>
                  <div>
                    <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>Study Focus: </span>
                    <span style={{ color: "var(--color-text-secondary)" }}>{p.studyFocus}</span>
                  </div>
                  <div>
                    <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>Testing: </span>
                    <span style={{ color: "var(--color-text-secondary)" }}>{p.testFrequency}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Pill */}
              <div
                style={{
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--color-border-subtle)",
                  fontSize: "0.75rem",
                  color: "var(--color-status-green)",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>🎯 Target Milestones:</span> {p.metrics}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Button href="#audit" variant="primary" style={{ padding: "0.85rem 1.75rem" }}>
            BUILD MY 90-DAY PERFORMANCE BLUEPRINT →
          </Button>
        </div>
      </div>
    </section>
  );
}
