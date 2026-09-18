"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { faqData } from "../../data/faq";

export default function FAQSection({ faqs = faqData }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [openId, setOpenId] = useState(null);

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

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" ref={sectionRef} className="section section-alt" style={{ overflow: "hidden" }}>
      <div className={`container faq-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`} style={{ maxWidth: "840px", overflow: "hidden" }}>
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Everything you need to know about CNM Learning courses and enrollment."
          centered
          className="faq-header"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "2rem" }}>
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                onClick={() => toggleFaq(faq.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFaq(faq.id);
                  }
                }}
                className={`card card-interactive faq-item-card ${isOpen ? "is-open" : ""}`}
                style={{
                  cursor: "pointer",
                  transitionDelay: isMounted && isVisible ? `${250 + index * 70}ms` : "0ms",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                  <h4 style={{ fontSize: "1.1rem", margin: 0, color: "#ffffff", fontWeight: 700 }}>
                    {faq.question}
                  </h4>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(212, 175, 55, 0.12)",
                      border: "1px solid rgba(212, 175, 55, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-gold)",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>

                <div
                  className="faq-answer-wrapper"
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ minHeight: 0 }}>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: "1.6",
                        marginTop: isOpen ? "0.85rem" : "0rem",
                        paddingTop: isOpen ? "0.5rem" : "0rem",
                        borderTop: isOpen ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
                        opacity: isOpen ? 1 : 0,
                        transition: "opacity 0.25s ease, margin 0.3s ease",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* Header sequence */
        :global(.faq-header .eyebrow),
        :global(.faq-header .section-title),
        :global(.faq-header .section-description) {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-container.js-active:not(.is-visible) :global(.faq-header .eyebrow) {
          opacity: 0;
          transform: translateY(14px);
        }

        .faq-container.js-active:not(.is-visible) :global(.faq-header .section-title) {
          opacity: 0;
          transform: translateY(22px);
        }

        .faq-container.js-active:not(.is-visible) :global(.faq-header .section-description) {
          opacity: 0;
          transform: translateY(16px);
        }

        .faq-container.js-active.is-visible :global(.faq-header .eyebrow) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .faq-container.js-active.is-visible :global(.faq-header .section-title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }

        .faq-container.js-active.is-visible :global(.faq-header .section-description) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 200ms;
        }

        /* FAQ Card entrance */
        .faq-item-card {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .faq-container.js-active:not(.is-visible) .faq-item-card {
          opacity: 0;
          transform: translateY(18px);
        }

        .faq-container.js-active.is-visible .faq-item-card {
          opacity: 1;
          transform: translateY(0);
        }

        .faq-item-card.is-open {
          border-color: var(--color-border-gold);
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.15);
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.faq-header .eyebrow),
          :global(.faq-header .section-title),
          :global(.faq-header .section-description),
          .faq-item-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
