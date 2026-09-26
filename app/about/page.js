"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";
import AboutLiveBackground from "../components/ui/AboutLiveBackground";

const coreComparisonCards = [
  {
    id: "comp-1",
    tag: "THE TRADITIONAL APPROACH",
    title: "Vague Effort & Unexamined Leaks",
    desc: "Aspirants study for 8–12 hours daily, yet test scores remain stagnant. Why? Unexamined execution leaks (careless calculation slips, formula decay, time pressure panic) continually drain marks without an empirical feedback loop.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="4 4" fill="rgba(239, 68, 68, 0.05)" />
        <path d="M16 16L32 32M32 16L16 32" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    border: "rgba(239, 68, 68, 0.25)",
    badgeColor: "#EF4444",
  },
  {
    id: "comp-2",
    tag: "THE CNM SYSTEM APPROACH",
    title: "Empirical Telemetry & Error Autopsies",
    desc: "CNM System Labs replaces guesswork with real-time performance telemetry. We isolate exact bottleneck domains, measure focus endurance, enforce distraction shielding, and turn mock test errors into precision rank gains.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L42 12V24C42 34 34 41.5 24 44C14 41.5 6 34 6 24V12L24 4Z" stroke="#F0C94B" strokeWidth="2.5" fill="rgba(240, 201, 75, 0.06)" />
        <path d="M16 24L22 30L32 18" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    border: "var(--color-border-gold)",
    badgeColor: "var(--color-gold-bright)",
  },
];

const fiveStageProtocol = [
  {
    step: "01",
    name: "DIAGNOSE",
    desc: "Isolate root cause bottlenecks across focus endurance, accuracy ratios, formula retention, and test execution panic.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="#F0C94B" strokeWidth="2.5" fill="rgba(240, 201, 75, 0.06)" />
        <path d="M24 14V24L30 28" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "02",
    name: "PLAN",
    desc: "Translate diagnostic findings into a 90-Day Rank Blueprint and adaptive weekly power schedules.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="28" height="28" rx="4" stroke="#38BDF8" strokeWidth="2.5" fill="rgba(56, 189, 248, 0.06)" />
        <path d="M16 20H32M16 26H28M16 32H24" stroke="#F0C94B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "03",
    name: "EXECUTE",
    desc: "Enforce daily mission consistency through timed focus block launchers and distraction shielding.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="18,12 36,24 18,36" stroke="#A855F7" strokeWidth="2.5" fill="rgba(168, 85, 247, 0.1)" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "04",
    name: "MEASURE",
    desc: "Track empirical retention rates, accuracy gains, and 5-axis radar progress metrics in real-time.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 38L18 26L28 32L38 14" stroke="#F0C94B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="14" r="4" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    step: "05",
    name: "IMPROVE",
    desc: "Continuously recalibrate study plans based on mock test autopsies to eliminate recurring mark loss.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24C36 30.6274 30.6274 36 24 36" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 8L24 16L20 12" stroke="#F0C94B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function AboutCard({ children, index, customBorder }) {
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "rgba(14, 16, 22, 0.88)",
        border: customBorder
          ? isHovered
            ? "1px solid var(--color-gold-bright)"
            : customBorder
          : isHovered
          ? "1px solid var(--color-gold-bright)"
          : "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "var(--radius-xl)",
        padding: "2rem",
        boxShadow: isHovered
          ? "0 20px 45px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.18)"
          : "0 10px 30px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(12px)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? isHovered
            ? "translateY(-4px) scale(1.03)"
            : "translateY(0) scale(1)"
          : "translateY(30px) scale(0.96)",
        transition:
          "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease",
        transitionDelay: inView && !isHovered ? `${index * 120}ms` : "0ms",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <div style={{ backgroundColor: "var(--color-background)", minHeight: "100vh", position: "relative" }}>
      <Navbar />

      {/* Full Page Live Background */}
      <AboutLiveBackground />

      <main style={{ paddingTop: "120px", paddingBottom: "7rem", position: "relative", zIndex: 2 }}>
        <div className="container">
          <SectionHeading
            eyebrow="ABOUT CNM SYSTEM LABS"
            title="We Build the Diagnostic Control Room for Student Performance."
            description="CNM System Labs is a student performance intelligence platform. We identify why students underperform, where marks are lost, and how to convert effort into competitive rank results."
            center={true}
          />

          <div
            style={{
              maxWidth: "960px",
              margin: "4rem auto 0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
            }}
          >
            {/* Core Problem vs CNM Approach Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {coreComparisonCards.map((card, idx) => (
                <AboutCard key={card.id} index={idx} customBorder={card.border}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                    <div style={{ transform: "scale(1)" }}>{card.icon}</div>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: card.badgeColor, letterSpacing: "0.12em" }}>
                      {card.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.75rem" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
                    {card.desc}
                  </p>
                </AboutCard>
              ))}
            </div>

            {/* 5-Stage System Protocol Section */}
            <div>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--color-gold-bright)", letterSpacing: "0.15em" }}>
                  SYSTEM ARCHITECTURE
                </span>
                <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "0.4rem" }}>
                  The 5-Stage Closed-Loop Protocol
                </h2>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {fiveStageProtocol.map((stage, index) => (
                  <AboutCard key={stage.step} index={index}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                      <div>{stage.icon}</div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--color-gold-bright)" }}>
                        STAGE {stage.step}
                      </span>
                    </div>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
                      {stage.name}
                    </h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
                      {stage.desc}
                    </p>
                  </AboutCard>
                ))}
              </div>
            </div>

            {/* Explanatory CTA Box */}
            <div
              style={{
                backgroundColor: "rgba(16, 16, 24, 0.92)",
                border: "2px solid var(--color-border-gold)",
                borderRadius: "var(--radius-xl)",
                padding: "2.8rem",
                textAlign: "center",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.75rem" }}>
                Ready to Find What's Stopping Your Score Growth?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", marginBottom: "1.75rem", maxWidth: "620px", margin: "0 auto 1.75rem auto" }}>
                Explore how the CNM System Labs methodology transforms raw effort into rank performance before launching your diagnostic audit.
              </p>
              
              <Link
                href="/#how-it-works"
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
                className="btn btn-primary"
                style={{
                  display: "inline-block",
                  padding: "0.95rem 2.4rem",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transform: ctaHovered ? "scale(1.03) translateY(-2px)" : "scale(1) translateY(0)",
                  boxShadow: ctaHovered
                    ? "0 10px 25px rgba(212, 175, 55, 0.4)"
                    : "0 4px 15px rgba(212, 175, 55, 0.2)",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
                }}
              >
                EXPLORE THE METHODOLOGY →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
