"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function EngagementSection() {
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

  const pillars = [
    { title: "Traditional Expertise + Modern Tools", desc: "Blending veteran IITian pedagogy with state-of-the-art 3D visual technology." },
    { title: "Animated Content & Interactive Boards", desc: "Intuitive visual experiments and animated derivations that make complex concepts unforgettable." },
    { title: "Smart Assessments & Effective Learning", desc: "Topic-wise microtests, weakness analytics, and real-time doubt support to lock in retention." },
  ];

  return (
    <section ref={sectionRef} className="section section-alt" style={{ overflow: "hidden" }}>
      <div className={`container engagement-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ overflow: "hidden" }}>
        <SectionHeading
          eyebrow="HIGH-ENGAGEMENT METHODOLOGY"
          title="What Makes CNM Learning So Engaging?"
          description="Combining traditional expertise with modern tools, animated content, interactive boards, smart assessments, and effective learning."
          centered
          className="engagement-header"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="card card-interactive engagement-card"
              style={{
                padding: "1.75rem 1.5rem",
                transitionDelay: isMounted && isVisible ? `${280 + idx * 120}ms` : "0ms",
              }}
            >
              <h3
                className="card-title-inner"
                style={{
                  fontSize: "1.2rem",
                  color: "var(--color-gold-bright)",
                  marginBottom: "0.5rem",
                  transitionDelay: isMounted && isVisible ? `${360 + idx * 120}ms` : "0ms",
                }}
              >
                {item.title}
              </h3>
              <p
                className="card-desc-inner"
                style={{
                  fontSize: "0.92rem",
                  color: "var(--color-text-secondary)",
                  transitionDelay: isMounted && isVisible ? `${420 + idx * 120}ms` : "0ms",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Header animation */
        :global(.engagement-header .eyebrow) {
          will-change: transform, opacity;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        :global(.engagement-header .section-title) {
          will-change: transform, opacity, letter-spacing;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      letter-spacing 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        :global(.engagement-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .engagement-container.js-active:not(.is-visible) :global(.engagement-header .eyebrow) {
          opacity: 0;
          transform: translateY(10px);
        }

        .engagement-container.js-active:not(.is-visible) :global(.engagement-header .section-title) {
          opacity: 0;
          transform: translateY(12px);
          letter-spacing: 0.04em;
        }

        .engagement-container.js-active:not(.is-visible) :global(.engagement-header .section-description) {
          opacity: 0;
          transform: translateY(10px);
        }

        .engagement-container.js-active.is-visible :global(.engagement-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .engagement-container.js-active.is-visible :global(.engagement-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          letter-spacing: normal;
          transition-delay: 80ms;
        }

        .engagement-container.js-active.is-visible :global(.engagement-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 180ms;
        }

        /* Interface-style card scale reveal */
        .engagement-card {
          --sc: 1;
          --op: 1;
          --hover-y: 0px;
          transform: translate3d(0, var(--hover-y), 0) scale(var(--sc));
          opacity: var(--op);
          will-change: transform, opacity;
          transition: transform 0.68s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.68s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .engagement-card:hover {
          --hover-y: -4px;
        }

        .engagement-container.js-active:not(.is-visible) .engagement-card {
          --sc: 0.94;
          --op: 0;
        }

        .engagement-container.js-active.is-visible .engagement-card {
          --sc: 1;
          --op: 1;
        }

        /* Micro-detail inside cards */
        .card-title-inner,
        .card-desc-inner {
          will-change: opacity, transform;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .engagement-container.js-active:not(.is-visible) .card-title-inner,
        .engagement-container.js-active:not(.is-visible) .card-desc-inner {
          opacity: 0;
          transform: translateY(6px);
        }

        .engagement-container.js-active.is-visible .card-title-inner,
        .engagement-container.js-active.is-visible .card-desc-inner {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.engagement-header .eyebrow),
          :global(.engagement-header .section-title),
          :global(.engagement-header .section-description),
          .engagement-card,
          .card-title-inner,
          .card-desc-inner {
            opacity: 1 !important;
            transform: none !important;
            letter-spacing: normal !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
