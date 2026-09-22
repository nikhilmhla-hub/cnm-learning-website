"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function InstitutionsSection() {
  const [activeTab, setActiveTab] = useState(2); // Default to Schools/Coaching

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
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="MULTI-STAKEHOLDER ARCHITECTURE"
          title="Built for More Than One Student."
          description="CNM System Labs scales seamlessly from individual student performance to parent transparency and institutional cohort intelligence."
          center={true}
        />

        {/* 3 Mode Selector Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          {views.map((v, idx) => (
            <button
              key={v.tab}
              onClick={() => setActiveTab(idx)}
              style={{
                backgroundColor: activeTab === idx ? "var(--color-gold-soft)" : "rgba(18, 18, 20, 0.7)",
                border: activeTab === idx ? "1px solid var(--color-border-gold-bright)" : "1px solid var(--color-border)",
                color: activeTab === idx ? "var(--color-gold-bright)" : "var(--color-text-secondary)",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-full)",
                fontWeight: 800,
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {v.tab}
            </button>
          ))}
        </div>

        {/* Selected View Card */}
        <div
          style={{
            marginTop: "2rem",
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "2.5rem",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
          }}
        >
          <div style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", color: "var(--color-gold-bright)", marginBottom: "0.5rem" }}>
            CAPABILITY DISPLAY • {views[activeTab].tab}
          </div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.75rem" }}>
            {views[activeTab].heading}
          </h3>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "700px", lineHeight: 1.6, marginBottom: "2rem" }}>
            {views[activeTab].desc}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {views[activeTab].points.map((pt) => (
              <div
                key={pt}
                style={{
                  backgroundColor: "rgba(10, 10, 12, 0.8)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "0.9rem",
                  color: "var(--color-text)",
                }}
              >
                <span style={{ color: "var(--color-gold-bright)", fontWeight: 800 }}>✓</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://cnm-online-audit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
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
              transition: "all 0.2s ease",
            }}
          >
            EXPLORE INSTITUTIONAL PERFORMANCE →
          </a>
        </div>
      </div>
    </section>
  );
}
