"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function DiagnosticDifferentiatorSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Per-element scroll visibility states
  const [tradInView, setTradInView] = useState(false);
  const [tradVisibleCount, setTradVisibleCount] = useState(0);

  const [cnmInView, setCnmInView] = useState(false);
  const [cnmVisibleCount, setCnmVisibleCount] = useState(0);

  const tradRef = useRef(null);
  const cnmRef = useRef(null);
  const canvasRef = useRef(null);

  // Element-level Scroll Triggers
  useEffect(() => {
    const tradObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTradInView(true);
          tradObs.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );
    if (tradRef.current) tradObs.observe(tradRef.current);

    const cnmObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCnmInView(true);
          cnmObs.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );
    if (cnmRef.current) cnmObs.observe(cnmRef.current);

    return () => {
      tradObs.disconnect();
      cnmObs.disconnect();
    };
  }, []);

  // Staggered arrival for Traditional Guesswork cards (~500ms delay per card)
  useEffect(() => {
    if (!tradInView) return;
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setTradVisibleCount(count);
      if (count >= 5) clearInterval(interval);
    }, 450);
    return () => clearInterval(interval);
  }, [tradInView]);

  // Staggered arrival for CNM Protocol stage cards (~350ms delay per card)
  useEffect(() => {
    if (!cnmInView) return;
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setCnmVisibleCount(count);
      if (count >= 8) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, [cnmInView]);

  // Ambient Full-Section Live Background Canvas
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

    const particles = Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
      isCrimson: Math.random() > 0.5,
    }));

    let t = 0;

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);
      t += 0.004;

      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        50,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      bgGrad.addColorStop(0, "rgba(10, 10, 14, 0.4)");
      bgGrad.addColorStop(1, "#07070a");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle Comparison Grid Lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const step = 80;
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
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.isCrimson ? "rgba(244, 63, 94, 0.22)" : "rgba(240, 201, 75, 0.22)";
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

  const guessworkSteps = [
    { step: "01", text: "STUDY MORE", sub: "More hours, high effort input", status: "NO DIAGNOSIS" },
    { step: "02", text: "MORE CHAPTERS", sub: "Passive content overload", status: "CONTENT SATURATION" },
    { step: "03", text: "MORE TESTS", sub: "Repeated testing without fix", status: "BLIND TESTING" },
    { step: "04", text: "LOW SCORE", sub: "Score ceiling persists", status: "RECURRING LEAK" },
    { step: "05", text: "CONFUSION", sub: "Demoralization & guesswork", status: "SYSTEM FREEZE" },
  ];

  const cnmPipeline = [
    { label: "AUDIT", desc: "Full telemetry scan across 8 performance domains", color: "#38bdf8", dir: "RIGHT" },
    { label: "DIAGNOSE", desc: "Isolate root mark leaks (Focus/Accuracy/Time)", color: "#f43f5e", dir: "LEFT" },
    { label: "PRIORITIZE", desc: "Pinpoint highest-yield rank recovery areas", color: "#f59e0b", dir: "RIGHT" },
    { label: "PLAN", desc: "Generate daily missions & focus protocols", color: "#8b5cf6", dir: "LEFT" },
    { label: "EXECUTE", desc: "Structured daily work with zero friction", color: "#f0c94b", dir: "RIGHT" },
    { label: "TEST", desc: "Timed pressure examination to verify survival", color: "#06b6d4", dir: "LEFT" },
    { label: "ANALYZE", desc: "Autopsy mistakes into 8 forensic categories", color: "#a855f7", dir: "RIGHT" },
    { label: "ADAPT", desc: "Auto-recalibrate missions based on data", color: "#22c55e", dir: "LEFT" },
  ];

  const AUDIT_URL = "https://cnm-online-audit.vercel.app/";

  return (
    <section
      id="differentiator"
      style={{
        padding: "6rem 0",
        backgroundColor: "#07070a",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Full-Section Live Ambient Background Canvas */}
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
          eyebrow="SYSTEM COMPARISON"
          title="Traditional Guesswork vs. CNM System Labs Protocol"
          description="A sequential comparison: Discover how traditional study loops fail, and how CNM System Labs turns performance diagnosis into measurable rank growth."
          center={true}
        />

        {/* VERTICAL TOP-TO-BOTTOM SYSTEM COMPARISON STORY */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem", marginTop: "3.5rem" }}>
          
          {/* SYSTEM 1: TRADITIONAL GUESSWORK (TOP BLOCK - COMPACT HEIGHT) */}
          <div
            ref={tradRef}
            style={{
              backgroundColor: "rgba(18, 12, 14, 0.94)",
              border: "1px solid rgba(244, 63, 94, 0.35)",
              borderRadius: "var(--radius-lg)",
              padding: "1.5rem 1.75rem",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
              opacity: tradInView ? 1 : 0,
              transform: tradInView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.98)",
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "0.85rem",
                marginBottom: "1.25rem",
                borderBottom: "1px solid rgba(244, 63, 94, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    backgroundColor: "#f43f5e",
                    boxShadow: "0 0 12px #f43f5e",
                  }}
                />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#f43f5e", letterSpacing: "-0.01em", margin: 0 }}>
                  TRADITIONAL GUESSWORK LOOP
                </h3>
              </div>
              <span
                style={{
                  fontSize: "0.68rem",
                  color: "#f43f5e",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  backgroundColor: "rgba(244, 63, 94, 0.12)",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "4px",
                  border: "1px solid rgba(244, 63, 94, 0.3)",
                }}
              >
                UNRESOLVED FAILURE CYCLE
              </span>
            </div>

            {/* Status Warning Banner */}
            <div
              style={{
                backgroundColor: "rgba(10, 8, 10, 0.95)",
                border: "1px solid rgba(244, 63, 94, 0.4)",
                borderLeft: "4px solid #f43f5e",
                borderRadius: "var(--radius-sm)",
                padding: "0.75rem 1.25rem",
                marginBottom: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", color: "#f43f5e" }}>
                  SYSTEM DIAGNOSIS STATUS:
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#ffffff", marginTop: "0.15rem" }}>
                  NO ROOT CAUSE FOUND
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>

            {/* Traditional Cards - Tightened Gaps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {guessworkSteps.map((s, idx) => {
                const isCardVisible = tradVisibleCount >= idx + 1;

                return (
                  <div
                    key={s.step}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.75rem 1.25rem",
                      backgroundColor: "rgba(14, 14, 18, 0.8)",
                      border: "1px solid rgba(244, 63, 94, 0.2)",
                      borderRadius: "var(--radius-md)",
                      opacity: isCardVisible ? 1 : 0,
                      transform: isCardVisible ? "translateX(0)" : "translateX(-30px)",
                      transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          color: "#f43f5e",
                          fontFamily: "monospace",
                        }}
                      >
                        {s.step}
                      </span>
                      <div>
                        <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#ffffff" }}>
                          {s.text}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                          {s.sub}
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "#f43f5e",
                        letterSpacing: "0.05em",
                      }}
                    >
                      STATUS: {s.status}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom Note */}
            <div
              style={{
                marginTop: "1.25rem",
                paddingTop: "0.85rem",
                borderTop: "1px dashed rgba(244, 63, 94, 0.25)",
                textAlign: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#f43f5e",
                letterSpacing: "0.08em",
              }}
            >
              SYSTEM REMAINS TRAPPED IN LOOP UNTIL DIAGNOSTIC INTERVENTION
            </div>
          </div>

          {/* TRANSITION ARROW BETWEEN SYSTEMS */}
          <div style={{ textAlign: "center", color: "var(--color-gold-bright)", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.15em" }}>
            ↓ SCROLL TO DISCOVER THE CNM PROTOCOL ↓
          </div>

          {/* SYSTEM 2: CNM SYSTEM LABS PROTOCOL (BOTTOM BLOCK) */}
          <div
            ref={cnmRef}
            style={{
              backgroundColor: "rgba(10, 12, 16, 0.94)",
              border: "1px solid var(--color-border-gold)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
              opacity: cnmInView ? 1 : 0,
              transform: cnmInView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.98)",
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "1.25rem",
                marginBottom: "2rem",
                borderBottom: "1px solid var(--color-border-gold)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-gold-bright)",
                    boxShadow: "0 0 14px var(--color-gold-bright)",
                  }}
                />
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-gold-bright)", letterSpacing: "-0.01em", margin: 0 }}>
                  CNM SYSTEM LABS PROTOCOL
                </h3>
              </div>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "var(--color-gold-bright)",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "4px",
                  border: "1px solid var(--color-border-gold)",
                }}
              >
                8-STAGE PIPELINE
              </span>
            </div>

            {/* Status Active Banner */}
            <div
              style={{
                backgroundColor: "rgba(8, 12, 10, 0.95)",
                border: "1px solid var(--color-border-gold)",
                borderLeft: "4px solid var(--color-status-green)",
                borderRadius: "var(--radius-sm)",
                padding: "1.1rem 1.5rem",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.12em", color: "var(--color-status-green)" }}>
                  DIAGNOSTIC PIPELINE STATUS:
                </div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "#ffffff", marginTop: "0.2rem" }}>
                  ACTIVE SYSTEM DIAGNOSIS & RECOVERY ENGINE
                </div>
              </div>
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--color-gold-bright)" }}>
                8 STAGES
              </span>
            </div>

            {/* Pipeline Stage Cards - Alternating Entrance Directions */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {cnmPipeline.map((item, idx) => {
                const isCardVisible = cnmVisibleCount >= idx + 1;
                const isHovered = hoveredCard === idx;
                const initialTransform = item.dir === "RIGHT" ? "translateX(40px)" : "translateX(-40px)";

                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      padding: "1.25rem",
                      backgroundColor: isHovered ? "rgba(212, 175, 55, 0.12)" : "rgba(14, 16, 22, 0.8)",
                      border: isHovered ? `1px solid ${item.color}` : "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "var(--radius-md)",
                      position: "relative",
                      opacity: isCardVisible ? 1 : 0,
                      transform: isCardVisible
                        ? isHovered
                          ? "scale(1.03) translateY(-3px)"
                          : "translate(0, 0)"
                        : initialTransform,
                      transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border 0.3s ease, boxShadow 0.3s ease",
                      boxShadow: isHovered ? `0 8px 25px ${item.color}25` : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: item.color }} />
                      <span style={{ fontSize: "0.88rem", fontWeight: 800, color: isHovered ? "#ffffff" : item.color, letterSpacing: "0.05em" }}>
                        STAGE 0{idx + 1}. {item.label}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", lineHeight: 1.45, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA Button with Colored Button Scale Hover */}
            <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
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
                  padding: "0.95rem 2.25rem",
                  backgroundColor: "var(--color-gold-bright)",
                  color: "#050505",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(212, 175, 55, 0.35)",
                }}
              >
                RUN DIAGNOSTIC PIPELINE AUDIT →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
