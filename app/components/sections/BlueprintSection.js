import SectionHeading from "../ui/SectionHeading";
import styles from "./BlueprintSection.module.css";

const phases = [
  { days: "DAYS 01–30", title: "Find your baseline.", description: "Review your preparation, test errors and study habits. Choose the gaps to address first.", actions: "Focused revision · Daily study blocks · Error review", measure: "Completed work, recall and recurring mistakes" },
  { days: "DAYS 31–60", title: "Build consistency.", description: "Use targeted practice and timed sets. Review what is working and adjust the next week’s plan.", actions: "Mixed practice · Timed sets · Weekly reviews", measure: "Accuracy, time spent and revision consistency" },
  { days: "DAYS 61–90", title: "Refine test execution.", description: "Bring the pieces together in mocks. Practise question selection, pacing and handling exam pressure.", actions: "Mock analysis · Exam strategy · Revision cycles", measure: "Repeated errors, completion and test-to-test performance" },
];
export default function BlueprintSection() {
  return <section id="blueprint" className={`section ${styles.section}`}>
    <div className="container">
      <SectionHeading eyebrow="THE 90-DAY BLUEPRINT" title="Your next 90 days. With direction." description="An example of how a plan develops. Your starting point, syllabus and exam date determine the priorities and pace." centered />
      <div className={styles.phases}>{phases.map((phase, i) => <article className={styles.phase} key={phase.days}>
        <div className={styles.top}><span>{phase.days}</span><b>0{i + 1}</b></div>
        <h3>{phase.title}</h3><p>{phase.description}</p><div className={styles.actions}>{phase.actions}</div>
        <div className={styles.measure}><span>WHAT TO REVIEW</span><p>{phase.measure}</p></div>
      </article>)}</div>
      <p className={styles.note}>Targets are set from your baseline and reviewed along the way. Marks and rank improvements are not guaranteed.</p>
      <div className={styles.cta}><a className="btn btn-primary" href="https://cnm-online-audit.vercel.app/audit" target="_blank" rel="noopener noreferrer">Start with your performance audit ↗</a></div>
    </div>
  </section>;
}
