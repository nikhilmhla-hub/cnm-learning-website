import Link from "next/link";
import { Heading, Action, styles } from "./Shared";
import { scenarios } from "./scenarios";
export default function Evidence() {
  return <section id="evidence" className={styles.section}><div className="container">
    <Heading eyebrow="PREPARATION SCENARIOS / ILLUSTRATIVE" title="Different problems. Different next steps." description="See how CNM’s tools can support a more specific response to familiar preparation difficulties." />
    <div className={styles.principles}>{scenarios.map((item, i) => <article className={styles.principle} key={item.id}><span>0{i + 1} / {item.label.toUpperCase()}</span><h3>{item.title}</h3><p>{item.context}</p><p><strong>What to review next:</strong> {item.review}</p><Link className={styles.textLink} href={`/case-studies#${item.id}`}>Explore this scenario →</Link></article>)}</div>
    <p className={styles.finePrint}>Illustrative situations, not student case histories, testimonials or measured CNM outcomes. They explain the approach; they do not predict a student’s result.</p>
    <div className={styles.actions}><Action href="/case-studies">Explore the preparation scenarios</Action><Action href="/demo" secondary>Try the dashboard workflow</Action></div>
  </div></section>;
}
