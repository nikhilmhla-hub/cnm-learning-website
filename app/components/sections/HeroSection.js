"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import VideoPlaceholder from "../ui/VideoPlaceholder";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="home" className="section bg-ambient-gold" style={{ paddingTop: "4rem", paddingBottom: "5rem", overflow: "hidden" }}>
      <div className={`container hero-container ${isMounted ? "hero-animated" : ""}`} style={{ textAlign: "center", maxWidth: "1100px", overflow: "hidden" }}>
        {/* 1. Eyebrow */}
        <div className="hero-elem hero-eyebrow">
          <span className="eyebrow" style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--color-gold-bright)",
              }}
            />
            "Go Visual, Even a beginner gets it instantly"
          </span>
        </div>

        {/* 2. Main Dominant Headline */}
        <h1
          className="hero-elem hero-headline"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.2rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#ffffff",
            marginBottom: "0.75rem",
            letterSpacing: "-0.03em",
          }}
        >
          Crack IIT-JEE with <span className="text-gold">CNM</span>
        </h1>

        {/* 3. Subheading / Second Line */}
        <p
          className="hero-elem hero-subheading"
          style={{
            fontFamily: "var(--font-family-heading)",
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            color: "var(--color-gold-bright)",
            marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
          }}
        >
          Visual Learning with Real Results
        </p>

        {/* 4. Supporting Statement */}
        <p
          className="hero-elem hero-supporting"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--color-text-secondary)",
            maxWidth: "780px",
            margin: "0 auto 3rem auto",
            lineHeight: 1.65,
          }}
        >
          Skyrocket your preparation and Boost Your Performance by 90% with CNM
        </p>

        {/* 5. Main Instructor Video Player Area */}
        <div
          className="hero-elem hero-video"
          style={{
            maxWidth: "960px",
            width: "100%",
            margin: "0 auto 3rem auto",
            position: "relative",
          }}
        >
          <VideoPlaceholder
            title="CNM Learning — Sample Lesson"
            aspectRatio="16/9"
          />
        </div>

        {/* 6. Hero CTA Row Below Video */}
        <div
          className="hero-elem hero-cta"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            flexWrap: "wrap",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          <Button
            href="#pricing"
            variant="primary"
            style={{
              padding: "1rem 2.25rem",
              fontSize: "1.05rem",
              boxShadow: "0 6px 24px rgba(212, 175, 55, 0.35)",
            }}
          >
            Yes! I Want to Become an IITian
          </Button>

          <Button
            href="#videos"
            variant="secondary"
            style={{
              padding: "1rem 2rem",
              fontSize: "1.05rem",
            }}
          >
            Watch a Free Demo Lesson
          </Button>
        </div>

        {/* 7. Supporting Enrollment Note */}
        <p
          className="hero-elem hero-note"
          style={{
            marginTop: "1.25rem",
            fontSize: "0.85rem",
            color: "var(--color-text-muted)",
            letterSpacing: "0.02em",
          }}
        >
          Instant Access • Lifetime 3D Visual Learning Concept Access
        </p>
      </div>

      <style jsx>{`
        .hero-elem {
          will-change: transform, opacity;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-container:not(.hero-animated) .hero-elem {
          opacity: 0;
        }

        .hero-container:not(.hero-animated) .hero-eyebrow { transform: translateY(12px); }
        .hero-container:not(.hero-animated) .hero-headline { transform: translateY(22px); }
        .hero-container:not(.hero-animated) .hero-subheading { transform: translateY(18px); }
        .hero-container:not(.hero-animated) .hero-supporting { transform: translateY(16px); }
        .hero-container:not(.hero-animated) .hero-video { transform: translateY(28px) scale(0.98); }
        .hero-container:not(.hero-animated) .hero-cta { transform: translateY(18px); }
        .hero-container:not(.hero-animated) .hero-note { transform: translateY(12px); }

        .hero-container.hero-animated .hero-elem {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .hero-container.hero-animated .hero-eyebrow { transition-delay: 0ms; }
        .hero-container.hero-animated .hero-headline { transition-delay: 100ms; }
        .hero-container.hero-animated .hero-subheading { transition-delay: 180ms; }
        .hero-container.hero-animated .hero-supporting { transition-delay: 260ms; }
        .hero-container.hero-animated .hero-video { transition-delay: 380ms; }
        .hero-container.hero-animated .hero-cta { transition-delay: 500ms; }
        .hero-container.hero-animated .hero-note { transition-delay: 600ms; }

        @media (max-width: 640px) {
          :global(.btn) {
            width: 100% !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-elem {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
