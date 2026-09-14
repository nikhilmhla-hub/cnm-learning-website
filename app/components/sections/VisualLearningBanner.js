import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function VisualLearningBanner() {
  return (
    <section className="section section-gold-accent bg-ambient-gold">
      <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
        <SectionHeading
          eyebrow="LEARN WITH CNM"
          title="CNM: Turn Complicated into Simple"
          description="Crack JEE with Confidence – Learn with CNM"
          centered
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", margin: "2rem 0" }}>
          <div className="card" style={{ borderColor: "var(--color-border-gold)", textAlign: "center", padding: "2rem 1.5rem" }}>
            <h3 style={{ color: "var(--color-gold-bright)", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
              So Simple, a Child Could Master It
            </h3>
            <p style={{ fontSize: "0.95rem" }}>Intuitive 3D visual concept breakdowns engineered for immediate understanding.</p>
          </div>
          <div className="card" style={{ borderColor: "var(--color-border-gold)", textAlign: "center", padding: "2rem 1.5rem" }}>
            <h3 style={{ color: "var(--color-gold-bright)", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
              So Advanced, Toppers Trust It
            </h3>
            <p style={{ fontSize: "0.95rem" }}>Rigorous IITian-mode problem solving built to master JEE Advanced questions.</p>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <Button href="#pricing" variant="primary">Yes! I Want to Become an IITian</Button>
        </div>
      </div>
    </section>
  );
}
