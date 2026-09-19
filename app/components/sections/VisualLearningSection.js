"use client";

import SectionHeading from "../ui/SectionHeading";

export default function VisualLearningSection() {
  const pillars = [
    {
      step: "01",
      title: "VISUALIZE",
      subtitle: "Intuitive Concept Foundations",
      desc: "3D animated derivations and spatial concept models for complex Physics, Chemistry, and Mathematics topics.",
      icon: "👁️",
    },
    {
      step: "02",
      title: "REINFORCE",
      subtitle: "Targeted Problem Sets",
      desc: "Convert visual understanding immediately into multi-concept solving capability through structured problem sets.",
      icon: "🎯",
    },
    {
      step: "03",
      title: "TEST",
      subtitle: "Timed Pressure Testing",
      desc: "Verify whether concept comprehension survives under strict exam clock conditions.",
      icon: "⏱️",
    },
    {
      step: "04",
      title: "DIAGNOSE",
      subtitle: "Systemic Leak Analysis",
      desc: "Identify precisely what broke during testing so the next iteration fixes the root cause.",
      icon: "🔍",
    },
  ];

  return (
    <section
      id="visual-learning"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="CONCEPTUAL COMPREHENSION LAYER"
          title="Understanding Comes Before Optimization."
          description="Visual concept mastery forms the bedrock layer of CNM System Labs. You cannot optimize speed and accuracy on concepts you have merely memorized."
          center={true}
        />

        {/* 4 Pillars Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginTop: "3.5rem",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.step}
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.25rem",
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
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "1.8rem" }}>{p.icon}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "var(--color-gold-bright)",
                      backgroundColor: "var(--color-gold-soft)",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                    }}
                  >
                    STEP {p.step}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.25rem" }}>
                  {p.title}
                </h3>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--color-gold-bright)", marginBottom: "0.75rem" }}>
                  {p.subtitle}
                </div>

                <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
                  {p.desc}
                </p>
              </div>

              <div
                style={{
                  paddingTop: "0.85rem",
                  borderTop: "1px solid var(--color-border-subtle)",
                  fontSize: "0.72rem",
                  color: "var(--color-status-green)",
                  fontWeight: 700,
                }}
              >
                ● Integrated with Physics, Chemistry & Math
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
