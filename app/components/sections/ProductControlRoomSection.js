"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import ProductSystemBackground from "../ui/ProductSystemBackground";

function ToolCard({ tool, idx, isSelected, onClick }) {
  const [inView, setInView] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      onClick={onClick}
      style={{
        backgroundColor: isSelected ? "rgba(240, 201, 75, 0.14)" : "rgba(12, 12, 16, 0.75)",
        border: isSelected ? "1.5px solid var(--color-border-gold-bright)" : "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
        padding: "0.85rem 1.15rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "0.85rem",
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0) translateY(0) scale(1)"
          : idx % 2 === 0
          ? "translateX(-30px) translateY(12px) scale(0.97)"
          : "translateX(30px) translateY(12px) scale(0.97)",
        transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s, border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease`,
        boxShadow: isSelected ? "0 6px 20px rgba(0,0,0,0.8), 0 0 15px rgba(212, 175, 55, 0.2)" : "none",
        backdropFilter: "blur(6px)",
      }}
      className="hover-card-illuminate"
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = "var(--color-border-gold)";
          e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.transform = "translateY(0) scale(1)";
        }
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              color: isSelected ? "var(--color-gold-bright)" : "var(--color-text-muted)",
            }}
          >
            0{idx + 1}
          </span>
          <span
            style={{
              fontSize: "0.6rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              backgroundColor: isSelected ? "rgba(212, 175, 55, 0.2)" : "rgba(255, 255, 255, 0.05)",
              color: isSelected ? "var(--color-gold-bright)" : "var(--color-text-secondary)",
              padding: "0.1rem 0.4rem",
              borderRadius: "3px",
            }}
          >
            {tool.badge}
          </span>
        </div>
        <h4
          style={{
            fontSize: "0.98rem",
            fontWeight: 800,
            color: isSelected ? "var(--color-gold-bright)" : "#ffffff",
            margin: 0,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {tool.title}
        </h4>
        <p style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", margin: "0.15rem 0 0 0", lineHeight: 1.35, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {tool.desc}
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexShrink: 0 }}>
        <span
          style={{
            fontSize: "0.85rem",
            color: isSelected ? "var(--color-gold-bright)" : "var(--color-text-muted)",
            transform: isSelected ? "translateX(3px)" : "none",
            transition: "transform 0.2s ease",
          }}
        >
          →
        </span>
      </div>
    </div>
  );
}

export default function ProductControlRoomSection() {
  const [activeSystem, setActiveSystem] = useState("REWIRE");
  const [activeToolIdx, setActiveToolIdx] = useState(0);

  const productSystems = {
    REWIRE: {
      tagline: "TELEMETRY, RECOVERY & EXECUTION OPERATOR",
      tools: [
        {
          title: "Progress Radar",
          desc: "5-axis radar visualizer mapping accuracy, speed, consistency, focus, and retention.",
          badge: "VISUAL RADAR",
          image: "/images/tools/rewire/progress-radar.png",
          problemSolved: "Translates abstract study effort into an objective 5-axis visual telemetry map.",
        },
        {
          title: "Reset Engine",
          desc: "Instant recovery protocol to get back on track when a student falls behind schedule.",
          badge: "RECOVERY PROTOCOL",
          image: "/images/tools/rewire/reset-engine.png",
          problemSolved: "Eliminates backlog overwhelm by auto-recalibrating study schedules in 1 click.",
        },
        {
          title: "Power Zone",
          desc: "Highlights highest-yield subject topics where minimal effort yields maximum mark gain.",
          badge: "STRATEGY MAP",
          image: "/images/tools/rewire/power-zone.png",
          problemSolved: "Identifies high-margin topics to optimize marks per study hour spent.",
        },
        {
          title: "Operator Profile",
          desc: "Complete academic performance identity profiling learning rate and test strategy.",
          badge: "STUDENT IDENTITY",
          image: "/images/tools/rewire/operator-profile.png",
          problemSolved: "Establishes personalized student telemetry profile to tailor execution protocols.",
        },
        {
          title: "Emergency Mode",
          desc: "High-priority focus override when exam deadlines approach or revision backlogs spike.",
          badge: "RAPID OVERRIDE",
          image: "/images/tools/rewire/emergency-mode.png",
          problemSolved: "Protects against last-minute exam panic with shielded revision priorities.",
        },
        {
          title: "Bug Tracker",
          desc: "Systematic error logger isolating recurring calculation and conceptual mistakes.",
          badge: "ERROR LOG",
          image: "/images/tools/rewire/bug-tracker.png",
          problemSolved: "Stops unforced error repetition by cataloging root-cause test mistakes.",
        },
      ],
    },
    REFOCUS: {
      tagline: "FOCUS, PLANNING, DIAGNOSTICS & MILESTONES",
      tools: [
        {
          title: "Daily Mission Panel",
          desc: "Converts long-term rank blueprints into 3 daily high-yield, friction-free actions.",
          badge: "DAILY HABIT",
          image: "/images/tools/refocus/daily-missions.png",
          problemSolved: "Eliminates daily decision fatigue with automated 3-mission execution tasks.",
        },
        {
          title: "Focus Block Launcher",
          desc: "Timed deep-work session launcher with distraction shielding and focus decay tracking.",
          badge: "EXECUTION TOOL",
          image: "/images/tools/refocus/focus-block.png",
          problemSolved: "Prevents study endurance decay during 3-hour exam simulation sessions.",
        },
        {
          title: "Mock Test Autopsy",
          desc: "Deconstructs test scores into 8 specific error categories (concept gap, misread, calculation).",
          badge: "DIAGNOSTIC AUTOPSY",
          image: "/images/tools/refocus/mock-autopsy.png",
          problemSolved: "Transforms raw test scores into actionable post-exam mark recovery plans.",
        },
        {
          title: "90-Day Rank Blueprint",
          desc: "Structured 3-phase roadmap translating current starting score into target performance.",
          badge: "ROADMAP",
          image: "/images/tools/refocus/90-day-blueprint.png",
          problemSolved: "Provides clear 90-day trajectory roadmap to reach competitive rank goals.",
        },
        {
          title: "Weekly Power Planner",
          desc: "Adaptive weekly scheduling engine that auto-balances backlog revision and new topics.",
          badge: "ADAPTIVE PLANNER",
          image: "/images/tools/refocus/weekly-power-planner.png",
          problemSolved: "Auto-balances new syllabus coverage with automated revision intervals.",
        },
        {
          title: "Confidence Dashboard",
          desc: "Tracks academic confidence signals, preparation consistency, and test anxiety indicators.",
          badge: "BEHAVIOR TRACKER",
          image: "/images/tools/refocus/confidence-dashboard.png",
          problemSolved: "Monitors psychological readiness and exam stress before test days.",
        },
        {
          title: "Rank Snapshot",
          desc: "Real-time rank trajectory mapping subject-level score trends to expected competitive rank.",
          badge: "COMPETITIVE RADAR",
          image: "/images/tools/refocus/rank-snapshot.png",
          problemSolved: "Gives clear real-time percentile trajectory without guesswork.",
        },
        {
          title: "Learning Ledger",
          desc: "Structured record of covered, revised, mastered, and decaying concept nodes.",
          badge: "KNOWLEDGE BANK",
          image: "/images/tools/refocus/learning-ledger.png",
          problemSolved: "Prevents formula and concept decay through spaced active recall tracking.",
        },
        {
          title: "Win Vault",
          desc: "Captures verified milestone completions and empirical evidence of score improvement.",
          badge: "ACHIEVEMENT SYSTEM",
          image: "/images/tools/refocus/win-vault.png",
          problemSolved: "Builds momentum by documenting empirical score and habit milestones.",
        },
      ],
    },
    RISE: {
      tagline: "PSYCHOLOGY, EXAM PRESSURE & READINESS",
      tools: [
        {
          title: "Fear Deconstructor",
          desc: "Isolates exam pressure triggers and delivers actionable psychological interventions.",
          badge: "PRESSURE SHIELD",
          image: "/images/tools/rise/fear-deconstructor.png",
          problemSolved: "Deconstructs exam anxiety into manageable diagnostic action points.",
        },
        {
          title: "Exam Readiness Meter",
          desc: "Empirical composite score evaluating topic mastery, recall speed, and test endurance.",
          badge: "READINESS SCORE",
          image: "/images/tools/rise/exam-readiness-meter.png",
          problemSolved: "Quantifies overall exam readiness across accuracy, speed, and endurance.",
        },
        {
          title: "Panic Trigger Detector",
          desc: "Early warning diagnostic identifying stress spikes before mock examinations.",
          badge: "ANXIETY SHIELD",
          image: "/images/tools/rise/panic-trigger-detector.png",
          problemSolved: "Detects pre-exam stress signals and applies targeted calming protocols.",
        },
        {
          title: "Brain Dump Tracker",
          desc: "Rapid active recall tool for unprompted formula and reaction mechanism extraction.",
          badge: "ACTIVE RECALL",
          image: "/images/tools/rise/brain-dump-tracker.png",
          problemSolved: "Validates true memory retrieval speed under timed pressure.",
        },
        {
          title: "Rise Card Generator",
          desc: "Generates high-contrast active recall revision cards based on telemetry weak spots.",
          badge: "FLASHCARDS",
          image: "/images/tools/rise/rise-card-generator.png",
          problemSolved: "Auto-creates high-yield flashcards targeting verified personal mark leaks.",
        },
      ],
    },
  };

  const currentSystemObj = productSystems[activeSystem];
  const currentTools = currentSystemObj.tools;
  const selectedTool = currentTools[activeToolIdx] || currentTools[0];

  const handleSystemChange = (sysKey) => {
    setActiveSystem(sysKey);
    setActiveToolIdx(0);
  };

  return (
    <section
      id="control-room"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Full-Section Live Background Canvas */}
      <ProductSystemBackground />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeading
          eyebrow="PRODUCT SYSTEM ARCHITECTURE"
          title="Your Performance Has a Control Room."
          description="Integrated tool control center engineered to eliminate performance leaks. Click any tool to preview its live telemetry interface."
          center={true}
        />

        {/* System Selector Tabs: REWIRE | REFOCUS | RISE */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.85rem",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          {Object.keys(productSystems).map((sysKey) => {
            const isActive = activeSystem === sysKey;
            return (
              <button
                key={sysKey}
                onClick={() => handleSystemChange(sysKey)}
                style={{
                  backgroundColor: isActive ? "rgba(240, 201, 75, 0.15)" : "rgba(14, 14, 18, 0.85)",
                  border: isActive ? "2px solid var(--color-gold-bright)" : "1px solid var(--color-border)",
                  color: isActive ? "var(--color-gold-bright)" : "var(--color-text-secondary)",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "var(--radius-full)",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isActive ? "0 0 20px rgba(212, 175, 55, 0.25)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: isActive ? "var(--color-gold-bright)" : "var(--color-text-muted)",
                    boxShadow: isActive ? "0 0 8px var(--color-gold-bright)" : "none",
                  }}
                />
                SYSTEM {sysKey}
              </button>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "0.75rem", marginBottom: "2.5rem" }}>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: "var(--color-gold-soft)",
              textTransform: "uppercase",
            }}
          >
            {currentSystemObj.tagline}
          </span>
        </div>

        {/* Product Control Room Coordinated Showcase Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "start",
          }}
          className="product-control-grid"
        >
          {/* Left Column: Compact Tool Navigation List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {currentTools.map((tool, idx) => (
              <ToolCard
                key={tool.title}
                tool={tool}
                idx={idx}
                isSelected={activeToolIdx === idx}
                onClick={() => setActiveToolIdx(idx)}
              />
            ))}
          </div>

          {/* Right Column: Coordinated Tight Screenshot Preview Frame */}
          <div
            style={{
              backgroundColor: "rgba(16, 16, 22, 0.95)",
              border: "2px solid var(--color-border-gold)",
              borderRadius: "var(--radius-xl)",
              padding: "1.25rem",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.95), 0 0 35px rgba(212, 175, 55, 0.15)",
              backdropFilter: "blur(10px)",
              position: "sticky",
              top: "90px",
            }}
          >
            {/* Dashboard Window Header Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "0.75rem",
                marginBottom: "0.85rem",
                borderBottom: "1px solid var(--color-border-subtle)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#f43f5e" }} />
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "var(--color-text-muted)",
                    marginLeft: "0.6rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  cnm://system-{activeSystem.toLowerCase()}/{selectedTool.title.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: "var(--color-gold-bright)",
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--color-border-gold)",
                }}
              >
                {selectedTool.badge}
              </span>
            </div>

            {/* Tight PNG Image Preview Container (No Black Void) */}
            <div
              style={{
                position: "relative",
                backgroundColor: "#050505",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <img
                key={`${activeSystem}-${selectedTool.title}`}
                src={selectedTool.image}
                alt={selectedTool.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "440px",
                  objectFit: "contain",
                  display: "block",
                  animation: "fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>

            {/* Description & Solved Problem below preview */}
            <div style={{ marginTop: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>
                  {selectedTool.title}
                </h3>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.45, marginBottom: "0.75rem" }}>
                {selectedTool.desc}
              </p>

              <div
                style={{
                  backgroundColor: "rgba(212, 175, 55, 0.06)",
                  border: "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.75rem 1rem",
                  fontSize: "0.82rem",
                }}
              >
                <span style={{ fontWeight: 800, color: "var(--color-gold-bright)" }}>Diagnostic Problem Solved: </span>
                <span style={{ color: "var(--color-text)" }}>{selectedTool.problemSolved}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (min-width: 992px) {
          .product-control-grid {
            grid-template-columns: 0.85fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
