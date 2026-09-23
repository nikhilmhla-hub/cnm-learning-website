"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function BlueprintSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [cardsInView, setCardsInView] = useState(false);
  const [visibleCardsCount, setVisibleCardsCount] = useState(0);

  const cardsRef = useRef(null);
  const canvasRef = useRef(null);

  // Element-level Scroll Observer for Cards Container
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Staggered Card Entrance Trigger (~450ms delay per card)
  useEffect(() => {
    if (!cardsInView) return;

    let count = 0;
    const timer = setInterval(() => {
      count += 1;
      setVisibleCardsCount(count);
      if (count >= 4) clearInterval(timer);
    }, 450);

    return () => clearInterval(timer);
  }, [cardsInView]);

  // Performance Trajectory Engine Canvas Background
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

    const trajectoryCurve = [
      { x: width * 0.05, y: height * 0.82 },
      { x: width * 0.28, y: height * 0.68 },
      { x: width * 0.55, y: height * 0.45 },
      { x: width * 0.78, y: height * 0.25 },
      { x: width * 0.95, y: height * 0.12 },
    ];

    const milestones = [
      { x: width * 0.28, y: height * 0.68, label: "DAY 30 // BASELINE RECOVERY", pulseR: 0 },
      { x: width * 0.55, y: height * 0.45, label: "DAY 60 // ACCELERATION", pulseR: 0 },
      { x: width * 0.78, y: height * 0.25, label: "DAY 90 // RANK PUSH", pulseR: 0 },
    ];

    let signalProgress = 0;

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
      bgGrad.addColorStop(0, "rgba(10, 12, 16, 0.4)");
      bgGrad.addColorStop(1, "#050505");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(212, 175, 55, 0.035)";
      ctx.lineWidth = 1;
      const step = 75;
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

      ctx.beginPath();
      ctx.moveTo(trajectoryCurve[0].x, trajectoryCurve[0].y);
      for (let i = 1; i < trajectoryCurve.length; i++) {
        ctx.lineTo(trajectoryCurve[i].x, trajectoryCurve[i].y);
      }
      ctx.strokeStyle = "rgba(240, 201, 75, 0.22)";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      milestones.forEach((m) => {
        ctx.beginPath();
        ctx.arc(m.x, m.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#f0c94b";
        ctx.fill();

        ctx.fillStyle = "rgba(240, 201, 75, 0.6)";
        ctx.font = "10px monospace";
        ctx.fillText(m.label, m.x + 12, m.y + 4);
      });

      if (!prefersReducedMotion) {
        signalProgress += 0.0018;
        if (signalProgress > 1) signalProgress = 0;

        const numSegments = trajectoryCurve.length - 1;
        const currentSeg = Math.min(Math.floor(signalProgress * numSegments), numSegments - 1);
        const segProgress = (signalProgress * numSegments) - currentSeg;

        const p1 = trajectoryCurve[currentSeg];
        const p2 = trajectoryCurve[currentSeg + 1];

        const curX = p1.x + (p2.x - p1.x) * segProgress;
        const curY = p1.y + (p2.y - p1.y) * segProgress;

        ctx.beginPath();
        ctx.arc(curX, curY, 5, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        milestones.forEach((m) => {
          const dist = Math.hypot(m.x - curX, m.y - curY);
          if (dist < 30) {
            m.pulseR += 0.8;
          }
          if (m.pulseR > 0) {
            m.pulseR += 0.4;
            ctx.beginPath();
            ctx.arc(m.x, m.y, m.pulseR, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(34, 197, 94, ${(1 - m.pulseR / 40).toFixed(2)})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            if (m.pulseR > 40) m.pulseR = 0;
          }
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

  const phases = [
    {
      num: "01",
      phase: "PHASE 01",
      title: "FOUNDATION & LEAK RECOVERY",
      duration: "Days 01 - 30",
      direction: "LEFT", // enters from LEFT
      color: "#f0c94b",
      priority: "Isolate primary performance leaks & recover accumulated topic backlogs.",
      studyFocus: "Core high-yield concepts, active recall revision, and daily focus block habituation.",
      testFrequency: "Bi-weekly diagnostic test autopsy",
      metrics: "Focus endurance target: 75% | Backlog reduction: 80%",
    },
    {
      num: "02",
      phase: "PHASE 02",
      title: "ACCELERATION & SPEED-ACCURACY",
      duration: "Days 31 - 60",
      direction: "RIGHT", // enters from RIGHT
      color: "#38bdf8",
      priority: "Speed-accuracy optimization & systematic error elimination.",
      studyFocus: "Mixed-topic problem solving, timed question sets, and formula recall drills.",
      testFrequency: "Weekly full-syllabus mock tests",
      metrics: "Solving accuracy target: 82% | Careless error reduction: -50%",
    },
    {
      num: "03",
      phase: "PHASE 03",
      title: "ADVANCED PERFORMANCE & RANK PUSH",
      duration: "Days 61 - 90",
      direction: "LEFT", // enters from LEFT
      color: "#22c55e",
      priority: "Test strategy refinement, exam pressure simulation, and rank push.",
      studyFocus: "Negative mark reduction, strategic question selection, and mock test autopsies.",
      testFrequency: "2x weekly mock test autopsies",
      metrics: "Negative marks < 8 | Trajectory accuracy: ±3 marks",
    },
    {
      num: "04",
      phase: "PHASE 04",
      title: "FINAL EXAM SIMULATION & PEAK",
      duration: "Days 91 - 100",
      direction: "RIGHT", // enters from RIGHT
      color: "#8b5cf6",
      priority: "Calm exam execution, final formula recall verification, and confidence lock.",
      studyFocus: "Full-length mock test dry runs, rapid formula sheets, and rest optimization.",
      testFrequency: "Daily exam condition dry runs",
      metrics: "Exam confidence score > 88% | Zero unforced errors",
    },
  ];

  const AUDIT_URL = "https://cnm-online-audit.vercel.app/";

  return (
    <section
      id="blueprint"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Performance Trajectory Engine Canvas Background */}
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
          eyebrow="90-DAY RANK BLUEPRINT"
          title="Your Next 90 Days Should Not Be Random."
          description="A structured, phased performance progression that moves your preparation from baseline recovery to advanced competitive rank performance."
          center={true}
        />

        {/* 4 Cards Container with Element-Level Scroll Observer */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginTop: "3.5rem",
          }}
        >
          {phases.map((p, idx) => {
            const isVisible = visibleCardsCount >= idx + 1;
            const isHovered = hoveredIdx === idx;
            const initialTransform = p.direction === "LEFT" ? "translateX(-60px)" : "translateX(60px)";

            return (
              <div
                key={p.phase}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  backgroundColor: isHovered ? "var(--color-surface-hover)" : "var(--color-surface)",
                  border: isHovered ? `1px solid ${p.color}` : "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  position: "relative",
                  boxShadow: isHovered ? `0 12px 35px ${p.color}25` : "0 10px 30px rgba(0, 0, 0, 0.6)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? isHovered
                      ? "scale(1.03) translateY(-4px)"
                      : "scale(1) translateX(0) translateY(0)"
                    : `${initialTransform} translateY(15px)`,
                  transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), border 0.3s ease, boxShadow 0.3s ease",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: p.color, letterSpacing: "0.12em" }}>
                      {p.phase}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "var(--color-text-secondary)",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "4px",
                      }}
                    >
                      {p.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--color-text)", margin: "0 0 0.85rem 0" }}>
                    {p.title}
                  </h3>

                  <div style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "1rem" }}>
                    <strong style={{ color: "var(--color-text)" }}>Priority Focus:</strong> {p.priority}
                  </div>

                  <div style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "1rem" }}>
                    <strong style={{ color: "var(--color-text)" }}>Study Actions:</strong> {p.studyFocus}
                  </div>
                </div>

                <div style={{ borderTop: "1px solid var(--color-border-subtle)", paddingTop: "1rem" }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: p.color }}>
                    Target: {p.metrics}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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
            GENERATE YOUR 90-DAY RANK BLUEPRINT →
          </a>
        </div>
      </div>
    </section>
  );
}
