"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function ComparisonSection() {
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

  const comparisonRows = [
    { feature: "Visual Concept Lessons", cnm: true, other: false },
    { feature: "IITian-Mode Strategy", cnm: true, other: false },
    { feature: "Real-Time Doubt Support", cnm: true, other: false },
    { feature: "Progress Tracking Dashboard", cnm: true, other: false },
    { feature: "Topic-wise Microtests", cnm: true, other: false },
    { feature: "Animated Formula Sheets", cnm: true, other: false },
    { feature: "Weekly Personal Mentoring", cnm: true, other: false },
    { feature: "Clarity-First Teaching Style", cnm: true, other: false },
    { feature: "Motivational Audio Boosters", cnm: true, other: false },
    { feature: "Smart Revision Schedules", cnm: true, other: false },
    { feature: "Student-Only Online Community", cnm: true, other: false },
  ];

  return (
    <section id="comparison" ref={sectionRef} className="section section-alt" style={{ overflow: "hidden" }}>
      <div className={`container comparison-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ overflow: "hidden" }}>
        <SectionHeading
          eyebrow="THE UNFAIR ADVANTAGE"
          title="With CNM Learning, You're Always Steps Ahead of your competitors"
          description="See how CNM Learning outperforms conventional coaching and online courses across every dimension."
          centered
          className="comparison-header"
        />
        <div
          className="card comparison-table-card"
          style={{
            marginTop: "2rem",
            overflowX: "auto",
            padding: "0",
            transitionDelay: isMounted && isVisible ? "280ms" : "0ms",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: "600px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--color-border-gold)", backgroundColor: "rgba(212, 175, 55, 0.05)" }}>
                <th style={{ padding: "1rem 1.25rem", fontFamily: "var(--font-family-heading)", color: "var(--color-gold-bright)" }}>Features</th>
                <th style={{ padding: "1rem 1.25rem", fontFamily: "var(--font-family-heading)", color: "#ffffff", textAlign: "center" }}>CNM Learning</th>
                <th style={{ padding: "1rem 1.25rem", fontFamily: "var(--font-family-heading)", color: "var(--color-text-secondary)", textAlign: "center" }}>Other Courses</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className="comparison-row"
                  style={{
                    borderBottom: idx < comparisonRows.length - 1 ? "1px solid var(--color-border)" : "none",
                    transitionDelay: isMounted && isVisible ? `${350 + idx * 45}ms` : "0ms",
                  }}
                >
                  <td style={{ padding: "0.9rem 1.25rem", fontWeight: 600, color: "var(--color-text)" }}>{row.feature}</td>
                  <td style={{ padding: "0.9rem 1.25rem", color: "var(--color-gold-bright)", fontWeight: 800, textAlign: "center", fontSize: "1.1rem" }}>✓</td>
                  <td style={{ padding: "0.9rem 1.25rem", color: "var(--color-text-muted)", textAlign: "center", fontSize: "1.1rem" }}>✗</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        /* Header sequence */
        :global(.comparison-header .eyebrow),
        :global(.comparison-header .section-title),
        :global(.comparison-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .comparison-container.js-active:not(.is-visible) :global(.comparison-header .eyebrow) {
          opacity: 0;
          transform: translateY(14px);
        }

        .comparison-container.js-active:not(.is-visible) :global(.comparison-header .section-title) {
          opacity: 0;
          transform: translateY(22px);
        }

        .comparison-container.js-active:not(.is-visible) :global(.comparison-header .section-description) {
          opacity: 0;
          transform: translateY(16px);
        }

        .comparison-container.js-active.is-visible :global(.comparison-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .comparison-container.js-active.is-visible :global(.comparison-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .comparison-container.js-active.is-visible :global(.comparison-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Table Card & Sequential Row Reveal */
        .comparison-table-card,
        .comparison-row {
          will-change: transform, opacity;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .comparison-container.js-active:not(.is-visible) .comparison-table-card {
          opacity: 0;
          transform: translateY(20px);
        }

        .comparison-container.js-active:not(.is-visible) .comparison-row {
          opacity: 0;
          transform: translateY(8px);
        }

        .comparison-container.js-active.is-visible .comparison-table-card {
          opacity: 1;
          transform: translateY(0);
        }

        .comparison-container.js-active.is-visible .comparison-row {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.comparison-header .eyebrow),
          :global(.comparison-header .section-title),
          :global(.comparison-header .section-description),
          .comparison-table-card,
          .comparison-row {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
