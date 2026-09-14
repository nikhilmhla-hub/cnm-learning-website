import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function FinalCTASection() {
  return (
    <section className="section section-gold-accent bg-ambient-gold">
      <div className="container" style={{ textAlign: "center", maxWidth: "820px" }}>
        <SectionHeading
          eyebrow="50% Discount - Founding Members Offer"
          title="Grab Access To CNM Learning Today!"
          description="Join thousands of students mastering Physics, Chemistry, and Maths with 3D clarity."
          centered
        />
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Button href="#pricing" variant="primary">Yes! I Want to Become an IITian</Button>
          <Button href="#videos" variant="secondary">Watch a Free Demo Lesson</Button>
        </div>
      </div>
    </section>
  );
}
