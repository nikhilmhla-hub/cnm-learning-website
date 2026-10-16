import {
  Shell,
  Intro,
  Action,
  Heading,
  FAQ,
  styles,
} from "../components/visitors/Shared";
export const metadata = {
  title: "Before Your Performance Audit | CNM System Labs",
  description:
    "Understand CNM’s free 20-question preparation self-review, what the summary means and your options after completing it.",
};
export default function Audit() {
  return (
    <Shell>
      <Intro
        eyebrow="PERFORMANCE AUDIT / BEFORE YOU BEGIN"
        title="A clearer starting point."
        accent="No rank prediction."
        description="Answer 20 questions about focus, revision, accuracy, time management and confidence. You will see a summary of your answers and practical ideas for what to review next."
        aside={
          <aside className={styles.storyPanel}>
            <span>WHAT TO EXPECT</span>
            <h2 style={{ fontSize: "1.7rem", margin: "22px 0" }}>
              Your preparation.
              <br />
              In your own words.
            </h2>
            <ul className={styles.checkList}>
              <li>Choose your class and exam.</li>
              <li>Answer 20 questions in English or Hindi.</li>
              <li>View your summary without entering contact details.</li>
              <li>Choose whether to request a conversation.</li>
            </ul>
            <p className={styles.finePrint}>
              Free to complete. The assessment opens on CNM’s separate audit
              site.
            </p>
          </aside>
        }
      >
        <Action href="https://cnm-online-audit.vercel.app/audit">
          Begin the 20-question audit
        </Action>
        <Action href="/demo" secondary>
          Explore the sample workflow first
        </Action>
      </Intro>
      <section className={styles.section}>
        <div className="container">
          <Heading
            eyebrow="AFTER THE QUESTIONS"
            title="Turn a summary into a useful next step."
          />
          <div className={styles.principles}>
            {[
              [
                "01 / UNDERSTAND",
                "Read your answer-based summary.",
                "The percentages summarise the questionnaire’s scoring rules. They are not exam marks, a clinical assessment or a validated rank prediction.",
              ],
              [
                "02 / TRY",
                "Choose one practical action.",
                "Compare the suggested review area with a recent test or study session. Start with a manageable change and inspect what happens.",
              ],
              [
                "03 / DECIDE",
                "Discuss support if you want it.",
                "Contact CNM with your context. Agree programme fit, access, duration, human support and complete fees before enrolling. No session is automatically reserved.",
              ],
            ].map(([label, title, description]) => (
              <article className={styles.principle} key={label}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FAQ
        items={[
          [
            "Do I need to provide my phone number?",
            "Not to view your summary. On the audit site, an optional enquiry form lets you choose to share your contact details and audit answers with CNM for follow-up.",
          ],
          [
            "What happens to my answers?",
            "The audit keeps its current summary in browser session storage so you can view it during this browser session. Submitting the optional enquiry sends your details and answers to CNM. Use Clear my audit on the summary page if you are using a shared device.",
          ],
          [
            "Should a parent answer for the student?",
            "Where possible, let the student answer in their own words. Discuss the summary together and add parental observations separately.",
          ],
          [
            "Is the audit enough to diagnose why marks are low?",
            "No. Self-report suggests questions to investigate. Actual tests, the student’s work and preparation context are needed to evaluate those questions.",
          ],
        ]}
      />
    </Shell>
  );
}
