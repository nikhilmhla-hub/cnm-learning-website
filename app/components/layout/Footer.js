import Link from "next/link";
import { AUDIT_URL, EMAIL, PHONE, PHONE_URL } from "../visitors/content";
import styles from "./Footer.module.css";
export default function Footer() {
  return <footer className={styles.footer}><div className={`container ${styles.grid}`}><div className={styles.identity}><Link href="/" className={styles.brand}>CNM <span>SYSTEM LABS</span></Link><p>A clearer way to understand preparation.<br />A more deliberate way to improve it.</p><span>JEE & NEET · XI, XII & DROPPERS</span></div>
    <nav aria-label="Explore CNM"><h2>EXPLORE</h2><Link href="/students">For students</Link><Link href="/parents">For parents</Link><Link href="/partners">For partners</Link><Link href="/#how-it-works">How it works</Link><Link href="/#control-room">Explore the tools</Link><Link href="/demo">Try the sample walkthrough</Link><Link href="/programmes">Programmes & fees</Link><Link href={AUDIT_URL}>Performance audit →</Link></nav>
    <nav aria-label="Company information"><h2>CNM SYSTEM LABS</h2><Link href="/about">About CNM</Link><Link href="/contact">Contact</Link><Link href="/support">Support</Link><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-of-service">Terms of service</Link></nav>
    <div className={styles.contact}><h2>LET’S TALK</h2><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={PHONE_URL}>{PHONE}</a><p>Jaipur, Rajasthan<br />Online student support</p></div></div><div className={`container ${styles.base}`}><span>© 2026 CNM System Labs.</span><span>DIAGNOSE · PLAN · EXECUTE · MEASURE · IMPROVE</span></div></footer>;
}
