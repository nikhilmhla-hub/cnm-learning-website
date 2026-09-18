"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="section" style={{ overflow: "hidden" }}>
      <div className={`container exp-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "center", overflow: "hidden" }}>
        <div className="exp-left" style={{ transitionDelay: isMounted && isVisible ? "100ms" : "0ms" }}>
          <SectionHeading
            eyebrow="CNM LEARNING IN ACTION"
            title="Experience CNM Learning in Action"
            description="Experience the transformative learning journey firsthand."
          />
        </div>
        <div className="exp-right" style={{ transitionDelay: isMounted && isVisible ? "280ms" : "0ms" }}>
          <ImagePlaceholder label="CNM Interactive Platform Demo" aspectRatio="4/3" />
        </div>
      </div>

      <style jsx>{`
        .exp-left,
        .exp-right {
          will-change: transform, opacity;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .exp-container.js-active:not(.is-visible) .exp-left {
          opacity: 0;
          transform: translateX(-35px);
        }

        .exp-container.js-active:not(.is-visible) .exp-right {
          opacity: 0;
          transform: translateY(24px) scale(0.96);
        }

        .exp-container.js-active.is-visible .exp-left {
          opacity: 1;
          transform: translateX(0);
        }

        .exp-container.js-active.is-visible .exp-right {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        @media (max-width: 767px) {
          .exp-container.js-active:not(.is-visible) .exp-left {
            transform: translateX(-18px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .exp-left,
          .exp-right {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
