import SectionHeading from "../ui/SectionHeading";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
        <div>
          <SectionHeading
            eyebrow="CNM LEARNING IN ACTION"
            title="Experience CNM Learning in Action"
            description="Experience the transformative learning journey firsthand."
          />
        </div>
        <div>
          <ImagePlaceholder label="CNM Interactive Platform Demo" aspectRatio="4/3" />
        </div>
      </div>
    </section>
  );
}
