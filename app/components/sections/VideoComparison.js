"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import VideoPlaceholder from "../ui/VideoPlaceholder";

export default function VideoComparison() {
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
    <section id="videos" ref={sectionRef} className="section" style={{ overflow: "hidden" }}>
      <div className={`container video-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ overflow: "hidden" }}>
        <SectionHeading
          eyebrow="Visual Learning Comparison"
          title="Watch These Two Videos Which One Gets You Hooked More?"
          description="Join thousands of students mastering Physics, Chemistry, and Maths the smart way."
          centered
          className="video-header"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            marginTop: "2.5rem",
          }}
        >
          {/* Normal Video Card */}
          <div
            className="video-card video-card-left"
            style={{
              transitionDelay: isMounted && isVisible ? "280ms" : "0ms",
            }}
          >
            <h4
              style={{
                marginBottom: "1.25rem",
                textAlign: "center",
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-family-heading)",
                fontSize: "1.15rem",
              }}
            >
              Normal Video
            </h4>
            <VideoPlaceholder
              title="Normal Video"
              aspectRatio="16/9"
            />
          </div>

          {/* CNM's Video Card (Premium Gold Emphasis) */}
          <div
            className="video-card video-card-right"
            style={{
              position: "relative",
              transitionDelay: isMounted && isVisible ? "400ms" : "0ms",
            }}
          >
            <h4
              style={{
                marginBottom: "1.25rem",
                textAlign: "center",
                color: "var(--color-gold-bright)",
                fontFamily: "var(--font-family-heading)",
                fontSize: "1.15rem",
              }}
            >
              CNM's Video ★
            </h4>
            <VideoPlaceholder
              title="CNM's Video"
              aspectRatio="16/9"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Header sequence */
        :global(.video-header .eyebrow),
        :global(.video-header .section-title),
        :global(.video-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .video-container.js-active:not(.is-visible) :global(.video-header .eyebrow) {
          opacity: 0;
          transform: translateY(14px);
        }

        .video-container.js-active:not(.is-visible) :global(.video-header .section-title) {
          opacity: 0;
          transform: translateY(22px);
        }

        .video-container.js-active:not(.is-visible) :global(.video-header .section-description) {
          opacity: 0;
          transform: translateY(16px);
        }

        .video-container.js-active.is-visible :global(.video-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .video-container.js-active.is-visible :global(.video-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .video-container.js-active.is-visible :global(.video-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* Video cards cinematic horizontal reveal */
        .video-card {
          --tx: 0px;
          --ty: 0px;
          --op: 1;
          transform: translate3d(var(--tx), var(--ty), 0) scale(var(--sc, 1));
          opacity: var(--op);
          will-change: transform, opacity;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .video-card:hover {
          --ty: -4px;
        }

        .video-container.js-active:not(.is-visible) .video-card-left {
          --tx: -45px;
          --sc: 0.98;
          --op: 0;
        }

        .video-container.js-active:not(.is-visible) .video-card-right {
          --tx: 45px;
          --sc: 0.98;
          --op: 0;
        }

        .video-container.js-active.is-visible .video-card {
          --tx: 0px;
          --sc: 1;
          --op: 1;
        }

        @media (max-width: 767px) {
          .video-container.js-active:not(.is-visible) .video-card-left {
            --tx: -20px;
          }
          .video-container.js-active:not(.is-visible) .video-card-right {
            --tx: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.video-header .eyebrow),
          :global(.video-header .section-title),
          :global(.video-header .section-description),
          .video-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
