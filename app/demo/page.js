import { Shell, Intro, Action } from "../components/visitors/Shared";
import GuidedDemo from "../components/visitors/GuidedDemo";
export const metadata = {
  title: "Explore the Preparation Workflow | CNM System Labs",
  description:
    "Try a clearly labelled sample walkthrough: review a test pattern, choose a daily task and discuss the evidence. No account or contact details required.",
};
export default function Demo() {
  return (
    <Shell>
      <Intro
        eyebrow="TRY THE PROCESS / NO SIGN-UP"
        title="From a test mistake"
        accent="to tomorrow’s action."
        description="Follow one preparation problem through a review, a daily task and a progress conversation. Try the controls below; no contact details are needed."
      >
        <Action href="#walkthrough">Try the walkthrough</Action>
        <Action href="/programmes" secondary>
          See programmes & fees
        </Action>
      </Intro>
      <GuidedDemo />
    </Shell>
  );
}
