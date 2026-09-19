"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What exactly does CNM System Labs do?",
      a: "CNM System Labs is a student performance intelligence system. We identify why a student is underperforming, where marks are being lost, and why study hours aren't converting into test scores, then build a personalized execution plan to fix those root causes.",
    },
    {
      q: "Is this another online coaching platform?",
      a: "No. Traditional coaching platforms focus primarily on delivering lectures and problem sheets. CNM System Labs focuses on the feedback loop behind your studying — focus endurance, accuracy, test autopsy, spaced revision, and daily execution discipline.",
    },
    {
      q: "Does CNM replace school or coaching?",
      a: "No. CNM System Labs complements your existing school or coaching institute. It acts as the diagnostic control room for your preparation, ensuring the effort you put into your coaching actually translates into test marks.",
    },
    {
      q: "What does the Performance Audit measure?",
      a: "The Performance Audit evaluates 8 core domains: Focus Endurance, Solving Accuracy, Revision Recall, Mock Test Analysis, Time Management, Exam Confidence, Execution Discipline, and Rank Trajectory.",
    },
    {
      q: "Can CNM identify why my marks are stuck?",
      a: "Yes. Stagnant marks are usually caused by specific unexamined leaks (e.g. careless errors, formula decay, or mismanaging test time). CNM isolates the exact bottleneck so you know what to fix next.",
    },
    {
      q: "How does CNM use mock-test data?",
      a: "Instead of merely displaying your overall score, CNM deconstructs your test paper into 8 error categories (concept gap, misread question, calculation error, time pressure, weak topic, etc.) so your next study session directly targets mark loss.",
    },
    {
      q: "What happens after the audit?",
      a: "After the audit, CNM generates a 90-Day Rank Blueprint and daily mission plan tailored to your specific performance leaks, along with structured focus block protocols.",
    },
    {
      q: "Can parents see student progress?",
      a: "Yes. Parents get objective, signal-based dashboards showing study consistency, focus endurance, active interventions, and revision progress without relying on vague academic arguments.",
    },
    {
      q: "Can schools and coaching institutes use CNM?",
      a: "Yes. CNM System Labs provides multi-student telemetry for institutions, helping mentors detect batch-wide topic weaknesses, identify students needing intervention, and monitor revision consistency.",
    },
    {
      q: "Does CNM guarantee rank improvement?",
      a: "No system can guarantee a specific rank or admission result. CNM System Labs is designed to identify performance gaps, create targeted interventions, and track execution and improvement over time. Results vary by student starting point and daily execution.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Everything You Need to Know About CNM System Labs"
          description="Clear, honest answers about our diagnostic methodology, product system, and implementation."
          center={true}
        />

        <div
          style={{
            maxWidth: "850px",
            margin: "3.5rem auto 0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: isOpen ? "1px solid var(--color-border-gold)" : "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  style={{
                    width: "100%",
                    padding: "1.25rem 1.5rem",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#ffffff",
                    textAlign: "left",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span>{faq.q}</span>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: isOpen ? "var(--color-gold-bright)" : "var(--color-text-muted)",
                      transition: "transform 0.2s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.25rem 1.5rem",
                      fontSize: "0.92rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                      borderTop: "1px solid var(--color-border-subtle)",
                      paddingTop: "1rem",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
