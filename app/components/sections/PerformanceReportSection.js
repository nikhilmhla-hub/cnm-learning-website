"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function PerformanceReportSection() {
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
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  const reportCategories = [
    "Concept Clarity",
    "Practice",
    "Revision",
    "Accuracy",
    "Time Management",
    "Confidence",
  ];

  const benefits = [
    "Understand your current preparation and readiness",
    "Identify weak areas that need more attention",
    "Get a clearer picture of your strengths and gaps",
    "Use the assessment to guide your next stage of preparation",
    "Know what needs to be improved before moving forward",
  ];

  return (
    <section
      ref={sectionRef}
      className="section section-alt"
      style={{ overflow: "hidden" }}
    >
      <div
        className={`container pr-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`}
        style={{ overflow: "hidden" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left: Text Content */}
          <div className="pr-text">
            <SectionHeading
              eyebrow="KNOW WHERE YOU STAND"
              title="Know Where You Stand Before You Plan What Comes Next"
              description="CNM's performance assessment helps you understand your current preparation, identify weaker areas, and see what needs more attention — so your effort is always aimed at the right place."
              className="pr-heading"
            />

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "1.75rem 0 2rem 0",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="pr-benefit"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.7rem",
                    transitionDelay:
                      isMounted && isVisible ? `${300 + i * 70}ms` : "0ms",
                  }}
                >
                  <span
                    style={{
                      marginTop: "3px",
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-gold-soft)",
                      border: "1px solid var(--color-border-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-gold-bright)",
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.55,
                    }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="pr-mentor-note"
              style={{
                fontSize: "0.88rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.6,
                borderLeft: "2px solid var(--color-border-gold)",
                paddingLeft: "1rem",
                marginBottom: "1.75rem",
                transitionDelay: isMounted && isVisible ? "680ms" : "0ms",
              }}
            >
              Use the assessment insights to discuss the areas that need
              improvement and plan the next steps with your CNM mentor.
            </p>

            <div
              className="pr-cta"
              style={{
                transitionDelay: isMounted && isVisible ? "760ms" : "0ms",
              }}
            >
              <Button href="#contact" variant="primary">
                Understand My Preparation
              </Button>
            </div>
          </div>

          {/* Right: Report Card Visual */}
          <div className="pr-visual-wrap">
            <div className="pr-card-outer">
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--color-border-gold)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      fontFamily: "var(--font-family-heading)",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-gold-bright)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    CNM Performance Report
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--color-text-muted)",
                      fontFamily: "var(--font-family-heading)",
                    }}
                  >
                    Preparation Overview
                  </div>
                </div>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(135deg, #f0c94b 0%, #d4af37 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "#050505",
                  }}
                >
                  CNM
                </div>
              </div>

              {/* Category Rows */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                {reportCategories.map((cat, i) => (
                  <div
                    key={i}
                    className="pr-cat-row"
                    style={{
                      animationDelay: `${i * 60}ms`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.3rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.82rem",
                          fontFamily: "var(--font-family-heading)",
                          fontWeight: 600,
                          color: "var(--color-text)",
                        }}
                      >
                        {cat}
                      </span>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--color-text-muted)",
                          fontFamily: "var(--font-family-heading)",
                        }}
                      >
                        Assessed
                      </span>
                    </div>
                    {/* Track Bar — structural only, no fake % */}
                    <div
                      style={{
                        height: "5px",
                        borderRadius: "3px",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className={`pr-bar pr-bar-${i}`}
                        style={{
                          height: "100%",
                          borderRadius: "3px",
                          background:
                            "linear-gradient(90deg, rgba(212,175,55,0.5), rgba(212,175,55,0.2))",
                          width: "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Labels */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {[
                  { label: "Areas to Improve", color: "rgba(255,255,255,0.06)" },
                  { label: "Next Steps", color: "rgba(212,175,55,0.06)" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: item.color,
                      border:
                        i === 1
                          ? "1px solid rgba(212,175,55,0.2)"
                          : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-family-heading)",
                        fontWeight: 700,
                        color:
                          i === 1
                            ? "var(--color-gold-bright)"
                            : "var(--color-text-secondary)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Disclaimer label */}
              <p
                style={{
                  marginTop: "1.25rem",
                  fontSize: "0.72rem",
                  color: "var(--color-text-muted)",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                Illustrative structure — actual report is personalised to your preparation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ── Text column reveals left-to-right ── */
        .pr-text {
          will-change: transform, opacity;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pr-container.js-active:not(.is-visible) .pr-text {
          opacity: 0;
          transform: translateX(-28px);
        }

        .pr-container.js-active.is-visible .pr-text {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 80ms;
        }

        /* Header items */
        :global(.pr-heading .eyebrow),
        :global(.pr-heading .section-title),
        :global(.pr-heading .section-description) {
          will-change: transform, opacity;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pr-container.js-active:not(.is-visible) :global(.pr-heading .eyebrow) {
          opacity: 0;
          transform: translateY(12px);
        }
        .pr-container.js-active:not(.is-visible) :global(.pr-heading .section-title) {
          opacity: 0;
          transform: translateY(20px);
        }
        .pr-container.js-active:not(.is-visible)
          :global(.pr-heading .section-description) {
          opacity: 0;
          transform: translateY(14px);
        }
        .pr-container.js-active.is-visible :global(.pr-heading .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 120ms;
        }
        .pr-container.js-active.is-visible :global(.pr-heading .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }
        .pr-container.js-active.is-visible
          :global(.pr-heading .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 280ms;
        }

        /* Benefit items */
        .pr-benefit,
        .pr-mentor-note,
        .pr-cta {
          will-change: transform, opacity;
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pr-container.js-active:not(.is-visible) .pr-benefit,
        .pr-container.js-active:not(.is-visible) .pr-mentor-note,
        .pr-container.js-active:not(.is-visible) .pr-cta {
          opacity: 0;
          transform: translateX(-14px);
        }

        .pr-container.js-active.is-visible .pr-benefit,
        .pr-container.js-active.is-visible .pr-mentor-note,
        .pr-container.js-active.is-visible .pr-cta {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Report card: scale + opacity reveal ── */
        .pr-visual-wrap {
          will-change: transform, opacity;
          transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pr-container.js-active:not(.is-visible) .pr-visual-wrap {
          opacity: 0;
          transform: scale(0.93) translateY(20px);
        }

        .pr-container.js-active.is-visible .pr-visual-wrap {
          opacity: 1;
          transform: scale(1) translateY(0);
          transition-delay: 220ms;
        }

        /* Report card outer shell */
        .pr-card-outer {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border-gold);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(212, 175, 55, 0.08);
        }

        /* Category rows — staggered bar animation on card reveal */
        .pr-cat-row {
          animation: none;
        }

        .pr-container.js-active.is-visible .pr-cat-row {
          animation: catRowIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes catRowIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Animated bar fill on visible */
        .pr-bar {
          transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0ms;
        }

        .pr-container.js-active.is-visible .pr-bar-0 { width: 60%; transition-delay: 440ms; }
        .pr-container.js-active.is-visible .pr-bar-1 { width: 48%; transition-delay: 510ms; }
        .pr-container.js-active.is-visible .pr-bar-2 { width: 55%; transition-delay: 580ms; }
        .pr-container.js-active.is-visible .pr-bar-3 { width: 42%; transition-delay: 650ms; }
        .pr-container.js-active.is-visible .pr-bar-4 { width: 50%; transition-delay: 720ms; }
        .pr-container.js-active.is-visible .pr-bar-5 { width: 58%; transition-delay: 790ms; }

        @media (prefers-reduced-motion: reduce) {
          .pr-text,
          .pr-visual-wrap,
          .pr-benefit,
          .pr-mentor-note,
          .pr-cta,
          :global(.pr-heading .eyebrow),
          :global(.pr-heading .section-title),
          :global(.pr-heading .section-description),
          .pr-cat-row,
          .pr-bar {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
          }
          .pr-bar-0, .pr-bar-1, .pr-bar-2,
          .pr-bar-3, .pr-bar-4, .pr-bar-5 {
            width: 50% !important;
          }
        }
      `}</style>
    </section>
  );
}
