"use client";

import SectionHeading from "../ui/SectionHeading";

export default function PsychologySection() {
  const dimensions = [
    {
      title: "FOCUS ENDURANCE",
      desc: "Ability to sustain deep analytical concentration without switching tasks or succumbing to distraction.",
      signal: "Sustained Deep Work Duration",
    },
    {
      title: "ACADEMIC CONFIDENCE",
      desc: "Trust in solved calculations under timed pressure without secondary hesitation or option changing.",
      signal: "First-Attempt Solved Ratio",
    },
    {
      title: "FEAR & PRESSURE REGULATION",
      desc: "Deconstructing exam panic into structured step-by-step problem execution protocols.",
      signal: "Pressure Error Mitigation",
    },
    {
      title: "PREPARATION CONSISTENCY",
      desc: "Maintaining daily study execution day after day without erratic spikes and severe burnout slumps.",
      signal: "Daily Mission Completion %",
    },
    {
      title: "EXECUTION FRICTION",
      desc: "Minimizing startup delay between sitting at the desk and initiating high-yield problem solving.",
      signal: "Study Initiation Speed",
    },
  ];

  return (
    <section
      id="psychology"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="PERFORMANCE SIGNALS"
          title="Performance Isn't Just Academic."
          description="Exam scores are deeply influenced by study habits, exam pressure handling, and execution discipline. We measure the underlying behavioral signals."
          center={true}
        />

        {/* 5 Connected Dimensions Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginTop: "3.5rem",
          }}
        >
          {dimensions.map((dim, idx) => (
            <div
              key={dim.title}
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-md)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
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
                  DIMENSION 0{idx + 1}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
                  {dim.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                  {dim.desc}
                </p>
              </div>

              <div
                style={{
                  paddingTop: "0.75rem",
                  borderTop: "1px solid var(--color-border-subtle)",
                  fontSize: "0.72rem",
                  color: "var(--color-status-green)",
                  fontWeight: 700,
                }}
              >
                ● Signal: {dim.signal}
              </div>
            </div>
          ))}
        </div>

        {/* Behavioral Connection Banner */}
        <div
          style={{
            marginTop: "2.5rem",
            backgroundColor: "rgba(18, 18, 20, 0.9)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            padding: "1.25rem 1.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text)" }}>
            Behavioral Signals Connect Directly To:
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", fontSize: "0.8rem", fontWeight: 700 }}>
            <span style={{ color: "var(--color-gold-bright)" }}>LEARNING</span> ➔
            <span style={{ color: "var(--color-gold-bright)" }}>PROBLEM SOLVING</span> ➔
            <span style={{ color: "var(--color-gold-bright)" }}>TEST PERFORMANCE</span> ➔
            <span style={{ color: "var(--color-status-green)" }}>MARKS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
