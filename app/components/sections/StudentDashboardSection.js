"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function StudentDashboardSection() {
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

  const dashboardFeatures = [
    {
      title: "Today's Focus",
      desc: "Clear daily mission specifying exact concept videos, problem sets, and revision blocks to complete.",
      icon: "🎯",
    },
    {
      title: "Structured Study Plan",
      desc: "Organized roadmap aligning Class 11 & 12 syllabus timelines with exam targets.",
      icon: "📅",
    },
    {
      title: "Real-Time Progress Tracking",
      desc: "Instant visual tracking across Physics, Chemistry, and Mathematics modules.",
      icon: "📊",
    },
    {
      title: "Practice & Revision Queue",
      desc: "Automated queue prioritizing topics needing review based on microtest performance.",
      icon: "🔄",
    },
    {
      title: "Weak Area Spotlight",
      desc: "Targeted focus on specific problem patterns to eliminate friction before exam day.",
      icon: "⚡",
    },
    {
      title: "Next Recommended Action",
      desc: "Always know your exact next step to maintain peak preparation momentum.",
      icon: "🚀",
    },
  ];

  return (
    <section id="dashboard" ref={sectionRef} className="section" style={{ backgroundColor: "var(--color-background)", padding: "5rem 0", overflow: "hidden" }}>
      <div className={`container dashboard-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ overflow: "hidden" }}>
        <SectionHeading
          eyebrow="STUDENT DASHBOARD"
          title="One Dashboard for Your Entire Preparation"
          description="CNM brings your learning, planning, practice and progress into one place so you can see what needs attention and what comes next."
          centered
          className="dashboard-header"
        />

        {/* Core Message Card */}
        <div
          className="dashboard-quote-box"
          style={{
            maxWidth: "840px",
            margin: "0 auto 3rem auto",
            backgroundColor: "var(--color-surface-gold)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem 2rem",
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
            transitionDelay: isMounted && isVisible ? "250ms" : "0ms",
          }}
        >
          <p style={{ fontSize: "1.05rem", color: "var(--color-text)", lineHeight: "1.6" }}>
            "Instead of keeping your preparation scattered across notebooks, apps and memory, CNM gives you a clearer place to see what you're doing, what you've completed and what needs attention."
          </p>
        </div>

        {/* Dashboard Product UI Preview Showcase */}
        <div
          className="dashboard-product-showcase"
          style={{
            backgroundColor: "#0a0a0d",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(212, 175, 55, 0.12)",
            marginBottom: "3.5rem",
            transitionDelay: isMounted && isVisible ? "380ms" : "0ms",
          }}
        >
          {/* Mock Window Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ff5f56" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#27c93f" }} />
              <span style={{ marginLeft: "0.75rem", fontSize: "0.85rem", color: "var(--color-text-secondary)", fontWeight: 600 }}>
                CNM Student Workspace Preview
              </span>
            </div>
            <span style={{ fontSize: "0.75rem", color: "var(--color-gold)", fontWeight: 700, letterSpacing: "0.05em" }}>
              LIVE PREPARATION HUB
            </span>
          </div>

          {/* Grid Layout of Dashboard Modules */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {/* Widget 1: Today's Focus */}
            <div
              style={{
                backgroundColor: "#121216",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
                background: "linear-gradient(145deg, #121216 0%, #1a170e 100%)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--color-gold-bright)", fontWeight: 700 }}>TODAY'S FOCUS</span>
                <span style={{ fontSize: "0.7rem", color: "#27c93f", backgroundColor: "rgba(39, 201, 63, 0.15)", padding: "0.15rem 0.45rem", borderRadius: "4px" }}>ACTIVE</span>
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>
                Physics: Rotational Dynamics
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", marginBottom: "0.85rem" }}>
                90 Min Concept Video & Problem Set
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.8rem" }}>
                <span style={{ color: "var(--color-gold)" }}>Progress: 65% Completed</span>
              </div>
            </div>

            {/* Widget 2: Preparation Progress */}
            <div
              style={{
                backgroundColor: "#121216",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--color-gold)", fontWeight: 700 }}>PCM SYLLABUS PROGRESS</span>
                <span style={{ fontSize: "0.75rem", color: "#ffffff", fontWeight: 700 }}>72% Overall</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.8rem" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-text-secondary)", marginBottom: "0.2rem" }}>
                    <span>Physics</span>
                    <span>78%</span>
                  </div>
                  <div style={{ width: "100%", height: "4px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px" }}>
                    <div style={{ width: "78%", height: "100%", backgroundColor: "var(--color-gold)" }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-text-secondary)", marginBottom: "0.2rem" }}>
                    <span>Chemistry</span>
                    <span>68%</span>
                  </div>
                  <div style={{ width: "100%", height: "4px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px" }}>
                    <div style={{ width: "68%", height: "100%", backgroundColor: "var(--color-gold)" }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-text-secondary)", marginBottom: "0.2rem" }}>
                    <span>Maths</span>
                    <span>70%</span>
                  </div>
                  <div style={{ width: "100%", height: "4px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px" }}>
                    <div style={{ width: "70%", height: "100%", backgroundColor: "var(--color-gold)" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Widget 3: Weak Areas & Revision */}
            <div
              style={{
                backgroundColor: "#121216",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--color-gold)", fontWeight: 700 }}>REVISION QUEUE</span>
                <span style={{ fontSize: "0.7rem", color: "#f0c94b" }}>3 TOPICS DUE</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Electrostatics Formula Sheet</span>
                  <span style={{ color: "var(--color-gold)" }}>High Priority</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Chemical Kinetics Microtest</span>
                  <span style={{ color: "var(--color-text-muted)" }}>Medium</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Complex Numbers 3D Visual</span>
                  <span style={{ color: "var(--color-text-muted)" }}>Scheduled</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {dashboardFeatures.map((feat, index) => (
            <div
              key={index}
              className="dashboard-feature-card"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem",
                transition: "all 0.2s ease",
                transitionDelay: isMounted && isVisible ? `${520 + index * 90}ms` : "0ms",
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{feat.icon}</div>
              <h4 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                {feat.title}
              </h4>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="dashboard-cta-box"
          style={{
            textAlign: "center",
            transitionDelay: isMounted && isVisible ? "1060ms" : "0ms",
          }}
        >
          <Button href="#pricing" variant="primary" style={{ padding: "0.95rem 2.25rem", fontSize: "1rem" }}>
            Explore CNM Courses & Dashboard Access
          </Button>
        </div>
      </div>

      <style jsx>{`
        /* Header sequence */
        :global(.dashboard-header .eyebrow),
        :global(.dashboard-header .section-title),
        :global(.dashboard-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dashboard-container.js-active:not(.is-visible) :global(.dashboard-header .eyebrow) {
          opacity: 0;
          transform: translateY(14px);
        }

        .dashboard-container.js-active:not(.is-visible) :global(.dashboard-header .section-title) {
          opacity: 0;
          transform: translateY(22px);
        }

        .dashboard-container.js-active:not(.is-visible) :global(.dashboard-header .section-description) {
          opacity: 0;
          transform: translateY(16px);
        }

        .dashboard-container.js-active.is-visible :global(.dashboard-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .dashboard-container.js-active.is-visible :global(.dashboard-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .dashboard-container.js-active.is-visible :global(.dashboard-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Core Quote Box (Fade in from top) */
        .dashboard-quote-box {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dashboard-container.js-active:not(.is-visible) .dashboard-quote-box {
          opacity: 0;
          transform: translateY(-15px) scale(0.98);
        }

        .dashboard-container.js-active.is-visible .dashboard-quote-box {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Dashboard Product Workspace Showcase (Horizontal slide reveal from left) */
        .dashboard-product-showcase {
          will-change: transform, opacity;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dashboard-container.js-active:not(.is-visible) .dashboard-product-showcase {
          opacity: 0;
          transform: translateX(-40px) scale(0.98);
        }

        .dashboard-container.js-active.is-visible .dashboard-product-showcase {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        /* 6 Feature Cards & CTA Box (Upward rise + scale) */
        .dashboard-feature-card,
        .dashboard-cta-box {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dashboard-container.js-active:not(.is-visible) .dashboard-feature-card,
        .dashboard-container.js-active:not(.is-visible) .dashboard-cta-box {
          opacity: 0;
          transform: translateY(25px) scale(0.97);
        }

        .dashboard-container.js-active.is-visible .dashboard-feature-card,
        .dashboard-container.js-active.is-visible .dashboard-cta-box {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        @media (max-width: 767px) {
          .dashboard-container.js-active:not(.is-visible) .dashboard-product-showcase {
            transform: translateX(-20px) scale(0.98);
          }
          .dashboard-container.js-active:not(.is-visible) .dashboard-feature-card {
            transform: translateY(16px) scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.dashboard-header .eyebrow),
          :global(.dashboard-header .section-title),
          :global(.dashboard-header .section-description),
          .dashboard-quote-box,
          .dashboard-product-showcase,
          .dashboard-feature-card,
          .dashboard-cta-box {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
