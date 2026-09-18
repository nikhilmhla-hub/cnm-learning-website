"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function PerformanceAssessmentSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const assessmentSteps = [
    {
      step: "01",
      title: "ASSESS",
      description: "Student answers structured questions about preparation, concept clarity, and exam readiness.",
    },
    {
      step: "02",
      title: "UNDERSTAND",
      description: "The assessment identifies hidden gaps, conceptual friction points, and time-management challenges.",
    },
    {
      step: "03",
      title: "REPORT",
      description: "CNM generates a comprehensive performance report highlighting strengths and weak areas.",
    },
    {
      step: "04",
      title: "ROADMAP",
      description: "The student receives a clear, prioritized action plan detailing what needs focus next.",
    },
    {
      step: "05",
      title: "MENTOR GUIDANCE",
      description: "A 10–20 minute mentor session helps the student review the report and action plan effectively.",
    },
  ];

  const reportDimensions = [
    { name: "Preparation Readiness", score: "High Potential", fill: "82%" },
    { name: "Focus & Consistency", score: "Consistent", fill: "75%" },
    { name: "Revision Cycle", score: "Needs Alignment", fill: "60%" },
    { name: "Accuracy & Speed", score: "78% Precision", fill: "78%" },
  ];

  return (
    <section id="assessment" ref={sectionRef} className="section" style={{ backgroundColor: "var(--color-background-alt)", padding: "5rem 0", overflow: "hidden" }}>
      <div className={`container assessment-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ overflow: "hidden" }}>
        <SectionHeading
          eyebrow="PERFORMANCE ASSESSMENT"
          title="Know Where You Stand Before You Plan What Comes Next"
          description="CNM can use structured assessment questions to build a clearer picture of a student's preparation, readiness and areas that need attention."
          centered
          className="assessment-header"
        />

        {/* Grid Layout: Left Sample Report Preview Card, Right 5-Step Workflow */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          {/* Left: Branded CNM Report Card Preview (Sample / Demo) */}
          <div
            className="assessment-report-visual"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border-gold)",
              borderRadius: "var(--radius-xl)",
              padding: "2rem",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.8), 0 0 24px rgba(212, 175, 55, 0.1)",
              position: "relative",
              overflow: "hidden",
              transitionDelay: isMounted && isVisible ? "280ms" : "0ms",
            }}
          >
            {/* Header Badge */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid var(--color-border)",
                paddingBottom: "1.25rem",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--color-gold)",
                    textTransform: "uppercase",
                  }}
                >
                  CNM READINESS REPORT
                </span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginTop: "0.2rem" }}>
                  Student Performance Profile
                </h3>
              </div>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.6rem",
                  borderRadius: "4px",
                  backgroundColor: "rgba(212, 175, 55, 0.15)",
                  color: "var(--color-gold-bright)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                }}
              >
                DEMO / SAMPLE
              </span>
            </div>

            {/* Dimension Progress Bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.15rem", marginBottom: "1.75rem" }}>
              {reportDimensions.map((dim, index) => (
                <div key={index}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "0.35rem" }}>
                    <span style={{ color: "var(--color-text)", fontWeight: 500 }}>{dim.name}</span>
                    <span style={{ color: "var(--color-gold-bright)", fontWeight: 600 }}>{dim.score}</span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "6px",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "3px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: dim.fill,
                        height: "100%",
                        backgroundColor: "var(--color-gold)",
                        borderRadius: "3px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Identified Weak Areas Box */}
            <div
              style={{
                backgroundColor: "rgba(8, 8, 10, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-md)",
                padding: "1rem 1.25rem",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ fontSize: "0.8rem", color: "var(--color-gold)", fontWeight: 700, marginBottom: "0.5rem" }}>
                KEY FOCUS & WEAK AREAS IDENTIFIED
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "var(--color-gold)" }}>•</span> Physics: Rotational Dynamics Problem Speed
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "var(--color-gold)" }}>•</span> Chemistry: Ionic Equilibrium Multi-Concept Applications
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "var(--color-gold)" }}>•</span> Mathematics: Definite Integrals Calculation Precision
                </li>
              </ul>
            </div>

            {/* Indicative Potential Note */}
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                lineHeight: "1.5",
                borderTop: "1px dashed rgba(255, 255, 255, 0.1)",
                paddingTop: "1rem",
              }}
            >
              <strong style={{ color: "var(--color-gold-bright)" }}>Potential Performance:</strong> An indicative estimate based on the assessment and improvement roadmap. *(Note: Assessment-based estimate for planning purposes, not a guaranteed rank or outcome.)*
            </div>
          </div>

          {/* Right: 5-Step Workflow Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {assessmentSteps.map((s, index) => (
              <div
                key={index}
                className="assessment-step-card"
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.15rem 1.25rem",
                  transition: "all 0.2s ease",
                  transitionDelay: isMounted && isVisible ? `${360 + index * 100}ms` : "0ms",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(212, 175, 55, 0.12)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    color: "var(--color-gold-bright)",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    padding: "0.4rem 0.65rem",
                    borderRadius: "6px",
                    flexShrink: 0,
                  }}
                >
                  STEP {s.step}
                </div>
                <div>
                  <h4 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                    {s.title}
                  </h4>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: "1.5" }}>
                    {s.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div
              className="assessment-cta-box"
              style={{
                marginTop: "1rem",
                transitionDelay: isMounted && isVisible ? "880ms" : "0ms",
              }}
            >
              <Button href="#contact" variant="primary" style={{ padding: "0.95rem 2rem", fontSize: "1rem" }}>
                Understand My Performance
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Header sequence */
        :global(.assessment-header .eyebrow),
        :global(.assessment-header .section-title),
        :global(.assessment-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .assessment-container.js-active:not(.is-visible) :global(.assessment-header .eyebrow) {
          opacity: 0;
          transform: translateY(14px);
        }

        .assessment-container.js-active:not(.is-visible) :global(.assessment-header .section-title) {
          opacity: 0;
          transform: translateY(22px);
        }

        .assessment-container.js-active:not(.is-visible) :global(.assessment-header .section-description) {
          opacity: 0;
          transform: translateY(16px);
        }

        .assessment-container.js-active.is-visible :global(.assessment-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .assessment-container.js-active.is-visible :global(.assessment-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .assessment-container.js-active.is-visible :global(.assessment-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Left Main Report Card Visual (Scale + Rise) */
        .assessment-report-visual {
          will-change: transform, opacity;
          transition: transform 0.72s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.72s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .assessment-container.js-active:not(.is-visible) .assessment-report-visual {
          opacity: 0;
          transform: translateY(28px) scale(0.96);
        }

        .assessment-container.js-active.is-visible .assessment-report-visual {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Right 5-Step Cards & CTA (Sequential rise) */
        .assessment-step-card,
        .assessment-cta-box {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .assessment-container.js-active:not(.is-visible) .assessment-step-card,
        .assessment-container.js-active:not(.is-visible) .assessment-cta-box {
          opacity: 0;
          transform: translateY(20px);
        }

        .assessment-container.js-active.is-visible .assessment-step-card,
        .assessment-container.js-active.is-visible .assessment-cta-box {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 767px) {
          .assessment-container.js-active:not(.is-visible) .assessment-report-visual {
            transform: translateY(18px) scale(0.97);
          }
          .assessment-container.js-active:not(.is-visible) .assessment-step-card {
            transform: translateY(14px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.assessment-header .eyebrow),
          :global(.assessment-header .section-title),
          :global(.assessment-header .section-description),
          .assessment-report-visual,
          .assessment-step-card,
          .assessment-cta-box {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
