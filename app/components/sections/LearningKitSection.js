import SectionHeading from "../ui/SectionHeading";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function LearningKitSection() {
  return (
    <section id="courses" className="section section-alt">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
        <div>
          <ImagePlaceholder label="CNM Learning Kit / Proof Visual" aspectRatio="4/3" />
        </div>
        <div>
          <SectionHeading
            eyebrow="CNM LEARNING"
            title="Join Thousands of Satisfied CNM Learning Students"
            description="No other institute can do this. Master Physics, Chemistry, and Mathematics with clarity and confidence."
          />
        </div>
      </div>
    </section>
  );
}
