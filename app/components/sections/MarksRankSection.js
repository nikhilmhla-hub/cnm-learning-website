"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function MarksRankSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const canvasRef = useRef(null);

  const chainSteps = [
    { num: "01", name: "FOCUS", desc: "Focus endurance & study habits", detail: "Sustained concentration without digital distraction or task-switching friction.", dir: "LEFT", color: "#f0c94b" },
    { num: "02", name: "LEARNING", desc: "Visual concept comprehension", detail: "Deep spatial & physical intuition instead of brittle formula memorization.", dir: "RIGHT", color: "#38bdf8" },
    { num: "03", name: "ACCURACY", desc: "First-attempt solving precision", detail: "Eliminating careless calculation slips & misread question constraint errors.", dir: "LEFT", color: "#f43f5e" },
    { num: "04", name: "TEST PERFORMANCE", desc: "Time management under exam pressure", detail: "Pacing strategy, question selection discipline & exam stress control.", dir: "RIGHT", color: "#f59e0b" },
    { num: "05", name: "MARKS", desc: "Raw score output on test paper", detail: "Direct numerical score resulting from preceding behavior & execution stages.", dir: "LEFT", color: "#8b5cf6" },
    { num: "06", name: "CONSISTENCY", desc: "Repeatable test-to-test stability", detail: "Predictable score performance across varying difficulty levels & mock series.", dir: "RIGHT", color: "#06b6d4" },
    { num: "07", name: "RANK TRAJECTORY", desc: "Expected competitive standings", detail: "Translating consistent test scores into top percentile competitive rank position.", dir: "LEFT", color: "#22c55e" },
  ];

  // Per-item scroll observer hook for element-level scroll trigger
  const [visibleItems, setVisibleItems] = useState({});
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
            obs.disconnect(); // Triggers ONCE
          }
        },
        { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Vertical Data-Flow Field Canvas Background
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

    // Vertical flow particles
    const flowParticles = Array.from({ length: 22 }, () => ({
      x: width * 0.5 + (Math.random() - 0.5) * (width * 0.7),
      y: Math.random() * height,
      vy: Math.random() * 0.8 + 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? "rgba(240, 201, 75, 0.25)" : "rgba(56, 189, 248, 0.25)",
    }));

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);

      // Dark radial background overlay
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        40,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      bgGrad.addColorStop(0, "rgba(10, 10, 14, 0.4)");
      bgGrad.addColorStop(1, "#050505");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Vertical Flow Rail Grid
      ctx.strokeStyle = "rgba(212, 175, 55, 0.02)";
      ctx.lineWidth = 1;
      const step = 80;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Vertical Flowing Stream Particles
      if (!prefersReducedMotion) {
        flowParticles.forEach((p) => {
          p.y += p.vy;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
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

  const AUDIT_URL = "https://cnm-online-audit.vercel.app/";

  return (
    <section
      id="results"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Vertical Data-Flow Live Background Canvas */}
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
          eyebrow="PERFORMANCE CAUSALITY"
          title="Marks Are a Number. Rank Is the Consequence."
          description="CNM System Labs does not merely count study hours. We optimize the entire causal sequence from daily focus habits to final competitive rank."
          center={true}
        />

        {/* VERTICAL DIAGNOSTIC CAUSALITY SEQUENCE STORY */}
        <div
          style={{
            maxWidth: "780px",
            margin: "3.5rem auto 0 auto",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Vertical Connecting Rail Line */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "2px",
              background: "linear-gradient(180deg, var(--color-gold-bright), #38bdf8, #f43f5e, #22c55e)",
              opacity: 0.35,
              zIndex: 0,
            }}
          />

          {chainSteps.map((step, idx) => {
            const isVisible = !!visibleItems[idx];
            const isHovered = hoveredIdx === idx;
            const initialTransform = step.dir === "LEFT" ? "translateX(-60px) translateY(12px) scale(0.97)" : "translateX(60px) translateY(12px) scale(0.97)";

            return (
              <div
                key={step.num}
                ref={(el) => (itemRefs.current[idx] = el)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  backgroundColor: isHovered ? "rgba(18, 20, 28, 0.96)" : "rgba(10, 12, 16, 0.92)",
                  border: isHovered ? `1px solid ${step.color}` : "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem 2rem",
                  position: "relative",
                  zIndex: 2,
                  backdropFilter: "blur(10px)",
                  boxShadow: isHovered ? `0 12px 35px ${step.color}30` : "0 10px 30px rgba(0, 0, 0, 0.6)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? isHovered
                      ? "scale(1.03) translateY(-3px)"
                      : "translate(0, 0) scale(1)"
                    : initialTransform,
                  transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), border 0.3s ease, boxShadow 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 900,
                      color: step.color,
                      fontFamily: "monospace",
                      backgroundColor: `${step.color}15`,
                      border: `1px solid ${step.color}40`,
                      padding: "0.4rem 0.75rem",
                      borderRadius: "6px",
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff", margin: "0 0 0.25rem 0", letterSpacing: "-0.01em" }}>
                      {step.name}
                    </h4>
                    <div style={{ fontSize: "0.88rem", fontWeight: 700, color: step.color, marginBottom: "0.35rem" }}>
                      {step.desc}
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.45 }}>
                      {step.detail}
                    </p>
                  </div>
                </div>

                <div style={{ flexShrink: 0, textAlign: "right" }}>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      color: step.color,
                      letterSpacing: "0.08em",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "4px",
                      border: `1px solid ${step.color}50`,
                    }}
                  >
                    CAUSAL STEP {step.num}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
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
            OPTIMIZE YOUR CAUSAL RANK TRAJECTORY →
          </a>
        </div>
      </div>
    </section>
  );
}
