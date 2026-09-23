"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function VisualLearningSection() {
  const [hoveredCardIdx, setHoveredCardIdx] = useState(null);
  const canvasRef = useRef(null);

  const pillars = [
    {
      step: "01",
      title: "VISUALIZE",
      subtitle: "Intuitive Concept Foundations",
      desc: "3D animated derivations and spatial concept models for complex Physics, Chemistry, and Mathematics topics.",
      color: "#f0c94b",
      dir: "LEFT",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="#f0c94b" fill="rgba(240, 201, 75, 0.15)" />
          <polyline points="2 17 12 22 22 17" stroke="#38bdf8" />
          <polyline points="2 12 12 17 22 12" stroke="#f0c94b" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "REINFORCE",
      subtitle: "Targeted Problem Sets",
      desc: "Convert visual understanding immediately into multi-concept solving capability through structured problem sets.",
      color: "#38bdf8",
      dir: "RIGHT",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" stroke="#38bdf8" fill="rgba(56, 189, 248, 0.12)" />
          <circle cx="12" cy="12" r="6" stroke="#f0c94b" />
          <circle cx="12" cy="12" r="2" fill="#22c55e" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "TEST",
      subtitle: "Timed Pressure Testing",
      desc: "Verify whether concept comprehension survives under strict exam clock conditions without hesitation.",
      color: "#f59e0b",
      dir: "LEFT",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" stroke="#f59e0b" fill="rgba(245, 158, 11, 0.12)" />
          <polyline points="12 6 12 12 16 14" stroke="#ffffff" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "DIAGNOSE",
      subtitle: "Systemic Leak Analysis",
      desc: "Identify precisely what broke during testing so the next iteration fixes the exact root cause.",
      color: "#a855f7",
      dir: "RIGHT",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" stroke="#a855f7" fill="rgba(168, 85, 247, 0.12)" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#a855f7" />
          <line x1="11" y1="8" x2="11" y2="11" stroke="#38bdf8" />
          <line x1="11" y1="11" x2="14" y2="11" stroke="#38bdf8" />
        </svg>
      ),
    },
  ];

  // Element-level scroll observer
  const [visibleItems, setVisibleItems] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((el, index) => {
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

  // Concept Mapping Field Live Background Canvas
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

    // Slow expanding concept rings
    const conceptRings = [
      { x: width * 0.25, y: height * 0.4, maxR: 120, r: 20, alpha: 0.04 },
      { x: width * 0.75, y: height * 0.6, maxR: 150, r: 40, alpha: 0.035 },
    ];

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);

      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        40,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      bgGrad.addColorStop(0, "rgba(8, 10, 14, 0.4)");
      bgGrad.addColorStop(1, "#07070a");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(212, 175, 55, 0.02)";
      ctx.lineWidth = 1;
      const step = 75;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        conceptRings.forEach((ring) => {
          ring.r += 0.2;
          if (ring.r > ring.maxR) ring.r = 10;
          ctx.beginPath();
          ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(240, 201, 75, ${ring.alpha})`;
          ctx.setLineDash([6, 10]);
          ctx.stroke();
          ctx.setLineDash([]);
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

  return (
    <section
      id="visual-learning"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Concept Mapping Field Live Background Canvas */}
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
          eyebrow="CONCEPTUAL COMPREHENSION LAYER"
          title="Understanding Comes Before Optimization."
          description="Visual concept mastery forms the bedrock layer of CNM System Labs. You cannot optimize speed and accuracy on concepts you have merely memorized."
          center={true}
        />

        {/* Pipeline Sequence Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2.5rem",
            flexWrap: "wrap",
            fontSize: "0.82rem",
            fontWeight: 800,
            color: "var(--color-gold-bright)",
            letterSpacing: "0.1em",
          }}
        >
          <span>UNDERSTAND</span> ➔ <span>CONNECT</span> ➔ <span>VISUALIZE</span> ➔ <span>SOLVE</span> ➔ <span>RETAIN</span>
        </div>

        {/* 4 Pillars Cards - Element-level Scroll Observer & Custom SVG Icons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {pillars.map((p, idx) => {
            const isVisible = !!visibleItems[idx];
            const isHovered = hoveredCardIdx === idx;
            const initialTransform = p.dir === "LEFT" ? "translateX(-60px) translateY(15px) scale(0.97)" : "translateX(60px) translateY(15px) scale(0.97)";

            return (
              <div
                key={p.step}
                ref={(el) => (cardRefs.current[idx] = el)}
                onMouseEnter={() => setHoveredCardIdx(idx)}
                onMouseLeave={() => setHoveredCardIdx(null)}
                style={{
                  backgroundColor: isHovered ? "rgba(18, 20, 28, 0.96)" : "var(--color-surface)",
                  border: isHovered ? `1px solid ${p.color}` : "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.25rem",
                  position: "relative",
                  boxShadow: isHovered ? `0 12px 35px ${p.color}25` : "0 8px 25px rgba(0, 0, 0, 0.6)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? isHovered
                      ? "scale(1.03) translateY(-2px)"
                      : "translate(0, 0) scale(1)"
                    : initialTransform,
                  transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), border 0.3s ease, boxShadow 0.3s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        padding: "0.6rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: `${p.color}15`,
                        border: `1px solid ${p.color}35`,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {p.icon}
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        color: p.color,
                        backgroundColor: `${p.color}15`,
                        padding: "0.25rem 0.6rem",
                        borderRadius: "4px",
                      }}
                    >
                      STEP {p.step}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.3rem" }}>
                    {p.title}
                  </h3>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: p.color, marginBottom: "0.85rem" }}>
                    {p.subtitle}
                  </div>

                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.55, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: "0.85rem",
                    borderTop: "1px solid var(--color-border-subtle)",
                    fontSize: "0.72rem",
                    color: "var(--color-status-green)",
                    fontWeight: 700,
                  }}
                >
                  ● Integrated with Physics, Chemistry & Math
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
