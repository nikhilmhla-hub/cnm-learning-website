"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { testimonialsData } from "../../data/testimonials";

export default function TestimonialsSection({ testimonials = testimonialsData }) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e) => setReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  // Smooth continuous auto-scroll Left -> Right
  useEffect(() => {
    if (isPaused || reducedMotion) return;

    const el = scrollRef.current;
    if (!el) return;

    let animationId;
    const speed = 0.6; // pixels per frame

    const step = () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += speed;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, reducedMotion]);

  // Duplicate items for continuous seamless loop
  const doubleTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container" style={{ overflow: "hidden" }}>
        <SectionHeading
          eyebrow="PROVEN RESULTS"
          title="See What Our Toppers Say"
          description="Hear how CNM Learning helped thousands crack JEE with confidence and clarity."
          centered
        />

        {/* Testimonial Carousel Track (Single Horizontal Row) */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          aria-label="Student testimonials carousel"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "1.5rem",
            overflowX: "auto",
            scrollBehavior: isPaused ? "smooth" : "auto",
            WebkitOverflowScrolling: "touch",
            padding: "1rem 0.5rem 1.5rem 0.5rem",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="no-scrollbar"
        >
          {doubleTestimonials.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="card card-interactive"
              style={{
                flex: "0 0 320px",
                minWidth: "290px",
                maxWidth: "340px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "1.75rem 1.25rem",
                backgroundColor: "#101014",
                borderColor: "var(--color-border)",
              }}
            >
              {/* TOP: Student Photo Placeholder Area */}
              <div
                style={{
                  width: "76px",
                  height: "76px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-gold-soft)",
                  border: "2px solid var(--color-border-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.7)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at 35% 35%, rgba(240, 201, 75, 0.25) 0%, transparent 70%)",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "var(--color-gold-bright)",
                    fontFamily: "var(--font-family-heading)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    zIndex: 1,
                  }}
                >
                  Photo
                </span>
              </div>

              {/* BELOW PHOTO: Student Name */}
              <h4
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "0.3rem",
                }}
              >
                {item.name}
              </h4>

              {/* BELOW NAME: Rank & IIT Info */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.2rem",
                  marginBottom: "1rem",
                }}
              >
                <span
                  className="badge badge-accent"
                  style={{ fontSize: "0.75rem", fontWeight: 700 }}
                >
                  {item.rank}
                </span>
              </div>

              {/* BELOW THAT: Quoted Testimonial Text */}
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button Below Carousel */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Button href="#pricing" variant="primary" style={{ padding: "0.95rem 2.25rem" }}>
            Yes! I Want to Become an IITian
          </Button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 640px) {
          :global(.card-interactive) {
            flex: 0 0 85vw !important;
            min-width: 85vw !important;
          }
        }
      `}</style>
    </section>
  );
}
