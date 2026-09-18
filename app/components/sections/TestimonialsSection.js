"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { testimonialsData } from "../../data/testimonials";

export default function TestimonialsSection({ testimonials = testimonialsData }) {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e) => setReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  // IntersectionObserver for entrance reveal
  useEffect(() => {
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
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
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
    <section id="testimonials" ref={sectionRef} className="section section-alt" style={{ overflow: "hidden" }}>
      <div className={`container testimonials-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ overflow: "hidden" }}>
        <SectionHeading
          eyebrow="PROVEN RESULTS"
          title="See What Our Toppers Say"
          description="Hear how CNM Learning helped thousands crack JEE with confidence and clarity."
          centered
          className="testimonials-header"
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
            transitionDelay: isMounted && isVisible ? "260ms" : "0ms",
          }}
          className="no-scrollbar testimonials-track"
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
        <div
          className="testimonials-cta"
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            transitionDelay: isMounted && isVisible ? "420ms" : "0ms",
          }}
        >
          <Button href="#pricing" variant="primary" style={{ padding: "0.95rem 2.25rem" }}>
            Yes! I Want to Become an IITian
          </Button>
        </div>
      </div>

      <style jsx>{`
        /* Header sequence */
        :global(.testimonials-header .eyebrow),
        :global(.testimonials-header .section-title),
        :global(.testimonials-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .testimonials-container.js-active:not(.is-visible) :global(.testimonials-header .eyebrow) {
          opacity: 0;
          transform: translateY(14px);
        }

        .testimonials-container.js-active:not(.is-visible) :global(.testimonials-header .section-title) {
          opacity: 0;
          transform: translateY(22px);
        }

        .testimonials-container.js-active:not(.is-visible) :global(.testimonials-header .section-description) {
          opacity: 0;
          transform: translateY(16px);
        }

        .testimonials-container.js-active.is-visible :global(.testimonials-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .testimonials-container.js-active.is-visible :global(.testimonials-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .testimonials-container.js-active.is-visible :global(.testimonials-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Carousel track & CTA soft entrance */
        .testimonials-track,
        .testimonials-cta {
          will-change: transform, opacity;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .testimonials-container.js-active:not(.is-visible) .testimonials-track,
        .testimonials-container.js-active:not(.is-visible) .testimonials-cta {
          opacity: 0;
          transform: translateY(20px);
        }

        .testimonials-container.js-active.is-visible .testimonials-track,
        .testimonials-container.js-active.is-visible .testimonials-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 640px) {
          :global(.card-interactive) {
            flex: 0 0 85vw !important;
            min-width: 85vw !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.testimonials-header .eyebrow),
          :global(.testimonials-header .section-title),
          :global(.testimonials-header .section-description),
          .testimonials-track,
          .testimonials-cta {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
