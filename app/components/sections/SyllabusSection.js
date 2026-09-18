"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function SyllabusSection() {
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

  const subjectCards = [
    {
      title: "Physics",
      desc: "Mechanics, Electrodynamics, Optics, Thermodynamics, Modern Physics with 3D animated derivations and visual experiment breakdowns.",
    },
    {
      title: "Chemistry",
      desc: "Physical, Organic, and Inorganic Chemistry from fundamental concepts to JEE Advanced problem-solving techniques.",
    },
    {
      title: "Mathematics",
      desc: "Calculus, Algebra, Coordinate Geometry, Vectors & 3D with step-by-step visual problem-solving approaches.",
    },
  ];

  const points = [
    "Learn concepts the way your brain loves — visually.",
    "Active student community",
    "Weekly mentorship sessions and doubt-clearing support",
    "Topic-wise notes & cheat sheets",
    "Mock tests with solutions + accuracy trackers",
    "Doubt-solving support via chat & video replies",
    "Animated derivations, intuitive experiments, real-world analogies",
    "Track your completion and rank weekly",
    "Understand your weaknesses instantly",
    "Personalized study plans",
    "Leaderboards & challenge events",
  ];

  return (
    <section id="syllabus" ref={sectionRef} className="section" style={{ overflow: "hidden" }}>
      <div className={`container syllabus-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ overflow: "hidden" }}>
        <SectionHeading
          eyebrow="COMPLETE PREPARATION"
          title="FULL SYLLABUS TESTS AND MENTORING"
          description="Learn concepts the way your brain loves — visually with structured tests and personal mentorship."
          centered
          className="syllabus-header"
        />

        {/* 3 Main Subject Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          {subjectCards.map((subj, idx) => (
            <div
              key={idx}
              className="card card-interactive syllabus-subject-card"
              style={{
                transitionDelay: isMounted && isVisible ? `${320 + idx * 120}ms` : "0ms",
              }}
            >
              <h3 style={{ color: "var(--color-gold-bright)", marginBottom: "0.75rem" }}>{subj.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>{subj.desc}</p>
            </div>
          ))}
        </div>

        {/* 11 Checklist Points */}
        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="card syllabus-point-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.25rem",
                transitionDelay: isMounted && isVisible ? `${680 + idx * 60}ms` : "0ms",
              }}
            >
              <span style={{ color: "var(--color-gold-bright)", fontWeight: 800 }}>✓</span>
              <span style={{ fontSize: "0.92rem", color: "var(--color-text)" }}>{pt}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Header elements initial states & transition */
        :global(.syllabus-header .eyebrow) {
          will-change: transform, opacity, filter;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        :global(.syllabus-header .section-title),
        :global(.syllabus-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .syllabus-container.js-active:not(.is-visible) :global(.syllabus-header .eyebrow) {
          opacity: 0;
          filter: blur(4px);
          transform: translateY(12px);
        }

        .syllabus-container.js-active:not(.is-visible) :global(.syllabus-header .section-title) {
          opacity: 0;
          transform: translateY(24px);
        }

        .syllabus-container.js-active:not(.is-visible) :global(.syllabus-header .section-description) {
          opacity: 0;
          transform: translateY(18px);
        }

        .syllabus-container.js-active.is-visible :global(.syllabus-header .eyebrow) {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .syllabus-container.js-active.is-visible :global(.syllabus-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .syllabus-container.js-active.is-visible :global(.syllabus-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Subject cards rise + scale reveal */
        .syllabus-subject-card,
        .syllabus-point-card {
          --ty: 0px;
          --sc: 1;
          --op: 1;
          --hover-y: 0px;
          transform: translate3d(0, calc(var(--ty) + var(--hover-y)), 0) scale(var(--sc));
          opacity: var(--op);
          will-change: transform, opacity;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .syllabus-subject-card:hover {
          --hover-y: -4px;
        }

        .syllabus-container.js-active:not(.is-visible) .syllabus-subject-card {
          --ty: 35px;
          --sc: 0.97;
          --op: 0;
        }

        .syllabus-container.js-active:not(.is-visible) .syllabus-point-card {
          --ty: 24px;
          --sc: 0.98;
          --op: 0;
        }

        .syllabus-container.js-active.is-visible .syllabus-subject-card,
        .syllabus-container.js-active.is-visible .syllabus-point-card {
          --ty: 0px;
          --sc: 1;
          --op: 1;
        }

        @media (max-width: 767px) {
          .syllabus-container.js-active:not(.is-visible) .syllabus-subject-card {
            --ty: 22px;
          }
          .syllabus-container.js-active:not(.is-visible) .syllabus-point-card {
            --ty: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.syllabus-header .eyebrow),
          :global(.syllabus-header .section-title),
          :global(.syllabus-header .section-description),
          .syllabus-subject-card,
          .syllabus-point-card {
            opacity: 1 !important;
            filter: none !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
