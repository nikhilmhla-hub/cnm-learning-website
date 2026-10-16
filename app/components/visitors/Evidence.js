import { Heading, Action, styles } from "./Shared";
export default function Evidence() {
  return (
    <section id="evidence" className={styles.section}>
      <div className="container">
        <Heading
          eyebrow="EVIDENCE / WHAT YOU CAN VERIFY"
          title="Inspect the work behind the claim."
          description="A useful student case needs a starting point, a timeframe, the support delivered and comparable evidence of what changed."
        />
        <div className={styles.principles}>
          {[
            [
              "STARTING POINT",
              "What was difficult?",
              "Look for the original test or work pattern and the preparation context, not just a final score.",
            ],
            [
              "PROCESS",
              "What actually happened?",
              "Check the duration, the actions completed and the human support provided.",
            ],
            [
              "OUTCOME",
              "What changed, and how was it checked?",
              "Compare like-for-like work or tests and acknowledge other influences. A testimonial alone does not establish causation.",
            ],
          ].map(([label, title, text]) => (
            <article className={styles.principle} key={label}>
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className={styles.finePrint}>
          No verified, consented student outcome cases are published on this
          site yet. The walkthrough and interface previews are examples, not
          outcome evidence. Ask CNM what can be substantiated and shared with
          permission before relying on a result claim.
        </p>
        <Action href="/contact" secondary>
          Ask about evidence & an actual demonstration
        </Action>
      </div>
    </section>
  );
}
