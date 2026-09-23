"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import PerformanceDiagnosticsBackground from "../ui/PerformanceDiagnosticsBackground";

export default function ProblemLeaksSection() {
  const [resolved, setResolved] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [inView, setInView] = useState(false);
  const [visibleCardCount, setVisibleCardCount] = useState(0);

  const sectionRef = useRef(null);

  // Scroll Trigger via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sequential card arrival stagger when section enters view
  useEffect(() => {
    if (!inView) return;

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setVisibleCardCount(count);
      if (count >= 5) {
        clearInterval(interval);
        setTimeout(() => setResolved(true), 400);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [inView]);



  const leaks = [
    {
      title: "FOCUS",
      explanation: "Your ability to sustain deep work.",
      metric: "38%",
      badge: "NEEDS ATTENTION",
      statusColor: "var(--color-status-amber)",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f0c94b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-target">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="#f0c94b" />
        </svg>
      ),
    },
    {
      title: "ACCURACY",
      explanation: "Precision without unforced errors.",
      metric: "50%",
      badge: "CRITICAL LEAK",
      statusColor: "var(--color-status-red)",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-precision">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="6" x2="12" y2="18" />
          <line x1="6" y1="12" x2="18" y2="12" />
        </svg>
      ),
    },
    {
      title: "REVISION",
      explanation: "Retention over 14-day recall intervals.",
      metric: "78%",
      badge: "RETENTION OK",
      statusColor: "var(--color-status-green)",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-refresh">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      title: "TIME",
      explanation: "Pacing & question selection speed.",
      metric: "68%",
      badge: "PACING LEAK",
      statusColor: "var(--color-status-amber)",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-clock">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "CONFIDENCE",
      explanation: "Stability under high exam pressure.",
      metric: "68%",
      badge: "PRESSURE RISK",
      statusColor: "var(--color-status-red)",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-signal">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
        </svg>
      ),
    },
  ];

  const AUDIT_URL = "https://cnm-online-audit.vercel.app/";

  return (
    <section
      id="problem-leaks"
      ref={sectionRef}
      style={{
        padding: "5.5rem 0",
        backgroundColor: "#070709",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Performance Data Field Live Background */}
      <PerformanceDiagnosticsBackground />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Heading */}
        <SectionHeading
          eyebrow="PERFORMANCE DIAGNOSTICS"
          title="You Don't Need Another Timetable. You Need to Know What's Actually Stopping You."
          description="Most students don't have a knowledge problem. They have a performance execution leak."
          center={true}
        />

        {/* Faint Connecting Network Signal Rail behind cards */}
        <div
          style={{
            position: "relative",
            marginTop: "3.5rem",
          }}
        >
          {/* Background Signal Rail with Traveling Data Pulse */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "2%",
              right: "2%",
              height: "2px",
              background: "linear-gradient(90deg, rgba(212, 175, 55, 0.08), rgba(56, 189, 248, 0.25), rgba(212, 175, 55, 0.08))",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            {/* Active Traveling Pulse */}
            <div
              className="signal-rail-pulse"
              style={{
                position: "absolute",
                top: "-3px",
                width: "40px",
                height: "8px",
                borderRadius: "4px",
                background: "linear-gradient(90deg, transparent, #f0c94b, transparent)",
                boxShadow: "0 0 10px #f0c94b",
              }}
            />
          </div>

          {/* 5 Diagnostic Sensor Cards - One-by-One Staggered Entrance */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {leaks.map((leak, idx) => {
              const isVisible = visibleCardCount > idx;
              const isHovered = hoveredIdx === idx;
              const isFromLeft = idx % 2 === 0;

              return (
                <div
                  key={leak.title}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    backgroundColor: isHovered ? "rgba(20, 20, 25, 0.98)" : "rgba(12, 12, 15, 0.92)",
                    border: isHovered ? `2px solid ${leak.statusColor}` : "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "1rem",
                    backdropFilter: "blur(8px)",
                    transition:
                      "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, filter 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                    opacity: isVisible ? 1 : 0,
                    filter: isVisible ? "blur(0px)" : "blur(8px)",
                    transform: isVisible
                      ? isHovered
                        ? "translate(0, -6px) scale(1.02)"
                        : "translate(0, 0) scale(1)"
                      : isFromLeft
                      ? "translate(-30px, 15px) scale(0.96)"
                      : "translate(30px, 15px) scale(0.96)",
                    boxShadow: isHovered
                      ? `0 12px 30px rgba(0, 0, 0, 0.8), 0 0 20px ${leak.statusColor}30`
                      : "0 4px 15px rgba(0, 0, 0, 0.5)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Top Scan Line Highlight on Hover */}
                  {isHovered && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        backgroundColor: leak.statusColor,
                        boxShadow: `0 0 10px ${leak.statusColor}`,
                      }}
                    />
                  )}

                  <div>
                    {/* Header Label & Icon */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          letterSpacing: "0.1em",
                          color: "var(--color-gold-bright)",
                        }}
                      >
                        SENSOR 0{idx + 1}
                      </span>

                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid var(--color-border-subtle)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {leak.icon}
                      </div>
                    </div>

                    {/* Metric Name & Explanation */}
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 800,
                        color: "#ffffff",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {leak.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.4,
                      }}
                    >
                      {leak.explanation}
                    </p>
                  </div>

                  {/* Metric Value & Sensor Badge */}
                  <div
                    style={{
                      paddingTop: "0.85rem",
                      borderTop: "1px solid var(--color-border-subtle)",
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: isVisible && resolved ? leak.statusColor : "var(--color-text-muted)",
                        transition: "color 0.4s ease",
                      }}
                    >
                      {isVisible && resolved ? leak.metric : "--"}
                    </span>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 800,
                        color: leak.statusColor,
                        backgroundColor: `${leak.statusColor}15`,
                        padding: "0.2rem 0.45rem",
                        borderRadius: "4px",
                        border: `1px solid ${leak.statusColor}40`,
                        opacity: isVisible ? 1 : 0.4,
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      {leak.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Audit CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-filled"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              backgroundColor: "var(--color-gold-bright)",
              color: "#050505",
              fontWeight: 800,
              fontSize: "0.95rem",
              padding: "0.85rem 1.75rem",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(212, 175, 55, 0.35)",
            }}
          >
            IDENTIFY MY BIGGEST PERFORMANCE LEAK →
          </a>
        </div>
      </div>

      <style jsx>{`
        .signal-rail-pulse {
          animation: pulseTravel 4s ease-in-out infinite;
        }

        @keyframes pulseTravel {
          0% {
            left: 0%;
            opacity: 0.2;
          }
          50% {
            left: 95%;
            opacity: 1;
          }
          100% {
            left: 0%;
            opacity: 0.2;
          }
        }

        :global(.icon-target) {
          animation: pulseTarget 3s ease-in-out infinite alternate;
        }
        :global(.icon-precision) {
          animation: spinPrecision 10s linear infinite;
        }
        :global(.icon-refresh) {
          animation: rotateRefresh 6s linear infinite;
        }
        :global(.icon-clock) {
          animation: pulseClock 2s ease-in-out infinite alternate;
        }
        :global(.icon-signal) {
          animation: bounceSignal 2.5s ease-in-out infinite alternate;
        }

        @keyframes pulseTarget {
          0% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1.08);
          }
        }
        @keyframes spinPrecision {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes rotateRefresh {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes pulseClock {
          0% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes bounceSignal {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-3px);
          }
        }
      `}</style>
    </section>
  );
}

