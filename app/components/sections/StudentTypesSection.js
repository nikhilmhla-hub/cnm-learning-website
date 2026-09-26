"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import ArchetypesBackground from "../ui/ArchetypesBackground";

function ArchetypeCard({ typeItem, index }) {
  const [inView, setInView] = useState(false);
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

  const icons = [
    // Overworker
    <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0c94b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>,
    // Inconsistent
    <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>,
    // Careless Solver
    <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>,
    // Test Avoider
    <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>,
    // Last minute reviser
    <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>,
    // Confident but stuck
    <svg key="6" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>,
    // High performer
    <svg key="7" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0c94b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>,
  ];

  return (
    <div
      ref={cardRef}
      style={{
        backgroundColor: "rgba(12, 12, 16, 0.75)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        padding: "1.6rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1.1rem",
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0) translateY(0) scale(1)"
          : index % 2 === 0
          ? "translateX(-45px) translateY(20px) scale(0.96)"
          : "translateX(45px) translateY(20px) scale(0.96)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.35}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.35}s, border-color 0.3s ease, box-shadow 0.3s ease`,
        backdropFilter: "blur(6px)",
      }}
      className="hover-card-illuminate"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border-gold-bright)";
        e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.6), 0 0 20px rgba(212, 175, 55, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem" }}>
          <div
            style={{
              fontSize: "0.68rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: "var(--color-gold-bright)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--color-gold-bright)",
              }}
            />
            ARCHETYPE 0{index + 1}
          </div>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "rgba(212, 175, 55, 0.08)",
              border: "1px solid rgba(212, 175, 55, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icons[index % icons.length]}
          </div>
        </div>

        <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>
          {typeItem.title}
        </h3>
        <p
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#f0c94b",
            marginBottom: "0.75rem",
            lineHeight: 1.45,
            paddingLeft: "0.65rem",
            borderLeft: "2px solid var(--color-gold-bright)",
          }}
        >
          "{typeItem.tagline}"
        </p>
        <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
          {typeItem.diagnosis}
        </p>
      </div>

      <div
        style={{
          paddingTop: "0.85rem",
          borderTop: "1px solid var(--color-border-subtle)",
          fontSize: "0.72rem",
          color: "var(--color-gold-bright)",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span>CNM Telemetry Audit Available</span>
        <span style={{ marginLeft: "auto" }}>→</span>
      </div>
    </div>
  );
}

export default function StudentTypesSection() {
  const types = [
    {
      title: "THE OVERWORKER",
      tagline: "Studies for hours but can't identify why scores aren't rising.",
      diagnosis: "High effort, zero feedback loop. Needs telemetry audit to stop studying redundant topics.",
    },
    {
      title: "THE INCONSISTENT STUDENT",
      tagline: "Has strong days and terrible days.",
      diagnosis: "Erratic daily habits. Needs Daily Mission Panel & Focus Block habituation.",
    },
    {
      title: "THE CARELESS SOLVER",
      tagline: "Understands concepts but leaks marks through avoidable mistakes.",
      diagnosis: "Calculation & reading leaks. Needs Mock Test Autopsy to eliminate negative marks.",
    },
    {
      title: "THE TEST AVOIDER",
      tagline: "Studies continuously but avoids mock tests.",
      diagnosis: "Exam pressure anxiety. Needs Confidence Dashboard and gradual test exposure protocols.",
    },
    {
      title: "THE LAST-MINUTE REVISER",
      tagline: "Only revises when the exam is close.",
      diagnosis: "Memory decay causes exam panic. Needs active recall learning ledger & automated revision intervals.",
    },
    {
      title: "THE CONFIDENT-BUT-STUCK",
      tagline: "Feels prepared but scores remain stagnant.",
      diagnosis: "Hidden concept gaps & question selection traps. Needs rank snapshot diagnostic.",
    },
    {
      title: "THE HIGH-PERFORMER",
      tagline: "Already performs well and wants systematic optimization.",
      diagnosis: "Fine-tuning precision, time allocation, and rank optimization.",
    },
  ];

  return (
    <section
      id="for-students"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Live Diagnostic Profile Field Canvas Background */}
      <ArchetypesBackground />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeading
          eyebrow="STUDENT PERFORMANCE ARCHETYPES"
          title="Different Students Break in Different Places."
          description="Every student has a distinct performance bottleneck. Identifying your specific archetype is the first step toward targeted improvement."
          center={true}
        />

        {/* 7 Archetype Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "1.5rem",
            marginTop: "3.5rem",
          }}
        >
          {types.map((t, idx) => (
            <ArchetypeCard key={t.title} typeItem={t} index={idx} />
          ))}
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
            FIND YOUR PERFORMANCE PROFILE →
          </a>
        </div>
      </div>
    </section>
  );
}
