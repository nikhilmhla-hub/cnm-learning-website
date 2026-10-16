import {
  Shell,
  Intro,
  Heading,
  ContactBlock,
  styles,
} from "../components/visitors/Shared";
export const metadata = {
  title: "Website & Audit Privacy | CNM System Labs",
  description:
    "How the CNM website and optional performance-audit enquiry use the information you choose to share.",
};
export default function Privacy() {
  return (
    <Shell>
      <Intro
        eyebrow="WEBSITE & PERFORMANCE AUDIT / PRIVACY"
        title="Know what you share."
        accent="Choose when to enquire."
        description="This page explains the public website and performance-audit enquiry. It does not describe every data flow in an enrolled student’s separate dashboard."
      />
      <section className={styles.section}>
        <div className="container">
          <Heading
            eyebrow="THE PUBLIC AUDIT"
            title="Your summary and your enquiry are separate."
          />
          <dl className={styles.questionTable}>
            {[
              [
                "Viewing a summary",
                "The public audit uses your class, exam and questionnaire answers to calculate an answer-based summary. It stores the current summary in session storage in the audit-site browser tab. No name or phone number is required to view it.",
              ],
              [
                "Sending an optional enquiry",
                "If you submit the optional form, your name, mobile number, class, exam, answers and summary are sent to CNM so the enquiry can be recorded and followed up. The form asks you to choose this before sending.",
              ],
              [
                "Where the enquiry is processed",
                "The audit is hosted on Vercel. Submitted enquiries use CNM’s configured Supabase database; the application can also forward a backup to its configured Google Sheets webhook. Infrastructure providers may process request information needed to serve the sites.",
              ],
              [
                "Shared devices and clearing",
                "Use Clear my audit on the summary page to remove the current audit summary from that browser session. This does not delete an enquiry already submitted to CNM. Do not assume that clearing a tab removes server records.",
              ],
              [
                "Email and phone enquiries",
                "An email link opens your email application; you decide what to send. Email and phone enquiries use the services you choose and provide CNM with the information you share.",
              ],
              [
                "Student and parent participation",
                "Students should answer in their own words where possible. A parent or guardian should be involved when arranging support for a minor. Avoid sending detailed student records in a first enquiry.",
              ],
              [
                "Access, correction or deletion requests",
                "Contact info@cnmlearning.com or +91 6377525604 to ask about information you submitted, correct it or request deletion. Explain the enquiry you are referring to. A fixed retention period and response deadline are not specified on this page.",
              ],
              [
                "Other products and partnerships",
                "Before using a student dashboard or sharing records for a pilot, ask for the applicable data arrangements, permissions, access and retention details. This public audit does not establish institutional access to student data.",
              ],
            ].map(([q, a]) => (
              <div key={q}>
                <dt>{q}</dt>
                <dd>{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <ContactBlock
        audience="general"
        title="A question about your information?"
        description="Use the direct contact details to raise a privacy question or a request about an enquiry."
      />
    </Shell>
  );
}
