"use client";

import { useState, useEffect } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function DiagnosticDifferentiatorSection() {
  const [activePainIdx, setActivePainIdx] = useState(0);
  const [activeLoopStep, setActiveLoopStep] = useState(0);

  const painStatements = [
    "I studied all day. Why didn't my score move?",
    "I know the chapter. Why am I still losing marks?",
    "I keep making the same careless mistakes in every test.",
    "I don't know what to fix next to improve my rank.",
    "I have a plan. I just can't execute it consistently.",
  ];

  // Rotate pain statements & failure loop step simultaneously
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePainIdx((prev) => (prev + 1) % painStatements.length);
      setActiveLoopStep((prev) => (prev + 1) % 5);
    }, 3200);
    return () => clearInterval(timer);
  }, [painStatements.length]);

  const guessworkSteps = [
    { step: "01", text: "STUDY HARDER & LONGER", note: "High effort input", status: "TRYING HARDER" },
    { step: "02", text: "MORE CHAPTERS & LECTURES", note: "Content overload", status: "PASSIVE WATCHING" },
    { step: "03", text: "TAKE ANOTHER MOCK TEST", note: "No diagnostic fix", status: "BLIND TESTING" },
    { step: "04", text: "SAME LOW SCORE AGAIN", note: "Recurring leak", status: "RECURRING LEAK" },
    { step: "05", text: "CONFUSION & FRUSTRATION", note: "Demoralization", status: "SYSTEM FREEZE" },
  ];

  const cnmPipeline = [
    {
      label: "AUDIT",
      desc: "Full Telemetry Scan Across 8 Performance Domains",
      color: "#38bdf8",
      iconClass: "icon-scan",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 12L17 7" />
          <path d="M12 7a5 5 0 0 1 5 5" />
        </svg>
      ),
    },
    {
      label: "DIAGNOSE",
      desc: "Pinpoint exact mark drain (e.g. Focus / Calculation / Time)",
      color: "#f43f5e",
      iconClass: "icon-radar",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      ),
    },
    {
      label: "PRIORITIZE",
      desc: "Isolate highest-yield concept gaps & mark recovery areas",
      color: "#f59e0b",
      iconClass: "icon-pulse",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      label: "PLAN",
      desc: "Generate targeted daily mission & focus block protocol",
      color: "#8b5cf6",
      iconClass: "icon-pulse",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
    },
    {
      label: "EXECUTE",
      desc: "Structured daily work with zero decision friction",
      color: "#f0c94b",
      iconClass: "icon-forward",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0c94b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      label: "TEST",
      desc: "Timed pressure examination to measure real survival",
      color: "#06b6d4",
      iconClass: "icon-graph",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      label: "ANALYZE",
      desc: "Autopsy test paper mistakes into 8 specific error categories",
      color: "#a855f7",
      iconClass: "icon-scan",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      ),
    },
    {
      label: "ADAPT",
      desc: "System auto-recalibrates daily missions based on mistakes",
      color: "#22c55e",
      iconClass: "icon-radar",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6" />
          <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      ),
    },
  ];

  const AUDIT_URL = "https://cnm-online-audit.vercel.app/";

  return (
    <section
      id="differentiator"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "#07070a",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="THE BIG DIFFERENTIATOR"
          title="Stop Guessing What's Wrong. Start Diagnosing It."
          description="Traditional academic support asks: 'Did you study?' CNM System Labs asks: 'Why didn't the studying convert into performance?'"
          center={true}
        />

        {/* 2-Column Comparison Display */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginTop: "3.5rem",
          }}
          className="differentiator-grid"
        >
          {/* LEFT: Traditional Approach Box with Ambient Reddish Warning Glow */}
          <div
            style={{
              position: "relative",
            }}
          >
            {/* Soft Ambient Reddish Warning Glow behind box */}
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                borderRadius: "24px",
                background: "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                pointerEvents: "none",
                zIndex: 0,
                animation: "glowBreathe 4s ease-in-out infinite alternate",
              }}
            />

            <div
              style={{
                backgroundColor: "rgba(18, 12, 14, 0.92)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 1,
                backdropFilter: "blur(10px)",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "1rem",
                    marginBottom: "1.5rem",
                    borderBottom: "1px solid rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-status-red)" }}>
                    Traditional Guesswork Loop
                  </h3>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--color-status-red)",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      backgroundColor: "rgba(239, 68, 68, 0.12)",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                    }}
                  >
                    REPEATING FAILURE LOOP
                  </span>
                </div>

                {/* Sequential Pain Statement Banner */}
                <div
                  style={{
                    backgroundColor: "rgba(10, 10, 12, 0.95)",
                    border: "1px stroke rgba(239, 68, 68, 0.4)",
                    borderLeft: "4px solid var(--color-status-red)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1.1rem 1.25rem",
                    marginBottom: "1.75rem",
                    minHeight: "85px",
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      fontStyle: "italic",
                      lineHeight: 1.45,
                    }}
                  >
                    "{painStatements[activePainIdx]}"
                  </p>
                </div>

                {/* Frustration Progression Chain with Active Step Highlight */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {guessworkSteps.map((item, idx) => {
                    const isActive = activeLoopStep === idx;
                    return (
                      <div
                        key={item.step}
                        style={{
                          backgroundColor: isActive ? "rgba(239, 68, 68, 0.15)" : "rgba(255, 255, 255, 0.02)",
                          border: isActive ? "1px solid var(--color-status-red)" : "1px solid rgba(255, 255, 255, 0.05)",
                          borderRadius: "var(--radius-sm)",
                          padding: "0.85rem 1rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                          transform: isActive ? "scale(1.03) translateX(4px)" : "scale(1)",
                          boxShadow: isActive ? "0 4px 18px rgba(239, 68, 68, 0.25)" : "none",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: 800,
                              color: isActive ? "#ffffff" : "var(--color-status-red)",
                              backgroundColor: isActive ? "var(--color-status-red)" : "transparent",
                              padding: isActive ? "0.15rem 0.4rem" : "0",
                              borderRadius: "4px",
                            }}
                          >
                            {item.step}
                          </span>
                          <span style={{ fontSize: "0.88rem", fontWeight: 700, color: isActive ? "#ffffff" : "var(--color-text-secondary)" }}>
                            {item.text}
                          </span>
                        </div>
                        <span style={{ fontSize: "0.72rem", color: isActive ? "var(--color-status-red)" : "var(--color-text-muted)", fontWeight: 700 }}>
                          {isActive ? `⚠️ ${item.status}` : item.note}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Repeating Loop Progress Indicator Strip */}
              <div
                style={{
                  marginTop: "1.75rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(239, 68, 68, 0.2)",
                  fontSize: "0.78rem",
                  color: "var(--color-status-red)",
                  fontWeight: 700,
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <span>🔄</span>
                <span>
                  STEP 0{activeLoopStep + 1} ACTIVE • Repeating effort without diagnostic feedback leads to rank stagnation.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: CNM System Labs Protocol Box with CNM Gold Ambient Glow */}
          <div style={{ position: "relative" }}>
            {/* Soft Ambient Gold Glow behind box */}
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                borderRadius: "24px",
                background: "radial-gradient(circle, rgba(240, 201, 75, 0.16) 0%, rgba(0, 0, 0, 0) 70%)",
                pointerEvents: "none",
                zIndex: 0,
                animation: "glowBreathe 4s ease-in-out infinite alternate",
              }}
            />

            <div
              style={{
                backgroundColor: "rgba(14, 14, 18, 0.94)",
                border: "2px solid var(--color-border-gold)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                boxShadow: "0 20px 50px rgba(0,0,0,0.9), 0 0 30px rgba(212, 175, 55, 0.12)",
                position: "relative",
                zIndex: 1,
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Top Ribbon */}
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "24px",
                  backgroundColor: "var(--color-gold-bright)",
                  color: "#050505",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  padding: "0.2rem 0.75rem",
                  borderRadius: "4px",
                  boxShadow: "0 4px 12px rgba(212, 175, 55, 0.4)",
                }}
              >
                SYSTEMIC DIAGNOSTIC FEEDBACK PIPELINE
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "1rem",
                  marginBottom: "1.5rem",
                  borderBottom: "1px solid var(--color-border-gold)",
                }}
              >
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>
                  CNM System Labs Protocol
                </h3>
                <span style={{ fontSize: "0.75rem", color: "var(--color-status-green)", fontWeight: 700 }}>
                  ● MEASURABLE IMPROVEMENT
                </span>
              </div>

              {/* 8-Step Pipeline Grid with Function-Specific Micro-Animations */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {cnmPipeline.map((step, idx) => (
                  <div
                    key={step.label}
                    style={{
                      backgroundColor: "rgba(10, 10, 12, 0.85)",
                      border: `1px solid ${step.color}40`,
                      borderRadius: "var(--radius-sm)",
                      padding: "0.85rem 1.1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = step.color;
                      e.currentTarget.style.backgroundColor = "rgba(20, 20, 25, 0.98)";
                      e.currentTarget.style.transform = "scale(1.03) translateX(4px)";
                      e.currentTarget.style.boxShadow = `0 6px 20px ${step.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${step.color}40`;
                      e.currentTarget.style.backgroundColor = "rgba(10, 10, 12, 0.85)";
                      e.currentTarget.style.transform = "scale(1) translateX(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div
                        className={step.iconClass}
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: `${step.color}15`,
                          border: `1px solid ${step.color}50`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#ffffff" }}>
                          {idx + 1}. {step.label}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", marginTop: "1px" }}>
                          {step.desc}
                        </div>
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        color: step.color,
                        backgroundColor: `${step.color}15`,
                        padding: "0.2rem 0.55rem",
                        borderRadius: "4px",
                        border: `1px solid ${step.color}40`,
                        flexShrink: 0,
                      }}
                    >
                      ACTIVE STEP
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Direct Audit CTA */}
              <div style={{ marginTop: "1.75rem", textAlign: "center" }}>
                <a
                  href={AUDIT_URL}
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
                    fontSize: "0.92rem",
                    padding: "0.85rem 1.75rem",
                    borderRadius: "var(--radius-md)",
                    textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(212, 175, 55, 0.35)",
                    transition: "all 0.2s ease",
                  }}
                >
                  IDENTIFY MY BIGGEST PERFORMANCE LEAK →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glowBreathe {
          0% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }

        :global(.icon-scan) {
          animation: scanRotate 8s linear infinite;
        }
        :global(.icon-radar) {
          animation: radarPulse 2.5s ease-in-out infinite alternate;
        }
        :global(.icon-pulse) {
          animation: iconBreathe 3s ease-in-out infinite alternate;
        }
        :global(.icon-forward) {
          animation: shiftRight 2s ease-in-out infinite alternate;
        }
        :global(.icon-graph) {
          animation: graphUp 2.5s ease-in-out infinite alternate;
        }

        @keyframes scanRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes radarPulse {
          0% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1.1);
          }
        }
        @keyframes iconBreathe {
          0% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes shiftRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(3px);
          }
        }
        @keyframes graphUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-3px);
          }
        }

        @media (min-width: 992px) {
          .differentiator-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

