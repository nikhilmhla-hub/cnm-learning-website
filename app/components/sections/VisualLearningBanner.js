"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function VisualLearningBanner() {
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
      <div className={`container banner-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ textAlign: "center", maxWidth: "860px", overflow: "hidden" }}>
        <SectionHeading
          eyebrow="LEARN WITH CNM"
          title="CNM: Turn Complicated into Simple"
          description="Crack JEE with Confidence – Learn with CNM"
          centered
          className="banner-header"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", margin: "2rem 0" }}>
          <div
            className="card banner-card"
            style={{
              borderColor: "var(--color-border-gold)",
              textAlign: "center",
              padding: "2rem 1.5rem",
              transitionDelay: isMounted && isVisible ? "300ms" : "0ms",
            }}
          >
            <h3 style={{ color: "var(--color-gold-bright)", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
              So Simple, a Child Could Master It
            </h3>
            <p style={{ fontSize: "0.95rem" }}>Intuitive 3D visual concept breakdowns engineered for immediate understanding.</p>
          </div>
          <div
            className="card banner-card"
            style={{
              borderColor: "var(--color-border-gold)",
              textAlign: "center",
              padding: "2rem 1.5rem",
              transitionDelay: isMounted && isVisible ? "420ms" : "0ms",
            }}
          >
            <h3 style={{ color: "var(--color-gold-bright)", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
              So Advanced, Toppers Trust It
            </h3>
            <p style={{ fontSize: "0.95rem" }}>Rigorous IITian-mode problem solving built to master JEE Advanced questions.</p>
          </div>
        </div>
        <div
          className="banner-cta"
          style={{
            marginTop: "1.5rem",
            transitionDelay: isMounted && isVisible ? "520ms" : "0ms",
          }}
        >
          <Button href="#pricing" variant="primary">Yes! I Want to Become an IITian</Button>
        </div>
      </div>

      <style jsx>{`
        /* Header editorial text reveal */
        :global(.banner-header .eyebrow),
        :global(.banner-header .section-title),
        :global(.banner-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .banner-container.js-active:not(.is-visible) :global(.banner-header .eyebrow) {
          opacity: 0;
          transform: translateY(12px);
        }

        .banner-container.js-active:not(.is-visible) :global(.banner-header .section-title) {
          opacity: 0;
          transform: translateY(20px) scale(0.98);
        }

        .banner-container.js-active:not(.is-visible) :global(.banner-header .section-description) {
          opacity: 0;
          transform: translateY(14px);
        }

        .banner-container.js-active.is-visible :global(.banner-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .banner-container.js-active.is-visible :global(.banner-header .section-title) {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition-delay: 100ms;
        }

        .banner-container.js-active.is-visible :global(.banner-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Banner Cards (Center expansion reveal) */
        .banner-card,
        .banner-cta {
          will-change: transform, opacity;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease;
        }

        .banner-container.js-active:not(.is-visible) .banner-card {
          opacity: 0;
          transform: scale(0.94) translateY(15px);
        }

        .banner-container.js-active:not(.is-visible) .banner-cta {
          opacity: 0;
          transform: translateY(15px);
        }

        .banner-container.js-active.is-visible .banner-card {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .banner-container.js-active.is-visible .banner-cta {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.banner-header .eyebrow),
          :global(.banner-header .section-title),
          :global(.banner-header .section-description),
          .banner-card,
          .banner-cta {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
