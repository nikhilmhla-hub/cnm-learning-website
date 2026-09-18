"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function AudienceSection() {
  const scrollRef = useRef(null);
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

  const categories = [
    { title: "Beginners", desc: "Building core visual fundamentals from scratch with intuitive 3D explanations." },
    { title: "Intermediate Learners", desc: "Strengthening concept application and improving speed across Physics, Chemistry & Maths." },
    { title: "Advanced Students", desc: "Mastering complex multi-concept JEE Advanced problems with IITian strategies." },
    { title: "Re-appearing Students", desc: "Targeted droppers fast-track to eliminate previous weak spots and maximize rank." },
    { title: "High-Performance Aspirants", desc: "Top-tier aspirants aiming for AIR under 500 with high-yield practice and mentoring." },
  ];

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -340 : 340;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="audience" ref={sectionRef} className="section" style={{ overflow: "hidden" }}>
      <div className={`container audience-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ position: "relative", overflow: "hidden" }}>
        <SectionHeading
          eyebrow="CNM LEARNING"
          title="CNM Learning Is Perfect For:"
          description="Your Path to IIT Starts Here — Enroll in Our Top Courses"
          centered
          className="audience-header"
        />

        {/* Carousel Container with Centered Left & Right Arrow Navigation */}
        <div className="audience-slider-wrapper" style={{ position: "relative", marginTop: "2rem", transitionDelay: isMounted && isVisible ? "260ms" : "0ms" }}>
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll("left")}
            aria-label="Previous audience category"
            style={{
              position: "absolute",
              left: "-18px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "rgba(18, 18, 20, 0.95)",
              border: "1px solid var(--color-border-gold)",
              color: "var(--color-gold-bright)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.8)",
              transition: "all 0.2s ease",
            }}
            className="carousel-arrow left-arrow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll("right")}
            aria-label="Next audience category"
            style={{
              position: "absolute",
              right: "-18px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "rgba(18, 18, 20, 0.95)",
              border: "1px solid var(--color-border-gold)",
              color: "var(--color-gold-bright)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.8)",
              transition: "all 0.2s ease",
            }}
            className="carousel-arrow right-arrow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Cards Track */}
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "1.5rem",
              overflowX: "auto",
              scrollBehavior: "smooth",
              padding: "0.75rem 0.5rem 1.5rem 0.5rem",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="no-scrollbar"
          >
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="card card-interactive"
                style={{
                  flex: "0 0 300px",
                  minWidth: "270px",
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                  padding: "1.75rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    className="badge badge-accent"
                    style={{ marginBottom: "1rem", fontSize: "0.75rem" }}
                  >
                    Category 0{idx + 1}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: "1.6",
                    }}
                  >
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Header sequence */
        :global(.audience-header .eyebrow),
        :global(.audience-header .section-title),
        :global(.audience-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .audience-container.js-active:not(.is-visible) :global(.audience-header .eyebrow) {
          opacity: 0;
          transform: translateY(14px);
        }

        .audience-container.js-active:not(.is-visible) :global(.audience-header .section-title) {
          opacity: 0;
          transform: translateY(22px);
        }

        .audience-container.js-active:not(.is-visible) :global(.audience-header .section-description) {
          opacity: 0;
          transform: translateY(16px);
        }

        .audience-container.js-active.is-visible :global(.audience-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .audience-container.js-active.is-visible :global(.audience-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .audience-container.js-active.is-visible :global(.audience-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Slider wrapper reveal */
        .audience-slider-wrapper {
          will-change: transform, opacity;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .audience-container.js-active:not(.is-visible) .audience-slider-wrapper {
          opacity: 0;
          transform: translateY(18px);
        }

        .audience-container.js-active.is-visible .audience-slider-wrapper {
          opacity: 1;
          transform: translateY(0);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 767px) {
          :global(.carousel-arrow) {
            display: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.audience-header .eyebrow),
          :global(.audience-header .section-title),
          :global(.audience-header .section-description),
          .audience-slider-wrapper {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
