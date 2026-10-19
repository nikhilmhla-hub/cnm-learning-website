import Evidence from "../components/visitors/Evidence";
import {
  Shell,
  Intro,
  Action,
  Heading,
  FAQ,
  ContactBlock,
  styles,
} from "../components/visitors/Shared";
export const metadata = {
  title: "Partnerships & Collaboration | CNM System Labs",
  description:
    "Explore a focused student-support pilot or collaboration with CNM System Labs for schools, coaching teams, educators, mentors and learning creators.",
};
export default function Partners() {
  return (
    <Shell>
      <Intro
        eyebrow="SCHOOLS · COACHING · EDUCATORS · COLLABORATORS"
        title="Build better student support."
        accent="Together."
        description="Have students to support, expertise to contribute or a problem worth solving? Let’s explore where CNM’s approach and your work can fit."
        aside={
          <aside
            className={styles.partnerMap}
            aria-label="Areas for collaboration"
          >
            <span>DIFFERENT EXPERTISE. A SHARED PURPOSE.</span>
            <strong>
              THE STUDENT
              <br />
              AT THE CENTRE
            </strong>
            <div className={styles.partnerTags}>
              <span>Schools & coaching</span>
              <span>Educators</span>
              <span>Mentors</span>
              <span>Learning creators</span>
            </div>
          </aside>
        }
      >
        <Action href="#talk">Discuss a collaboration</Action>
        <Action href="#collaboration-options" secondary>
          Explore the possibilities
        </Action>
        <Action href="/demo" secondary>
          Explore the dashboard workflow
        </Action>
        <Action href="/programmes" secondary>
          Programmes & fees
        </Action>
      </Intro>
      <section id="collaboration-options" className={styles.section}>
        <div className="container">
          <Heading
            eyebrow="WHERE WE COULD WORK TOGETHER"
            title="Start with a useful contribution."
            description="These are areas to explore, not prepackaged commitments. Delivery, responsibilities and terms are agreed for each collaboration."
          />
          <div className={styles.routes}>
            {[
              [
                "01 / SCHOOLS & COACHING",
                "Explore a focused pilot.",
                "Discuss a defined student group, a preparation problem and a manageable review process that can fit alongside your teaching.",
              ],
              [
                "02 / EDUCATORS & MENTORS",
                "Bring your expertise.",
                "Explore how your subject knowledge, mentoring or student-support experience could contribute to learning and preparation.",
              ],
              [
                "03 / CREATORS & COLLABORATORS",
                "Create something students use.",
                "Discuss concept explanations, practice resources, learning experiences or another concrete contribution to student support.",
              ],
            ].map(([label, title, description]) => (
              <article key={label} className={styles.contextCard}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <Heading
            eyebrow="A SENSIBLE WAY TO BEGIN"
            title="A focused pilot before a bigger commitment."
            description="Define the work clearly enough that everyone knows what they are evaluating."
          />
          <div className={styles.pilotSteps}>
            {[
              [
                "Understand the context",
                "Who are the students? Where is preparation getting difficult? What have you already tried?",
              ],
              [
                "Define the scope",
                "Agree a student group, timeframe, responsibilities and a practical delivery plan.",
              ],
              [
                "Agree the terms",
                "Clarify consent, data access, support, fees and use of materials before starting.",
              ],
              [
                "Review the evidence",
                "Evaluate participation, work completed and useful changes before discussing an expansion.",
              ],
            ].map(([title, description], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <Heading
            eyebrow="AN EXAMPLE TO DISCUSS / NOT A STANDING OFFER"
            title="One preparation problem. One small pilot."
            description="For a school or coaching team, a useful brief might focus on recurring errors after a mock. The following scope is a proposal to discuss, not a promised service."
          />
          <dl className={styles.questionTable}>
            {[
              [
                "Starting evidence",
                "A participating group’s recent test-review process, with permissions agreed before any individual records are shared.",
              ],
              [
                "Possible work",
                "Introduce a consistent error-review routine and a small follow-up practice task. Confirm the people, tools, group size and timeframe in writing.",
              ],
              [
                "Review criteria",
                "Participation, work completed and recurrence of the same error types in comparable practice. Do not equate attendance or task completion with improved exam results.",
              ],
              [
                "Before starting",
                "Agree the fee, responsibilities, consent, access, support, materials and exit terms. Institutional reporting and integrations require separate confirmation.",
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
      <section className={styles.paperSection}>
        <div className={`container ${styles.split}`}>
          <Heading
            eyebrow="MAKE THE FIRST CONVERSATION USEFUL"
            title="Bring a problem. Or a contribution."
            description="A short brief is enough to start. You do not need a polished proposal."
            light
          />
          <div>
            <ul className={styles.checkList}>
              {[
                "Your name, role and organisation, if applicable.",
                "The students or audience you work with.",
                "The problem you want to solve or expertise you bring.",
                "The kind of collaboration and timeframe you have in mind.",
              ].map((text) => (
                <li key={text} style={{ color: "#40434b" }}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Evidence />
      <FAQ
        title="Let’s set the right expectations."
        items={[
          [
            "Do you offer an institutional dashboard or integrations?",
            "Discuss the exact capability you need and request a demonstration of what is currently available. Cohort reporting, integrations, roles and data access must be confirmed in the agreed pilot scope; this page does not promise those features.",
          ],
          [
            "Is this a franchise or a standard revenue-share offer?",
            "This page invites a collaboration discussion. It does not offer a franchise, guaranteed admissions or standard commercial terms. Any such arrangement would need a separate written agreement.",
          ],
          [
            "Can individual educators or creators enquire?",
            "Yes. Describe your expertise, what you would like to contribute and how it would help students. An organisation is not required to start a conversation.",
          ],
          [
            "What student information should we send initially?",
            "Start with the context and the problem. Do not email student lists, test records or other personal information as part of the initial brief. Agree the purpose, permissions and access before sharing student data.",
          ],
        ]}
      />
      <ContactBlock
        audience="partner"
        title="Tell us what you have in mind."
        description="Introduce your work and the problem or opportunity you see. The email draft includes a simple partnership brief to guide the conversation."
      />
    </Shell>
  );
}
