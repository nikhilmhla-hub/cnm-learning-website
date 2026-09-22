"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function MethodologySection() {
  const [activeStage, setActiveStage] = useState(0);
  const [hasClickedRewire, setHasClickedRewire] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredCardIdx, setHoveredCardIdx] = useState(null);
  const [hoveredNodeIdx, setHoveredNodeIdx] = useState(null);

  const canvasRef = useRef(null);

  // Handle stage node selection
  const selectStage = (idx) => {
    if (idx === 0 && !hasClickedRewire) {
      setHasClickedRewire(true);
    }
    if (idx === activeStage) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveStage(idx);
      setIsTransitioning(false);
    }, 250);
  };

  // Automatic stage rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveStage((prev) => (prev + 1) % 5);
        setIsTransitioning(false);
      }, 250);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // Circular System Loop Orbital Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Orbital particles following circular trajectories
    const center = { x: width * 0.5, y: height * 0.5 };
    const orbitalPaths = [
      { r: 160, speed: 0.005, angle: 0, color: "#f0c94b" },
      { r: 220, speed: -0.004, angle: Math.PI * 0.5, color: "#38bdf8" },
      { r: 280, speed: 0.003, angle: Math.PI, color: "#22c55e" },
    ];

    const particles = Array.from({ length: 24 }, (_, i) => ({
      pathIdx: i % orbitalPaths.length,
      angleOffset: (i * Math.PI * 2) / 24,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Faint Grid Lines
      ctx.strokeStyle = "rgba(212, 175, 55, 0.025)";
      ctx.lineWidth = 1;
      const step = 75;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        // Draw orbital concentric paths
        orbitalPaths.forEach((path) => {
          path.angle += path.speed;
          ctx.beginPath();
          ctx.arc(center.x, center.y, path.r, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(212, 175, 55, 0.04)";
          ctx.setLineDash([8, 12]);
          ctx.stroke();
          ctx.setLineDash([]);
        });

        // Moving particles along circular trajectories
        particles.forEach((p) => {
          const path = orbitalPaths[p.pathIdx];
          const curAngle = path.angle + p.angleOffset;
          const px = center.x + Math.cos(curAngle) * path.r;
          const py = center.y + Math.sin(curAngle) * path.r;

          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = path.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.globalAlpha = 1.0;
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stages = [
    {
      name: "REWIRE",
      subtitle: "Mindset & Belief Engine",
      description: "Break unproductive study beliefs, fear patterns, and unexamined habits.",
      problem: "Student believes low scores mean lack of talent, leading to passive resignation and test avoidance.",
      whatCNMDoes: "Deconstructs performance anxiety into observable metrics and provides actionable recovery protocols.",
      whatGetsMeasured: "Preparation confidence, fear triggers, study initiation friction, timetable adherence.",
      whatChanges: "Shift from emotional panic to systemic problem-solving attitude.",
      angle: 270, // Top (12 o'clock)
      color: "#f0c94b",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f0c94b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      ),
    },
    {
      name: "RECONNECT",
      subtitle: "Visual Concept Learning",
      description: "Make complex Physics, Chemistry, and Math concepts intuitively understandable.",
      problem: "Rote formula memorization breaks down under novel or multi-concept JEE/NEET questions.",
      whatCNMDoes: "Deploys 3D visual representations and spatial models to build deep intuitive physics and chemical intuition.",
      whatGetsMeasured: "Conceptual comprehension speed, structural concept mapping, visualization recall.",
      whatChanges: "Deep intuition replaces brittle memorization.",
      angle: 342, // Top Right (~2 o'clock)
      color: "#38bdf8",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      name: "REINFORCE",
      subtitle: "Problem Solving Engine",
      description: "Convert conceptual understanding into rapid, accurate solving ability under timed conditions.",
      problem: "Student understands the lecture video but gets stuck on 70% of practice problems.",
      whatCNMDoes: "Provides structured problem ladders with step-by-step diagnostic feedback on calculation errors.",
      whatGetsMeasured: "First-attempt accuracy, problem category mastery, average time per question.",
      whatChanges: "Passive understanding converts directly into marks.",
      angle: 54, // Bottom Right (~4 o'clock)
      color: "#f43f5e",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      ),
    },
    {
      name: "REFOCUS",
      subtitle: "System & Routine Architecture",
      description: "Build adaptive daily execution routines, revision cycles, and test autopsy protocols.",
      problem: "Inconsistent study schedules with abandoned timetables and zero systematic revision.",
      whatCNMDoes: "Establishes Daily Missions, Focus Blocks, and automated spaced-repetition triggers.",
      whatGetsMeasured: "Mission completion rate, focus block duration, active recall intervals.",
      whatChanges: "Erratic effort becomes disciplined, frictionless daily execution.",
      angle: 126, // Bottom Left (~8 o'clock)
      color: "#a855f7",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      name: "RISE",
      subtitle: "Performance & Rank Trajectory",
      description: "Translate systemic improvement into consistent score jumps and rank progression.",
      problem: "Studying hard for months without seeing any movement in mock test percentile.",
      whatCNMDoes: "Connects daily execution data to rank trajectory predictions and high-yield topic prioritization.",
      whatGetsMeasured: "Mock test score stability, negative mark reduction, competitive percentile trajectory.",
      whatChanges: "Unpredictable results transform into repeatable academic progress.",
      angle: 198, // Top Left (~10 o'clock)
      color: "#22c55e",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "#060608",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Computational Topology Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeading
          eyebrow="THE CNM METHODOLOGY"
          title="The 5-Stage Performance Operating System"
          description="A continuous circular feedback loop that converts chaotic effort into predictable competitive performance."
          center={true}
        />

        {/* TWO-COLUMN METHODOLOGY LAYOUT SYSTEM (Desktop 2-Col, Mobile Stacked) */}
        <div
          style={{
            marginTop: "3.5rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="methodology-two-column-grid"
        >
          {/* LEFT COLUMN: LARGE SYSTEM ORBIT CYCLE WITH SUBSTANTIALLY LARGER STAGE CARDS */}
          <div
            className="orbit-system-wrapper"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "580px",
              height: "580px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* SVG Orbital Paths & Segment Highlights */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 580 580"
              style={{ position: "absolute", inset: 0, overflow: "visible" }}
            >
              {/* Outer Dashed Orbit Ring */}
              <circle
                cx="290"
                cy="290"
                r="215"
                fill="none"
                stroke="rgba(212, 175, 55, 0.18)"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              {/* Inner Secondary Ring */}
              <circle
                cx="290"
                cy="290"
                r="145"
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1"
              />

              {/* Active Glowing Arc Segment */}
              <circle
                cx="290"
                cy="290"
                r="215"
                fill="none"
                stroke="url(#methodologyOrbitGrad)"
                strokeWidth="4"
                strokeDasharray="1351"
                strokeDashoffset={1351 - 270.2 * (activeStage + 1)}
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "290px 290px",
                  transition: "stroke-dashoffset 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              {/* Orbit Signal Particle */}
              <circle cx="290" cy="75" r="5" fill="#f0c94b">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 290 290"
                  to="360 290 290"
                  dur="16s"
                  repeatCount="indefinite"
                />
              </circle>

              <defs>
                <linearGradient id="methodologyOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f0c94b" stopOpacity="1" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Computational Core Indicator */}
            <div
              style={{
                width: "190px",
                height: "190px",
                borderRadius: "50%",
                backgroundColor: "rgba(14, 14, 18, 0.96)",
                border: "2px solid var(--color-border-gold)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "1.25rem",
                boxShadow: "0 0 45px rgba(212, 175, 55, 0.25), inset 0 0 20px rgba(0, 0, 0, 0.8)",
                zIndex: 3,
                transition: "all 0.4s ease",
              }}
            >
              <span style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.15em", color: "var(--color-gold-bright)" }}>
                CNM SYSTEM LOOP
              </span>
              <div
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginTop: "6px",
                  transition: "opacity 0.2s ease",
                  opacity: isTransitioning ? 0.3 : 1,
                }}
              >
                {stages[activeStage].name}
              </div>
              <span
                style={{
                  fontSize: "0.68rem",
                  color: stages[activeStage].color,
                  fontWeight: 700,
                  marginTop: "6px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>●</span> ACTIVE STAGE 0{activeStage + 1}
              </span>
            </div>

            {/* 5 STAGE CARDS (196px x 96px - 10-15% reduced for optimal orbital balance) */}
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              const isHoveredNode = hoveredNodeIdx === idx;
              const isRewireFirstPulse = idx === 0 && !hasClickedRewire;

              // Radial math around center (290, 290) with radius 215
              const radius = 215;
              const angleRad = (stage.angle * Math.PI) / 180;
              // Card dimensions 196px x 96px -> half dimensions: 98px x 48px
              const x = 290 + radius * Math.cos(angleRad) - 98;
              const y = 290 + radius * Math.sin(angleRad) - 48;

              return (
                <button
                  key={stage.name}
                  onClick={() => selectStage(idx)}
                  onMouseEnter={() => setHoveredNodeIdx(idx)}
                  onMouseLeave={() => setHoveredNodeIdx(null)}
                  style={{
                    position: "absolute",
                    left: `${x}px`,
                    top: `${y}px`,
                    width: "196px",
                    height: "96px",
                    borderRadius: "12px",
                    backgroundColor: isActive
                      ? "rgba(22, 22, 28, 0.98)"
                      : isHoveredNode
                      ? "rgba(18, 18, 24, 0.94)"
                      : "rgba(12, 12, 16, 0.90)",
                    border: isActive
                      ? `2px solid ${stage.color}`
                      : isRewireFirstPulse
                      ? "2px solid var(--color-gold-bright)"
                      : "1px solid var(--color-border-subtle)",
                    boxShadow: isActive
                      ? `0 0 25px ${stage.color}45, 0 8px 20px rgba(0,0,0,0.8)`
                      : isRewireFirstPulse
                      ? "0 0 20px rgba(240, 201, 75, 0.5)"
                      : isHoveredNode
                      ? "0 6px 16px rgba(0, 0, 0, 0.8)"
                      : "0 4px 12px rgba(0, 0, 0, 0.6)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem 0.9rem",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    zIndex: 4,
                    transform: isActive
                      ? "scale(1.06)"
                      : isHoveredNode
                      ? "scale(1.03)"
                      : "scale(1)",
                    animation: isRewireFirstPulse ? "rewirePulseAttention 2.2s ease-in-out infinite" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      backgroundColor: isActive ? `${stage.color}20` : "rgba(255, 255, 255, 0.04)",
                      border: isActive ? `1px solid ${stage.color}60` : "1px solid var(--color-border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {stage.icon}
                  </div>

                  <div style={{ textAlign: "left" }}>
                    <div
                      style={{
                        fontSize: "0.58rem",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        color: isActive ? stage.color : "var(--color-text-muted)",
                      }}
                    >
                      STAGE 0{idx + 1}
                    </div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        color: isActive ? "#ffffff" : "var(--color-text-secondary)",
                        marginTop: "1px",
                      }}
                    >
                      {stage.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.6rem",
                        color: isActive ? stage.color : "var(--color-text-muted)",
                        fontWeight: 700,
                        marginTop: "1px",
                      }}
                    >
                      ● {isActive ? "INSPECTING" : "CLICK TO VIEW"}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: ACTIVE STAGE DETAIL PANEL (VISIBLE BY DEFAULT ON DESKTOP) */}
          <div
            className="methodology-detail-panel-container"
            style={{
              width: "100%",
              backgroundColor: "rgba(12, 12, 16, 0.95)",
              border: "1px solid var(--color-border-gold)",
              borderRadius: "var(--radius-lg)",
              padding: "2.25rem",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.85)",
              position: "relative",
            }}
          >
            {/* Header metadata */}
            <div
              style={{
                borderBottom: "1px solid var(--color-border-subtle)",
                paddingBottom: "1.25rem",
                marginBottom: "1.5rem",
                transition: "opacity 0.3s ease",
                opacity: isTransitioning ? 0.3 : 1,
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: stages[activeStage].color,
                  marginBottom: "0.3rem",
                }}
              >
                STAGE 0{activeStage + 1} / 05 • DIAGNOSTIC INTERVENTION
              </div>
              <h3 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#ffffff" }}>
                {stages[activeStage].name} -{" "}
                <span style={{ color: stages[activeStage].color }}>{stages[activeStage].subtitle}</span>
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.55,
                  marginTop: "0.5rem",
                }}
              >
                {stages[activeStage].description}
              </p>
            </div>

            {/* 4 VERTICALLY ORIENTED SUBSTANTIALLY DESIGNED DETAIL CARDS (ONE-BY-ONE STAGGERED ENTRANCE) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                {
                  key: "problem",
                  tag: "⚠️ THE PERFORMANCE PROBLEM",
                  tagColor: "var(--color-status-red)",
                  content: stages[activeStage].problem,
                  borderColor: "rgba(239, 68, 68, 0.3)",
                  activeBorderColor: "rgba(239, 68, 68, 0.7)",
                  hoverBg: "rgba(18, 14, 16, 0.95)",
                  shadow: "0 10px 25px rgba(239, 68, 68, 0.18)",
                  iconBg: "rgba(239, 68, 68, 0.15)",
                },
                {
                  key: "whatCNMDoes",
                  tag: "⚡ WHAT CNM SYSTEM LABS DOES",
                  tagColor: "var(--color-gold-bright)",
                  content: stages[activeStage].whatCNMDoes,
                  borderColor: "var(--color-border-gold)",
                  activeBorderColor: "var(--color-gold-bright)",
                  hoverBg: "rgba(22, 20, 14, 0.95)",
                  shadow: "0 10px 25px rgba(240, 201, 75, 0.22)",
                  iconBg: "rgba(240, 201, 75, 0.15)",
                },
                {
                  key: "whatGetsMeasured",
                  tag: "📊 WHAT GETS MEASURED",
                  tagColor: "#38bdf8",
                  content: stages[activeStage].whatGetsMeasured,
                  borderColor: "var(--color-border)",
                  activeBorderColor: "#38bdf8",
                  hoverBg: "rgba(14, 18, 22, 0.95)",
                  shadow: "0 10px 25px rgba(56, 189, 248, 0.18)",
                  iconBg: "rgba(56, 189, 248, 0.15)",
                },
                {
                  key: "whatChanges",
                  tag: "🎯 WHAT CHANGES",
                  tagColor: "var(--color-status-green)",
                  content: stages[activeStage].whatChanges,
                  borderColor: "rgba(34, 197, 94, 0.3)",
                  activeBorderColor: "#22c55e",
                  hoverBg: "rgba(14, 20, 16, 0.95)",
                  shadow: "0 10px 25px rgba(34, 197, 94, 0.18)",
                  iconBg: "rgba(34, 197, 94, 0.15)",
                },
              ].map((card, cIdx) => {
                const isHovered = hoveredCardIdx === cIdx;
                return (
                  <div
                    key={card.key}
                    onMouseEnter={() => setHoveredCardIdx(cIdx)}
                    onMouseLeave={() => setHoveredCardIdx(null)}
                    style={{
                      backgroundColor: isHovered ? card.hoverBg : "rgba(10, 10, 14, 0.75)",
                      border: isHovered ? `1px solid ${card.activeBorderColor}` : `1px solid ${card.borderColor}`,
                      borderRadius: "var(--radius-md)",
                      padding: "1.25rem",
                      transition: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
                      transitionDelay: isTransitioning ? "0ms" : `${cIdx * 90}ms`,
                      opacity: isTransitioning ? 0 : 1,
                      transform: isTransitioning
                        ? "translateY(18px)"
                        : isHovered
                        ? "scale(1.03) translateY(-4px)"
                        : "translateY(0) scale(1)",
                      filter: isTransitioning ? "blur(4px)" : "blur(0px)",
                      boxShadow: isHovered ? card.shadow : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.65rem" }}>
                      {/* Substantially larger icon visual anchor (44px) */}
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "10px",
                          backgroundColor: card.iconBg,
                          border: `1px solid ${card.activeBorderColor}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: `0 0 12px ${card.iconBg}`,
                        }}
                      >
                        <span style={{ fontSize: "1.1rem" }}>{card.tag.split(" ")[0]}</span>
                      </div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          letterSpacing: "0.08em",
                          color: card.tagColor,
                          lineHeight: 1.2,
                        }}
                      >
                        {card.tag.substring(card.tag.indexOf(" ") + 1)}
                      </div>
                    </div>

                    <p style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.5 }}>
                      {card.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rewirePulseAttention {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(240, 201, 75, 0.3);
          }
          50% {
            transform: scale(1.07);
            box-shadow: 0 0 35px rgba(240, 201, 75, 0.7);
          }
        }

        @media (min-width: 992px) {
          .methodology-two-column-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .orbit-system-wrapper {
            transform: scale(0.68);
            margin: -70px auto;
          }
        }
      `}</style>
    </section>
  );
}



