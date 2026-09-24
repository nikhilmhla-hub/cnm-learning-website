"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import ParentsVisibilityBackground from "../ui/ParentsVisibilityBackground";

function FadeInItem({ children, delay = 0, direction = "up", style = {} }) {
  const [inView, setInView] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (inView) return "translateX(0) translateY(0) scale(1)";
    if (direction === "left") return "translateX(-40px) translateY(15px) scale(0.97)";
    if (direction === "right") return "translateX(40px) translateY(15px) scale(0.97)";
    return "translateY(24px) scale(0.97)";
  };

  return (
    <div
      ref={domRef}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, border-color 0.3s ease, box-shadow 0.3s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function MetricCounterCard({ label, targetVal, color, isHighlight, delay, direction }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const domRef = useRef(null);

  const numTarget = parseInt(targetVal, 10) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500; // 1.5s smooth count-up
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = numTarget / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numTarget) {
        setCount(numTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, numTarget]);

  return (
    <div
      ref={domRef}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0) translateY(0) scale(1)"
          : direction === "left"
          ? "translateX(-40px) translateY(15px) scale(0.97)"
          : "translateX(40px) translateY(15px) scale(0.97)",
        transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, border-color 0.3s ease, box-shadow 0.3s ease`,
        backgroundColor: "rgba(10,10,12,0.85)",
        border: isHighlight ? "1px solid var(--color-border-gold-bright)" : "1px solid var(--color-border)",
        padding: "1rem",
        borderRadius: "var(--radius-md)",
      }}
    >
      <div style={{ fontSize: "0.68rem", color: "var(--color-text-muted)", fontWeight: 700, letterSpacing: "0.08em" }}>{label}</div>
      <div style={{ fontSize: "1.3rem", fontWeight: 800, color }}>{count}%</div>
    </div>
  );
}

export default function ParentsSection() {
  const traditionalItems = [
    "“Marks are low in Physics.”",
    "“Tell your child to study more hours.”",
    "“Need more focus and concentration.”",
    "“Why aren't you studying continuously?”",
    "“You just need to revise everything again.”",
  ];

  const metrics = [
    { label: "FOCUS ENDURANCE", val: "78%", color: "var(--color-gold-bright)", isHighlight: true },
    { label: "REVISION RETENTION", val: "82%", color: "var(--color-status-green)", isHighlight: false },
    { label: "SOLVING ACCURACY", val: "71%", color: "var(--color-status-amber)", isHighlight: false },
    { label: "DAILY CONSISTENCY", val: "86%", color: "var(--color-status-green)", isHighlight: false },
  ];

  return (
    <section
      id="for-parents"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Performance Visibility Radar Live Background */}
      <ParentsVisibilityBackground />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeading
          eyebrow="PARENTAL VISIBILITY INTELLIGENCE"
          title="Parents Don't Need Another Marks Report. They Need to Know What Is Actually Happening."
          description="Transform vague academic concern into objective, observable study patterns and actionable intervention areas."
          center={true}
        />

        {/* Side-by-Side Comparison: Traditional Vague Feedback vs CNM Observable Telemetry */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginTop: "3.5rem",
          }}
          className="parents-grid"
        >
          {/* LEFT: What Parents Currently Hear */}
          <FadeInItem delay={0.1} direction="left">
            <div
              style={{
                backgroundColor: "rgba(16, 12, 14, 0.85)",
                border: "1px solid rgba(244, 63, 94, 0.3)",
                borderRadius: "var(--radius-lg)",
                padding: "2.2rem",
                backdropFilter: "blur(6px)",
                height: "100%",
                boxSizing: "border-box",
                boxShadow: "0 10px 30px rgba(0,0,0,0.6), inset 0 0 20px rgba(244, 63, 94, 0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "#f43f5e",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#f43f5e", boxShadow: "0 0 6px #f43f5e" }} />
                TRADITIONAL VAGUE REPORTING
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "1.25rem" }}>
                What Parents Currently Experience
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {traditionalItems.map((item, idx) => (
                  <FadeInItem key={item} delay={0.2 + idx * 0.25} direction="left">
                    <div
                      style={{
                        backgroundColor: "rgba(244, 63, 94, 0.06)",
                        border: "1px solid rgba(244, 63, 94, 0.2)",
                        borderRadius: "var(--radius-sm)",
                        padding: "0.85rem 1rem",
                        fontSize: "0.92rem",
                        color: "#e2e8f0",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                      }}
                    >
                      <span style={{ color: "#f43f5e", fontWeight: 800 }}>✕</span>
                      <span>{item}</span>
                    </div>
                  </FadeInItem>
                ))}
              </div>
            </div>
          </FadeInItem>

          {/* RIGHT: What CNM System Labs Provides */}
          <FadeInItem delay={0.25} direction="right">
            <div
              style={{
                backgroundColor: "rgba(16, 16, 22, 0.9)",
                border: "2px solid var(--color-border-gold)",
                borderRadius: "var(--radius-lg)",
                padding: "2.2rem",
                boxShadow: "0 20px 50px rgba(0,0,0,0.9), 0 0 30px rgba(212, 175, 55, 0.12)",
                backdropFilter: "blur(8px)",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "var(--color-gold-bright)",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-gold-bright)" }} />
                CNM OBSERVABLE TELEMETRY DASHBOARD
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", marginBottom: "1.25rem" }}>
                Actionable Signals Provided to Parents
              </h3>

              {/* Telemetry Metric Badges with Smooth Animated Number Counter */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.85rem",
                  marginBottom: "1.25rem",
                }}
              >
                {metrics.map((m, idx) => (
                  <MetricCounterCard
                    key={m.label}
                    label={m.label}
                    targetVal={m.val}
                    color={m.color}
                    isHighlight={m.isHighlight}
                    delay={0.35 + idx * 0.35}
                    direction={idx % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>

              {/* Current Active Intervention info */}
              <FadeInItem delay={1.75} direction="up">
                <div
                  style={{
                    backgroundColor: "rgba(212, 175, 55, 0.08)",
                    border: "1px solid var(--color-border-gold)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.1rem",
                    fontSize: "0.85rem",
                  }}
                >
                  <div style={{ fontWeight: 800, color: "#ffffff", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--color-gold-bright)" }}>Active Priority:</span>
                    <span>Organic Chemistry Reaction Mechanisms</span>
                  </div>
                  <div style={{ color: "var(--color-text-secondary)", marginTop: "6px", fontSize: "0.82rem", lineHeight: 1.45 }}>
                    Telemetry Intervention: Formula recall drills + 30-minute focus blocks eliminating careless calculation errors.
                  </div>
                </div>
              </FadeInItem>
            </div>
          </FadeInItem>
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a
            href="https://cnm-online-audit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              padding: "0.95rem 2.2rem",
              fontWeight: 800,
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            UNDERSTAND MY STUDENT'S PERFORMANCE →
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .parents-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
