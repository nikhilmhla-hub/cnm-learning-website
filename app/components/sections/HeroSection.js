"use client";

import { useState, useEffect, useRef } from "react";
import Button from "../ui/Button";
import PerformanceDiagnosticsBackground from "../ui/PerformanceDiagnosticsBackground";

export default function HeroSection() {
  const canvasRef = useRef(null);

  // Console State Management
  const [consoleStatus, setConsoleStatus] = useState("ANALYZING"); // ANALYZING, COMPLETE, READY
  const [scoreVal, setScoreVal] = useState(0); // Animated counter for 72 / 100
  const [isScoreAnimating, setIsScoreAnimating] = useState(true);
  const [barsAnimated, setBarsAnimated] = useState(false);

  // Mouse Parallax Offset
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Independent Sensor Card State Arrays for Top 4 Cards
  const cardDataPool = [
    [
      { label: "FOCUS", val: "38%", target: "88%", status: "CRITICAL LEAK", color: "#f43f5e", sensorState: "LEAK DETECTED" },
      { label: "FOCUS", val: "78%", target: "88%", status: "OPTIMIZING", color: "#f0c94b", sensorState: "INTERVENTION ACTIVE" },
    ],
    [
      { label: "ACCURACY", val: "50%", target: "85%", status: "NEEDS ATTENTION", color: "#f59e0b", sensorState: "UNFORCED ERRORS" },
      { label: "ACCURACY", val: "71%", target: "85%", status: "STABLE", color: "#38bdf8", sensorState: "PRECISION RISING" },
    ],
    [
      { label: "REVISION", val: "78%", target: "90%", status: "RETENTION OK", color: "#38bdf8", sensorState: "SPACED RECALL" },
      { label: "REVISION", val: "82%", target: "90%", status: "OPTIMAL", color: "#22c55e", sensorState: "RECALL SECURE" },
    ],
    [
      { label: "CONFIDENCE", val: "68%", target: "80%", status: "EXAM PRESSURE", color: "#f59e0b", sensorState: "STRESS SIGNAL" },
      { label: "CONFIDENCE", val: "80%", target: "88%", status: "OPTIMAL", color: "#22c55e", sensorState: "CALM EXECUTION" },
    ],
  ];

  // Active indices for each of the 4 independent sensor cards
  const [cardIndices, setCardIndices] = useState([0, 0, 0, 0]);
  const [cardStages, setCardStages] = useState(["idle", "idle", "idle", "idle"]); // idle, scanning, analyzing, updated

  // Performance score counter on entrance with pulse synchronization
  useEffect(() => {
    let start = 0;
    const duration = 1600;
    const target = 72;
    const intervalTime = 30;
    const step = target / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setScoreVal(target);
        setIsScoreAnimating(false);
        clearInterval(timer);
        setBarsAnimated(true);
        setConsoleStatus("COMPLETE");
        setTimeout(() => setConsoleStatus("READY"), 2200);
      } else {
        setScoreVal(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Staggered Independent Card Sensor Refresh Sequence
  useEffect(() => {
    const cycleSensor = (cardIndex) => {
      // Stage 1: Compress & scanning beam
      setCardStages((prev) => {
        const next = [...prev];
        next[cardIndex] = "scanning";
        return next;
      });

      // Stage 2: Analyze
      setTimeout(() => {
        setCardStages((prev) => {
          const next = [...prev];
          next[cardIndex] = "analyzing";
          return next;
        });
      }, 500);

      // Stage 3: Update data content & resolve metric
      setTimeout(() => {
        setCardIndices((prev) => {
          const next = [...prev];
          next[cardIndex] = (next[cardIndex] + 1) % cardDataPool[cardIndex].length;
          return next;
        });
        setCardStages((prev) => {
          const next = [...prev];
          next[cardIndex] = "updated";
          return next;
        });
      }, 1100);

      // Stage 4: Settle to resting state
      setTimeout(() => {
        setCardStages((prev) => {
          const next = [...prev];
          next[cardIndex] = "idle";
          return next;
        });
      }, 1900);
    };

    const interval = setInterval(() => {
      const now = Date.now();
      const targetCard = Math.floor((now / 3500) % 4);
      cycleSensor(targetCard);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  // Desktop Mouse Parallax Listener (Subtle 8px max offset)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 992) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);



  const progressMetrics = [
    { label: "FOCUS ENDURANCE", val: "78%", pct: 78, color: "var(--color-status-amber)" },
    { label: "SOLVING ACCURACY", val: "71%", pct: 71, color: "var(--color-gold-bright)" },
    { label: "REVISION RECALL", val: "82%", pct: 82, color: "var(--color-status-green)" },
    { label: "EXAM CONFIDENCE", val: "68%", pct: 68, color: "var(--color-status-amber)" },
    { label: "TIME ALLOCATION", val: "76%", pct: 76, color: "var(--color-status-green)" },
  ];

  const AUDIT_URL = "https://cnm-online-audit.vercel.app/";

  return (
    <section
      id="home"
      style={{
        minHeight: "100svh", // Full viewport height cinematic screen
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "76px", // Navbar height clearance
        paddingBottom: "2rem",
        boxSizing: "border-box",
        backgroundColor: "var(--color-background)",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      {/* Performance Diagnostics Live Background (Exact Shared Component) */}
      <PerformanceDiagnosticsBackground />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline & Positioning */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {/* Eyebrow Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(212, 175, 55, 0.08)",
                border: "1px solid var(--color-border-gold)",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-gold-bright)",
                  boxShadow: "0 0 8px var(--color-gold-bright)",
                }}
              />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "var(--color-gold-bright)",
                }}
              >
                STUDENT PERFORMANCE PROBLEM-SOLVING SYSTEM
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                color: "var(--color-text)",
                letterSpacing: "-0.02em",
              }}
            >
              You Know You Can Do Better.{" "}
              <span style={{ color: "var(--color-gold-bright)", textShadow: "0 0 25px rgba(212, 175, 55, 0.25)" }}>
                Let’s Find What’s Stopping You.
              </span>
            </h1>

            {/* Sub-headline / Narrative */}
            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: 1.6,
                color: "var(--color-text-secondary)",
                maxWidth: "580px",
              }}
            >
              Your marks aren't stuck because you lack capability. They're stuck because unseen performance leaks drain your accuracy, speed, and exam confidence. CNM System Labs diagnoses the root cause and builds a daily execution system to fix it.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href={AUDIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-filled"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  backgroundColor: "var(--color-gold-bright)",
                  color: "#050505",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  padding: "0.9rem 1.85rem",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(212, 175, 55, 0.4)",
                }}
              >
                START ONLINE PERFORMANCE AUDIT →
              </a>

              <Button
                variant="secondary"
                size="large"
                onClick={() => {
                  const element = document.getElementById("illustrative-audit");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                EXPLORE SYSTEM METHODOLOGY
              </Button>
            </div>

            {/* Process Status Strip */}
            <div
              style={{
                marginTop: "1rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--color-border-subtle)",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-text-muted)" }}>
                SYSTEM PROCESS:
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
                {["DIAGNOSE", "PLAN", "EXECUTE", "MEASURE", "IMPROVE"].map((step, idx, arr) => (
                  <span key={step} style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: idx === 0 ? "var(--color-gold-bright)" : "var(--color-text-secondary)",
                      }}
                    >
                      {step}
                    </span>
                    {idx < arr.length - 1 && (
                      <span style={{ color: "var(--color-border-gold)", fontSize: "0.65rem" }}>•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: COMPACT DENSE DIAGNOSTIC LAB CONSOLE v3.4 (Reduced Height & Hover Zoom) */}
          <div style={{ width: "100%", position: "relative" }}>
            {/* Reactive Glow Container behind Console */}
            <div
              className={`console-glow ${consoleStatus.toLowerCase()}`}
              style={{
                position: "absolute",
                inset: "-16px",
                borderRadius: "24px",
                pointerEvents: "none",
                zIndex: 0,
                transition: "all 0.8s ease",
              }}
            />

            <div
              style={{
                backgroundColor: "rgba(16, 16, 19, 0.96)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem",
                boxShadow: "0 18px 45px rgba(0, 0, 0, 0.9), 0 0 20px rgba(212, 175, 55, 0.12)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Header Bar with Live Pulsing Status */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "0.75rem",
                  marginBottom: "0.9rem",
                  borderBottom: "1px solid var(--color-border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor:
                        consoleStatus === "ANALYZING"
                          ? "#38bdf8"
                          : consoleStatus === "READY"
                          ? "#22c55e"
                          : "#f59e0b",
                      boxShadow: `0 0 8px ${
                        consoleStatus === "ANALYZING"
                          ? "#38bdf8"
                          : consoleStatus === "READY"
                          ? "#22c55e"
                          : "#f59e0b"
                      }`,
                    }}
                  />
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-text)" }}>
                    DIAGNOSTIC LAB CONSOLE v3.4
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--color-border-gold)",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "4px",
                    color: consoleStatus === "READY" ? "#22c55e" : "var(--color-gold-bright)",
                  }}
                >
                  SYSTEM {consoleStatus}
                </span>
              </div>

              {/* TOP 4 INDEPENDENT SENSOR CARDS (HOVER ZOOM & SENSOR REFRESH SEQUENCE) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.7rem",
                  marginBottom: "0.9rem",
                }}
              >
                {[0, 1, 2, 3].map((cardIdx) => {
                  const dataIndex = cardIndices[cardIdx];
                  const data = cardDataPool[cardIdx][dataIndex];
                  const stage = cardStages[cardIdx];

                  return (
                    <div
                      key={cardIdx}
                      className={`sensor-card card-${cardIdx} stage-${stage}`}
                      style={{
                        backgroundColor: "rgba(6, 6, 9, 0.92)",
                        border:
                          stage === "scanning" || stage === "analyzing"
                            ? `1px solid ${data.color}`
                            : "1px solid var(--color-border)",
                        borderRadius: "var(--radius-md)",
                        padding: "0.75rem 0.85rem",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        cursor: "pointer",
                      }}
                    >
                      {/* Scan Beam Effect for Card */}
                      {stage === "scanning" && (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: `linear-gradient(90deg, transparent, ${data.color}35, transparent)`,
                            animation: "cardScanBeam 0.5s linear infinite",
                          }}
                        />
                      )}

                      {/* Header metadata */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                        <span style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.08em", color: "var(--color-text-muted)" }}>
                          0{cardIdx + 1} • {data.label}
                        </span>
                        <span
                          style={{
                            fontSize: "0.58rem",
                            fontWeight: 700,
                            color: data.color,
                            backgroundColor: `${data.color}15`,
                            padding: "0.1rem 0.3rem",
                            borderRadius: "3px",
                          }}
                        >
                          {stage === "analyzing" ? "RECALCULATING..." : data.status}
                        </span>
                      </div>

                      {/* Content Value Display */}
                      <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", marginTop: "1px", lineHeight: 1.15 }}>
                        {stage === "analyzing" ? (
                          <span style={{ fontSize: "0.9rem", color: "var(--color-gold-bright)" }}>ANALYZING...</span>
                        ) : (
                          <>
                            {data.val}{" "}
                            <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", fontWeight: 500 }}>
                              (Target: {data.target})
                            </span>
                          </>
                        )}
                      </div>

                      <div style={{ fontSize: "0.64rem", fontWeight: 600, color: data.color, marginTop: "2px" }}>
                        ● {data.sensorState}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* HIGH-IMPACT VISUALLY REACTIVE PERFORMANCE INDEX SCORE */}
              <div
                style={{
                  backgroundColor: "rgba(6, 6, 9, 0.95)",
                  border: "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.9rem 1.1rem",
                  marginBottom: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: isScoreAnimating
                    ? "0 0 30px rgba(240, 201, 75, 0.35), inset 0 0 15px rgba(240, 201, 75, 0.15)"
                    : "0 0 20px rgba(212, 175, 55, 0.18)",
                  transition: "box-shadow 0.4s ease",
                }}
              >
                {/* Gold Signal Trail on Container Border */}
                <div className="score-border-pulse" />

                <div>
                  <div style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-gold-bright)" }}>
                    PERFORMANCE INDEX SCORE
                  </div>
                  <div
                    style={{
                      fontSize: "2.1rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      marginTop: "1px",
                      lineHeight: 1.1,
                      transform: isScoreAnimating ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.15s ease, color 0.3s ease",
                      textShadow: isScoreAnimating ? "0 0 15px #f0c94b" : "0 0 10px rgba(240, 201, 75, 0.5)",
                    }}
                  >
                    {scoreVal}{" "}
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", fontWeight: 500 }}>
                      / 100
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.08em", color: "var(--color-text-muted)" }}>
                    TARGET TRAJECTORY
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem", marginTop: "2px" }}>
                    <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>142</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--color-gold-bright)" }}>➔</span>
                    <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-gold-bright)" }}>185</span>
                  </div>
                </div>
              </div>

              {/* 5 TELEMETRY METRIC BARS */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "0.85rem" }}>
                {progressMetrics.map((m) => (
                  <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.62rem" }}>
                      <span style={{ color: "var(--color-text-secondary)", fontWeight: 600 }}>{m.label}</span>
                      <span style={{ color: m.color, fontWeight: 700 }}>{m.val}</span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "4px",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        borderRadius: "2px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: barsAnimated ? `${m.pct}%` : "0%",
                          backgroundColor: m.color,
                          borderRadius: "2px",
                          transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* SYSTEM DIAGNOSTIC AUDIT ACTION BUTTON */}
              <a
                href={AUDIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="console-cta-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  width: "100%",
                  padding: "0.65rem 1rem",
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--color-gold-bright)",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                ⚡ RUN DIAGNOSTIC AUDIT NOW →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Reactive Glow Behind Console */
        .console-glow.analyzing {
          background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0.04) 50%, transparent 75%);
          filter: blur(22px);
        }
        .console-glow.complete {
          background: radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(245, 158, 11, 0.04) 50%, transparent 75%);
          filter: blur(22px);
        }
        .console-glow.ready {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.28) 0%, rgba(34, 197, 94, 0.06) 50%, transparent 75%);
          filter: blur(25px);
        }

        /* Console CTA Button Premium Hover Behavior */
        :global(.console-cta-btn) {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
          transform-origin: center center;
        }

        @media (hover: hover) and (pointer: fine) {
          :global(.console-cta-btn:hover) {
            transform: scale(1.03) !important;
            background-color: rgba(212, 175, 55, 0.22) !important;
            border-color: var(--color-gold-bright) !important;
            box-shadow: 0 0 20px rgba(240, 201, 75, 0.35) !important;
            color: #ffffff !important;
          }
        }

        :global(.console-cta-btn:active) {
          transform: scale(0.98) !important;
        }

        /* Card Sensor Hover Zoom & Micro-glow */
        :global(.sensor-card:hover) {
          transform: scale(1.04) translateY(-3px) !important;
          border-color: var(--color-border-gold-bright) !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.3) !important;
        }

        /* Card Scan Beam Animation */
        @keyframes cardScanBeam {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
