"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function StudentProgressSection() {
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

  const capabilities = [
    {
      label: "Today's Focus",
      desc: "See what needs your attention today and stay focused on the next task.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      label: "Study Plan",
      desc: "Keep your preparation organised around your planned learning and practice.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      label: "Progress",
      desc: "Track your preparation over time instead of relying only on how you feel.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      label: "Practice & Revision",
      desc: "Keep practice and revision connected to your overall preparation.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      label: "Weak Areas",
      desc: "See the areas that need more attention so they don't keep getting overlooked.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  /* Mini dashboard panel rows - structural labels only, zero fake data */
  const panelRows = [
    { title: "Today's Focus", tag: "Active", tagGold: true },
    { title: "Study Plan", tag: "Organised", tagGold: false },
    { title: "Practice & Revision", tag: "Connected", tagGold: false },
    { title: "Progress", tag: "Tracked", tagGold: false },
    { title: "Weak Areas", tag: "Visible", tagGold: true },
  ];

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{ overflow: "hidden" }}
    >
      <div
        className={`container sp-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`}
        style={{ overflow: "hidden" }}
      >
        {/* Section header */}
        <SectionHeading
          eyebrow="STUDENT DASHBOARD"
          title="Everything You Need to Keep Your Preparation on Track"
          description="Your CNM dashboard brings the important parts of your preparation together so you can see what to study, what you have completed, and where you need to improve."
          centered
          className="sp-heading"
        />

        {/* Main two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            marginTop: "2.5rem",
            alignItems: "flex-start",
          }}
        >
          {/* Left: capability cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="sp-cap-card card card-interactive"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1.2rem 1.3rem",
                  transitionDelay:
                    isMounted && isVisible ? `${320 + i * 80}ms` : "0ms",
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
                  {cap.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "0.3rem",
                      fontFamily: "var(--font-family-heading)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cap.label}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: dashboard interface visual */}
          <div className="sp-visual-wrap">
            <div className="sp-dashboard-card">
              {/* Dashboard header bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "1rem",
                  marginBottom: "1.25rem",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "6px",
                      background: "linear-gradient(135deg, #f0c94b 0%, #d4af37 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      color: "#050505",
                    }}
                  >
                    CNM
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-family-heading)",
                      fontWeight: 700,
                      color: "var(--color-text)",
                    }}
                  >
                    Student Dashboard
                  </span>
                </div>
                {/* 3 dots decoration */}
                <div style={{ display: "flex", gap: "5px" }}>
                  {[0, 1, 2].map((d) => (
                    <div
                      key={d}
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor:
                          d === 0
                            ? "var(--color-gold-bright)"
                            : "rgba(255,255,255,0.15)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Panel rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {panelRows.map((row, i) => (
                  <div
                    key={i}
                    className={`sp-panel-row sp-panel-row-${i}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.85rem 1rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: row.tagGold
                        ? "rgba(212,175,55,0.05)"
                        : "rgba(255,255,255,0.025)",
                      border: row.tagGold
                        ? "1px solid rgba(212,175,55,0.18)"
                        : "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-family-heading)",
                        fontWeight: 600,
                        color: row.tagGold ? "var(--color-text)" : "var(--color-text-secondary)",
                      }}
                    >
                      {row.title}
                    </span>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontFamily: "var(--font-family-heading)",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: row.tagGold
                          ? "var(--color-gold-bright)"
                          : "var(--color-text-muted)",
                        backgroundColor: row.tagGold
                          ? "rgba(212,175,55,0.1)"
                          : "rgba(255,255,255,0.04)",
                        border: row.tagGold
                          ? "1px solid rgba(212,175,55,0.25)"
                          : "1px solid rgba(255,255,255,0.06)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "var(--radius-full)",
                      }}
                    >
                      {row.tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <p
                style={{
                  marginTop: "1.25rem",
                  fontSize: "0.72rem",
                  color: "var(--color-text-muted)",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                Illustrative layout - your dashboard reflects your actual preparation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ── Section header ── */
        :global(.sp-heading .eyebrow),
        :global(.sp-heading .section-title),
        :global(.sp-heading .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sp-container.js-active:not(.is-visible) :global(.sp-heading .eyebrow) {
          opacity: 0;
          transform: translateY(12px);
        }
        .sp-container.js-active:not(.is-visible) :global(.sp-heading .section-title) {
          opacity: 0;
          transform: translateY(20px);
        }
        .sp-container.js-active:not(.is-visible)
          :global(.sp-heading .section-description) {
          opacity: 0;
          transform: translateY(14px);
        }
        .sp-container.js-active.is-visible :global(.sp-heading .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }
        .sp-container.js-active.is-visible :global(.sp-heading .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }
        .sp-container.js-active.is-visible
          :global(.sp-heading .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* ── Capability cards: stagger up ── */
        .sp-cap-card {
          will-change: transform, opacity;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .sp-container.js-active:not(.is-visible) .sp-cap-card {
          opacity: 0;
          transform: translateY(22px);
        }

        .sp-container.js-active.is-visible .sp-cap-card {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Dashboard visual: horizontal slide reveal ── */
        .sp-visual-wrap {
          will-change: transform, opacity;
          transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sp-container.js-active:not(.is-visible) .sp-visual-wrap {
          opacity: 0;
          transform: translateX(36px);
        }

        .sp-container.js-active.is-visible .sp-visual-wrap {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 180ms;
        }

        .sp-dashboard-card {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border-gold);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6),
            0 0 24px rgba(212, 175, 55, 0.07);
        }

        /* Panel rows: masked cascade reveal */
        .sp-panel-row {
          will-change: transform, opacity;
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sp-container.js-active:not(.is-visible) .sp-panel-row {
          opacity: 0;
          transform: translateX(14px);
        }

        .sp-container.js-active.is-visible .sp-panel-row-0 { opacity: 1; transform: translateX(0); transition-delay: 380ms; }
        .sp-container.js-active.is-visible .sp-panel-row-1 { opacity: 1; transform: translateX(0); transition-delay: 450ms; }
        .sp-container.js-active.is-visible .sp-panel-row-2 { opacity: 1; transform: translateX(0); transition-delay: 520ms; }
        .sp-container.js-active.is-visible .sp-panel-row-3 { opacity: 1; transform: translateX(0); transition-delay: 590ms; }
        .sp-container.js-active.is-visible .sp-panel-row-4 { opacity: 1; transform: translateX(0); transition-delay: 660ms; }

        @media (prefers-reduced-motion: reduce) {
          :global(.sp-heading .eyebrow),
          :global(.sp-heading .section-title),
          :global(.sp-heading .section-description),
          .sp-cap-card,
          .sp-visual-wrap,
          .sp-panel-row {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
