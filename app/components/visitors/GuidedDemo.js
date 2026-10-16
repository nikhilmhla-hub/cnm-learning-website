"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Product.module.css";
const scenarios = [
  {
    name: "Repeated calculation errors",
    observation:
      "In this sample, 3 of 10 reviewed errors involve signs or units.",
    task: "Solve 10 questions with a sign-and-unit check",
    check: "Record which errors recur in the next comparable timed set.",
  },
  {
    name: "Revision keeps slipping",
    observation:
      "In this sample week, two revision tasks were postponed while new practice was completed.",
    task: "Recall one small topic before opening your notes",
    check:
      "Check recall again later. Completion alone does not establish retention.",
  },
  {
    name: "Plans are too large",
    observation:
      "In this sample day, a three-hour revision task was left unfinished.",
    task: "Complete one short, clearly defined revision block",
    check:
      "Compare the planned task with the work completed, then resize the next task.",
  },
];
export default function GuidedDemo() {
  const [scenario, setScenario] = useState(0),
    [step, setStep] = useState(0),
    [done, setDone] = useState(false);
  const item = scenarios[scenario];
  return (
    <section id="walkthrough" className={styles.section}>
      <div className="container">
        <div className={styles.notice}>
          <strong>INTERACTIVE SAMPLE · NOT THE LIVE DASHBOARD</strong>
          <p>
            This walkthrough uses fictional preparation examples. It
            demonstrates the process, not verified product behaviour or student
            outcomes. The actual dashboard and current feature access should be
            demonstrated before enrolment.
          </p>
        </div>
        <div
          className={styles.scenarios}
          role="group"
          aria-label="Choose a preparation example"
        >
          {scenarios.map((s, i) => (
            <button
              key={s.name}
              aria-pressed={scenario === i}
              onClick={() => {
                setScenario(i);
                setStep(0);
                setDone(false);
              }}
            >
              {s.name}
            </button>
          ))}
        </div>
        <div className={styles.demo}>
          <nav aria-label="Walkthrough stages" className={styles.stageNav}>
            {[
              "1. Review the pattern",
              "2. Choose daily action",
              "3. Review progress",
            ].map((name, i) => (
              <button
                key={name}
                aria-pressed={step === i}
                aria-controls="demo-panel"
                onClick={() => setStep(i)}
              >
                {name}
              </button>
            ))}
          </nav>
          <div id="demo-panel" className={styles.panel} aria-live="polite">
            <span className={styles.eyebrow}>
              SAMPLE WORKFLOW / 0{step + 1}
            </span>
            {step === 0 ? (
              <>
                <h2>Start with the work.</h2>
                <p className={styles.big}>{item.observation}</p>
                <div className={styles.note}>
                  A pattern is a question to investigate. It does not prove the
                  cause of a low score.
                </div>
                <button className={styles.primary} onClick={() => setStep(1)}>
                  Choose a daily action →
                </button>
              </>
            ) : step === 1 ? (
              <>
                <h2>Make the next action specific.</h2>
                <div className={styles.task}>
                  <span>TODAY’S SAMPLE MISSION</span>
                  <h3>{item.task}</h3>
                  <label>
                    <input
                      type="checkbox"
                      checked={done}
                      onChange={(e) => setDone(e.target.checked)}
                    />{" "}
                    Mark this sample task complete
                  </label>
                </div>
                <p>
                  This updates only this demonstration. It does not create a
                  task in your student account.
                </p>
                <button className={styles.primary} onClick={() => setStep(2)}>
                  Review what this tells us →
                </button>
              </>
            ) : (
              <>
                <h2>Completion is a signal. Check the learning.</h2>
                <dl className={styles.summary}>
                  <div>
                    <dt>Work recorded in this demo</dt>
                    <dd>
                      {done
                        ? "1 of 1 sample task marked complete"
                        : "0 of 1 sample task marked complete"}
                    </dd>
                  </div>
                  <div>
                    <dt>What to review next</dt>
                    <dd>{item.check}</dd>
                  </div>
                  <div>
                    <dt>What we cannot conclude</dt>
                    <dd>
                      No score, rank, mastery or improvement can be inferred
                      from this demo.
                    </dd>
                  </div>
                </dl>
                <div className={styles.parents}>
                  <strong>For the parent or mentor</strong>
                  <p>
                    Ask what was difficult, inspect the work together and agree
                    the next adjustment.
                  </p>
                </div>
                <Link className={styles.primary} href="/contact">
                  Ask for an actual dashboard walkthrough →
                </Link>
              </>
            )}
          </div>
        </div>
        <div className={styles.bottom}>
          <Link href="/programmes">
            What support and fees should I expect? →
          </Link>
          <Link href="/audit">What happens in the audit? →</Link>
        </div>
      </div>
    </section>
  );
}
