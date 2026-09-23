"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function MethodologySection() {
  const [activeStage, setActiveStage] = useState(0);
  const [hasUserClicked, setHasUserClicked] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredCardIdx, setHoveredCardIdx] = useState(null);
  const [hoveredNodeIdx, setHoveredNodeIdx] = useState(null);
  const [inView, setInView] = useState(false);
  const [visibleOrbitCards, setVisibleOrbitCards] = useState(0);

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  // Scroll Trigger via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Staggered Scroll Entrance for the 5 Orbit Stage Cards (One by one: 01 -> 02 -> 03 -> 04 -> 05)
  useEffect(() => {
    if (!inView) return;

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setVisibleOrbitCards(count);
      if (count >= 5) clearInterval(interval);
    }, 150); // 150ms stagger per card

    return () => clearInterval(interval);
  }, [inView]);

  // Handle stage node selection: User click PERMANENTLY STOPS automatic rotation timer
  const selectStage = (idx) => {
    setHasUserClicked(true);
    if (idx === activeStage) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveStage(idx);
      setIsTransitioning(false);
    }, 200);
  };

  // Automatic stage rotation BEFORE user interaction ONLY. Permanently stops upon user click.
  useEffect(() => {
    if (hasUserClicked) return; // Permanently disabled once user clicks any stage card

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveStage((prev) => (prev + 1) % 5);
        setIsTransitioning(false);
      }, 200);
    }, 6000);

    return () => clearInterval(timer);
  }, [hasUserClicked]);

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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0c94b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
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

        {/* TWO-COLUMN METHODOLOGY LAYOUT SYSTEM */}
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
          {/* LEFT COLUMN: SYSTEM ORBIT CYCLE WITH COMPACT ELEGANT STAGE CARDS */}
          <div
            className="orbit-system-wrapper"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "560px",
              height: "560px",
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
              viewBox="0 0 560 560"
              style={{ position: "absolute", inset: 0, overflow: "visible" }}
            >
              {/* Outer Dashed Orbit Ring */}
              <circle
                cx="280"
                cy="280"
                r="205"
                fill="none"
                stroke="rgba(212, 175, 55, 0.18)"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              {/* Inner Secondary Ring */}
              <circle
                cx="280"
                cy="280"
                r="135"
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1"
              />

              {/* Active Glowing Arc Segment */}
              <circle
                cx="280"
                cy="280"
                r="205"
                fill="none"
                stroke="url(#methodologyOrbitGrad)"
                strokeWidth="4"
                strokeDasharray="1288"
                strokeDashoffset={1288 - 257.6 * (activeStage + 1)}
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "280px 280px",
                  transition: "stroke-dashoffset 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              {/* Orbit Signal Particle */}
              <circle cx="280" cy="75" r="4.5" fill="#f0c94b">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 280 280"
                  to="360 280 280"
                  dur="18s"
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
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                backgroundColor: "rgba(14, 14, 18, 0.96)",
                border: "2px solid var(--color-border-gold)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "1.1rem",
                boxShadow: "0 0 45px rgba(212, 175, 55, 0.22), inset 0 0 20px rgba(0, 0, 0, 0.8)",
                zIndex: 3,
                transition: "all 0.4s ease",
              }}
            >
              <span style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.15em", color: "var(--color-gold-bright)" }}>
                CNM SYSTEM LOOP
              </span>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginTop: "4px",
                  transition: "opacity 0.2s ease",
                  opacity: isTransitioning ? 0.3 : 1,
                }}
              >
                {stages[activeStage].name}
              </div>
              <span
                style={{
                  fontSize: "0.65rem",
                  color: stages[activeStage].color,
                  fontWeight: 700,
                  marginTop: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>●</span> {hasUserClicked ? "USER SELECTED" : `STAGE 0${activeStage + 1} ACTIVE`}
              </span>
            </div>

            {/* 5 STAGE CARDS (Compact 188px x 82px for optimal orbital proportion) */}
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              const isHoveredNode = hoveredNodeIdx === idx;
              const isVisibleOnScroll = idx < visibleOrbitCards;

              // Radial math around center (280, 280) with radius 205
              const radius = 205;
              const angleRad = (stage.angle * Math.PI) / 180;
              // Compact Card dimensions 188px x 82px -> half dimensions: 94px x 41px
              const x = 280 + radius * Math.cos(angleRad) - 94;
              const y = 280 + radius * Math.sin(angleRad) - 41;

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
                    width: "188px",
                    height: "82px",
                    borderRadius: "10px",
                    backgroundColor: isActive
                      ? "rgba(22, 22, 28, 0.98)"
                      : isHoveredNode
                      ? "rgba(18, 18, 24, 0.94)"
                      : "rgba(12, 12, 16, 0.90)",
                    border: isActive
                      ? `2px solid ${stage.color}`
                      : "1px solid var(--color-border-subtle)",
                    boxShadow: isActive
                      ? `0 0 22px ${stage.color}40, 0 6px 18px rgba(0,0,0,0.8)`
                      : isHoveredNode
                      ? "0 6px 16px rgba(0, 0, 0, 0.8)"
                      : "0 4px 12px rgba(0, 0, 0, 0.6)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "0.6rem 0.75rem",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    zIndex: 4,
                    opacity: isVisibleOnScroll ? 1 : 0,
                    transform: isVisibleOnScroll
                      ? isActive
                        ? "scale(1.05)"
                        : isHoveredNode
                        ? "scale(1.03)"
                        : "scale(1)"
                      : "scale(0.85) translateY(12px)",
                  }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "7px",
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
                        fontSize: "0.56rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        color: isActive ? stage.color : "var(--color-text-muted)",
                      }}
                    >
                      STAGE 0{idx + 1}
                    </div>
                    <div
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 800,
                        color: isActive ? "#ffffff" : "var(--color-text-secondary)",
                        marginTop: "1px",
                      }}
                    >
                      {stage.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.58rem",
                        color: isActive ? stage.color : "var(--color-text-muted)",
                        fontWeight: 700,
                        marginTop: "1px",
                      }}
                    >
                      ● {isActive ? "INSPECTING" : "SELECT"}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: ACTIVE STAGE DETAIL PANEL (STABLE CONTAINER) */}
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
                transition: "opacity 0.25s ease",
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
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff" }}>
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

            {/* 4 DETAIL CARDS WITH ALTERNATING ENTRANCE DIRECTIONS (Left / Right / Left / Right) */}
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
                  direction: "from-left",
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
                  direction: "from-right",
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
                  direction: "from-left",
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
                  direction: "from-right",
                },
              ].map((card, cIdx) => {
                const isHovered = hoveredCardIdx === cIdx;
                const translateXVal = card.direction === "from-left" ? "-18px" : "18px";

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
                        ? `translateX(${translateXVal}) translateY(8px)`
                        : isHovered
                        ? "scale(1.03) translateY(-4px)"
                        : "translateX(0) translateY(0) scale(1)",
                      filter: isTransitioning ? "blur(4px)" : "blur(0px)",
                      boxShadow: isHovered ? card.shadow : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.65rem" }}>
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
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
                          fontSize: "0.68rem",
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



