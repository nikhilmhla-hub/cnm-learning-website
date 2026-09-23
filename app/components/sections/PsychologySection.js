"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function PsychologySection() {
  const [hoveredCardIdx, setHoveredCardIdx] = useState(null);
  const canvasRef = useRef(null);

  const dimensions = [
    {
      num: "01",
      title: "FOCUS ENDURANCE",
      desc: "Sustain deep analytical concentration without switching tasks or succumbing to study distraction.",
      signal: "Sustained Deep Work Duration",
      status: "LEAK DETECTED",
      color: "#f0c94b",
      dir: "LEFT",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" stroke="#f0c94b" />
          <circle cx="12" cy="12" r="5" stroke="#38bdf8" />
          <circle cx="12" cy="12" r="2" fill="#f0c94b" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "ACADEMIC CONFIDENCE",
      desc: "Trust solved calculations under time pressure without secondary hesitation or option changing.",
      signal: "First-Attempt Solved Ratio",
      status: "PRECISION HIGH",
      color: "#38bdf8",
      dir: "RIGHT",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "FEAR & PRESSURE REGULATION",
      desc: "Deconstruct exam panic into structured step-by-step problem execution protocols.",
      signal: "Pressure Error Mitigation",
      status: "STRESS SHIELDED",
      color: "#f43f5e",
      dir: "LEFT",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(244,63,94,0.15)" stroke="#f43f5e" />
          <polyline points="9 12 11 14 15 10" stroke="#ffffff" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "PREPARATION CONSISTENCY",
      desc: "Maintain daily study execution day after day without erratic spikes and severe burnout slumps.",
      signal: "Daily Mission Completion %",
      status: "OPTIMAL REPEAT",
      color: "#22c55e",
      dir: "RIGHT",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6" stroke="#22c55e" />
          <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" stroke="#22c55e" />
          <circle cx="12" cy="12" r="3" fill="#22c55e" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "EXECUTION FRICTION",
      desc: "Minimize startup delay between sitting at the desk and initiating high-yield problem solving.",
      signal: "Study Initiation Speed",
      status: "ZERO FRICTION",
      color: "#8b5cf6",
      dir: "LEFT",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" />
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

  // Performance Signal Network Canvas Background
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

    // Connected signal nodes
    const signalNodes = Array.from({ length: 14 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2.5 + 1.5,
      color: Math.random() > 0.4 ? "rgba(240, 201, 75, 0.3)" : "rgba(56, 189, 248, 0.3)",
    }));

    let t = 0;

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);
      t += 0.005;

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

      // Network Lines
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
        // Connect nearby nodes
        for (let i = 0; i < signalNodes.length; i++) {
          for (let j = i + 1; j < signalNodes.length; j++) {
            const dist = Math.hypot(signalNodes[i].x - signalNodes[j].x, signalNodes[i].y - signalNodes[j].y);
            if (dist < 180) {
              ctx.beginPath();
              ctx.moveTo(signalNodes[i].x, signalNodes[i].y);
              ctx.lineTo(signalNodes[j].x, signalNodes[j].y);
              ctx.strokeStyle = `rgba(212, 175, 55, ${(1 - dist / 180) * 0.08})`;
              ctx.stroke();
            }
          }
        }

        // Draw nodes
        signalNodes.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
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

  return (
    <section
      id="psychology"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Performance Signal Network Canvas Background */}
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
          eyebrow="PERFORMANCE SIGNALS"
          title="Performance Isn't Just Academic."
          description="Exam scores are deeply influenced by study habits, exam pressure handling, and execution discipline. We measure the underlying behavioral signals."
          center={true}
        />

        {/* 5 Sleek Diagnostic Instrument Cards - Element-level Scroll Trigger */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginTop: "3.5rem",
          }}
        >
          {dimensions.map((dim, idx) => {
            const isVisible = !!visibleItems[idx];
            const isHovered = hoveredCardIdx === idx;
            const initialTransform = dim.dir === "LEFT" ? "translateX(-60px) translateY(15px) scale(0.97)" : "translateX(60px) translateY(15px) scale(0.97)";

            return (
              <div
                key={dim.title}
                ref={(el) => (cardRefs.current[idx] = el)}
                onMouseEnter={() => setHoveredCardIdx(idx)}
                onMouseLeave={() => setHoveredCardIdx(null)}
                style={{
                  backgroundColor: isHovered ? "rgba(18, 20, 28, 0.96)" : "var(--color-surface)",
                  border: isHovered ? `1px solid ${dim.color}` : "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.85rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.25rem",
                  position: "relative",
                  boxShadow: isHovered ? `0 12px 35px ${dim.color}25` : "0 8px 25px rgba(0, 0, 0, 0.6)",
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
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                    {/* Illustrated SVG Icon */}
                    <div
                      style={{
                        padding: "0.6rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: `${dim.color}15`,
                        border: `1px solid ${dim.color}35`,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {dim.icon}
                    </div>

                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: dim.color, fontFamily: "monospace" }}>
                      DIMENSION {dim.num}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
                    {dim.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", lineHeight: 1.5, margin: 0 }}>
                    {dim.desc}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: "0.85rem",
                    borderTop: "1px solid var(--color-border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "0.75rem",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "var(--color-text-muted)" }}>
                    Signal: {dim.signal}
                  </span>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      color: dim.color,
                      backgroundColor: `${dim.color}15`,
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                    }}
                  >
                    {dim.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Behavioral Connection Banner */}
        <div
          style={{
            marginTop: "3rem",
            backgroundColor: "rgba(18, 18, 20, 0.94)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "1.25rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)",
          }}
        >
          <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "var(--color-text)" }}>
            Behavioral Signals Connect Directly To:
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", flexWrap: "wrap", fontSize: "0.82rem", fontWeight: 800 }}>
            <span style={{ color: "var(--color-gold-bright)" }}>LEARNING</span> ➔
            <span style={{ color: "var(--color-gold-bright)" }}>PROBLEM SOLVING</span> ➔
            <span style={{ color: "var(--color-gold-bright)" }}>TEST PERFORMANCE</span> ➔
            <span style={{ color: "var(--color-status-green)" }}>MARKS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
