"use client";
import { useState } from "react";
import Link from "next/link";
import { scenarios } from "./scenarios";
import styles from "./DashboardDemo.module.css";

const stages = ["Review the evidence", "Plan the response", "Do today’s work", "Review progress"];
const defaultTools = ["Mock Test Autopsy", "Weekly Power Planner", "Daily Missions", "Progress Radar"];
export default function GuidedDemo() {
  const [selected, setSelected] = useState(0);
  const [stage, setStage] = useState(0);
  const [scheduled, setScheduled] = useState(false);
  const [completed, setCompleted] = useState(false);
  const item = scenarios[selected];
  const tools = selected === 2 ? ["90-Day Blueprint", ...defaultTools.slice(1)] : selected === 1 ? ["Mock Test Autopsy", "Review Queue + Planner", ...defaultTools.slice(2)] : defaultTools;
  function reset(index = selected) { setSelected(index); setStage(0); setScheduled(false); setCompleted(false); }
  return <section id="walkthrough" className={styles.section}><div className="container">
    <div className={styles.disclosure}><span>BASED ON THE CURRENT CNM DASHBOARD</span><p>A simplified, interactive preview of CNM’s dashboard workflow using fictional records. Try the controls; nothing is sent or saved to a student account.</p></div>
    <div className={styles.scenarios} role="group" aria-label="Choose a preparation example">{scenarios.map((s, i) => <button key={s.id} type="button" aria-pressed={selected === i} onClick={() => reset(i)}>{s.label}</button>)}</div>
    <div className={styles.shell}>
      <div className={styles.topbar}><div><span className={styles.logo}>CNM</span><strong>STUDENT OS <small>REFOCUS / GUIDED PREVIEW</small></strong></div><span className={styles.sample}>SAMPLE DATA</span></div>
      <div className={styles.workspace}><nav className={styles.sidebar} aria-label="Dashboard walkthrough stages"><span>ONE PROBLEM. A CONNECTED WORKFLOW.</span>{stages.map((s, i) => <button key={s} type="button" aria-pressed={stage === i} aria-controls="dashboard-demo-panel" onClick={() => setStage(i)}><span>0{i + 1}</span><div><strong>{s}</strong><small>{tools[i]}</small></div></button>)}<p>Explore the process at your own pace.</p><button className={styles.reset} type="button" onClick={() => reset()}>Reset this example</button></nav>
        <div id="dashboard-demo-panel" className={styles.panel} aria-live="polite" aria-atomic="false">
          <div className={styles.panelTop}><span>0{stage + 1} / {tools[stage]}</span><span>ILLUSTRATIVE RECORDS</span></div>
          {stage === 0 && <><h2>{item.title}</h2><p>{item.observation}</p><div className={styles.stats}><div><span>Context</span><strong>{item.subject}</strong></div><div><span>Area to inspect</span><strong>{item.cause}</strong></div><div><span>Evidence coverage</span><strong>3 sample entries</strong></div></div><div className={styles.tableWrap}><table><caption>Example review notes · {item.chapter}</caption><thead><tr><th scope="col">Record</th><th scope="col">Observation</th><th scope="col">What happened</th></tr></thead><tbody>{item.evidence.map(([ref, cause, note]) => <tr key={ref}><th scope="row">{ref}</th><td>{cause}</td><td>{note}</td></tr>)}</tbody></table></div><p className={styles.note}>A reviewed mistake is a starting point for investigation. Partial review does not establish the cause of every lost mark.</p><button type="button" className={styles.primary} onClick={() => setStage(1)}>Choose a corrective action →</button></>}
          {stage === 1 && <><h2>Give the next action a place in the week.</h2><p>{item.response}</p><article className={styles.task}><span>EXAMPLE CORRECTIVE TASK</span><h3>{item.task}</h3><dl><div><dt>Subject / chapter</dt><dd>{item.subject} · {item.chapter}</dd></div><div><dt>Time allowed in this example</dt><dd>{item.duration}</dd></div><div><dt>Destination</dt><dd>Weekly Power Planner → Daily Missions</dd></div></dl><button type="button" disabled={scheduled} className={styles.primary} onClick={() => setScheduled(true)}>{scheduled ? "Added to sample planner ✓" : "Add to sample planner"}</button></article><p role="status" className={styles.note}>{scheduled ? "One task is now scheduled in this preview. Selecting it again will not add a duplicate." : "Try scheduling this task. This changes only this website preview."}</p><button type="button" className={styles.secondary} onClick={() => setStage(2)}>Open today’s Daily Missions →</button></>}
          {stage === 2 && <><h2>A clear task for today.</h2><p>Daily Missions reads the work scheduled in Weekly Power Planner. The same task follows through into the student’s day.</p>{scheduled ? <article className={styles.task}><span>{completed ? "COMPLETED / SAMPLE TASK" : "TODAY / SAMPLE MISSION"}</span><h3>{item.task}</h3><p>{item.subject} · {item.duration}</p><label className={styles.check}><input type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)} />Mark sample corrective task complete</label></article> : <article className={styles.empty}><h3>No sample task scheduled yet.</h3><p>Go back to the planner to add the action before marking work complete.</p><button type="button" className={styles.primary} onClick={() => setStage(1)}>Go to the sample planner →</button></article>}<p className={styles.note}>{completed ? "Corrective task completed. This records execution; it does not mark the mistake as resolved." : "Work recorded here is demonstration data. It does not update a student account."}</p><button type="button" className={styles.secondary} onClick={() => setStage(3)}>Review the evidence →</button></>}
          {stage === 3 && <><h2>Review the work. Then check the learning.</h2><p>Progress Radar brings recorded activity into a review. Mock Test Autopsy keeps follow-up practice separate from task completion.</p><div className={styles.stats}><div><span>Tasks scheduled</span><strong>{scheduled ? "1" : "0"}</strong></div><div><span>Tasks marked complete</span><strong>{completed ? "1" : "0"}</strong></div><div><span>Follow-up practice</span><strong>Not recorded</strong></div></div><dl className={styles.review}><div><dt>Next evidence to collect</dt><dd>{item.review}</dd></div><div><dt>For a parent or mentor</dt><dd>{item.parent}</dd></div><div><dt>What remains unknown</dt><dd>{item.limitation}</dd></div></dl><Link href="/contact" className={styles.primary}>Discuss a dashboard walkthrough →</Link><Link href="/case-studies" className={styles.more}>Explore the preparation scenarios →</Link></>}
        </div>
      </div>
    </div>
    <div className={styles.bottom}><p>Explore the student workflow at your own pace. Tool access and human review arrangements depend on the agreed programme.</p><Link href="/programmes">Programmes, support & fees →</Link></div>
  </div></section>;
}
