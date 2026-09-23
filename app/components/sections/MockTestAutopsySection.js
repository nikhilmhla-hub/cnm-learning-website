"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function MockTestAutopsySection() {
  const [hoveredCardIdx, setHoveredCardIdx] = useState(null);

  // Per-element scroll observers
  const [scoreInView, setScoreInView] = useState(false);
  const [scoreVal, setScoreVal] = useState(0);
  const [hasCalculated, setHasCalculated] = useState(false);

  const [cardsInView, setCardsInView] = useState(false);
  const [visibleCardsCount, setVisibleCardsCount] = useState(0);

  const scoreRef = useRef(null);
  const cardsRef = useRef(null);
  const canvasRef = useRef(null);

  // Element-level Scroll Observers
  useEffect(() => {
    const scoreObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScoreInView(true);
          scoreObs.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );
    if (scoreRef.current) scoreObs.observe(scoreRef.current);

    const cardsObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsInView(true);
          cardsObs.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );
    if (cardsRef.current) cardsObs.observe(cardsRef.current);

    return () => {
      scoreObs.disconnect();
      cardsObs.disconnect();
    };
  }, []);

  // Score Count-up Sequence (0 -> 122) triggered ONLY when score card enters viewport
  useEffect(() => {
    if (!scoreInView || hasCalculated) return;

    let start = 0;
    const target = 122;
    const interval = setInterval(() => {
      start += 6;
      if (start >= target) {
        setScoreVal(target);
        setHasCalculated(true);
        clearInterval(interval);
      } else {
        setScoreVal(start);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [scoreInView, hasCalculated]);

  // One-by-One Card Entrance Trigger with Noticeable Pause (~450ms per card)
  useEffect(() => {
    if (!cardsInView) return;

    let count = 0;
    const timer = setInterval(() => {
      count += 1;
      setVisibleCardsCount(count);
      if (count >= 4) clearInterval(timer);
    }, 450); // 450ms stagger per card

    return () => clearInterval(timer);
  }, [cardsInView]);

  // Full-Section Live Background Canvas (Forensic Atmosphere)
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

    const rings = [
      { cx: width * 0.18, cy: height * 0.35, r: 160, alpha: 0.04 },
      { cx: width * 0.82, cy: height * 0.65, r: 210, alpha: 0.03 },
    ];

    const scanLines = [
      { startX: width * 0.1, startY: height * 0.1, endX: width * 0.45, endY: height * 0.9, progress: 0, speed: 0.0006, color: "rgba(244, 63, 94, 0.25)" },
      { startX: width * 0.55, startY: height * 0.05, endX: width * 0.9, endY: height * 0.85, progress: 0.4, speed: 0.0005, color: "rgba(240, 201, 75, 0.22)" },
    ];

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);

      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        40,
        width * 0.5,
        height * 0.45,
        width * 0.8
      );
      bgGrad.addColorStop(0, "rgba(12, 10, 14, 0.3)");
      bgGrad.addColorStop(1, "#07070a");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(244, 63, 94, 0.018)";
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

      rings.forEach((ring) => {
        ctx.strokeStyle = `rgba(244, 63, 94, ${ring.alpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([8, 12]);
        ctx.beginPath();
        ctx.arc(ring.cx, ring.cy, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      if (!prefersReducedMotion) {
        scanLines.forEach((path) => {
          path.progress += path.speed;
          if (path.progress > 1) path.progress = 0;

          ctx.beginPath();
          ctx.moveTo(path.startX, path.startY);
          ctx.lineTo(path.endX, path.endY);
          ctx.strokeStyle = "rgba(244, 63, 94, 0.04)";
          ctx.stroke();

          const curX = path.startX + (path.endX - path.startX) * path.progress;
          const curY = path.startY + (path.endY - path.startY) * path.progress;

          ctx.beginPath();
          ctx.arc(curX, curY, 3, 0, Math.PI * 2);
          ctx.fillStyle = path.color;
          ctx.shadowColor = path.color;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
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

  const diagnosticCards = [
    {
      num: "01",
      title: "Concept Gaps",
      count: "9 Questions Lost",
      impact: "-36 Marks",
      direction: "RIGHT", // enters from RIGHT
      color: "#f43f5e",
      pattern: "Rote memorization breaks when JEE/NEET questions combine 2+ concepts.",
      fix: "3D visual concept derivations + 15 structured foundation problems.",
    },
    {
      num: "02",
      title: "Misread Question Constraints",
      count: "7 Questions Lost",
      impact: "-28 Marks",
      direction: "LEFT", // enters from LEFT
      color: "#f59e0b",
      pattern: "Reading questions too fast, skipping 'NOT', 'STP', or unit changes.",
      fix: "Keyword underline protocol + 30-second question scanning checklist.",
    },
    {
      num: "03",
      title: "Calculation & Formula Slip",
      count: "6 Questions Lost",
      impact: "-24 Marks",
      direction: "RIGHT", // enters from RIGHT
      color: "#38bdf8",
      pattern: "Arithmetic slips in multi-step equations under time stress.",
      fix: "Rough-work layout format + 10-minute daily speed calculation drills.",
    },
    {
      num: "04",
      title: "Time Pressure Panic",
      count: "4 Questions Lost",
      impact: "-16 Marks",
      direction: "LEFT", // enters from LEFT
      color: "#8b5cf6",
      pattern: "Spending 6+ minutes on tough Qs, starving easy questions at the end.",
      fix: "3-pass exam execution strategy + 90-second question skip rule.",
    },
  ];

  const AUDIT_URL = "https://cnm-online-audit.vercel.app/";

  return (
    <section
      id="mock-autopsy"
      style={{
        padding: "6rem 0",
        backgroundColor: "#07070a",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Full-Section Live Background Canvas */}
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
          eyebrow="MOCK TEST AUTOPSY SYSTEM"
          title="A Mock Test Score is Not Just a Number. It's a Forensic Investigation."
          description="CNM opens your mock result and dissects WHAT happened, WHERE marks leaked, WHY errors occurred, and HOW to fix them."
          center={true}
        />

        {/* Traditional Test Result Card - Element-level Scroll Trigger */}
        <div
          ref={scoreRef}
          style={{
            maxWidth: "680px",
            margin: "3rem auto 0 auto",
            backgroundColor: "rgba(18, 14, 18, 0.94)",
            border: "1px solid rgba(244, 63, 94, 0.4)",
            borderRadius: "var(--radius-lg)",
            padding: "2rem 2.5rem",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            position: "relative",
            overflow: "hidden",
            opacity: scoreInView ? 1 : 0,
            transform: scoreInView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
            transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Laser Scan Beam */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, #f43f5e, transparent)",
              boxShadow: "0 0 15px #f43f5e",
              animation: "laserScan 3s linear infinite",
            }}
          />

          <div>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                color: "#f43f5e",
                backgroundColor: "rgba(244, 63, 94, 0.12)",
                padding: "0.25rem 0.6rem",
                borderRadius: "4px",
                border: "1px solid rgba(244, 63, 94, 0.3)",
              }}
            >
              INPUT MOCK SCORE RESULT
            </span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginTop: "0.6rem", margin: 0 }}>
              JEE / NEET MOCK TEST #04
            </h3>
            <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", margin: "0.3rem 0 0 0" }}>
              Total 300 Marks | Diagnostic Autopsy Triggered
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "2.8rem", fontWeight: 900, color: "#f43f5e", lineHeight: 1, fontFamily: "monospace" }}>
              {scoreVal} <span style={{ fontSize: "1.2rem", color: "var(--color-text-muted)" }}>/ 300</span>
            </div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#f43f5e", marginTop: "0.4rem", letterSpacing: "0.05em" }}>
              ⚠️ 178 MARKS LOST TO LEAKS
            </div>
          </div>
        </div>

        {/* Sequential Dissection Flow Arrow */}
        <div style={{ textAlign: "center", margin: "2.5rem 0 2rem 0", color: "var(--color-gold-bright)", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.1em" }}>
          ↓ FORENSIC AUTOPSY DISSECTION ↓
        </div>

        {/* 4 Diagnostic Cards - Element-level Scroll Observer with 450ms Stagger Pause */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {diagnosticCards.map((card, idx) => {
            const isVisible = visibleCardsCount >= idx + 1;
            const isHovered = hoveredCardIdx === idx;
            const initialTransform = card.direction === "RIGHT" ? "translateX(60px)" : "translateX(-60px)";

            return (
              <div
                key={card.num}
                onMouseEnter={() => setHoveredCardIdx(idx)}
                onMouseLeave={() => setHoveredCardIdx(null)}
                style={{
                  backgroundColor: isHovered ? "rgba(18, 20, 28, 0.96)" : "rgba(12, 14, 20, 0.92)",
                  border: isHovered ? `1px solid ${card.color}` : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.25rem",
                  position: "relative",
                  boxShadow: isHovered ? `0 12px 35px ${card.color}25` : "0 10px 30px rgba(0, 0, 0, 0.6)",
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
                    <span style={{ fontSize: "0.8rem", fontWeight: 800, color: card.color, fontFamily: "monospace" }}>
                      CARD {card.num}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        color: card.color,
                        backgroundColor: `${card.color}18`,
                        border: `1px solid ${card.color}40`,
                        padding: "0.2rem 0.55rem",
                        borderRadius: "4px",
                      }}
                    >
                      {card.impact}
                    </span>
                  </div>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", margin: "0 0 0.4rem 0" }}>
                    {card.title}
                  </h4>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--color-text-muted)", marginBottom: "1rem" }}>
                    {card.count}
                  </div>

                  <div style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", lineHeight: 1.45, marginBottom: "0.85rem" }}>
                    <strong>Root Cause:</strong> {card.pattern}
                  </div>

                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#ffffff",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      padding: "0.75rem",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: `3px solid ${card.color}`,
                    }}
                  >
                    <strong style={{ color: card.color }}>CNM Intervention:</strong> {card.fix}
                  </div>
                </div>

                <div
                  style={{
                    height: "2px",
                    width: "100%",
                    backgroundColor: isHovered ? card.color : "rgba(255, 255, 255, 0.05)",
                    transition: "backgroundColor 0.3s ease",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
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
            AUTOPSY YOUR MOCK TEST RESULTS NOW →
          </a>
        </div>
      </div>
    </section>
  );
}
