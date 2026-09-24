"use client";

import { useState, useEffect, useRef } from "react";
import Button from "../ui/Button";
import FinalCTABackground from "../ui/FinalCTABackground";

function ProtocolBadge({ step, idx, total }) {
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

  return (
    <div
      ref={domRef}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0) translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.35}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.35}s`,
      }}
    >
      <div
        style={{
          fontSize: "0.72rem",
          fontWeight: 800,
          letterSpacing: "0.12em",
          color: "var(--color-gold-bright)",
          backgroundColor: "rgba(212, 175, 55, 0.08)",
          border: "1px solid rgba(212, 175, 55, 0.25)",
          padding: "0.3rem 0.65rem",
          borderRadius: "4px",
        }}
      >
        {step}
      </div>
      {idx < total - 1 && (
        <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>→</span>
      )}
    </div>
  );
}

export default function FinalCTASection() {
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

  const protocolSteps = ["DIAGNOSE", "PLAN", "EXECUTE", "MEASURE", "IMPROVE"];

  return (
    <section
      id="audit"
      style={{
        padding: "6.5rem 0",
        backgroundColor: "var(--color-background)",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      {/* Performance Intelligence Core Live Background */}
      <FinalCTABackground />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          ref={domRef}
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            backgroundColor: "rgba(16, 16, 22, 0.92)",
            border: "2px solid var(--color-border-gold)",
            borderRadius: "var(--radius-xl)",
            padding: "4rem 2.8rem",
            textAlign: "center",
            boxShadow: "0 30px 70px rgba(0,0,0,0.95), 0 0 50px rgba(212, 175, 55, 0.18)",
            backdropFilter: "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0) scale(1)" : "translateY(28px) scale(0.96)",
            transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Eyebrow System Protocol Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.9rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: "rgba(212, 175, 55, 0.12)",
              border: "1px solid var(--color-border-gold)",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "var(--color-gold-bright)", boxShadow: "0 0 8px var(--color-gold-bright)" }} />
            <span
              style={{
                fontSize: "0.76rem",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "var(--color-gold-bright)",
                textTransform: "uppercase",
              }}
            >
              STUDENT PERFORMANCE INTELLIGENCE PROTOCOL
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.3rem, 4.8vw, 3.6rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              color: "#ffffff",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Stop Guessing. <br />
            <span className="text-gold">Start Diagnosing.</span>
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
              margin: "0 auto 2.5rem auto",
              lineHeight: 1.65,
            }}
          >
            Find exactly where your preparation is leaking marks - focus, accuracy, revision, time, or exam pressure - and convert those findings into a measurable 90-day plan.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1.25rem",
              marginBottom: "2.8rem",
            }}
          >
            <a
              href="https://cnm-online-audit.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: "1rem 2.5rem",
                fontWeight: 800,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              RUN YOUR CNM PERFORMANCE AUDIT →
            </a>
            <Button href="#problem-leaks" variant="secondary" style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
              EXPLORE CNM SYSTEM LABS
            </Button>
          </div>

          {/* Illuminated Protocol Steps Trail */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--color-border-subtle)",
            }}
          >
            {protocolSteps.map((step, idx) => (
              <ProtocolBadge key={step} step={step} idx={idx} total={protocolSteps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
