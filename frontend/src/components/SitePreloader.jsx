import { useEffect } from "react";
import s from "./SitePreloader.module.css";

export default function SitePreloader({ onReady }) {
  useEffect(() => {
    const timer = window.setTimeout(() => onReady(true), window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 350);
    return () => window.clearTimeout(timer);
  }, [onReady]);
  return <div className={s.loader} role="status" aria-label="Loading greyrockmarkets"><div className={s.brand}><span className={s.mark}><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M28.2 12.8A12.5 12.5 0 1 0 31.8 20H21"/><path d="m21 20 8.8-8.8M24 11.2h5.8V17"/></svg></span><strong>greyrock<span>markets</span><small>Digital asset markets</small></strong></div><p>Loading your next chapter…</p><div className={s.line} /></div>;
}
