import SectionHeading from "../ui/SectionHeading";
import { featuresData } from "../../data/features";

export default function FeaturesSection({ features = featuresData }) {
  return (
    <section id="features" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="UNMATCHED QUALITY"
          title="CNM Learning Unmatched features:"
          description="Join thousands of students mastering Physics, Chemistry, and Maths the smart way."
          centered
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          {features.map((item) => (
            <div key={item.id} className="card card-interactive">
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  backgroundColor: "var(--color-gold-soft)",
                  border: "1px solid var(--color-border-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  color: "var(--color-gold-bright)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                }}
              >
                ✓
              </div>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem", color: "#ffffff" }}>{item.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
