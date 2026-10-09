import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Sun, Moon } from "lucide-react";
import { usePage } from "../PageContext";
import { useTheme } from "../ThemeContext";
import nmkLogoImg from "@/imports/HomePage/Logo-Without-BG.png";

const NAV_ITEMS: { label: string; page: "home" | "works" | "about" }[] = [
  { label: "Works", page: "works" },
  { label: "About", page: "about" },
];

const I = "Urbanist,sans-serif";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manoj-kumar-namadi-ba755829a",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ManojKumarNamadi61",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/NamadiManojKumar",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/horcrux_designs_wave/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export function Navbar() {
  const { page, setPage } = usePage();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const isDark = theme === "dark";

  const go = (p: "home" | "works" | "about") => {
    setPage(p);
    setOpen(false);
  };

  const navText = isDark ? "#fff" : "#0f0f0f";
  const navTextMuted = isDark ? "rgba(255,255,255,0.5)" : "rgba(15,15,15,0.5)";
  const navIcon = isDark ? "rgba(255,255,255,0.4)" : "rgba(15,15,15,0.45)";
  const navActiveItemBg = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)";
  const navIconHoverBg = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)";
  const navDivider = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const ctaBg = isDark ? "#fff" : "#0f0f0f";
  const ctaText = isDark ? "#0a0a0a" : "#fff";
  const ctaArrowBg = isDark ? "#111" : "#fff";
  const ctaArrowStroke = isDark ? "#fff" : "#0f0f0f";
  const dropdownBg = isDark ? "#161616" : "#ffffff";
  const dropdownBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
  const dropdownSocialBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "center", padding: "10px 0", pointerEvents: "none" }}>
      {/* centering shell — matches Section's maxWidth + padding exactly */}
      <div style={{ width: "100%", maxWidth: 1400, padding: "0 clamp(16px,4vw,48px)", pointerEvents: "none" }}>
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: isDark ? "rgba(17,17,17,0.92)" : "rgba(242,240,235,0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: 12,
            height: 56,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 clamp(10px,1.5vw,20px) 0 clamp(14px,1.5vw,24px)",
            boxShadow: isDark
              ? "0 0 0 1px rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.5)"
              : "0 0 0 1px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.1)",
            pointerEvents: "all",
            position: "relative",
            transition: "background 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {/* Logo */}
          <button onClick={() => go("home")} style={{ display: "flex", alignItems: "center", flexShrink: 0, padding: "4px 0" }} aria-label="Home">
            <img src={nmkLogoImg} alt="NMK" style={{ height: 28, objectFit: "contain", filter: isDark ? "none" : "invert(1)" }} />
          </button>

          {/* Desktop: nav links + socials + toggle + CTA */}
          <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV_ITEMS.map(n => (
              <button key={n.label} onClick={() => go(n.page)}
                style={{
                  fontFamily: I, fontSize: 14, fontWeight: 500,
                  color: page === n.page ? navText : navTextMuted,
                  padding: "7px 14px", borderRadius: 8,
                  background: page === n.page ? navActiveItemBg : "transparent",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { if (page !== n.page) (e.currentTarget as HTMLButtonElement).style.color = navText; }}
                onMouseLeave={e => { if (page !== n.page) (e.currentTarget as HTMLButtonElement).style.color = navTextMuted; }}
              >{n.label}</button>
            ))}

            {/* Divider */}
            <div style={{ width: 1, height: 20, background: navDivider, margin: "0 4px", flexShrink: 0 }} className="nav-divider" />

            {/* Social icons */}
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                style={{ width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: navIcon, transition: "all 0.2s", flexShrink: 0 }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = navText; (e.currentTarget as HTMLAnchorElement).style.background = navIconHoverBg; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = navIcon; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                className="nav-social"
              >{s.icon}</a>
            ))}

            {/* Divider */}
            <div style={{ width: 1, height: 20, background: navDivider, margin: "0 4px", flexShrink: 0 }} className="nav-divider" />

            {/* Theme toggle */}
            <button onClick={toggle} aria-label="Toggle theme"
              style={{ width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: navIcon, transition: "all 0.2s", flexShrink: 0 }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = navText; (e.currentTarget as HTMLButtonElement).style.background = navIconHoverBg; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = navIcon; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* CTA */}
            <button onClick={() => go("about")}
              className="nav-cta-btn"
              style={{ display: "flex", alignItems: "center", gap: 8, background: ctaBg, borderRadius: 8, padding: "8px 8px 8px 16px", cursor: "pointer", transition: "opacity 0.2s, background 0.3s", flexShrink: 0 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <span style={{ fontFamily: I, fontSize: 14, fontWeight: 500, color: ctaText, whiteSpace: "nowrap" }}>{"Let's Talk"}</span>
              <div className="cta-arrow" style={{ width: 30, height: 30, borderRadius: 10, background: ctaArrowBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                  <path d="M4.17 10h11.67M10 4.17L15.83 10 10 15.83" stroke={ctaArrowStroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div style={{ display: "none", alignItems: "center", gap: 4 }} className="nav-mobile-right">
            <button onClick={toggle} aria-label="Toggle theme"
              style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: navIcon, transition: "all 0.2s" }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button className="nav-burger" onClick={() => setOpen(!open)}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = navActiveItemBg)}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              {open ? <X size={18} color={navText} /> : (
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <div style={{ width: 20, height: 1.5, background: navText, borderRadius: 2 }} />
                  <div style={{ width: 20, height: 1.5, background: navText, borderRadius: 2 }} />
                </div>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            style={{ position: "absolute", top: 74, left: "clamp(16px,4vw,48px)", right: "clamp(16px,4vw,48px)", maxWidth: 1400, margin: "0 auto", background: dropdownBg, borderRadius: 12, border: `1px solid ${dropdownBorder}`, overflow: "hidden", pointerEvents: "all" }}
          >
            {([{ label: "Home", page: "home" as const }, ...NAV_ITEMS]).map((n, i, arr) => (
              <button key={n.label} onClick={() => go(n.page)}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "18px 24px", fontFamily: I, fontSize: 17, fontWeight: 500, color: page === n.page ? navText : navTextMuted, borderBottom: i < arr.length - 1 ? `1px solid ${dropdownBorder}` : "none" }}
              >{n.label}</button>
            ))}
            <div style={{ padding: "16px 24px", display: "flex", gap: 10, borderBottom: `1px solid ${dropdownBorder}` }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 38, height: 38, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: navTextMuted, background: dropdownSocialBg, transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = navText; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = navTextMuted; }}
                >{s.icon}</a>
              ))}
            </div>
            <div style={{ padding: "16px 24px" }}>
              <button onClick={() => go("about")}
                style={{ width: "100%", padding: "14px 20px", borderRadius: 8, background: ctaBg, fontFamily: I, fontSize: 15, fontWeight: 500, color: ctaText, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
              >
                {"Let's Talk"}
                <div style={{ width: 28, height: 28, borderRadius: 10, background: ctaArrowBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="13" height="13" viewBox="0 0 20 20" fill="none"><path d="M4.17 10h11.67M10 4.17L15.83 10 10 15.83" stroke={ctaArrowStroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:860px){.nav-social{display:none!important}.nav-divider{display:none!important}}
        @media(max-width:600px){.nav-right{display:none!important}.nav-mobile-right{display:flex!important}}
        @media(max-width:380px){.cta-arrow{display:none!important}}
        .nav-cta-btn{border-radius:8px!important}
        @media(max-width:1280px){.nav-cta-btn{border-radius:6px!important}}
        @media(max-width:768px){.nav-cta-btn{border-radius:4px!important}}
        @media(max-width:480px){.nav-cta-btn{border-radius:2px!important}}
      `}</style>
    </div>
  );
}
