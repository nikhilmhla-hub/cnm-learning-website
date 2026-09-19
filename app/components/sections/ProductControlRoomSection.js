"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function ProductControlRoomSection() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      name: "DIAGNOSTICS & TRAJECTORY",
      modules: [
        {
          title: "Performance Audit",
          desc: "Multi-dimensional telemetry scanner identifying focus, accuracy, and retention leaks.",
          badge: "CORE ENGINE",
        },
        {
          title: "Rank Snapshot",
          desc: "Real-time rank trajectory mapping subject-level score trends to expected competitive rank.",
          badge: "COMPETITIVE RADAR",
        },
        {
          title: "Focus Block Launcher",
          desc: "Timed deep-work session launcher with distraction shielding and focus decay tracking.",
          badge: "EXECUTION TOOL",
        },
      ],
    },
    {
      name: "EXECUTION & TEST AUTOPSY",
      modules: [
        {
          title: "Daily Mission Panel",
          desc: "Converts long-term rank blueprints into 3 daily high-yield, friction-free actions.",
          badge: "DAILY HABIT",
        },
        {
          title: "Mock Test Autopsy",
          desc: "Deconstructs test scores into 8 specific error categories (concept gap, misread, calculation).",
          badge: "DIAGNOSTIC AUTOPSY",
        },
        {
          title: "Learning Ledger",
          desc: "Structured record of covered, revised, mastered, and decaying concept nodes.",
          badge: "KNOWLEDGE BANK",
        },
      ],
    },
    {
      name: "PLANNING & PSYCHOLOGY",
      modules: [
        {
          title: "Weekly Power Planner",
          desc: "Adaptive weekly scheduling engine that auto-balances backlog revision and new topics.",
          badge: "ADAPTIVE PLANNER",
        },
        {
          title: "90-Day Rank Blueprint",
          desc: "Structured 3-phase roadmap translating current starting score into target performance.",
          badge: "ROADMAP",
        },
        {
          title: "Confidence Dashboard",
          desc: "Tracks academic confidence signals, preparation consistency, and test anxiety indicators.",
          badge: "BEHAVIOR TRACKER",
        },
        {
          title: "Fear Deconstructor",
          desc: "Isolates exam pressure triggers and delivers actionable psychological interventions.",
          badge: "PRESSURE SHIELD",
        },
      ],
    },
    {
      name: "RECOVERY & PERFORMANCE RADAR",
      modules: [
        {
          title: "Win Vault",
          desc: "Captures verified milestone completions and empirical evidence of score improvement.",
          badge: "ACHIEVEMENT SYSTEM",
        },
        {
          title: "Reset Engine",
          desc: "Instant recovery protocol to get back on track when a student falls behind schedule.",
          badge: "RECOVERY PROTOCOL",
        },
        {
          title: "Power Zone",
          desc: "Highlights highest-yield subject topics where minimal effort yields maximum mark gain.",
          badge: "STRATEGY MAP",
        },
        {
          title: "Progress Radar",
          desc: "5-axis radar visualizer mapping accuracy, speed, consistency, focus, and retention.",
          badge: "VISUAL RADAR",
        },
        {
          title: "Operator Profile",
          desc: "Complete academic performance identity profiling learning rate and test strategy.",
          badge: "STUDENT IDENTITY",
        },
      ],
    },
  ];

  return (
    <section
      id="control-room"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="PRODUCT SYSTEM ARCHITECTURE"
          title="Your Performance Has a Control Room."
          description="Integrated modules engineered to turn vague academic effort into observable, manageable data."
          center={true}
        />

        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              style={{
                backgroundColor: activeTab === idx ? "var(--color-gold-soft)" : "rgba(18, 18, 20, 0.7)",
                border: activeTab === idx ? "1px solid var(--color-border-gold-bright)" : "1px solid var(--color-border)",
                color: activeTab === idx ? "var(--color-gold-bright)" : "var(--color-text-secondary)",
                padding: "0.6rem 1.25rem",
                borderRadius: "var(--radius-full)",
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Modules Grid for Active Category */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "2.5rem",
          }}
        >
          {categories[activeTab].modules.map((mod) => (
            <div
              key={mod.title}
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.25rem",
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.85rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "4px",
                      backgroundColor: "rgba(212, 175, 55, 0.1)",
                      color: "var(--color-gold-bright)",
                      border: "1px solid var(--color-border-gold)",
                    }}
                  >
                    {mod.badge}
                  </span>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-status-green)",
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "0.5rem",
                  }}
                >
                  {mod.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  {mod.desc}
                </p>
              </div>

              <div
                style={{
                  paddingTop: "0.85rem",
                  borderTop: "1px solid var(--color-border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.75rem",
                  color: "var(--color-gold-bright)",
                  fontWeight: 600,
                }}
              >
                <span>Control Room Integration</span>
                <span>Active ➔</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
