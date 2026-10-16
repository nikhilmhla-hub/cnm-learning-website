"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AUDIT_URL } from "../visitors/content";
import styles from "./Navigation.module.css";

const links = [
  ["Students", "/students"], ["Parents", "/parents"], ["Partners", "/partners"],
  ["See the process", "/demo"], ["Programmes & fees", "/programmes"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const closeOnResize = () => { if (window.innerWidth > 1020) setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnResize);
    return () => { document.removeEventListener("keydown", closeOnEscape); window.removeEventListener("resize", closeOnResize); };
  }, [open]);
  return <header className={styles.header}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className={`container ${styles.row}`}>
      <Link href="/" className={styles.brand} aria-label="CNM System Labs home"><span>CNM</span><span>SYSTEM <b>LABS</b></span></Link>
      <nav className={styles.desktop} aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} aria-current={pathname===href?"page":undefined}>{label}</Link>)}</nav>
      <Link className={styles.audit} href={AUDIT_URL}>Start performance audit <span aria-hidden="true">→</span></Link>
      <button ref={toggle} type="button" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(value=>!value)} className={styles.toggle}><span aria-hidden="true">{open ? "×" : "☰"}</span></button>
    </div>
    <nav id="mobile-navigation" hidden={!open} className={styles.mobile} aria-label="Mobile navigation">{links.map(([label,href])=><Link key={href} href={href} aria-current={pathname===href?"page":undefined} onClick={()=>setOpen(false)}>{label}<span aria-hidden="true">→</span></Link>)}<Link href="/contact" onClick={()=>setOpen(false)}>Contact CNM <span aria-hidden="true">→</span></Link><Link href={AUDIT_URL} onClick={()=>setOpen(false)} className={styles.mobileAudit}>Start performance audit →</Link></nav>
  </header>;
}
