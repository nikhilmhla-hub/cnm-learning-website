"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function LearningKitSection() {
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
    <section id="courses" ref={sectionRef} className="section section-alt" style={{ overflow: "hidden" }}>
      <div className={`container kit-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "center", overflow: "hidden" }}>
        <div className="kit-image-box" style={{ transitionDelay: isMounted && isVisible ? "250ms" : "0ms" }}>
          <ImagePlaceholder label="CNM Learning Kit / Proof Visual" aspectRatio="4/3" />
        </div>
        <div className="kit-text-box" style={{ transitionDelay: isMounted && isVisible ? "380ms" : "0ms" }}>
          <SectionHeading
            eyebrow="CNM LEARNING"
            title="Join Thousands of Satisfied CNM Learning Students"
            description="No other institute can do this. Master Physics, Chemistry, and Mathematics with clarity and confidence."
          />
        </div>
      </div>

      <style jsx>{`
        .kit-image-box,
        .kit-text-box {
          will-change: transform, opacity;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .kit-container.js-active:not(.is-visible) .kit-image-box {
          opacity: 0;
          transform: scale(0.92) translateY(20px);
        }

        .kit-container.js-active:not(.is-visible) .kit-text-box {
          opacity: 0;
          transform: translateX(35px);
        }

        .kit-container.js-active.is-visible .kit-image-box {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .kit-container.js-active.is-visible .kit-text-box {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 767px) {
          .kit-container.js-active:not(.is-visible) .kit-text-box {
            transform: translateX(18px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kit-image-box,
          .kit-text-box {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
