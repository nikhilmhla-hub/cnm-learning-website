import Link from "next/link";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import styles from "./visitor.module.css";
import { EMAIL, PHONE, PHONE_URL, enquiryLink } from "./content";

export { styles };
export function Action({ href, children, secondary = false, ...props }) {
  const className = secondary ? styles.secondary : styles.primary;
  if (/^(https?:|mailto:|tel:)/.test(href)) return <a href={href} className={className} {...(href.startsWith("https:") ? {target:"_blank",rel:"noopener noreferrer"} : {})} {...props}>{children}<span aria-hidden="true">↗</span></a>;
  return <Link href={href} className={className} {...props}>{children}<span aria-hidden="true">→</span></Link>;
}
export function Shell({children}) {
  return <><Navbar /><main id="main-content" className={styles.page}>{children}</main><Footer /></>;
}
export function Heading({eyebrow, title, description, light = false}) {
  return <div className={`${styles.heading} ${light ? styles.lightHeading : ""}`}><span className={styles.kicker}>{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
export function Intro({eyebrow, title, accent, description, children, aside}) {
  return <section className={styles.intro}><div className={`container ${styles.introGrid}`}><div><span className={styles.kicker}>{eyebrow}</span><h1>{title}<span>{accent}</span></h1><p className={styles.lead}>{description}</p><div className={styles.actions}>{children}</div></div>{aside}</div></section>;
}
export function FAQ({items, title = "Questions worth asking.", eyebrow = "BEFORE YOU DECIDE"}) {
  return <section className={styles.section} id="questions"><div className={`container ${styles.faqGrid}`}><Heading eyebrow={eyebrow} title={title} description="Understand the approach, the fit and the next step." /><div className={styles.faqList}>{items.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>;
}
export function ContactBlock({audience="student", title="Let’s start with your situation.", description="Tell us what is getting difficult and what you want to change."}) {
  return <section id="talk" className={styles.contactSection}><div className={`container ${styles.contactGrid}`}><div><span className={styles.kicker}>A CONVERSATION WITH CNM</span><h2>{title}</h2><p>{description}</p><div className={styles.actions}><Action href={enquiryLink(audience)}>{audience==="partner" ? "Email a partnership brief" : audience==="parent" ? "Email a parent enquiry" : "Email CNM"}</Action><Action href={PHONE_URL} secondary>Call CNM</Action></div><p className={styles.finePrint}>The email link opens a draft in your email app. You choose what to share and when to send it.</p></div><div className={styles.contactDetails}><span>DIRECT CONTACT</span><a href={enquiryLink(audience)}>{EMAIL}</a><a href={PHONE_URL}>{PHONE}</a><p>Jaipur, Rajasthan · Online student support</p><Link href="/privacy-policy">Read our privacy policy →</Link></div></div></section>;
}
export function ReviewExample() {
  return <aside className={styles.reviewPaper} aria-label="Illustrative weekly review"><div className={styles.paperTop}><span>CNM / WEEKLY REVIEW</span><span>EXAMPLE</span></div><h2>Replace “How many marks?”<br />with a better conversation.</h2><dl><div><dt>What was planned?</dt><dd>Revise one chapter and practise a timed set.</dd></div><div><dt>What actually happened?</dt><dd>Practice was completed. Revision was postponed.</dd></div><div><dt>What needs attention?</dt><dd>The revision task was too large to start.</dd></div><div><dt>What changes next?</dt><dd>Break it into short recall tasks. Review again.</dd></div></dl><p>Illustrative discussion guide, not a student report.</p></aside>;
}
