import SectionHeading from "../ui/SectionHeading";

export default function EngagementSection() {
  const pillars = [
    { title: "Traditional Expertise + Modern Tools", desc: "Blending veteran IITian pedagogy with state-of-the-art 3D visual technology." },
    { title: "Animated Content & Interactive Boards", desc: "Intuitive visual experiments and animated derivations that make complex concepts unforgettable." },
    { title: "Smart Assessments & Effective Learning", desc: "Topic-wise microtests, weakness analytics, and real-time doubt support to lock in retention." },
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="HIGH-ENGAGEMENT METHODOLOGY"
          title="What Makes CNM Learning So Engaging?"
          description="Combining traditional expertise with modern tools, animated content, interactive boards, smart assessments, and effective learning."
          centered
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          {pillars.map((item, idx) => (
            <div key={idx} className="card card-interactive" style={{ padding: "1.75rem 1.5rem" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--color-gold-bright)", marginBottom: "0.5rem" }}>{item.title}</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--color-text-secondary)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
