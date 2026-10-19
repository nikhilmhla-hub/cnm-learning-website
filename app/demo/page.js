import { Shell, Intro, Action, styles } from "../components/visitors/Shared";
import GuidedDemo from "../components/visitors/GuidedDemo";
export const metadata = {
  title: "Inside the Student Dashboard | CNM System Labs",
  description:
    "Explore a guided preview based on CNM’s current dashboard tools: Mock Test Autopsy, Weekly Power Planner, Daily Missions and Progress Radar. Fictional data; no sign-up.",
};
export default function Demo() {
  return (
    <Shell>
      <Intro
        eyebrow="INSIDE THE STUDENT DASHBOARD / NO SIGN-UP"
        title="From a test mistake"
        accent="to tomorrow’s action."
        description="Explore the tools behind the process: review a mistake, schedule a corrective task, complete a Daily Mission and decide what evidence to review next."
        aside={<aside className={styles.dayCard} aria-label="Dashboard workflow overview"><div className={styles.dayTop}><span>THE CONNECTED WORKFLOW</span><span>GUIDED PREVIEW</span></div><h2>One useful action.<br />Evidence you can revisit.</h2>{[["01", "Review the mistake", "Mock Test Autopsy"], ["02", "Give it a place in the week", "Weekly Power Planner"], ["03", "Do today’s task", "Daily Missions"], ["04", "Review what happened", "Progress Radar + follow-up practice"]].map(([number,title,tool])=><div key={number} className={styles.dayItem}><span style={{color:"#e6c779",fontSize:".7rem"}}>{number}</span><div><strong>{title}</strong><p>{tool}</p></div></div>)}<p className={styles.finePrint}>No account needed. All records in this preview are fictional.</p></aside>}
      >
        <Action href="#walkthrough">Explore the dashboard workflow</Action>
        <Action href="/programmes" secondary>
          See programmes & fees
        </Action>
      </Intro>
      <GuidedDemo />
    </Shell>
  );
}
