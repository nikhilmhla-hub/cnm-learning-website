"use client";

import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function DailyMissionSection() {
  const missions = [
    {
      num: "01",
      topic: "Chemical Bonding",
      action: "24 targeted problem-solving questions",
      xp: "50 XP",
      status: "COMPLETED",
      time: "45 mins",
    },
    {
      num: "02",
      topic: "Thermodynamics",
      action: "15-minute active-recall revision session",
      xp: "40 XP",
      status: "COMPLETED",
      time: "15 mins",
    },
    {
      num: "03",
      topic: "Formula Recall",
      action: "10-minute spaced repetition formula drill",
      xp: "20 XP",
      status: "COMPLETED",
      time: "10 mins",
    },
  ];

  return (
    <section
      id="daily-mission"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="DAILY EXECUTION ENGINE"
          title="Stop Asking: 'What Should I Study Today?' Start Knowing."
          description="The CNM Daily Mission Panel converts your long-term rank strategy into today's exact, friction-free actions."
          center={true}
        />

        {/* Mission Panel UI Mockup */}
        <div
          style={{
            maxWidth: "850px",
            margin: "3rem auto 0 auto",
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "2rem",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9)",
          }}
        >
          {/* Top Panel Strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "1.25rem",
              marginBottom: "1.5rem",
              borderBottom: "1px solid var(--color-border-subtle)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-status-green)",
                  boxShadow: "0 0 10px var(--color-status-green)",
                }}
              />
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
                  TODAY'S MISSION CONTROL
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff" }}>
                  Active Execution Protocol
                </div>
              </div>
            </div>

            {/* Completion Pill */}
            <div
              style={{
                backgroundColor: "rgba(34, 197, 94, 0.12)",
                border: "1px solid var(--color-status-green)",
                padding: "0.4rem 1rem",
                borderRadius: "var(--radius-full)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--color-status-green)" }}>
                3 / 3 MISSIONS COMPLETED
              </span>
              <span style={{ color: "var(--color-status-green)" }}>✓</span>
            </div>
          </div>

          {/* Mission Cards Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {missions.map((m) => (
              <div
                key={m.num}
                style={{
                  backgroundColor: "rgba(10, 10, 12, 0.8)",
                  border: "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: "var(--color-gold-bright)",
                      backgroundColor: "var(--color-gold-soft)",
                      width: "42px",
                      height: "42px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {m.num}
                  </span>
                  <div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff" }}>
                      {m.topic}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", marginTop: "2px" }}>
                      {m.action} • <span style={{ color: "var(--color-text-muted)" }}>Est. {m.time}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "var(--color-gold-bright)",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      padding: "0.3rem 0.65rem",
                      borderRadius: "4px",
                      border: "1px solid var(--color-border-gold)",
                    }}
                  >
                    +{m.xp}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "var(--color-status-green)",
                      backgroundColor: "rgba(34, 197, 94, 0.12)",
                      padding: "0.3rem 0.65rem",
                      borderRadius: "4px",
                      border: "1px solid var(--color-status-green)",
                    }}
                  >
                    ✓ {m.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Daily XP Summary Strip */}
          <div
            style={{
              marginTop: "1.5rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--color-border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "0.82rem",
            }}
          >
            <span style={{ color: "var(--color-text-secondary)" }}>Total Daily Execution Yield:</span>
            <span style={{ color: "var(--color-gold-bright)", fontWeight: 800 }}>
              110 XP • 100% Target Met
            </span>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Button href="#control-room" variant="primary" style={{ padding: "0.85rem 1.75rem" }}>
            SEE HOW DAILY MISSIONS ADAPT TO YOU →
          </Button>
        </div>
      </div>
    </section>
  );
}
