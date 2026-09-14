import SectionHeading from "../ui/SectionHeading";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function DreamSection() {
  return (
    <section id="about" className="section">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
        <div>
          <SectionHeading
            eyebrow="ACHIEVE YOUR GOAL"
            title="Achieve Your IIT Dream with CNM Learning"
            description="Expert-led coaching in Physics, Chemistry & Maths — where clarity meets confidence."
          />
        </div>
        <div>
          <ImagePlaceholder label="IIT Campus / Dream Visual" aspectRatio="4/3" />
        </div>
      </div>
    </section>
  );
}
