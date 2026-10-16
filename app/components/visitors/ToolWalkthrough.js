"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ToolWalkthrough.module.css";
const tools = [
  { label:"Plan your week", title:"Weekly Power Planner", description:"Make the week realistic. Give your revision, practice and tests a place in it.", image:"/images/tools/refocus/weekly-power-planner.png", points:["Choose a manageable set of priorities", "Make room for revision and practice", "Review the work you actually completed"] },
  { label:"Protect your focus", title:"Focus Block", description:"Give one task your attention. Then review the session instead of guessing how it went.", image:"/images/tools/refocus/focus-block.png", points:["Decide what you will work on", "Use a bounded study session", "Notice distractions and unfinished work"] },
  { label:"Learn from a mock", title:"Mock Test Autopsy", description:"A score tells you the result. Reviewing the mistakes helps you choose what to practise next.", image:"/images/tools/refocus/mock-autopsy.png", points:["Separate concept, reading and calculation errors", "Look for mistakes that keep recurring", "Choose a focused follow-up task"] },
];
export default function ToolWalkthrough() {
  const [selected,setSelected] = useState(0);
  const tool=tools[selected];
  return <section id="control-room" className={styles.section}><div className="container"><div className={styles.heading}><span>EXPLORE THE STUDENT SYSTEM</span><h2>See what the work looks like.</h2><p>A plan, a focused session, a useful review. Tools should make the next action clearer.</p></div><div className={styles.tabs} role="group" aria-label="Explore student tools">{tools.map((item,i)=><button type="button" key={item.label} aria-pressed={selected===i} aria-controls="tool-walkthrough" onClick={()=>setSelected(i)}>{item.label}<span aria-hidden="true">↗</span></button>)}</div><div id="tool-walkthrough" className={styles.grid}><div className={styles.copy} aria-live="polite"><span>0{selected+1} / THE TOOL</span><h3>{tool.title}</h3><p>{tool.description}</p><ul>{tool.points.map(point=><li key={point}>{point}</li>)}</ul><Link href="/demo">Try diagnosis → action → review →</Link></div><figure className={styles.screen}><div className={styles.screenTop}><span aria-hidden="true">● ● ●</span><span>{tool.title}</span><span>INTERFACE PREVIEW</span></div><div className={styles.imageFrame}><Image key={tool.image} src={tool.image} alt={`${tool.title} interface preview with illustrative content`} fill sizes="(max-width: 760px) 100vw, 750px" style={{objectFit:"contain"}} /></div><figcaption>Designed interface preview, not a verified capture of the current dashboard. Names and figures are examples, not student results.</figcaption></figure></div></div></section>;
}
