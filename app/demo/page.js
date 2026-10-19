import { Shell, Intro, Action } from "../components/visitors/Shared";
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
