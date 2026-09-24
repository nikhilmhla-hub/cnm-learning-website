"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import FeedbackLoopBackground from "../ui/FeedbackLoopBackground";

function FeedbackStepCard({ step, index }) {
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isHighlight = index >= 4;

  return (
    <div
      ref={cardRef}
      style={{
        backgroundColor: isHighlight ? "rgba(22, 20, 14, 0.85)" : "rgba(12, 12, 16, 0.75)",
        border: isHighlight ? "1px solid var(--color-border-gold-bright)" : "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1rem",
        position: "relative",
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0) translateY(0) scale(1)"
          : index % 2 === 0
          ? "translateX(-45px) translateY(20px) scale(0.96)"
          : "translateX(45px) translateY(20px) scale(0.96)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.35}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.35}s, border-color 0.3s ease, box-shadow 0.3s ease`,
        boxShadow: isHighlight ? "0 8px 25px rgba(0,0,0,0.7), 0 0 15px rgba(212, 175, 55, 0.1)" : "none",
        backdropFilter: "blur(6px)",
      }}
      className="hover-card-illuminate"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border-gold-bright)";
        e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.8), 0 0 20px rgba(212, 175, 55, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isHighlight ? "var(--color-border-gold-bright)" : "var(--color-border)";
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = isHighlight ? "0 8px 25px rgba(0,0,0,0.7), 0 0 15px rgba(212, 175, 55, 0.1)" : "none";
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              color: isHighlight ? "var(--color-gold-bright)" : "var(--color-text-muted)",
            }}
          >
            STEP {step.num}
          </span>
          {isHighlight && (
            <span
              style={{
                fontSize: "0.62rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                backgroundColor: "rgba(212, 175, 55, 0.18)",
                color: "var(--color-gold-bright)",
                padding: "0.2rem 0.5rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--color-border-gold)",
              }}
            >
              CNM ENGINE
            </span>
          )}
        </div>
        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: 800,
            color: isHighlight ? "var(--color-gold-bright)" : "#ffffff",
            marginTop: "0.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          {step.name}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", marginTop: "0.35rem", lineHeight: 1.45 }}>
          {step.desc}
        </p>
      </div>

      <div
        style={{
          paddingTop: "0.75rem",
          borderTop: "1px solid var(--color-border-subtle)",
          fontSize: "0.72rem",
          color: isHighlight ? "var(--color-status-green)" : "var(--color-text-muted)",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: isHighlight ? "var(--color-status-green)" : "rgba(255,255,255,0.2)",
            boxShadow: isHighlight ? "0 0 6px var(--color-status-green)" : "none",
          }}
        />
        {isHighlight ? "CNM Feedback Intelligence" : "Traditional Linear Path"}
      </div>
    </div>
  );
}

export default function FeedbackLoopSection() {
  const steps = [
    { num: "01", name: "CONTENT", desc: "Targeted concept delivery" },
    { num: "02", name: "LEARNING", desc: "3D visual understanding" },
    { num: "03", name: "PRACTICE", desc: "First-attempt solving drills" },
    { num: "04", name: "TEST", desc: "Timed pressure examination" },
    { num: "05", name: "DIAGNOSIS", desc: "Telemetry autopsy of mistakes" },
    { num: "06", name: "INTERVENTION", desc: "Targeted daily mission generation" },
    { num: "07", name: "MEASUREMENT", desc: "Accuracy & retention validation" },
    { num: "08", name: "ADAPTATION", desc: "System auto-recalibrates plan" },
  ];

  return (
    <section
      id="feedback-loop"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* System Comparison Field Live Background */}
      <FeedbackLoopBackground />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeading
          eyebrow="SYSTEM DIFFERENTIATION"
          title="Most Platforms Deliver Content. CNM Builds the Feedback Loop."
          description="The value isn't another 100-hour video course. The value is knowing exactly what to do after the lecture, after the problem set, after the test, and after the mistake."
          center={true}
        />

        {/* 8-Step Feedback Loop Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.35rem",
            marginTop: "3.5rem",
          }}
        >
          {steps.map((s, idx) => (
            <FeedbackStepCard key={s.num} step={s} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
