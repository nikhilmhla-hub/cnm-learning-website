"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function FinalCTASection() {
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

  return (
    <section ref={sectionRef} className="section section-gold-accent bg-ambient-gold" style={{ overflow: "hidden" }}>
      <div className={`container final-cta-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ textAlign: "center", maxWidth: "820px", overflow: "hidden" }}>
        <SectionHeading
          eyebrow="50% Discount - Founding Members Offer"
          title="Grab Access To CNM Learning Today!"
          description="Join thousands of students mastering Physics, Chemistry, and Maths with 3D clarity."
          centered
          className="final-cta-header"
        />
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <div className="cta-btn-wrapper" style={{ transitionDelay: isMounted && isVisible ? "320ms" : "0ms" }}>
            <Button href="#pricing" variant="primary">Yes! I Want to Become an IITian</Button>
          </div>
          <div className="cta-btn-wrapper" style={{ transitionDelay: isMounted && isVisible ? "440ms" : "0ms" }}>
            <Button href="#videos" variant="secondary">Watch a Free Demo Lesson</Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Header sequence */
        :global(.final-cta-header .eyebrow),
        :global(.final-cta-header .section-title),
        :global(.final-cta-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .final-cta-container.js-active:not(.is-visible) :global(.final-cta-header .eyebrow) {
          opacity: 0;
          transform: translateY(12px);
        }

        .final-cta-container.js-active:not(.is-visible) :global(.final-cta-header .section-title) {
          opacity: 0;
          transform: translateY(20px) scale(0.98);
        }

        .final-cta-container.js-active:not(.is-visible) :global(.final-cta-header .section-description) {
          opacity: 0;
          transform: translateY(14px);
        }

        .final-cta-container.js-active.is-visible :global(.final-cta-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .final-cta-container.js-active.is-visible :global(.final-cta-header .section-title) {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition-delay: 100ms;
        }

        .final-cta-container.js-active.is-visible :global(.final-cta-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* CTA Buttons Entrance */
        .cta-btn-wrapper {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .final-cta-container.js-active:not(.is-visible) .cta-btn-wrapper {
          opacity: 0;
          transform: translateY(16px);
        }

        .final-cta-container.js-active.is-visible .cta-btn-wrapper {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.final-cta-header .eyebrow),
          :global(.final-cta-header .section-title),
          :global(.final-cta-header .section-description),
          .cta-btn-wrapper {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
