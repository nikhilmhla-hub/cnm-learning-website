"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// New pages start at the top; hash links and browser history keep their positions.
export default function RouteTransitions() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const historyNavigation = useRef(false);
  useEffect(() => {
    const onPopState = () => { historyNavigation.current = window.location.pathname !== previousPath.current; };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    if (historyNavigation.current) { historyNavigation.current = false; return; }
    if (!window.location.hash) window.scrollTo({top:0,left:0,behavior:"instant"});
  }, [pathname]);
  return null;
}
