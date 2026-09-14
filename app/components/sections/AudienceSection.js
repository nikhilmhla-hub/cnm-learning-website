"use client";

import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function AudienceSection() {
  const scrollRef = useRef(null);

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
    <section id="audience" className="section">
      <div className="container" style={{ position: "relative" }}>
        <SectionHeading
          eyebrow="CNM LEARNING"
          title="CNM Learning Is Perfect For:"
          description="Your Path to IIT Starts Here — Enroll in Our Top Courses"
          centered
        />

        {/* Carousel Container with Centered Left & Right Arrow Navigation */}
        <div style={{ position: "relative", marginTop: "2rem" }}>
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
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Single Horizontal Row Track */}
          <div
            ref={scrollRef}
            aria-label="Audience categories carousel"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              gap: "1.5rem",
              overflowX: "auto",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              padding: "0.75rem 0.5rem 1.25rem 0.5rem",
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
                  maxWidth: "320px",
                  padding: "1.75rem 1.5rem",
                  backgroundColor: "#121215",
                  borderColor: "var(--color-border)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px",
                    backgroundColor: "var(--color-gold-soft)",
                    border: "1px solid var(--color-border-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    color: "var(--color-gold-bright)",
                    fontWeight: 800,
                  }}
                >
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: "1.2rem", color: "#ffffff", marginBottom: "0.5rem" }}>{cat.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: "1.6" }}>{cat.desc}</p>
              </div>
            ))}
          </div>

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
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .carousel-arrow:hover {
          background-color: var(--color-gold-soft) !important;
          border-color: var(--color-gold-bright) !important;
          transform: translateY(-50%) scale(1.08) !important;
        }
        @media (max-width: 640px) {
          :global(.card-interactive) {
            flex: 0 0 85vw !important;
            min-width: 85vw !important;
          }
          .left-arrow {
            left: 0px !important;
          }
          .right-arrow {
            right: 0px !important;
          }
        }
      `}</style>
    </section>
  );
}
