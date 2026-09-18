"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { featuresData } from "../../data/features";

export default function FeaturesSection({ features = featuresData }) {
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

  // Contextual SVG Icons corresponding to the 8 feature topics
  const featureIcons = [
    // 1. Interactive Learning Environment with Animations (3D / Layers / Interactive)
    <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>,
    // 2. Regular Mock Tests & Performance Analysis (Bar Chart / Analytics)
    <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>,
    // 3. Expert IITian Faculty (Graduation Cap / Mentor)
    <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>,
    // 4. Comprehensive Course Structure (Book / Curriculum)
    <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>,
    // 5. Personalized Attention (Target / User Focus)
    <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>,
    // 6. Proven Track Record of Success (Trophy / Achievement)
    <svg key="6" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 4H6v7a6 6 0 0 0 12 0V4z" />
    </svg>,
    // 7. Focus on Conceptual Clarity with Visual Methods (Lightbulb / Clarity Spark)
    <svg key="7" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.65 2.8 1.5 3.5.76.76 1.23 1.52 1.41 2.5h6.18z" />
    </svg>,
    // 8. State-of-the-Art Learning Resources (Monitor / Tech Library)
    <svg key="8" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>,
  ];

  return (
    <section id="features" ref={sectionRef} className="section section-alt" style={{ overflow: "hidden" }}>
      <div className={`container features-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ overflow: "hidden" }}>
        <SectionHeading
          eyebrow="UNMATCHED QUALITY"
          title="CNM Learning Unmatched features:"
          description="Join thousands of students mastering Physics, Chemistry, and Maths the smart way."
          centered
          className="features-header"
        />

        <div
          className="features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
            overflow: "hidden",
            padding: "0.75rem 0.35rem",
          }}
        >
          {features.map((item, index) => {
            const isLeft = index % 2 === 0;
            const delayMs = 350 + index * 120;
            const icon = featureIcons[index % featureIcons.length];

            return (
              <div
                key={item.id}
                className={`card card-interactive feature-card ${isLeft ? "reveal-left" : "reveal-right"}`}
                style={{
                  transitionDelay: isMounted && isVisible ? `${delayMs}ms` : "0ms",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: "var(--color-gold-soft)",
                    border: "1px solid var(--color-border-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    color: "var(--color-gold-bright)",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem", color: "#ffffff" }}>{item.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* Header elements initial states & transition */
        :global(.features-header .eyebrow),
        :global(.features-header .section-title),
        :global(.features-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .features-container.js-active:not(.is-visible) :global(.features-header .eyebrow) {
          opacity: 0;
          transform: translateY(15px);
        }

        .features-container.js-active:not(.is-visible) :global(.features-header .section-title) {
          opacity: 0;
          transform: translateY(25px);
        }

        .features-container.js-active:not(.is-visible) :global(.features-header .section-description) {
          opacity: 0;
          transform: translateY(18px);
        }

        .features-container.js-active.is-visible :global(.features-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .features-container.js-active.is-visible :global(.features-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .features-container.js-active.is-visible :global(.features-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Feature card styling & alternating reveal */
        .feature-card {
          --tx: 0px;
          --ty: 0px;
          --op: 1;
          transform: translate3d(var(--tx), var(--ty), 0);
          opacity: var(--op);
          will-change: transform, opacity;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .feature-card:hover {
          --ty: -4px;
        }

        .features-container.js-active:not(.is-visible) .feature-card.reveal-left {
          --tx: -70px;
          --op: 0;
        }

        .features-container.js-active:not(.is-visible) .feature-card.reveal-right {
          --tx: 70px;
          --op: 0;
        }

        .features-container.js-active.is-visible .feature-card {
          --tx: 0px;
          --op: 1;
        }

        @media (max-width: 767px) {
          .features-container.js-active:not(.is-visible) .feature-card.reveal-left {
            --tx: -30px;
          }
          .features-container.js-active:not(.is-visible) .feature-card.reveal-right {
            --tx: 30px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.features-header .eyebrow),
          :global(.features-header .section-title),
          :global(.features-header .section-description),
          .feature-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
