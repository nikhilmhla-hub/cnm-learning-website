"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function LearningKitSection() {
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

  const differentiators = [
    {
      label: "Visual-First",
      detail: "3D animated concept breakdowns - not static slides or blackboards.",
    },
    {
      label: "IITian Faculty",
      detail: "Every lesson is built and reviewed by IIT-qualified educators.",
    },
    {
      label: "Clarity Guaranteed",
      detail: "If you don't understand a concept visually, you see it again - differently.",
    },
    {
      label: "Full Coverage",
      detail: "Physics, Chemistry & Maths - Class 11 & 12 - aligned to the latest JEE syllabus.",
    },
    {
      label: "Mentored Weekly",
      detail: "Personal weekly sessions to review your progress and recalibrate your strategy.",
    },
    {
      label: "Performance Reports",
      detail: "Structured report cards after every test so you always know exactly where you stand.",
    },
  ];

  return (
    <section id="courses" ref={sectionRef} className="section section-alt" style={{ overflow: "hidden" }}>
      <div
        className={`container kit-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`}
        style={{ overflow: "hidden" }}
      >
        {/* Section Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "flex-start",
            marginBottom: "2.5rem",
          }}
        >
          <div className="kit-text-box">
            <SectionHeading
              eyebrow="THE CNM ADVANTAGE"
              title="No Other Programme Prepares You Like CNM Learning"
              description="We don't just teach - we transform how your brain processes Physics, Chemistry, and Mathematics. Here's what sets every CNM student apart."
            />
          </div>

          {/* Right: Premium Features Grid */}
          <div
            className="kit-features-box"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {differentiators.map((item, idx) => (
              <div
                key={idx}
                className="kit-diff-card"
                style={{
                  padding: "1.1rem 1.15rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                  transitionDelay: isMounted && isVisible ? `${380 + idx * 70}ms` : "0ms",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-family-heading)",
                    fontWeight: 800,
                    color: "var(--color-gold-bright)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.35rem",
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div
          className="kit-statement"
          style={{
            padding: "1.5rem 2rem",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border-gold)",
            backgroundColor: "rgba(212, 175, 55, 0.05)",
            textAlign: "center",
            transitionDelay: isMounted && isVisible ? "820ms" : "0ms",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--color-text)",
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Join thousands of students who have already switched from guessing to knowing.{" "}
            <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>
              CNM Learning is how India&apos;s next IITians are being made.
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .kit-text-box {
          will-change: transform, opacity;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .kit-features-box {
          will-change: transform, opacity;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .kit-container.js-active:not(.is-visible) .kit-text-box {
          opacity: 0;
          transform: translateX(-30px);
        }

        .kit-container.js-active:not(.is-visible) .kit-features-box {
          opacity: 0;
          transform: translateX(30px);
        }

        .kit-container.js-active.is-visible .kit-text-box {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 100ms;
        }

        .kit-container.js-active.is-visible .kit-features-box {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 220ms;
        }

        .kit-diff-card {
          will-change: transform, opacity;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .kit-diff-card:hover {
          border-color: var(--color-border-gold);
          box-shadow: var(--shadow-md);
        }

        .kit-container.js-active:not(.is-visible) .kit-diff-card {
          opacity: 0;
          transform: translateY(16px);
        }

        .kit-container.js-active.is-visible .kit-diff-card {
          opacity: 1;
          transform: translateY(0);
        }

        .kit-statement {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .kit-container.js-active:not(.is-visible) .kit-statement {
          opacity: 0;
          transform: translateY(18px);
        }

        .kit-container.js-active.is-visible .kit-statement {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .kit-features-box {
            grid-template-columns: 1fr !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kit-text-box,
          .kit-features-box,
          .kit-diff-card,
          .kit-statement {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
