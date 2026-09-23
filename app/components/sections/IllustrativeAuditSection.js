"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function IllustrativeAuditSection() {
  const [gainVal, setGainVal] = useState(0); // Animated counter for +14 MARKS
  const [hoveredCard, setHoveredCard] = useState(null);

  // Per-element scroll observers
  const [card1Visible, setCard1Visible] = useState(false);
  const [card2Visible, setCard2Visible] = useState(false);
  const [card3Visible, setCard3Visible] = useState(false);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const canvasRef = useRef(null);

  // Element-level Scroll Observers for Cards 01, 02, 03
  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCard1Visible(true);
          obs1.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );
    if (card1Ref.current) obs1.observe(card1Ref.current);

    const obs2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCard2Visible(true);
          obs2.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );
    if (card2Ref.current) obs2.observe(card2Ref.current);

    const obs3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCard3Visible(true);
          obs3.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );
    if (card3Ref.current) obs3.observe(card3Ref.current);

    return () => {
      obs1.disconnect();
      obs2.disconnect();
      obs3.disconnect();
    };
  }, []);

  // Gain Count-up (+00 to +14 MARKS) triggered ONLY when Card 03 becomes visible on scroll
  useEffect(() => {
    if (!card3Visible) return;

    let start = 0;
    const target = 14;
    const interval = setInterval(() => {
      start += 2;
      if (start >= target) {
        setGainVal(target);
        clearInterval(interval);
      } else {
        setGainVal(start);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [card3Visible]);

  // Ascending Data Trajectories Live Canvas Background
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

    const trajectoryLines = [
      { startX: width * 0.1, startY: height * 0.8, endX: width * 0.4, endY: height * 0.3, progress: 0 },
      { startX: width * 0.35, startY: height * 0.85, endX: width * 0.75, endY: height * 0.25, progress: 0.3 },
      { startX: width * 0.6, startY: height * 0.75, endX: width * 0.9, endY: height * 0.2, progress: 0.6 },
    ];

    const dataPoints = Array.from({ length: 15 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vy: -(Math.random() * 0.4 + 0.2),
      alpha: Math.random() * 0.35 + 0.15,
      radius: Math.random() * 2 + 1,
    }));

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(212, 175, 55, 0.03)";
      ctx.lineWidth = 1;
      const step = 65;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        trajectoryLines.forEach((line) => {
          line.progress += 0.004;
          if (line.progress > 1) line.progress = 0;

          ctx.beginPath();
          ctx.moveTo(line.startX, line.startY);
          ctx.lineTo(line.endX, line.endY);
          ctx.strokeStyle = "rgba(56, 189, 248, 0.08)";
          ctx.setLineDash([4, 6]);
          ctx.stroke();
          ctx.setLineDash([]);

          const px = line.startX + (line.endX - line.startX) * line.progress;
          const py = line.startY + (line.endY - line.startY) * line.progress;
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#f0c94b";
          ctx.shadowColor = "#f0c94b";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        dataPoints.forEach((p) => {
          p.y += p.vy;
          if (p.y < 0) p.y = height;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(240, 201, 75, ${p.alpha})`;
          ctx.fill();
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

  const metrics = [
    { label: "Overall Score Index", val: 60, target: 74, color: "var(--color-gold-bright)", leak: false },
    { label: "Focus Endurance", val: 38, target: 75, color: "var(--color-status-red)", leak: true },
    { label: "Solving Accuracy", val: 50, target: 78, color: "var(--color-status-amber)", leak: true },
    { label: "Revision Recall", val: 78, target: 88, color: "var(--color-status-green)", leak: false },
    { label: "Time Allocation", val: 68, target: 82, color: "var(--color-gold-bright)", leak: false },
    { label: "Exam Confidence", val: 68, target: 80, color: "var(--color-gold-bright)", leak: false },
  ];

  const interventions = [
    "Structured 50-minute deep-work focus blocks",
    "Digital distraction shielding protocol",
    "Daily mission panel execution tracking",
    "Categorized mock-test error autopsy",
    "Spaced-repetition formula recall interval",
    "Reset engine for missed daily targets",
  ];

  const AUDIT_URL = "https://cnm-online-audit.vercel.app/";

  return (
    <section
      id="illustrative-audit"
      style={{
        padding: "6rem 0",
        backgroundColor: "#060608",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ascending Data Trajectories Live Canvas Background */}
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
          eyebrow="CASE STUDY ARCHITECTURE"
          title="Illustrative Student Performance Audit"
          description="How the diagnostic system identifies root-cause leaks and constructs a targeted intervention plan."
          center={true}
        />

        {/* Disclaimer Ribbon */}
        <div
          style={{
            backgroundColor: "rgba(212, 175, 55, 0.08)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-sm)",
            padding: "0.6rem 1.25rem",
            marginBottom: "2.5rem",
            textAlign: "center",
            fontSize: "0.78rem",
            color: "var(--color-gold-bright)",
            fontWeight: 600,
          }}
        >
          NOTE: Illustrative example based on real diagnostic data models - actual results vary by student, starting point, and daily execution.
        </div>

        {/* Main Case Study UI Card */}
        <div
          style={{
            backgroundColor: "rgba(14, 14, 18, 0.95)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "2.5rem",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {/* Left Column: Starting Metrics Baseline */}
            <div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "var(--color-text-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                INITIAL TELEMETRY SCAN
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff", marginBottom: "1.5rem" }}>
                Starting Performance Baseline
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {metrics.map((m) => (
                  <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                      <span style={{ fontWeight: 600, color: "var(--color-text)" }}>{m.label}</span>
                      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                        {m.leak && (
                          <span
                            style={{
                              fontSize: "0.65rem",
                              fontWeight: 800,
                              color: m.color,
                              backgroundColor: "rgba(255,255,255,0.03)",
                              padding: "0.1rem 0.4rem",
                              borderRadius: "3px",
                              border: `1px solid ${m.color}`,
                            }}
                          >
                            PRIMARY LEAK
                          </span>
                        )}
                        <span style={{ fontWeight: 800, color: m.color }}>{m.val}%</span>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "7px",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${m.val}%`,
                          backgroundColor: m.color,
                          borderRadius: "4px",
                          transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 3 Sequenced Diagnostic Cards with Element-Level Viewport Triggers */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1.5rem" }}>
              
              {/* Card 01: Primary Diagnosis (Enters from LEFT when user reaches it) */}
              <div
                ref={card1Ref}
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: hoveredCard === 0 ? "rgba(18, 10, 12, 0.95)" : "rgba(10, 10, 12, 0.8)",
                  border: hoveredCard === 0 ? "1px solid var(--color-status-red)" : "1px solid rgba(239, 68, 68, 0.4)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  transform: card1Visible
                    ? (hoveredCard === 0 ? "scale(1.03) translateY(-2px)" : "translateX(0) scale(1)")
                    : "translateX(-60px) scale(0.97)",
                  opacity: card1Visible ? 1 : 0,
                  boxShadow: hoveredCard === 0 ? "0 10px 30px rgba(239, 68, 68, 0.22)" : "none",
                  transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-status-red)" }}>
                  PRIMARY SYSTEM DIAGNOSIS
                </div>
                <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginTop: "4px" }}>
                  FOCUS & ACCURACY ENDURANCE LEAK
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>
                  Student demonstrates high revision recall (78%), confirming concepts are learned, but loses focus at minute 35, triggering a cascade of accuracy errors.
                </p>
              </div>

              {/* Card 02: Recommended Intervention (Enters from RIGHT when user reaches it) */}
              <div
                ref={card2Ref}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: hoveredCard === 1 ? "rgba(22, 20, 14, 0.95)" : "rgba(10, 10, 12, 0.8)",
                  border: hoveredCard === 1 ? "1px solid var(--color-gold-bright)" : "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  transform: card2Visible
                    ? (hoveredCard === 1 ? "scale(1.03) translateY(-2px)" : "translateX(0) scale(1)")
                    : "translateX(60px) scale(0.97)",
                  opacity: card2Visible ? 1 : 0,
                  boxShadow: hoveredCard === 1 ? "0 10px 30px rgba(240, 201, 75, 0.22)" : "none",
                  transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-gold-bright)" }}>
                  RECOMMENDED INTERVENTION PROTOCOL
                </div>
                <ul
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.5rem",
                    marginTop: "0.75rem",
                    paddingLeft: "1rem",
                    fontSize: "0.82rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {interventions.map((item) => (
                    <li key={item} style={{ color: "var(--color-text)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 03: Score Trajectory Summary (Enters from LEFT when user reaches it, triggers count-up) */}
              <div
                ref={card3Ref}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: hoveredCard === 2 ? "rgba(240, 201, 75, 0.15)" : "rgba(240, 201, 75, 0.08)",
                  border: "1px solid var(--color-gold-bright)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  transform: card3Visible
                    ? (hoveredCard === 2 ? "scale(1.03) translateY(-2px)" : "translateX(0) scale(1)")
                    : "translateX(-60px) scale(0.97)",
                  opacity: card3Visible ? 1 : 0,
                  boxShadow: hoveredCard === 2 ? "0 10px 30px rgba(240, 201, 75, 0.3)" : "0 0 15px rgba(240, 201, 75, 0.1)",
                  transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
                      SCORE TRANSFORMATION POTENTIAL
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginTop: "4px" }}>
                      <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff" }}>CURRENT: 60</span>
                      <span style={{ fontSize: "1.1rem", color: "var(--color-gold-bright)" }}>➔</span>
                      <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--color-gold-bright)" }}>TARGET: 74</span>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgba(34, 197, 94, 0.15)",
                      border: "1px solid var(--color-status-green)",
                      color: "var(--color-status-green)",
                      padding: "0.5rem 1rem",
                      borderRadius: "var(--radius-md)",
                      fontWeight: 800,
                      fontSize: "1rem",
                      boxShadow: gainVal === 14 ? "0 0 15px rgba(34, 197, 94, 0.4)" : "none",
                      transition: "box-shadow 0.4s ease",
                    }}
                  >
                    +{String(gainVal).padStart(2, "0")} MARKS
                  </div>
                </div>

                {/* Synchronized Animated Progress Bar & Signal Pulse */}
                <div style={{ width: "100%", height: "6px", backgroundColor: "rgba(255, 255, 255, 0.08)", borderRadius: "3px", overflow: "hidden", position: "relative" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${(gainVal / 14) * 100}%`,
                      background: "linear-gradient(90deg, #f0c94b, #22c55e)",
                      borderRadius: "3px",
                      transition: "width 0.15s linear",
                      boxShadow: "0 0 10px #22c55e",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-filled"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.95rem 2.25rem",
              backgroundColor: "var(--color-gold-bright)",
              color: "#050505",
              fontWeight: 800,
              fontSize: "0.95rem",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(212, 175, 55, 0.4)",
            }}
          >
            RUN YOUR OWN PERFORMANCE AUDIT →
          </a>
        </div>
      </div>
    </section>
  );
}
