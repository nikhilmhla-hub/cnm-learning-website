"use client";
import { useState } from "react";
import Link from "next/link";
import { AUDIT_URL } from "../visitors/content";
import styles from "./HeroSection.module.css";

const examples = [
  { name: "Focus", symptom: "I sit down to study. I keep getting distracted.", insight: "Start with study initiation and interruptions.", tasks: ["Choose one task before you start", "Complete a distraction-free focus block", "Log what interrupted you"], signal: "Completed focus blocks" },
  { name: "Accuracy", symptom: "I know the concept. I still lose the marks.", insight: "Separate concept gaps from avoidable mistakes.", tasks: ["Classify errors from your last mock", "Practise the most repeated error type", "Check units and question constraints"], signal: "Repeated mistakes across tests" },
  { name: "Revision", symptom: "I understood it last week. Now I can’t recall it.", insight: "Check recall before repeating the whole chapter.", tasks: ["Recall key ideas without your notes", "Identify what you could not retrieve", "Schedule a focused revision session"], signal: "Recall at the next revision" },
  { name: "Time", symptom: "I run out of time before I finish the paper.", insight: "Review question selection and time spent.", tasks: ["Identify questions that consumed time", "Practise a timed question set", "Review your skip-and-return strategy"], signal: "Accuracy within the time limit" },
  { name: "Pressure", symptom: "I can solve it at home. In the test, I freeze.", insight: "Look for when pressure interrupts your solving.", tasks: ["Record the moment you got stuck", "Use a short reset before restarting", "Practise under gradual time pressure"], signal: "Execution during timed practice" },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const example = examples[active];
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.ambient} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}><span /> CNM SYSTEM LABS</div>
          <nav className={styles.visitorLinks} aria-label="Choose your visitor journey"><Link href="/students">For students →</Link><Link href="/parents">For parents →</Link><Link href="/partners">For partners →</Link></nav>
          <p className={styles.audience}>FOR JEE & NEET · CLASS XI, XII & DROPPERS</p>
          <h1 id="hero-title">You Know You<br className={styles.desktopBreak} /> Can Do Better.<span>Let’s Find What’s<br className={styles.desktopBreak} /> Stopping You.</span></h1>
          <p className={styles.description}>Your marks tell you what happened. We help uncover why — then turn focus, revision, accuracy and exam strategy into a measurable plan.</p>
          <div className={styles.actions}>
            <a className={`btn btn-primary ${styles.primary}`} href={AUDIT_URL}>Start My Performance Audit <span aria-hidden="true">↗</span></a>
            <a className={styles.secondary} href="/demo">Explore the student system <span aria-hidden="true">→</span></a>
          </div>
          <p className={styles.note}>Start with your preparation. See what needs a closer look.</p>
        </div>
        <div className={styles.lab}>
          <div className={styles.labHeader}><span><i /> THE PERFORMANCE LAB</span><span className={styles.exampleBadge}>INTERACTIVE EXAMPLE</span></div>
          <div className={styles.labIntro}><span className={styles.label}>WHERE DOES IT GET DIFFICULT?</span><p>One problem. A clearer next step.</p></div>
          <div className={styles.selectors} role="group" aria-label="Explore a performance problem">
            {examples.map((item, index) => <button key={item.name} type="button" aria-pressed={active === index} aria-controls="performance-example" onClick={() => setActive(index)} className={active === index ? styles.selected : ""}>{item.name}</button>)}
          </div>
          <div id="performance-example" className={styles.example} aria-live="polite" aria-atomic="true">
            <div className={styles.problem}><span className={styles.label}>THE STUDENT’S EXPERIENCE</span><h2>“{example.symptom}”</h2></div>
            <div className={styles.connector} aria-hidden="true"><span />↓<span /></div>
            <div className={styles.insight}><span className={styles.label}>WHAT TO INVESTIGATE</span><p>{example.insight}</p></div>
            <div className={styles.missions}><span className={styles.label}>A PRACTICAL STARTING POINT</span><ol>{example.tasks.map((task, i) => <li key={task}><span aria-hidden="true">0{i + 1}</span>{task}</li>)}</ol></div>
            <div className={styles.measure}><span className={styles.measureIcon} aria-hidden="true">◎</span><div><span className={styles.label}>MEASURE & REVIEW</span><p>{example.signal}</p></div><span className={styles.reviewArrow} aria-hidden="true">↗</span></div>
          </div>
          <p className={styles.disclaimer}>An example of the approach. Your audit and test history guide your own plan.</p>
        </div>
      </div>
      <div className={`container ${styles.footer}`}><span className={styles.footerLabel}>YOUR PERFORMANCE SYSTEM</span><ol>{["Diagnose", "Plan", "Execute", "Measure", "Improve"].map((step, i) => <li key={step}><span>0{i + 1}</span>{step}{i < 4 && <b aria-hidden="true">→</b>}</li>)}</ol><a href="#problem-leaks" aria-label="Explore performance gaps">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
