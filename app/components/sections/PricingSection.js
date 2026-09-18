"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { coursesData } from "../../data/courses";

export default function PricingSection({ courses = coursesData }) {
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
    <section id="pricing" ref={sectionRef} className="section" style={{ overflow: "hidden" }}>
      <div className={`container pricing-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ overflow: "hidden" }}>
        <SectionHeading
          eyebrow="50% Discount - Founding Members Offer"
          title="This Exclusive Launch Deal Is Ending Soon"
          description="IIT-JEE Success Starts Here – Join CNM's Bestselling Courses"
          centered
          className="pricing-header"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.75rem", marginTop: "2rem" }}>
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="card card-interactive pricing-card"
              style={{
                borderColor: course.popular ? "var(--color-border-gold-bright)" : "var(--color-border)",
                backgroundColor: course.popular ? "#16140c" : "var(--color-surface)",
                position: "relative",
                transitionDelay: isMounted && isVisible ? `${280 + index * 120}ms` : "0ms",
              }}
            >
              {course.popular && (
                <span className="badge badge-accent" style={{ marginBottom: "0.75rem" }}>
                  ★ Most Popular Bestseller
                </span>
              )}
              <h3 style={{ fontSize: "1.25rem", color: "#ffffff" }}>{course.title}</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", marginTop: "0.25rem" }}>
                {course.target}
              </p>
              <div style={{ marginTop: "1.25rem", marginBottom: "1.25rem", display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-gold-bright)" }}>
                  {course.price}
                </span>
                <span style={{ textDecoration: "line-through", color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
                  {course.originalPrice}
                </span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem", fontSize: "0.92rem" }}>
                {course.features.map((feat, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--color-text-secondary)" }}>
                    <span style={{ color: "var(--color-gold-bright)", fontWeight: 800 }}>✓</span> {feat}
                  </li>
                ))}
              </ul>
              <Button href="#contact" variant={course.popular ? "primary" : "secondary"} style={{ width: "100%" }}>
                Yes! I Want to Become an IITian
              </Button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Header sequence */
        :global(.pricing-header .eyebrow),
        :global(.pricing-header .section-title),
        :global(.pricing-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pricing-container.js-active:not(.is-visible) :global(.pricing-header .eyebrow) {
          opacity: 0;
          transform: translateY(14px);
        }

        .pricing-container.js-active:not(.is-visible) :global(.pricing-header .section-title) {
          opacity: 0;
          transform: translateY(22px);
        }

        .pricing-container.js-active:not(.is-visible) :global(.pricing-header .section-description) {
          opacity: 0;
          transform: translateY(16px);
        }

        .pricing-container.js-active.is-visible :global(.pricing-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .pricing-container.js-active.is-visible :global(.pricing-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .pricing-container.js-active.is-visible :global(.pricing-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Pricing card rise & border activation */
        .pricing-card {
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

        .pricing-card:hover {
          --hover-y: -4px;
        }

        .pricing-container.js-active:not(.is-visible) .pricing-card {
          --ty: 32px;
          --sc: 0.97;
          --op: 0;
        }

        .pricing-container.js-active.is-visible .pricing-card {
          --ty: 0px;
          --sc: 1;
          --op: 1;
        }

        @media (max-width: 767px) {
          .pricing-container.js-active:not(.is-visible) .pricing-card {
            --ty: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.pricing-header .eyebrow),
          :global(.pricing-header .section-title),
          :global(.pricing-header .section-description),
          .pricing-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
