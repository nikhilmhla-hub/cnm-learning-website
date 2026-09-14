import SectionHeading from "../ui/SectionHeading";
import VideoPlaceholder from "../ui/VideoPlaceholder";

export default function VideoComparison() {
  return (
    <section id="videos" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Visual Learning Comparison"
          title="Watch These Two Videos Which One Gets You Hooked More?"
          description="Join thousands of students mastering Physics, Chemistry, and Maths the smart way."
          centered
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
          <div>
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
          <div style={{ position: "relative" }}>
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
    </section>
  );
}
