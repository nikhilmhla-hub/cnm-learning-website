"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function ExperienceSection() {
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
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const transformations = [
    {
      before: "Staring at static blackboard diagrams",
      after: "Experiencing full 3D animated concept breakdowns",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      before: "Memorising formulas without understanding",
      after: "Visualising WHY formulas work - instantly",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.65 2.8 1.5 3.5.76.76 1.23 1.52 1.41 2.5h6.18z" />
        </svg>
      ),
    },
    {
      before: "Guessing where you go wrong in tests",
      after: "Pinpointing your exact weak spots with report cards",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      before: "Preparing alone with no strategy",
      after: "IITian mentors in your corner every week",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="section section-elevated" style={{ overflow: "hidden" }}>
      <div
        className={`container exp-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`}
        style={{ overflow: "hidden" }}
      >
        {/* Section Header */}
        <div className="exp-header" style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="THE CNM TRANSFORMATION"
            title="This Is What Changes When You Learn with CNM"
            description="Students don't just learn differently with CNM - they think differently. Here's the shift that happens once you switch to visual-first learning."
            centered
            className="exp-heading"
          />
        </div>

        {/* Before / After Transformation Grid */}
        <div
          className="exp-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginTop: "2.5rem",
          }}
        >
          {transformations.map((item, idx) => (
            <div
              key={idx}
              className="card card-interactive exp-card"
              style={{
                padding: "1.75rem 1.5rem",
                transitionDelay: isMounted && isVisible ? `${280 + idx * 100}ms` : "0ms",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "var(--color-gold-soft)",
                    border: "1px solid var(--color-border-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-gold-bright)",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Before */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  marginBottom: "0.85rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  ✗
                </span>
                <span
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.55,
                    textDecoration: "line-through",
                    textDecorationColor: "rgba(119, 119, 130, 0.4)",
                  }}
                >
                  {item.before}
                </span>
              </div>

              {/* After */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(212, 175, 55, 0.06)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-gold-bright)",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "#ffffff",
                    fontWeight: 600,
                    lineHeight: 1.55,
                  }}
                >
                  {item.after}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement Bar */}
        <div
          className="exp-statement"
          style={{
            marginTop: "2.5rem",
            padding: "1.5rem 2rem",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border-gold)",
            backgroundColor: "var(--color-surface-gold)",
            textAlign: "center",
            transitionDelay: isMounted && isVisible ? "720ms" : "0ms",
          }}
        >
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--color-gold-bright)",
              fontWeight: 700,
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            CNM Learning doesn't just prepare you for JEE - it rewires how you understand
            Physics, Chemistry, and Mathematics forever.
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Header animation */
        :global(.exp-heading .eyebrow),
        :global(.exp-heading .section-title),
        :global(.exp-heading .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .exp-container.js-active:not(.is-visible) :global(.exp-heading .eyebrow) {
          opacity: 0;
          transform: translateY(14px);
        }

        .exp-container.js-active:not(.is-visible) :global(.exp-heading .section-title) {
          opacity: 0;
          transform: translateY(22px);
        }

        .exp-container.js-active:not(.is-visible) :global(.exp-heading .section-description) {
          opacity: 0;
          transform: translateY(16px);
        }

        .exp-container.js-active.is-visible :global(.exp-heading .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .exp-container.js-active.is-visible :global(.exp-heading .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .exp-container.js-active.is-visible :global(.exp-heading .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Cards staggered reveal */
        .exp-card {
          will-change: transform, opacity;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .exp-container.js-active:not(.is-visible) .exp-card {
          opacity: 0;
          transform: translateY(28px) scale(0.97);
        }

        .exp-container.js-active.is-visible .exp-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .exp-card:hover {
          transform: translateY(-4px) scale(1) !important;
        }

        /* Statement bar reveal */
        .exp-statement {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .exp-container.js-active:not(.is-visible) .exp-statement {
          opacity: 0;
          transform: translateY(20px);
        }

        .exp-container.js-active.is-visible .exp-statement {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.exp-heading .eyebrow),
          :global(.exp-heading .section-title),
          :global(.exp-heading .section-description),
          .exp-card,
          .exp-statement {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
