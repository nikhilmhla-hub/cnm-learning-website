import {
  Shell,
  Intro,
  Action,
  Heading,
  ContactBlock,
  styles,
} from "../components/visitors/Shared";
import { programmes } from "../components/visitors/content";
import product from "../components/visitors/Product.module.css";
export const metadata = {
  title: "Programmes, Fees & Delivery | CNM System Labs",
  description:
    "Compare CNM programme fees for JEE and NEET, XI, XII and droppers. Understand what each area covers and the support and duration to confirm before enrolment.",
};
const fees = [
  ["REWIRE", 10000],
  ["REFOCUS", 10000],
  ["RISE", 10000],
  ["REWIRE + REFOCUS + RISE", 30000],
  ["RECONNECT", 20000],
  ["REINFORCE", 20000],
  ["RECONNECT + REINFORCE", 30000],
  ["Complete Performance Package", 60000],
];
const money = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
export default function Programmes() {
  return (
    <Shell>
      <Intro
        eyebrow="PROGRAMMES / SCOPE & FEES"
        title="Know what you’re choosing."
        accent="Before you commit."
        description="Choose support around the preparation problem. Compare the programme fees, then agree the exact access, delivery and human support in writing."
      >
        <Action href="#fees">Compare fees</Action>
        <Action href="/demo" secondary>
          Try the sample walkthrough
        </Action>
      </Intro>
      <section className={styles.section}>
        <div className="container">
          <Heading
            eyebrow="WHAT EACH AREA IS FOR"
            title="Five areas. A specific purpose for each."
          />
          <div className={styles.modules}>
            {programmes.map((p, i) => (
              <article className={styles.module} key={p.name}>
                <span>0{i + 1}</span>
                <h3>{p.name}</h3>
                <div>
                  <strong>{p.focus}</strong>
                  <p>{p.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.finePrint}>
            Programme descriptions explain the focus. Request a demonstration
            and an itemised list of the lessons, tools, tests and support
            currently included in your chosen package.
          </p>
        </div>
      </section>
      <section id="fees" className={styles.section}>
        <div className="container">
          <Heading
            eyebrow="JEE & NEET / XI · XII · DROPPERS"
            title="Programme fee guide."
            description="The dropper fee is the XI/XII programme fee plus 70%. Both exam streams use this fee structure."
          />
          <div className={product.tableWrap}>
            <table className={product.feeTable}>
              <caption>Programme fees in Indian rupees</caption>
              <thead>
                <tr>
                  <th scope="col">Programme</th>
                  <th scope="col">Class XI / XII</th>
                  <th scope="col">Dropper</th>
                </tr>
              </thead>
              <tbody>
                {fees.map(([name, price]) => (
                  <tr key={name}>
                    <td>
                      {name}
                      {name === "Complete Performance Package" && (
                        <small>All five programme areas</small>
                      )}
                    </td>
                    <td>{money(price)}</td>
                    <td>{money(price * 1.7)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.finePrint}>
            Fee guide, not a checkout or an enrolment contract. Confirm the
            final payable amount, tax treatment, any additional charges, payment
            schedule and applicable refund/cancellation terms with CNM before
            paying.
          </p>
          <div className={product.terms}>
            <article>
              <strong>DURATION</strong>
              <h3>Confirm the access period.</h3>
              <p>
                A fixed programme or dashboard-access duration is not published
                here. The 90-day blueprint illustrates a planning framework; it
                does not establish a 90-day enrolment entitlement.
              </p>
            </article>
            <article>
              <strong>HUMAN SUPPORT</strong>
              <h3>Agree who helps and when.</h3>
              <p>
                Before enrolment, confirm the named reviewer, review frequency,
                channel, response expectations and escalation process. This page
                does not promise daily calls, a dedicated mentor or 24/7 access.
              </p>
            </article>
            <article>
              <strong>WHAT THE STUDENT RECEIVES</strong>
              <h3>An itemised programme scope.</h3>
              <p>
                Ask CNM to specify the learning material, practice, tools, tests
                and review support in the selected package. Screens shown on
                this website do not establish access to every feature.
              </p>
            </article>
            <article>
              <strong>AFTER THE AUDIT</strong>
              <h3>A summary before a decision.</h3>
              <p>
                Review your self-reported preparation patterns. Choose a
                practical action, then contact CNM if you want to discuss the
                evidence, programme fit and written terms. Completing an audit
                does not enrol you or reserve a session.
              </p>
            </article>
          </div>
          <div className={product.jump}>
            <Action href="/contact">Request the written scope</Action>
            <Action href="/audit" secondary>
              Understand the audit first
            </Action>
          </div>
        </div>
      </section>
      <ContactBlock
        audience="parent"
        title="Ask for specifics, not promises."
        description="Share your class, exam and the support you are considering. Request the exact programme scope and delivery terms before enrolment."
      />
    </Shell>
  );
}
