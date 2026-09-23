"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function DailyMissionSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Per-element scroll observers
  const [col1Visible, setCol1Visible] = useState(false);
  const [col2Visible, setCol2Visible] = useState(false);
  const [col3Visible, setCol3Visible] = useState(false);
  const [measureVisible, setMeasureVisible] = useState(false);

  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const measureRef = useRef(null);
  const canvasRef = useRef(null);

  // Element-level Scroll Observers
  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCol1Visible(true);
          obs1.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );
    if (col1Ref.current) obs1.observe(col1Ref.current);

    const obs2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCol2Visible(true);
          obs2.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );
    if (col2Ref.current) obs2.observe(col2Ref.current);

    const obs3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCol3Visible(true);
          obs3.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );
    if (col3Ref.current) obs3.observe(col3Ref.current);

    const obsM = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMeasureVisible(true);
          obsM.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    if (measureRef.current) obsM.observe(measureRef.current);

    return () => {
      obs1.disconnect();
      obs2.disconnect();
      obs3.disconnect();
      obsM.disconnect();
    };
  }, []);

  // Full-Section Live Background Canvas
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

    const tracks = Array.from({ length: 3 }, (_, i) => ({
      y: (height / 4) * (i + 1),
      speed: 0.003 + i * 0.001,
      phase: i * Math.PI * 0.5,
    }));

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);

      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        30,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      bgGrad.addColorStop(0, "rgba(8, 10, 14, 0.4)");
      bgGrad.addColorStop(1, "#050505");
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
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        tracks.forEach((tr) => {
          tr.phase += tr.speed;
          ctx.beginPath();
          ctx.moveTo(0, tr.y);
          for (let x = 0; x < width; x += 15) {
            const dy = Math.sin(x * 0.008 + tr.phase) * 12;
            ctx.lineTo(x, tr.y + dy);
          }
          ctx.strokeStyle = "rgba(56, 189, 248, 0.05)";
          ctx.lineWidth = 1;
          ctx.stroke();
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

  const todayActions = [
    { num: "01", title: "25-Minute Deep Focus Block", sub: "Eliminate context switching friction", xp: "+50 XP" },
    { num: "02", title: "10-Question Accuracy Drill", sub: "Focused on misread keyword avoidance", xp: "+40 XP" },
    { num: "03", title: "15-Minute Error Review", sub: "Autopsy yesterday's calculation slips", xp: "+30 XP" },
    { num: "04", title: "Timed Problem Set", sub: "Simulated exam time pressure solving", xp: "+60 XP" },
    { num: "05", title: "End-of-Day Performance Check", sub: "Auto-recalibrate tomorrow's protocol", xp: "+20 XP" },
  ];

  const AUDIT_URL = "https://cnm-online-audit.vercel.app/";

  return (
    <section
      id="daily-mission"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background-alt)",
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
          eyebrow="DAILY EXECUTION ENGINE"
          title="From Diagnosis to Action: How CNM Powers Your Day"
          description="CNM takes a diagnosed student problem and automatically converts it into specific, measurable daily execution actions."
          center={true}
        />

        {/* 3-Column Visual Transformation Pipeline - Per-Element Scroll Observers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginTop: "3.5rem",
            alignItems: "stretch",
          }}
        >
          {/* COLUMN 1: STUDENT DIAGNOSIS (LEFT) */}
          <div
            ref={col1Ref}
            style={{
              backgroundColor: "rgba(14, 14, 18, 0.94)",
              border: "1px solid rgba(244, 63, 94, 0.35)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backdropFilter: "blur(10px)",
              opacity: col1Visible ? 1 : 0,
              transform: col1Visible ? "translateX(0) scale(1)" : "translateX(-60px) scale(0.97)",
              transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#f43f5e", letterSpacing: "0.12em" }}>
                  STAGE 01 // DIAGNOSIS
                </span>
                <span style={{ fontSize: "0.65rem", color: "#f43f5e", backgroundColor: "rgba(244, 63, 94, 0.12)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                  INPUT PROBLEM
                </span>
              </div>

              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
                Student Telemetry Scan
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ backgroundColor: "rgba(244, 63, 94, 0.1)", border: "1px solid rgba(244, 63, 94, 0.3)", padding: "0.85rem", borderRadius: "var(--radius-md)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", fontWeight: 700, color: "#ffffff" }}>
                    <span>Focus Endurance</span>
                    <span style={{ color: "#f43f5e" }}>38% [CRITICAL LEAK]</span>
                  </div>
                  <div style={{ height: "4px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px", marginTop: "0.5rem" }}>
                    <div style={{ width: "38%", height: "100%", backgroundColor: "#f43f5e", borderRadius: "2px" }} />
                  </div>
                </div>

                <div style={{ backgroundColor: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.25)", padding: "0.85rem", borderRadius: "var(--radius-md)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", fontWeight: 700, color: "#ffffff" }}>
                    <span>Solving Accuracy</span>
                    <span style={{ color: "#f59e0b" }}>50% [NEEDS ATTENTION]</span>
                  </div>
                  <div style={{ height: "4px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px", marginTop: "0.5rem" }}>
                    <div style={{ width: "50%", height: "100%", backgroundColor: "#f59e0b", borderRadius: "2px" }} />
                  </div>
                </div>

                <div style={{ backgroundColor: "rgba(56, 189, 248, 0.08)", border: "1px solid rgba(56, 189, 248, 0.25)", padding: "0.85rem", borderRadius: "var(--radius-md)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", fontWeight: 700, color: "#ffffff" }}>
                    <span>Time Management</span>
                    <span style={{ color: "#38bdf8" }}>68% [FAIR]</span>
                  </div>
                  <div style={{ height: "4px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px", marginTop: "0.5rem" }}>
                    <div style={{ width: "68%", height: "100%", backgroundColor: "#38bdf8", borderRadius: "2px" }} />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "1.5rem", fontStyle: "italic" }}>
              Identified Root Cause: Low focus endurance drains accuracy in the 2nd hour of tests.
            </div>
          </div>

          {/* COLUMN 2: CNM DECISION ENGINE (CENTER) */}
          <div
            ref={col2Ref}
            style={{
              backgroundColor: "rgba(10, 14, 20, 0.94)",
              border: "1px solid var(--color-border-gold)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backdropFilter: "blur(10px)",
              opacity: col2Visible ? 1 : 0,
              transform: col2Visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
              transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: col2Visible ? "0 0 30px rgba(212, 175, 55, 0.25)" : "none",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--color-gold-bright)", letterSpacing: "0.12em" }}>
                  STAGE 02 // DECISION ENGINE
                </span>
                <span style={{ fontSize: "0.65rem", color: "var(--color-gold-bright)", backgroundColor: "rgba(212, 175, 55, 0.12)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                  CNM LOGIC
                </span>
              </div>

              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
                Priority Isolation
              </h3>

              <div
                style={{
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid var(--color-border-gold)",
                  padding: "1.25rem",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--color-gold-bright)", letterSpacing: "0.1em" }}>
                  PRIMARY LEAK IDENTIFIED
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#ffffff", marginTop: "0.3rem" }}>
                  FOCUS LEAK (38%)
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", marginTop: "0.4rem" }}>
                  Requires targeted 25-min focus blocks & active recall recovery
                </div>
              </div>

              <div style={{ textAlign: "center", color: "var(--color-gold-bright)", fontWeight: 800, fontSize: "1.2rem" }}>
                ⚡ CONVERTING TO PROTOCOL →
              </div>
            </div>

            <div style={{ fontSize: "0.75rem", color: "var(--color-gold-bright)", fontWeight: 700, textAlign: "center", marginTop: "1.5rem" }}>
              Zero decision friction for the student
            </div>
          </div>

          {/* COLUMN 3: TODAY'S EXECUTION PLAN (RIGHT) */}
          <div
            ref={col3Ref}
            style={{
              backgroundColor: "rgba(10, 14, 18, 0.94)",
              border: "1px solid var(--color-border-gold)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backdropFilter: "blur(10px)",
              opacity: col3Visible ? 1 : 0,
              transform: col3Visible ? "translateX(0) scale(1)" : "translateX(60px) scale(0.97)",
              transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--color-status-green)", letterSpacing: "0.12em" }}>
                  STAGE 03 // TODAY'S ACTIONS
                </span>
                <span style={{ fontSize: "0.65rem", color: "var(--color-status-green)", backgroundColor: "rgba(34, 197, 94, 0.12)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                  5 MISSIONS
                </span>
              </div>

              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
                Generated Execution Plan
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {todayActions.map((act, idx) => (
                  <div
                    key={act.num}
                    style={{
                      padding: "0.7rem 0.85rem",
                      backgroundColor: col3Visible ? "rgba(34, 197, 94, 0.1)" : "rgba(255, 255, 255, 0.03)",
                      border: col3Visible ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid rgba(255, 255, 255, 0.05)",
                      borderRadius: "var(--radius-md)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      opacity: col3Visible ? 1 : 0.3,
                      transition: `all 0.3s ease ${idx * 100}ms`,
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: col3Visible ? "#ffffff" : "var(--color-text-muted)" }}>
                        {act.num}. {act.title}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>
                        {act.sub}
                      </div>
                    </div>
                    <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--color-gold-bright)", fontFamily: "monospace" }}>
                      {act.xp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ fontSize: "0.75rem", color: "var(--color-status-green)", fontWeight: 700, marginTop: "1.5rem" }}>
              ✓ Complete today to lock focus recovery
            </div>
          </div>
        </div>

        {/* STAGE 4: MEASUREMENT INDICATORS (BOTTOM FADE UP ON SCROLL REACH) */}
        <div
          ref={measureRef}
          style={{
            marginTop: "2.5rem",
            backgroundColor: "rgba(10, 12, 16, 0.95)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            opacity: measureVisible ? 1 : 0,
            transform: measureVisible ? "translateY(0)" : "translateY(25px)",
            transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "var(--color-status-green)", boxShadow: "0 0 10px var(--color-status-green)" }} />
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-status-green)" }}>
                STAGE 04 // MEASURED RESULT
              </div>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "#ffffff" }}>
                Focus Session: COMPLETED | Accuracy: IMPROVING (+12%) | Execution: TRACKED
              </div>
            </div>
          </div>

          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-filled"
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "var(--color-gold-bright)",
              color: "#050505",
              fontWeight: 800,
              fontSize: "0.88rem",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
            }}
          >
            GET YOUR DAILY EXECUTION PLAN →
          </a>
        </div>
      </div>
    </section>
  );
}
