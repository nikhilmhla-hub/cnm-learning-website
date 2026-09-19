"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";

export default function HeroSection() {
  const [animStage, setAnimStage] = useState(0);

  // Cycling diagnostic animation stages in the Hero Dashboard Visualization
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimStage((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { label: "FOCUS", val: "78%", target: "88%", status: "LEAK DETECTED", color: "var(--color-status-amber)" },
    { label: "ACCURACY", val: "71%", target: "85%", status: "STABLE", color: "var(--color-gold-bright)" },
    { label: "REVISION", val: "82%", target: "90%", status: "OPTIMAL", color: "var(--color-status-green)" },
    { label: "CONFIDENCE", val: "68%", target: "80%", status: "ATTENTION", color: "var(--color-status-amber)" },
    { label: "TIME MGMT", val: "76%", target: "85%", status: "OPTIMAL", color: "var(--color-status-green)" },
  ];

  return (
    <section
      id="home"
      style={{
        paddingTop: "calc(80px + 3rem)",
        paddingBottom: "5rem",
        backgroundColor: "var(--color-background)",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      {/* Background Subtle Tech Grid Accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.07) 0%, transparent 60%), linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headlines & Positioning */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                backgroundColor: "rgba(212, 175, 55, 0.08)",
                border: "1px solid var(--color-border-gold)",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-gold-bright)",
                  boxShadow: "0 0 8px var(--color-gold-bright)",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "var(--color-gold-bright)",
                  textTransform: "uppercase",
                }}
              >
                CNM SYSTEM LABS • STUDENT PERFORMANCE INTELLIGENCE
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#ffffff",
              }}
            >
              Your Marks Are the Output. <br />
              <span className="text-gold">We Fix the System Behind Them.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              style={{
                fontSize: "1.12rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.65,
                maxWidth: "620px",
              }}
            >
              Find exactly where your preparation is breaking down — focus, accuracy, revision, time, confidence, test strategy or execution — and turn the diagnosis into a measurable improvement plan.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginTop: "0.75rem",
              }}
            >
              <Button href="#audit" variant="primary" style={{ padding: "0.85rem 1.75rem", fontSize: "0.95rem" }}>
                RUN YOUR PERFORMANCE AUDIT →
              </Button>
              <Button href="#how-it-works" variant="secondary" style={{ padding: "0.85rem 1.5rem", fontSize: "0.95rem" }}>
                SEE HOW THE SYSTEM WORKS
              </Button>
            </div>

            {/* System Status Line */}
            <div
              style={{
                marginTop: "1.25rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid var(--color-border-subtle)",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-text-muted)" }}>
                SYSTEM PROCESS:
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                {["DIAGNOSE", "PLAN", "EXECUTE", "MEASURE", "IMPROVE"].map((step, idx, arr) => (
                  <span key={step} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: idx === 0 ? "var(--color-gold-bright)" : "var(--color-text-secondary)",
                      }}
                    >
                      {step}
                    </span>
                    {idx < arr.length - 1 && (
                      <span style={{ color: "var(--color-border-gold)", fontSize: "0.7rem" }}>•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Animated Diagnostic Dashboard Visualization */}
          <div style={{ width: "100%" }}>
            <div
              style={{
                backgroundColor: "rgba(18, 18, 20, 0.95)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.08)",
                position: "relative",
              }}
            >
              {/* Dashboard Top Header Strip */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "1.25rem",
                  marginBottom: "1.25rem",
                  borderBottom: "1px solid var(--color-border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-status-green)",
                      boxShadow: "0 0 10px var(--color-status-green)",
                    }}
                  />
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-text)" }}>
                    DIAGNOSTIC LAB CONSOLE v3.4
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    color: "var(--color-gold-bright)",
                  }}
                >
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Dynamic Diagnostic State Banner */}
              <div
                style={{
                  backgroundColor: "rgba(10, 10, 12, 0.8)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.85rem 1rem",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
                    CURRENT SYSTEM STATE
                  </div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--color-gold-bright)", marginTop: "2px" }}>
                    {animStage === 0 && "AUDITING PERFORMANCE SIGNAL..."}
                    {animStage === 1 && "PRIMARY LEAK IDENTIFIED: FOCUS & ACCURACY"}
                    {animStage === 2 && "INTERVENTION PROTOCOL GENERATED"}
                    {animStage === 3 && "TARGET TRAJECTORY CALCULATED (+18 MARKS)"}
                  </div>
                </div>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-gold-soft)",
                    border: "1px solid var(--color-border-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    color: "var(--color-gold-bright)",
                  }}
                >
                  {animStage + 1}/4
                </div>
              </div>

              {/* Main Index Cards Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                {/* Performance Index Card */}
                <div
                  style={{
                    backgroundColor: "rgba(5, 5, 5, 0.8)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.1rem",
                  }}
                >
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
                    PERFORMANCE INDEX
                  </div>
                  <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffffff", marginTop: "4px" }}>
                    72 <span style={{ fontSize: "1rem", color: "var(--color-text-muted)", fontWeight: 500 }}>/ 100</span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--color-status-amber)",
                      marginTop: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <span>▲</span> +8.4 vs Last Audit Cycle
                  </div>
                </div>

                {/* Marks & Target Snapshot */}
                <div
                  style={{
                    backgroundColor: "rgba(5, 5, 5, 0.8)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.1rem",
                  }}
                >
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
                    SCORE TRAJECTORY
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginTop: "4px" }}>
                    <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff" }}>142</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>➔</span>
                    <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--color-gold-bright)" }}>185</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--color-status-green)", marginTop: "4px" }}>
                    Target GAP: +43 Marks
                  </div>
                </div>
              </div>

              {/* Performance Leaks Telemetry Bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-text-muted)", marginBottom: "0.2rem" }}>
                  METRIC BREAKDOWN & DIAGNOSTICS
                </div>
                {metrics.map((m) => (
                  <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.78rem" }}>
                      <span style={{ fontWeight: 700, color: "var(--color-text)", letterSpacing: "0.05em" }}>{m.label}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <span style={{ fontSize: "0.68rem", fontWeight: 700, color: m.color, padding: "0.1rem 0.4rem", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.03)" }}>
                          {m.status}
                        </span>
                        <span style={{ fontWeight: 800, color: m.color }}>{m.val}</span>
                      </div>
                    </div>
                    {/* Progress Bar Container */}
                    <div style={{ width: "100%", height: "6px", backgroundColor: "rgba(255, 255, 255, 0.08)", borderRadius: "3px", overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: m.val,
                          backgroundColor: m.color,
                          borderRadius: "3px",
                          transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Recommended Action Strip */}
              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--color-border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.75rem",
                }}
              >
                <span style={{ color: "var(--color-text-secondary)" }}>Active Prescription:</span>
                <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>
                  2x Deep Work Focus Blocks + Test Autopsy Protocol
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
