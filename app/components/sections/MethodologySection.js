"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function MethodologySection() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      name: "REWIRE",
      subtitle: "Mindset & Belief Engine",
      description: "Break unproductive study beliefs, fear patterns, and unexamined habits.",
      problem: "Student believes low scores mean lack of talent, leading to passive resignation and test avoidance.",
      whatCNMDoes: "Deconstructs performance anxiety into observable metrics and provides actionable recovery protocols.",
      whatGetsMeasured: "Preparation confidence, fear triggers, study initiation friction, timetable adherence.",
      whatChanges: "Shift from emotional panic to systemic problem-solving attitude.",
    },
    {
      name: "RECONNECT",
      subtitle: "Visual Concept Learning",
      description: "Make complex Physics, Chemistry, and Math concepts intuitively understandable.",
      problem: "Rote formula memorization breaks down under novel or multi-concept JEE/NEET questions.",
      whatCNMDoes: "Deploys 3D visual representations and spatial models to build deep intuitive physics and chemical intuition.",
      whatGetsMeasured: "Conceptual comprehension speed, structural concept mapping, visualization recall.",
      whatChanges: "Deep intuition replaces brittle memorization.",
    },
    {
      name: "REINFORCE",
      subtitle: "Problem Solving Engine",
      description: "Convert conceptual understanding into rapid, accurate solving ability under timed conditions.",
      problem: "Student understands the lecture video but gets stuck on 70% of practice problems.",
      whatCNMDoes: "Provides structured problem ladders with step-by-step diagnostic feedback on calculation errors.",
      whatGetsMeasured: "First-attempt accuracy, problem category mastery, average time per question.",
      whatChanges: "Passive understanding converts directly into marks.",
    },
    {
      name: "REFOCUS",
      subtitle: "System & Routine Architecture",
      description: "Build adaptive daily execution routines, revision cycles, and test autopsy protocols.",
      problem: "Inconsistent study schedules with abandoned timetables and zero systematic revision.",
      whatCNMDoes: "Establishes Daily Missions, Focus Blocks, and automated spaced-repetition triggers.",
      whatGetsMeasured: "Mission completion rate, focus block duration, active recall intervals.",
      whatChanges: "Erratic effort becomes disciplined, frictionless daily execution.",
    },
    {
      name: "RISE",
      subtitle: "Performance & Rank Trajectory",
      description: "Translate systemic improvement into consistent score jumps and rank progression.",
      problem: "Studying hard for months without seeing any movement in mock test percentile.",
      whatCNMDoes: "Connects daily execution data to rank trajectory predictions and high-yield topic prioritization.",
      whatGetsMeasured: "Mock test score stability, negative mark reduction, competitive percentile trajectory.",
      whatChanges: "Unpredictable results transform into repeatable academic progress.",
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="THE CNM METHODOLOGY"
          title="The 5-Stage Performance Operating System"
          description="A scientific progression that converts chaotic effort into predictable competitive performance."
          center={true}
        />

        {/* Interactive Methodology Stepper Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0.5rem",
            marginTop: "3.5rem",
            backgroundColor: "rgba(18, 18, 20, 0.8)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            padding: "0.5rem",
          }}
          className="stepper-bar"
        >
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.name}
                onClick={() => setActiveStage(idx)}
                onMouseEnter={() => setActiveStage(idx)}
                style={{
                  backgroundColor: isActive ? "var(--color-surface-gold)" : "transparent",
                  border: isActive ? "1px solid var(--color-border-gold)" : "1px solid transparent",
                  borderRadius: "var(--radius-md)",
                  padding: "1rem 0.5rem",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.25s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    color: isActive ? "var(--color-gold-bright)" : "var(--color-text-muted)",
                  }}
                >
                  STAGE 0{idx + 1}
                </span>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: isActive ? "#ffffff" : "var(--color-text-secondary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {stage.name}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: isActive ? "var(--color-gold-bright)" : "var(--color-text-muted)",
                    display: "none",
                  }}
                  className="step-sub"
                >
                  {stage.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Panel */}
        <div
          style={{
            marginTop: "1.75rem",
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "2rem",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.7)",
            position: "relative",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              borderBottom: "1px solid var(--color-border-subtle)",
              paddingBottom: "1.25rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "var(--color-gold-bright)",
                  marginBottom: "0.25rem",
                }}
              >
                METHODOLOGY STAGE 0{activeStage + 1} OF 05
              </div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff" }}>
                {stages[activeStage].name} — <span style={{ color: "var(--color-gold-bright)" }}>{stages[activeStage].subtitle}</span>
              </h3>
            </div>
            <p style={{ maxWidth: "450px", fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>
              {stages[activeStage].description}
            </p>
          </div>

          {/* 4 Interactive Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {/* The Problem */}
            <div
              style={{
                backgroundColor: "rgba(10, 10, 12, 0.7)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: "var(--color-status-red)",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>⚠️</span> THE PERFORMANCE PROBLEM
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.5 }}>
                {stages[activeStage].problem}
              </p>
            </div>

            {/* What CNM Does */}
            <div
              style={{
                backgroundColor: "rgba(10, 10, 12, 0.7)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: "var(--color-gold-bright)",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>⚡</span> WHAT CNM SYSTEM LABS DOES
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.5 }}>
                {stages[activeStage].whatCNMDoes}
              </p>
            </div>

            {/* What Gets Measured */}
            <div
              style={{
                backgroundColor: "rgba(10, 10, 12, 0.7)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: "var(--color-text-secondary)",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>📊</span> WHAT GETS MEASURED
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.5 }}>
                {stages[activeStage].whatGetsMeasured}
              </p>
            </div>

            {/* What Changes */}
            <div
              style={{
                backgroundColor: "rgba(10, 10, 12, 0.7)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: "var(--color-status-green)",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>🎯</span> WHAT CHANGES
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.5 }}>
                {stages[activeStage].whatChanges}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .stepper-bar {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
