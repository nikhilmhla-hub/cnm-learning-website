"use client";

import { useState, useEffect, useRef } from "react";
import FAQKnowledgeBackground from "../ui/FAQKnowledgeBackground";

function FAQItem({ faq, idx, isOpen, onToggle }) {
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
        backgroundColor: isOpen ? "rgba(22, 20, 14, 0.9)" : "rgba(12, 12, 16, 0.75)",
        border: isOpen ? "1px solid var(--color-border-gold-bright)" : "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0) translateY(0) scale(1)"
          : idx % 2 === 0
          ? "translateX(-40px) translateY(15px) scale(0.97)"
          : "translateX(40px) translateY(15px) scale(0.97)",
        transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.35}s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.35}s, border-color 0.3s ease, box-shadow 0.3s ease`,
        boxShadow: isOpen ? "0 10px 30px rgba(0,0,0,0.8), 0 0 20px rgba(212, 175, 55, 0.15)" : "none",
        backdropFilter: "blur(6px)",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "1.35rem 1.6rem",
          backgroundColor: "transparent",
          border: "none",
          color: isOpen ? "var(--color-gold-bright)" : "#ffffff",
          textAlign: "left",
          fontSize: "1.05rem",
          fontWeight: 700,
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.2rem",
          transition: "color 0.2s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 800,
              color: isOpen ? "var(--color-gold-bright)" : "var(--color-text-muted)",
              letterSpacing: "0.1em",
              minWidth: "24px",
            }}
          >
            0{idx + 1}
          </span>
          <span>{faq.q}</span>
        </div>
        <span
          style={{
            fontSize: "1.3rem",
            color: isOpen ? "var(--color-gold-bright)" : "var(--color-text-muted)",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div
          style={{
            padding: "0 1.6rem 1.4rem 3.4rem",
            fontSize: "0.92rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.65,
            borderTop: "1px solid var(--color-border-subtle)",
            paddingTop: "1rem",
          }}
        >
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What exactly is CNM System Labs?",
      a: "CNM System Labs is a student performance intelligence system. We identify why a student is underperforming, where marks are being lost, and why study hours aren't converting into test scores, then build a personalized execution plan to fix those root causes.",
    },
    {
      q: "What problems does CNM diagnose?",
      a: "CNM System Labs evaluates 8 core performance leaks: Focus Endurance, Solving Accuracy, Revision Recall, Mock Test Analysis, Time Management, Exam Confidence, Execution Discipline, and Rank Trajectory.",
    },
    {
      q: "How does CNM identify where marks are being lost?",
      a: "Instead of merely displaying your overall score, CNM deconstructs your test paper into 8 error categories (concept gap, misread question, calculation error, time pressure, weak topic, etc.) so your next study session directly targets mark loss.",
    },
    {
      q: "What does the student actually receive/do through the system?",
      a: "After the audit, CNM generates a 90-Day Rank Blueprint and daily mission plan tailored to your specific performance leaks, along with structured focus block protocols.",
    },
    {
      q: "How does CNM measure improvement?",
      a: "CNM continuously tracks focus endurance, revision retention rates, test error reduction, and daily mission completion to ensure study hours reliably convert into test marks.",
    },
    {
      q: "Who is CNM designed for?",
      a: "CNM System Labs is built for individual competitive exam aspirants, parents seeking structured performance transparency, and schools or coaching institutes managing cohort-level student telemetry.",
    },
    {
      q: "How does the Performance Audit / 90-day plan work?",
      a: "The Performance Audit evaluates your study execution patterns to isolate root bottlenecks, which are then converted into a step-by-step 90-Day Rank Blueprint and automated daily mission schedule.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Knowledge Query Field Live Background */}
      <FAQKnowledgeBackground />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="faq-layout-grid"
        >
          {/* LEFT: Category Header & Status Indicator */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(212, 175, 55, 0.08)",
                border: "1px solid var(--color-border-gold)",
                marginBottom: "1rem",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-gold-bright)" }} />
              <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--color-gold-bright)", letterSpacing: "0.12em" }}>
                KNOWLEDGE DIAGNOSTIC INTERFACE
              </span>
            </div>

            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: "1rem" }}>
              Everything You Need to Know About CNM System Labs
            </h2>

            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "2rem" }}>
              Clear, honest answers about our diagnostic methodology, product system, and institutional implementation.
            </p>

            <div
              style={{
                backgroundColor: "rgba(12, 12, 16, 0.8)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--color-gold-bright)", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                QUERY ENGINE STATUS
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--color-text)", fontWeight: 600 }}>
                7 Core Diagnostic Questions Loaded
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginTop: "4px" }}>
                Click any question on the right to inspect technical details.
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Question Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {faqs.map((faq, idx) => (
              <FAQItem
                key={faq.q}
                faq={faq}
                idx={idx}
                isOpen={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .faq-layout-grid {
            grid-template-columns: 0.85fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
