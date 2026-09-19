"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function DreamSection() {
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
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const milestones = [
    { step: "01", label: "Build crystal-clear concept foundations with 3D visual lessons" },
    { step: "02", label: "Practice with topic-wise microtests and identify your exact weaknesses" },
    { step: "03", label: "Get guided by IITian mentors with a personalised weekly strategy" },
    { step: "04", label: "Simulate full JEE exams and track your all-India performance rank" },
    { step: "05", label: "Walk into the exam hall prepared, confident, and ready to dominate" },
  ];

  return (
    <section id="about" ref={sectionRef} className="section bg-ambient-gold" style={{ overflow: "hidden" }}>
      <div
        className={`container dream-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`}
        style={{ overflow: "hidden" }}
      >
        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left: Messaging */}
          <div className="dream-left">
            <SectionHeading
              eyebrow="ACHIEVE YOUR IIT DREAM"
              title="Your IIT Seat is a Journey — CNM Helps You Walk Every Step"
              description="Getting into IIT isn't luck. It's preparation, strategy, and the right visual tools to make complex concepts unforgettable. That's what CNM Learning is built for."
            />
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                "Expert IITian faculty with real exam insight",
                "Visual learning that eliminates rote memorisation",
                "Personalised mentoring every step of the way",
                "Performance tracking to show exactly where you stand",
              ].map((point, i) => (
                <div
                  key={i}
                  className="dream-point"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    transitionDelay: isMounted && isVisible ? `${320 + i * 80}ms` : "0ms",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-gold-soft)",
                      border: "1px solid var(--color-border-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-gold-bright)",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="dream-cta"
              style={{
                marginTop: "2rem",
                transitionDelay: isMounted && isVisible ? "700ms" : "0ms",
              }}
            >
              <Button href="#pricing" variant="primary" style={{ marginRight: "1rem" }}>
                Begin Your IIT Journey
              </Button>
            </div>
          </div>

          {/* Right: Visual Journey Roadmap */}
          <div className="dream-right">
            <div
              style={{
                padding: "2rem",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border-gold)",
                backgroundColor: "rgba(18, 21, 20, 0.7)",
                backdropFilter: "blur(8px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Ambient glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <h3
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-gold-bright)",
                  marginBottom: "1.75rem",
                }}
              >
                Your Roadmap to IIT
              </h3>

              {/* Milestone Steps */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {milestones.map((item, idx) => (
                  <div
                    key={idx}
                    className="milestone-item"
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      transitionDelay: isMounted && isVisible ? `${500 + idx * 90}ms` : "0ms",
                    }}
                  >
                    {/* Line + Step Number */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #f0c94b 0%, #d4af37 100%)",
                          color: "#050505",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          fontFamily: "var(--font-family-heading)",
                          flexShrink: 0,
                        }}
                      >
                        {item.step}
                      </div>
                      {idx < milestones.length - 1 && (
                        <div
                          style={{
                            width: "2px",
                            height: "32px",
                            background:
                              "linear-gradient(to bottom, rgba(212, 175, 55, 0.4), rgba(212, 175, 55, 0.1))",
                            margin: "4px 0",
                          }}
                        />
                      )}
                    </div>

                    {/* Label */}
                    <div style={{ paddingTop: "5px", paddingBottom: idx < milestones.length - 1 ? "28px" : "0" }}>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color:
                            idx === milestones.length - 1
                              ? "var(--color-gold-bright)"
                              : "var(--color-text-secondary)",
                          fontWeight: idx === milestones.length - 1 ? 700 : 400,
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dream-left,
        .dream-right {
          will-change: transform, opacity;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dream-container.js-active:not(.is-visible) .dream-left {
          opacity: 0;
          transform: translateX(-30px);
        }

        .dream-container.js-active:not(.is-visible) .dream-right {
          opacity: 0;
          transform: translateX(30px);
        }

        .dream-container.js-active.is-visible .dream-left {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 100ms;
        }

        .dream-container.js-active.is-visible .dream-right {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 220ms;
        }

        /* Checklist points */
        .dream-point {
          will-change: transform, opacity;
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dream-container.js-active:not(.is-visible) .dream-point {
          opacity: 0;
          transform: translateX(-16px);
        }

        .dream-container.js-active.is-visible .dream-point {
          opacity: 1;
          transform: translateX(0);
        }

        /* CTA */
        .dream-cta {
          will-change: transform, opacity;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dream-container.js-active:not(.is-visible) .dream-cta {
          opacity: 0;
          transform: translateY(12px);
        }

        .dream-container.js-active.is-visible .dream-cta {
          opacity: 1;
          transform: translateY(0);
        }

        /* Milestone items */
        .milestone-item {
          will-change: transform, opacity;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dream-container.js-active:not(.is-visible) .milestone-item {
          opacity: 0;
          transform: translateX(18px);
        }

        .dream-container.js-active.is-visible .milestone-item {
          opacity: 1;
          transform: translateX(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .dream-left,
          .dream-right,
          .dream-point,
          .dream-cta,
          .milestone-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
