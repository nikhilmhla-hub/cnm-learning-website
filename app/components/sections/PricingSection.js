import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { coursesData } from "../../data/courses";

export default function PricingSection({ courses = coursesData }) {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="50% Discount - Founding Members Offer"
          title="This Exclusive Launch Deal Is Ending Soon"
          description="IIT-JEE Success Starts Here – Join CNM's Bestselling Courses"
          centered
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.75rem", marginTop: "2rem" }}>
          {courses.map((course) => (
            <div
              key={course.id}
              className="card card-interactive"
              style={{
                borderColor: course.popular ? "var(--color-border-gold-bright)" : "var(--color-border)",
                backgroundColor: course.popular ? "#16140c" : "var(--color-surface)",
                position: "relative",
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
    </section>
  );
}
