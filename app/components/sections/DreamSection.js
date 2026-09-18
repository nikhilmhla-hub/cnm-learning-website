"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function DreamSection() {
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
    <section id="about" ref={sectionRef} className="section" style={{ overflow: "hidden" }}>
      <div className={`container dream-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "center", overflow: "hidden" }}>
        <div className="dream-left" style={{ transitionDelay: isMounted && isVisible ? "100ms" : "0ms" }}>
          <SectionHeading
            eyebrow="ACHIEVE YOUR GOAL"
            title="Achieve Your IIT Dream with CNM Learning"
            description="Expert-led coaching in Physics, Chemistry & Maths — where clarity meets confidence."
          />
        </div>
        <div className="dream-right" style={{ transitionDelay: isMounted && isVisible ? "280ms" : "0ms" }}>
          <ImagePlaceholder label="IIT Campus / Dream Visual" aspectRatio="4/3" />
        </div>
      </div>

      <style jsx>{`
        .dream-left,
        .dream-right {
          will-change: transform, opacity;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dream-container.js-active:not(.is-visible) .dream-left {
          opacity: 0;
          transform: translateY(20px);
        }

        .dream-container.js-active:not(.is-visible) .dream-right {
          opacity: 0;
          transform: scale(0.94) translateY(15px);
        }

        .dream-container.js-active.is-visible .dream-left {
          opacity: 1;
          transform: translateY(0);
        }

        .dream-container.js-active.is-visible .dream-right {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .dream-left,
          .dream-right {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
