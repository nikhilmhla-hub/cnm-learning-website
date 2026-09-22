"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function MockTestAutopsySection() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [inView, setInView] = useState(false);
  const [hoveredErrorIdx, setHoveredErrorIdx] = useState(null);

  // Score Count-up State (0 to 122)
  const [scoreVal, setScoreVal] = useState(0);
  const [isCalculating, setIsCalculating] = useState(true);
  const [hasCalculated, setHasCalculated] = useState(false);

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  // Scroll Trigger via IntersectionObserver (Trigger ONCE per session)
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

  // Score Count-up Sequence (0 -> 122) on Section Entrance
  useEffect(() => {
    if (!inView || hasCalculated) return;

    setIsCalculating(true);
    let start = 0;
    const target = 122;

    // Brief 350ms processing pause before rapid count-up
    const delayTimer = setTimeout(() => {
      setIsCalculating(false);
      const interval = setInterval(() => {
        start += 7;
        if (start >= target) {
          setScoreVal(target);
          setHasCalculated(true);
          clearInterval(interval);
        } else {
          setScoreVal(start);
        }
      }, 35);
    }, 350);

    return () => clearTimeout(delayTimer);
  }, [inView, hasCalculated]);

  // Digital Test Analysis Laboratory Canvas Background
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

    // LAYER 1: Diagnostic Grid & Question Markers
    const questionMarkers = [
      { x: width * 0.15, y: height * 0.25, label: "Q_14 [CONCEPT_GAP]" },
      { x: width * 0.85, y: height * 0.3, label: "Q_22 [CALC_ERROR]" },
      { x: width * 0.1, y: height * 0.75, label: "Q_29 [MISREAD_UNITS]" },
      { x: width * 0.88, y: height * 0.8, label: "Q_41 [TIME_EXHAUSTED]" },
    ];

    // LAYER 2 & 3: Moving Analysis Light Beams & Signals
    const lightBeams = [
      { startX: width * 0.05, startY: height * 0.2, endX: width * 0.45, endY: height * 0.8, progress: 0, color: "#f43f5e" },
      { startX: width * 0.55, startY: height * 0.1, endX: width * 0.95, endY: height * 0.7, progress: 0.3, color: "#f0c94b" },
      { startX: width * 0.2, startY: height * 0.9, endX: width * 0.8, endY: height * 0.15, progress: 0.6, color: "#38bdf8" },
    ];

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);

      // Faint Test-Analysis Background Grid
      ctx.strokeStyle = "rgba(244, 63, 94, 0.03)";
      ctx.lineWidth = 1;
      const step = 60;
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

      // Question Markers
      ctx.fillStyle = "rgba(244, 63, 94, 0.25)";
      ctx.font = "9px monospace";
      questionMarkers.forEach((qm) => {
        ctx.fillText(qm.label, qm.x, qm.y);
      });

      if (!prefersReducedMotion) {
        // Moving Analysis Signal Beams
        lightBeams.forEach((beam) => {
          beam.progress += 0.0035;
          if (beam.progress > 1) beam.progress = 0;

          ctx.beginPath();
          ctx.moveTo(beam.startX, beam.startY);
          ctx.lineTo(beam.endX, beam.endY);
          ctx.strokeStyle = "rgba(244, 63, 94, 0.06)";
          ctx.setLineDash([6, 10]);
          ctx.stroke();
          ctx.setLineDash([]);

          // Moving Light Signal Head
          const curX = beam.startX + (beam.endX - beam.startX) * beam.progress;
          const curY = beam.startY + (beam.endY - beam.startY) * beam.progress;
          const trailX = beam.startX + (beam.endX - beam.startX) * Math.max(0, beam.progress - 0.1);
          const trailY = beam.startY + (beam.endY - beam.startY) * Math.max(0, beam.progress - 0.1);

          ctx.beginPath();
          ctx.moveTo(trailX, trailY);
          ctx.lineTo(curX, curY);
          ctx.strokeStyle = beam.color;
          ctx.globalAlpha = 0.4;
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.globalAlpha = 1.0;

          ctx.beginPath();
          ctx.arc(curX, curY, 3, 0, Math.PI * 2);
          ctx.fillStyle = beam.color;
          ctx.shadowColor = beam.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleVisibilityChange = () => {
      if (!document.hidden && !prefersReducedMotion) {
        render();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const errorCategories = [
    {
      title: "Concept Gap",
      count: 9,
      percentage: "29%",
      color: "#f43f5e",
      desc: "Fundamental misunderstanding of core principle",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
        </svg>
      ),
      pattern: "Losing marks on novel or multi-concept JEE questions because concept was memorized rote.",
      intervention: "Re-watch 3D visual concept derivations + solve 15 structured foundation problems.",
    },
    {
      title: "Misread Question",
      count: 7,
      percentage: "23%",
      color: "#f59e0b",
      desc: "Missed 'NOT', wrong units, or incorrect condition",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      pattern: "Reading questions too fast in the first 30 seconds, skipping constraints like 'at STP' or 'incorrect'.",
      intervention: "Keyword underline protocol during question reading + slow-down checklist.",
    },
    {
      title: "Calculation Error",
      count: 6,
      percentage: "19%",
      color: "#f0c94b",
      desc: "Arithmetic mistake or sign inversion during algebra",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0c94b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="16" y1="14" x2="16" y2="18" />
          <path d="M16 10h.01" />
          <path d="M12 10h.01" />
          <path d="M8 10h.01" />
          <path d="M12 14h.01" />
          <path d="M8 14h.01" />
          <path d="M12 18h.01" />
          <path d="M8 18h.01" />
        </svg>
      ),
      pattern: "Sloppy rough work leading to sign errors (+/-) and power-of-10 mistakes in physics numericals.",
      intervention: "Structured 2-column scratchpad layout + mandatory step verification.",
    },
    {
      title: "Time Pressure",
      count: 5,
      percentage: "16%",
      color: "#38bdf8",
      desc: "Rushed solving in final 20 minutes of exam",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      pattern: "Spending 8+ minutes stuck on 1 hard problem early, forcing rushed solving at the end.",
      intervention: "2-minute question skip rule + timed 15-question sprint blocks.",
    },
    {
      title: "Weak Topic",
      count: 4,
      percentage: "13%",
      color: "#a855f7",
      desc: "Unmastered sub-topic (e.g. Ionic Equilibrium)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      ),
      pattern: "Consistently skipping or guessing questions from specific sub-chapters due to fear.",
      intervention: "Targeted 90-minute topic recovery module in Learning Ledger.",
    },
  ];

  const AUDIT_URL = "https://cnm-online-audit.vercel.app/";

  return (
    <section
      id="mock-autopsy"
      ref={sectionRef}
      style={{
        padding: "5.5rem 0",
        backgroundColor: "#07070a",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Digital Test Analysis Laboratory Canvas Layer */}
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
          title="A Test Score Is Not a Diagnosis."
          description="Two students can score 122 for completely different reasons. Merely looking at the score fixes nothing."
          center={true}
        />

        {/* Comparison Banner: Traditional Score vs CNM Autopsy Panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginTop: "3.5rem",
          }}
          className="autopsy-grid"
        >
          {/* Traditional Score Output (Active Visual Treatment with Score Count-up) */}
          <div
            style={{
              backgroundColor: "rgba(14, 14, 19, 0.95)",
              border: "1px solid rgba(244, 63, 94, 0.4)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "1rem",
              boxShadow: "0 0 30px rgba(244, 63, 94, 0.15), 0 15px 40px rgba(0, 0, 0, 0.9)",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, filter 0.6s ease",
              opacity: inView ? 1 : 0,
              filter: inView ? "blur(0px)" : "blur(8px)",
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "100ms",
            }}
          >
            {/* Live Indicator Strip */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#f43f5e",
                  boxShadow: "0 0 8px #f43f5e",
                }}
              />
              <span style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", color: "var(--color-text-muted)" }}>
                TRADITIONAL TEST RESULT
              </span>
            </div>

            {/* Score 122 Display with Count-up Sequence */}
            <div
              style={{
                fontSize: "4.5rem",
                fontWeight: 800,
                color: hasCalculated ? "#ffffff" : "var(--color-gold-bright)",
                lineHeight: 1,
                textShadow: hasCalculated ? "0 0 20px rgba(244, 63, 94, 0.4)" : "0 0 15px rgba(240, 201, 75, 0.5)",
                transition: "color 0.4s ease, text-shadow 0.4s ease",
              }}
            >
              {isCalculating ? (
                <span style={{ fontSize: "1.4rem", letterSpacing: "0.08em" }}>CALCULATING...</span>
              ) : (
                String(scoreVal).padStart(3, "0")
              )}
            </div>

            <p style={{ fontSize: "0.92rem", color: "var(--color-text-secondary)", maxWidth: "320px", lineHeight: 1.5 }}>
              "You scored 122 / 300. Work harder and study more chapters."
            </p>

            {/* Zero Diagnostic Insight Animated Scanner */}
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "var(--color-status-red)",
                backgroundColor: "rgba(239, 68, 68, 0.12)",
                padding: "0.4rem 0.9rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--color-status-red)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ animation: "pulseGlow 1.5s infinite" }}>●</span>
              <span>ZERO DIAGNOSTIC INSIGHT</span>
            </div>
          </div>

          {/* CNM Interactive Test Autopsy Console */}
          <div
            style={{
              backgroundColor: "rgba(14, 14, 18, 0.95)",
              border: "2px solid var(--color-border-gold)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.15)",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, filter 0.6s ease",
              opacity: inView ? 1 : 0,
              filter: inView ? "blur(0px)" : "blur(8px)",
              transform: inView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {/* Forensic Scan Line Overlay */}
            <div className="autopsy-scan-beam" />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "1rem",
                marginBottom: "1.25rem",
                borderBottom: "1px solid var(--color-border-gold)",
              }}
            >
              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-gold-bright)" }}>
                  CNM SYSTEM LABS • TEST AUTOPSY
                </span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginTop: "2px" }}>
                  122 MARKS <span style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", fontWeight: 400 }}>(31 Inefficient Questions)</span>
                </h3>
              </div>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "var(--color-status-green)",
                  backgroundColor: "rgba(34, 197, 94, 0.12)",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "4px",
                  border: "1px solid var(--color-status-green)",
                }}
              >
                ● AUTOPSY COMPLETE
              </span>
            </div>

            {/* Error Breakdown List with Hover Zoom */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {errorCategories.map((err, idx) => {
                const isSelected = selectedCategory === idx;
                const isHovered = hoveredErrorIdx === idx;

                return (
                  <div
                    key={err.title}
                    onClick={() => setSelectedCategory(idx)}
                    onMouseEnter={() => setHoveredErrorIdx(idx)}
                    onMouseLeave={() => setHoveredErrorIdx(null)}
                    style={{
                      backgroundColor: isSelected
                        ? "rgba(240, 201, 75, 0.12)"
                        : isHovered
                        ? "rgba(20, 20, 25, 0.95)"
                        : "rgba(10, 10, 12, 0.8)",
                      border: isSelected
                        ? `2px solid ${err.color}`
                        : isHovered
                        ? `1px solid ${err.color}`
                        : "1px solid var(--color-border)",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.85rem 1rem",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      transform: isHovered ? "scale(1.03) translateX(4px)" : "scale(1)",
                      boxShadow: isHovered ? `0 6px 20px ${err.color}25` : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                        <div
                          style={{
                            width: "34px",
                            height: "34px",
                            borderRadius: "6px",
                            backgroundColor: `${err.color}15`,
                            border: `1px solid ${err.color}40`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {err.icon}
                        </div>
                        <div>
                          <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#ffffff" }}>{err.title}</span>
                          <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginLeft: "0.5rem" }}>
                            ({err.desc})
                          </span>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: 800, color: err.color }}>
                          {err.count} Questions
                        </span>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 800,
                            backgroundColor: `${err.color}20`,
                            padding: "0.15rem 0.45rem",
                            borderRadius: "3px",
                            color: err.color,
                          }}
                        >
                          {err.percentage}
                        </span>
                      </div>
                    </div>

                    {/* Expanded Detail Panel when selected */}
                    {isSelected && (
                      <div
                        style={{
                          marginTop: "0.85rem",
                          paddingTop: "0.75rem",
                          borderTop: "1px solid var(--color-border-subtle)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                          fontSize: "0.82rem",
                        }}
                      >
                        <div>
                          <strong style={{ color: "var(--color-gold-bright)" }}>Observed Error Pattern: </strong>
                          <span style={{ color: "var(--color-text-secondary)" }}>{err.pattern}</span>
                        </div>
                        <div>
                          <strong style={{ color: "var(--color-status-green)" }}>Recommended Intervention: </strong>
                          <span style={{ color: "var(--color-text)" }}>{err.intervention}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Prescription Strip */}
            <div
              style={{
                marginTop: "1.25rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--color-border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.78rem",
              }}
            >
              <span style={{ color: "var(--color-text-secondary)" }}>Actionable Prescription:</span>
              <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>
                Focus on Concept Gap (9) & Misread Errors (7) for +24 Mark Gain
              </span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              backgroundColor: "var(--color-gold-bright)",
              color: "#050505",
              fontWeight: 800,
              fontSize: "0.95rem",
              padding: "0.85rem 1.75rem",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(212, 175, 55, 0.35)",
              transition: "all 0.2s ease",
            }}
          >
            ANALYZE MY MOCK TEST PERFORMANCE →
          </a>
        </div>
      </div>

      <style jsx>{`
        .autopsy-scan-beam {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.08), transparent);
          animation: scanBeamMove 6s linear infinite;
          pointer-events: none;
        }

        @keyframes scanBeamMove {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }

        @media (min-width: 992px) {
          .autopsy-grid {
            grid-template-columns: 0.8fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}

