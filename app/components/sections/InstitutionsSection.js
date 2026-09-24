"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import StakeholderNetworkBackground from "../ui/StakeholderNetworkBackground";

function PointCard({ pt, pIdx }) {
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
        backgroundColor: "rgba(10, 10, 14, 0.85)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
        padding: "1.1rem 1.35rem",
        display: "flex",
        alignItems: "center",
        gap: "0.85rem",
        fontSize: "0.92rem",
        color: "var(--color-text)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0) translateY(0) scale(1)"
          : pIdx % 2 === 0
          ? "translateX(-40px) translateY(15px) scale(0.97)"
          : "translateX(40px) translateY(15px) scale(0.97)",
        transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${pIdx * 0.35}s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${pIdx * 0.35}s, border-color 0.3s ease`,
      }}
      className="hover-card-illuminate"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border-gold-bright)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <span style={{ color: "var(--color-gold-bright)", fontWeight: 800, fontSize: "1rem" }}>✓</span>
      <span>{pt}</span>
    </div>
  );
}

export default function InstitutionsSection() {
  const [activeTab, setActiveTab] = useState(2); // Default to Schools/Coaching
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const views = [
    {
      tab: "STUDENT SYSTEM",
      heading: "Personal Performance Control Room",
      desc: "An operating system for individual students to diagnose performance leaks, build daily missions, and execute 90-day rank blueprints.",
      points: [
        "Personalized performance telemetry audit",
        "Automated Daily Mission Panel",
        "Categorized Mock Test Autopsy",
        "Spaced recall Learning Ledger",
      ],
    },
    {
      tab: "PARENT VISIBILITY",
      heading: "Structured Performance Transparency",
      desc: "Objective, signal-based visibility into student execution habits, removing arguments and replacing them with clear diagnostic data.",
      points: [
        "Focus endurance & revision tracking",
        "Observable study pattern metrics",
        "Active intervention progress updates",
        "Structured mentor communication",
      ],
    },
    {
      tab: "SCHOOL & COACHING INSTITUTES",
      heading: "Cohort-Level Performance Intelligence",
      desc: "Designed to support educators, mentors, and coaching institutes with aggregated student telemetry and batch-wide error detection.",
      points: [
        "Identify common batch topic weaknesses",
        "Detect recurring test error patterns",
        "Identify students needing early intervention",
        "Compare planned vs completed study hours",
        "Monitor revision consistency across cohorts",
        "Empower mentors with data-backed guidance",
      ],
    },
  ];

  return (
    <section
      id="for-institutions"
      ref={sectionRef}
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Stakeholder Intelligence Network Live Background */}
      <StakeholderNetworkBackground />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeading
          eyebrow="MULTI-STAKEHOLDER ARCHITECTURE"
          title="Built for More Than One Student."
          description="CNM System Labs scales seamlessly from individual student performance to parent transparency and institutional cohort intelligence."
          center={true}
        />

        {/* Central CNM System Core + Network Nodes Activation Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginTop: "3.5rem",
            flexWrap: "wrap",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {views.map((v, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={v.tab}
                onClick={() => setActiveTab(idx)}
                style={{
                  backgroundColor: isActive ? "rgba(240, 201, 75, 0.12)" : "rgba(14, 14, 18, 0.8)",
                  border: isActive ? "2px solid var(--color-gold-bright)" : "1px solid var(--color-border)",
                  color: isActive ? "var(--color-gold-bright)" : "var(--color-text-secondary)",
                  padding: "0.85rem 1.65rem",
                  borderRadius: "var(--radius-full)",
                  fontWeight: 800,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isActive ? "0 0 20px rgba(212, 175, 55, 0.25)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: isActive ? "var(--color-gold-bright)" : "var(--color-text-muted)",
                    boxShadow: isActive ? "0 0 8px var(--color-gold-bright)" : "none",
                  }}
                />
                {v.tab}
              </button>
            );
          })}
        </div>

        {/* Active Node System Control Card */}
        <div
          style={{
            marginTop: "2.5rem",
            backgroundColor: "rgba(16, 16, 22, 0.9)",
            border: "2px solid var(--color-border-gold)",
            borderRadius: "var(--radius-xl)",
            padding: "2.8rem",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(212, 175, 55, 0.12)",
            backdropFilter: "blur(8px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <div style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", color: "var(--color-gold-bright)", marginBottom: "0.5rem" }}>
            ACTIVATED NETWORK NODE • {views[activeTab].tab}
          </div>
          <h3 style={{ fontSize: "1.7rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
            {views[activeTab].heading}
          </h3>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "750px", lineHeight: 1.6, marginBottom: "2.2rem" }}>
            {views[activeTab].desc}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.1rem",
            }}
          >
            {views[activeTab].points.map((pt, pIdx) => (
              <PointCard key={pt} pt={pt} pIdx={pIdx} />
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a
            href="https://cnm-online-audit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              padding: "0.95rem 2.2rem",
              fontWeight: 800,
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            EXPLORE INSTITUTIONAL PERFORMANCE →
          </a>
        </div>
      </div>
    </section>
  );
}
