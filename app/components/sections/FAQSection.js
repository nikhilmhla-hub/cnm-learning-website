import SectionHeading from "../ui/SectionHeading";
import { faqData } from "../../data/faq";

export default function FAQSection({ faqs = faqData }) {
  return (
    <section id="faq" className="section section-alt">
      <div className="container" style={{ maxWidth: "840px" }}>
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Everything you need to know about CNM Learning courses and enrollment."
          centered
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "2rem" }}>
          {faqs.map((faq) => (
            <div key={faq.id} className="card card-interactive">
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.6rem", color: "#ffffff" }}>{faq.question}</h4>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
