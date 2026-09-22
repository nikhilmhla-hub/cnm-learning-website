"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function AudienceSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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
        threshold: 0.08,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const tabs = [
    { label: "Students", icon: "🎯" },
    { label: "Parents", icon: "👨‍👩‍👧" },
    { label: "Schools & Institutes", icon: "🏫" },
  ];

  const studentCards = [
    {
      badge: "Class 11 & 12",
      title: "JEE Aspirants",
      desc: "Master Physics, Chemistry & Maths with 3D visual learning engineered for IIT-JEE - from fundamentals to the most advanced problems.",
    },
    {
      badge: "Droppers",
      title: "Re-Appearing Students",
      desc: "Targeted fast-track programmes to eliminate your exact weak spots, rebuild confidence, and maximize your rank the second time around.",
    },
    {
      badge: "Beginner",
      title: "Starting from Scratch",
      desc: "No prior coaching required. CNM's visual-first approach builds rock-solid foundations so even complete beginners understand instantly.",
    },
    {
      badge: "Advanced",
      title: "Top Rankers in the Making",
      desc: "Already strong? Push further. IITian-mode strategy sessions, high-yield mock tests, and conceptual edge training to break AIR 500.",
    },
    {
      badge: "NEET Track",
      title: "Biology + PCM Combo",
      desc: "Structured courses for students pursuing both IIT-JEE and NEET, with dedicated Physics & Chemistry content aligned to both exams.",
    },
  ];

  const parentPoints = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Track Your Child's Progress",
      desc: "Real-time performance reports, weekly assessments, and concept mastery tracking - so you always know where your child stands.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      title: "Mentored, Not Just Taught",
      desc: "Weekly personal mentoring sessions ensure your child doesn't just consume content - they're guided, motivated, and strategically coached.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Proven Visual Methodology",
      desc: "CNM's 3D animated approach is engineered to make complex JEE concepts truly stick - giving your child a lasting conceptual edge over rote learners.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Safe, Structured Environment",
      desc: "No distractions, no social media loops. A purpose-built learning platform that keeps your child focused on the one goal that matters.",
    },
  ];

  const institutePoints = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: "Upgrade Your Teaching Arsenal",
      desc: "Integrate CNM's 3D animated content library into your classroom - immediately elevating the quality of instruction without replacing your faculty.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Kiosk & Digital Classroom Ready",
      desc: "CNM's content is designed for large-screen kiosk deployment and interactive classroom boards - plug-and-play visual learning at scale.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Student Performance Dashboard",
      desc: "Institute-level analytics - monitor batch performance, identify struggling students early, and make data-driven teaching decisions.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "White-Label Partnership Options",
      desc: "Partner with CNM to brand and deploy our complete learning system under your institution's identity. Contact us to explore partnership models.",
    },
  ];

  return (
    <section id="audience" ref={sectionRef} className="section section-alt" style={{ overflow: "hidden" }}>
      <div
        className={`container audience-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`}
        style={{ overflow: "hidden" }}
      >
        <SectionHeading
          eyebrow="WHO IS CNM LEARNING FOR?"
          title="Built for Every Stage of the JEE Journey"
          description="Whether you're a student, a parent seeking clarity, or an institution ready to transform - CNM Learning is designed for you."
          centered
          className="audience-header"
        />

        {/* Tab Switcher */}
        <div
          className="tab-row"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            marginTop: "2.5rem",
            flexWrap: "wrap",
            transitionDelay: isMounted && isVisible ? "240ms" : "0ms",
          }}
        >
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`tab-btn ${activeTab === i ? "tab-active" : ""}`}
              aria-pressed={activeTab === i}
            >
              <span style={{ fontSize: "1.1rem" }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* === STUDENTS PANEL === */}
        {activeTab === 0 && (
          <div
            className="tab-panel"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
              marginTop: "2rem",
            }}
          >
            {studentCards.map((card, idx) => (
              <div
                key={idx}
                className="card card-interactive audience-panel-card"
                style={{
                  padding: "1.75rem 1.5rem",
                  animationDelay: `${idx * 80}ms`,
                }}
              >
                <span
                  className="badge badge-accent"
                  style={{ marginBottom: "1rem", fontSize: "0.72rem" }}
                >
                  {card.badge}
                </span>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "0.5rem",
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.91rem", color: "var(--color-text-secondary)" }}>
                  {card.desc}
                </p>
              </div>
            ))}
            <div
              className="card"
              style={{
                padding: "1.75rem 1.5rem",
                borderColor: "var(--color-border-gold)",
                backgroundColor: "var(--color-surface-gold)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "1rem",
                animationDelay: "400ms",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--color-gold-bright)",
                  lineHeight: 1.45,
                }}
              >
                Your path to IIT starts the moment you stop learning the old way.
              </p>
              <Button href="#pricing" variant="primary" style={{ fontSize: "0.88rem" }}>
                Enroll Now
              </Button>
            </div>
          </div>
        )}

        {/* === PARENTS PANEL === */}
        {activeTab === 1 && (
          <div
            className="tab-panel"
            style={{
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                textAlign: "center",
                maxWidth: "680px",
                margin: "0 auto 2rem auto",
                fontSize: "1.05rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.65,
              }}
            >
              Your child's IIT dream deserves more than outdated teaching. CNM Learning gives
              you full visibility into their preparation while they get the clarity they've
              always needed.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {parentPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="card card-interactive audience-panel-card"
                  style={{
                    padding: "1.75rem 1.5rem",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    animationDelay: `${idx * 80}ms`,
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "var(--color-gold-soft)",
                      border: "1px solid var(--color-border-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-gold-bright)",
                      flexShrink: 0,
                    }}
                  >
                    {pt.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {pt.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Button href="#contact" variant="secondary">
                Talk to Us About Your Child's Preparation
              </Button>
            </div>
          </div>
        )}

        {/* === SCHOOLS & INSTITUTES PANEL === */}
        {activeTab === 2 && (
          <div className="tab-panel" style={{ marginTop: "2rem" }}>
            <p
              style={{
                textAlign: "center",
                maxWidth: "700px",
                margin: "0 auto 2rem auto",
                fontSize: "1.05rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.65,
              }}
            >
              Forward-thinking coaching institutes and schools are already replacing static
              whiteboards with CNM's immersive visual learning system. Join them.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {institutePoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="card card-interactive audience-panel-card"
                  style={{
                    padding: "1.75rem 1.5rem",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    animationDelay: `${idx * 80}ms`,
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "var(--color-gold-soft)",
                      border: "1px solid var(--color-border-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-gold-bright)",
                      flexShrink: 0,
                    }}
                  >
                    {pt.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {pt.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "2rem",
                padding: "1.75rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border-gold)",
                backgroundColor: "var(--color-surface-gold)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--color-gold-bright)",
                  marginBottom: "1rem",
                }}
              >
                Interested in deploying CNM Learning in your institute?
              </p>
              <Button href="#contact" variant="primary">
                Enquire About Institutional Access
              </Button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Header sequence */
        :global(.audience-header .eyebrow),
        :global(.audience-header .section-title),
        :global(.audience-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .audience-container.js-active:not(.is-visible) :global(.audience-header .eyebrow) {
          opacity: 0;
          transform: translateY(14px);
        }

        .audience-container.js-active:not(.is-visible) :global(.audience-header .section-title) {
          opacity: 0;
          transform: translateY(22px);
        }

        .audience-container.js-active:not(.is-visible) :global(.audience-header .section-description) {
          opacity: 0;
          transform: translateY(16px);
        }

        .audience-container.js-active.is-visible :global(.audience-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .audience-container.js-active.is-visible :global(.audience-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .audience-container.js-active.is-visible :global(.audience-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Tab row */
        .tab-row {
          will-change: transform, opacity;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .audience-container.js-active:not(.is-visible) .tab-row {
          opacity: 0;
          transform: translateY(18px);
        }

        .audience-container.js-active.is-visible .tab-row {
          opacity: 1;
          transform: translateY(0);
        }

        /* Tab button base */
        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-family-heading);
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.7rem 1.4rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background-color: rgba(255, 255, 255, 0.03);
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .tab-btn:hover {
          border-color: var(--color-border-gold);
          color: var(--color-gold-bright);
          background-color: var(--color-gold-soft);
        }

        .tab-active {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.18) 0%, rgba(212, 175, 55, 0.08) 100%);
          border-color: var(--color-border-gold-bright);
          color: var(--color-gold-bright);
          box-shadow: 0 0 14px rgba(212, 175, 55, 0.12);
        }

        /* Panel card entrance animation */
        .tab-panel {
          animation: panelFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes panelFadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .audience-panel-card {
          animation: cardSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: var(--card-delay, 0ms);
        }

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.audience-header .eyebrow),
          :global(.audience-header .section-title),
          :global(.audience-header .section-description),
          .tab-row,
          .tab-panel,
          .audience-panel-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
