"use client";

import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function StudentTypesSection() {
  const types = [
    {
      title: "THE OVERWORKER",
      tagline: "Studies for hours but can't identify why scores aren't rising.",
      diagnosis: "High effort, zero feedback loop. Needs telemetry audit to stop studying redundant topics.",
    },
    {
      title: "THE INCONSISTENT STUDENT",
      tagline: "Has strong days and terrible days.",
      diagnosis: "Erratic daily habits. Needs Daily Mission Panel & Focus Block habituation.",
    },
    {
      title: "THE CARELESS SOLVER",
      tagline: "Understands concepts but leaks marks through avoidable mistakes.",
      diagnosis: "Calculation & reading leaks. Needs Mock Test Autopsy to eliminate negative marks.",
    },
    {
      title: "THE TEST AVOIDER",
      tagline: "Studies continuously but avoids mock tests.",
      diagnosis: "Exam pressure anxiety. Needs Confidence Dashboard and gradual test exposure protocols.",
    },
    {
      title: "THE LAST-MINUTE REVISER",
      tagline: "Only revises when the exam is close.",
      taglineSub: "Memory decay causes exam panic.",
      diagnosis: "Needs active recall learning ledger & automated revision intervals.",
    },
    {
      title: "THE CONFIDENT-BUT-STUCK",
      tagline: "Feels prepared but scores remain stagnant.",
      diagnosis: "Hidden concept gaps & question selection traps. Needs rank snapshot diagnostic.",
    },
    {
      title: "THE HIGH-PERFORMER",
      tagline: "Already performs well and wants systematic optimization.",
      diagnosis: "Fine-tuning precision, time allocation, and rank optimization.",
    },
  ];

  return (
    <section
      id="student-types"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="STUDENT PERFORMANCE ARCHETYPES"
          title="Different Students Break in Different Places."
          description="Every student has a distinct performance bottleneck. Identifying your specific archetype is the first step toward targeted improvement."
          center={true}
        />

        {/* 7 Archetype Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginTop: "3.5rem",
          }}
        >
          {types.map((t, idx) => (
            <div
              key={t.title}
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border-gold)";
                e.currentTarget.style.backgroundColor = "var(--color-surface-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.backgroundColor = "var(--color-surface)";
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color: "var(--color-gold-bright)",
                    marginBottom: "0.5rem",
                  }}
                >
                  ARCHETYPE 0{idx + 1}
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                  "{t.tagline}"
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                  {t.diagnosis}
                </p>
              </div>

              <div
                style={{
                  paddingTop: "0.75rem",
                  borderTop: "1px solid var(--color-border-subtle)",
                  fontSize: "0.72rem",
                  color: "var(--color-gold-bright)",
                  fontWeight: 700,
                }}
              >
                Targeted CNM Intervention Available
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://cnm-online-audit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              backgroundColor: "var(--color-gold-bright)",
              color: "#050505",
              fontWeight: 800,
              fontSize: "0.95rem",
              padding: "0.85rem 1.75rem",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(212, 175, 55, 0.35)",
              transition: "all 0.2s ease",
            }}
          >
            FIND YOUR PERFORMANCE PROFILE →
          </a>
        </div>
      </div>
    </section>
  );
}
