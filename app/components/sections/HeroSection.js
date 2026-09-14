"use client";

import Button from "../ui/Button";
import VideoPlaceholder from "../ui/VideoPlaceholder";

export default function HeroSection() {
  return (
    <section id="home" className="section bg-ambient-gold" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "1100px" }}>
        {/* 1. Eyebrow */}
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

        {/* 2. Main Dominant Headline */}
        <h1
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
        @media (max-width: 640px) {
          :global(.btn) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
