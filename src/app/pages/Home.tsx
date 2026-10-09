import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Dribbble } from "lucide-react";
import { usePage } from "../PageContext";
import { useTheme } from "../ThemeContext";

import heroBgImg from "@/imports/HomePage/Hero-Background.png";
import nmkLogoImg from "@/imports/HomePage/Logo-Without-BG.png";
import profileImg from "@/imports/HomePage/42827f7d40b6377532fe0a1ad710c187ed17b2d4.png";
import footerBgImg from "@/imports/HomePage/28899a713fec39326949a674229d655f2012970c.png";
import lumitechImg from "@/imports/HomePage/LumeTech.png";
import glennsMedicalImg from "@/imports/HomePage/Glenns.png";
import medibankImg from "@/imports/HomePage/Medibank.png";
import hrmsImg from "@/imports/HomePage/HRMS.png";
import driverOnHireImg from "@/imports/HomePage/Driver-on-Hire.png";
import mediniImg from "@/imports/HomePage/medini.jpeg";
import hadImg from "@/imports/HomePage/Had.png";
import resumePdf from "@/imports/NamadiManojKumar_Resume_2026.pdf.pdf";

const I = "Urbanist,sans-serif";
const U = "Urbanist,sans-serif";

function Section({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", ...style }}>
      <div style={{ width: "100%", maxWidth: 1400, padding: "0 clamp(16px, 4vw, 48px)" }}>
        {children}
      </div>
    </div>
  );
}

function PillBtn({ label, dark = false, onClick }: { label: string; dark?: boolean; onClick?: () => void }) {
  return (
    <>
      <button onClick={onClick}
        className="pill-btn"
        style={{ display: "inline-flex", alignItems: "center", gap: 6, background: dark ? "var(--c-pill-dark-bg)" : "var(--c-btn-primary-bg)", borderRadius: 8, padding: "8px 8px 8px 16px", cursor: "pointer", transition: "opacity 0.2s", flexShrink: 0, border: dark ? "1px solid var(--c-pill-dark-border)" : "none" }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        <span className="pill-btn-label" style={{ fontFamily: I, fontSize: 14, fontWeight: 500, color: dark ? "var(--c-text)" : "var(--c-btn-primary-text)", whiteSpace: "nowrap" }}>{label}</span>
        <div className="pill-btn-arrow" style={{ width: 30, height: 30, borderRadius: 8, background: dark ? "var(--c-subtle)" : "var(--c-btn-primary-arrow-bg)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
            <path d="M4.17 10h11.67M10 4.17L15.83 10 10 15.83" stroke={dark ? "var(--c-btn-ghost-arrow-stroke)" : "var(--c-btn-primary-arrow-stroke)"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      <style>{`
        .pill-btn{border-radius:8px!important}
        .pill-btn-arrow{border-radius:6px!important}
        @media(max-width:1280px){
          .pill-btn{border-radius:6px!important}
          .pill-btn-arrow{border-radius:5px!important}
        }
        @media(max-width:768px){
          .pill-btn{padding:6px 6px 6px 12px!important;gap:5px!important;border-radius:4px!important}
          .pill-btn-label{font-size:12px!important}
          .pill-btn-arrow{width:24px!important;height:24px!important;border-radius:3px!important}
        }
        @media(max-width:480px){
          .pill-btn{padding:5px 5px 5px 10px!important;border-radius:2px!important}
          .pill-btn-label{font-size:11px!important}
          .pill-btn-arrow{width:20px!important;height:20px!important;border-radius:2px!important}
        }
      `}</style>
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. HERO — editorial split layout
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function Hero() {
  const { setPage } = usePage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const heroBg = isDark ? "#0f0f0f" : "var(--c-bg)";
  const leftGrad = isDark
    ? "linear-gradient(130deg, #0f0f0f 12%, rgba(12,12,12,0.82) 55%, rgba(12,12,12,0.3) 100%)"
    : "linear-gradient(105deg, rgba(255,255,255,0.78) 18%, rgba(255,255,255,0.46) 56%, rgba(255,255,255,0.08) 100%)";
  const vignette = isDark
    ? "radial-gradient(ellipse 120% 100% at 50% 100%, rgba(0,0,0,0.35) 0%, transparent 100%)"
    : "radial-gradient(ellipse 120% 100% at 50% 100%, rgba(255,255,255,0.22) 0%, transparent 100%)";
  const dotColor = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.035)";
  const eyebrowColor = isDark ? "rgba(255,255,255,0.3)" : "rgba(15,15,15,0.4)";
  const h1Color = isDark ? "#fff" : "#0f0f0f";
  const tagBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
  const tagBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const tagColor = isDark ? "rgba(255,255,255,0.5)" : "rgba(15,15,15,0.55)";

  return (
    <section style={{ background: "var(--c-bg)", paddingBottom: 4, paddingTop: 80, transition: "background 0.3s ease" }}>
      <Section>
        <div style={{
          borderRadius: 16,
          minHeight: "calc(100svh - 100px)",
          position: "relative", overflow: "hidden",
          background: heroBg,
          display: "flex", flexDirection: "column",
          transition: "background 0.3s ease",
        }}>
          {/* Background image — right half only */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <img src={heroBgImg} alt="" aria-hidden style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center top",
            }} />
            {/* Left-side fade — dark mode: black, light mode: warm parchment */}
            <div style={{ position: "absolute", inset: 0, background: leftGrad, transition: "background 0.3s ease" }} />
            {/* Subtle vignette */}
            <div style={{ position: "absolute", inset: 0, background: vignette }} />
          </div>

          {/* Dot-grid texture overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none" }} />

          {/* Main content */}
          <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "clamp(32px,5vw,72px) clamp(24px,3vw,48px)", gap: "clamp(28px,3.5vw,44px)" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}
            >
              <motion.div
                initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 100, padding: "7px 16px" }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px rgba(74,222,128,0.9)", animation: "hero-pulse 2s ease-in-out infinite", flexShrink: 0 }} />
                <span style={{ fontFamily: U, fontSize: 11, fontWeight: 700, color: "rgba(74,222,128,0.9)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Available for Work</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: U, fontWeight: 400, fontSize: "clamp(40px,7.5vw,77px)", color: h1Color, letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0, maxWidth: "14ch", transition: "color 0.3s ease" }}
              >
                {"Design\nthat works.\nCode that\nships."}
              </motion.h1>
            </motion.div>
          </div>

        </div>
      </Section>
      <style>{`
        @keyframes hero-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.75)}}
        @media(max-width:600px){
          .hero-stats-item:nth-child(3),.hero-stats-item:nth-child(4){display:none}
        }
      `}</style>
    </section>
  );
}


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. STATS BAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function StatsBar() {
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0", transition: "background 0.3s ease" }}>
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}
            className="stats-grid"
          >
            {[
              { num: "20+", label: "Projects Shipped" },
              { num: "7+",  label: "Live Products" },
              { num: "3+",  label: "Years Experience" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(16px,2vw,28px)", display: "flex", flexDirection: "column", gap: 8 }}
              >
                <span style={{ fontFamily: U, fontWeight: 700, fontSize: "clamp(32px,4.5vw,56px)", color: "var(--c-text)", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.num}</span>
                <span style={{ fontFamily: I, fontSize: "clamp(12px,1.2vw,15px)", fontWeight: 500, color: "var(--c-text-2)" }}>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
      <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:1fr 1fr!important}} @media(max-width:380px){.stats-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. ABOUT SNIPPET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function AboutSnippet() {
  const { setPage } = usePage();
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0", transition: "background 0.3s ease" }}>
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 8 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="about-cols">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(24px,3vw,48px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 40, minHeight: "clamp(320px,35vw,480px)" }}>
              <div>
                <p style={{ fontFamily: I, fontWeight: 600, fontSize: 11, color: "var(--c-text-3)", margin: "0 0 20px", letterSpacing: "0.12em", textTransform: "uppercase" }}>About Me</p>
                <h2 style={{ fontFamily: U, fontWeight: 600, fontSize: "clamp(26px,3.5vw,48px)", color: "var(--c-text)", margin: "0 0 20px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  {"Turning complex\nproblems into\nclean products."}
                </h2>
                <p style={{ fontFamily: I, fontWeight: 400, fontSize: "clamp(13px,1.2vw,16px)", color: "var(--c-text-2)", margin: 0, lineHeight: 1.75, maxWidth: 400 }}>
                  {"I'm Namadi Manoj Kumar — UI/UX Designer & Frontend Developer based in Kakinada, India. For 3+ years I've been crafting interfaces that feel effortless, from hospital dashboards to legal platforms. I design with systems thinking and build with clean code."}
                </p>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <PillBtn label="Know More" onClick={() => setPage("about")} />
                <PillBtn label="Download Resume" dark onClick={() => {
                  const link = document.createElement("a");
                  link.href = resumePdf;
                  link.download = "NamadiManojKumar_Resume_2026.pdf";
                  link.rel = "noopener";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ flex: 1, background: "var(--c-card)", borderRadius: 12, overflow: "hidden", minHeight: "clamp(220px,28vw,360px)" }}>
                <img src={profileImg} alt="Namadi Manoj Kumar" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              </div>
              <div style={{ background: "var(--c-card)", borderRadius: 12, padding: "16px 20px", display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["UI/UX Design", "React", "Figma", "Next.js"].map(tag => (
                  <span key={tag} style={{ fontFamily: I, fontSize: 12, fontWeight: 500, color: "var(--c-tag-text)", background: "var(--c-tag-bg)", borderRadius: 32, padding: "6px 12px" }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      <style>{`
        .about-cols{grid-template-columns:1fr 1fr}
        @media(max-width:768px){.about-cols{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. SELECTED WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
interface FeaturedProject {
  img?: string; title: string; cat: string; year: string; desc: string; tags: string[]; link?: string;
}

const FEATURED: FeaturedProject[] = [
  { title: "Lumitech — Company Website", cat: "Web Design", year: "2025", desc: "A modern corporate website designed for Lumitech, presenting the company, its story, capabilities, and offerings through structured Home and About experiences with a complete design system.", tags: ["Corporate", "UI/UX", "Design System", "Website"], img: lumitechImg, link: "https://www.figma.com/design/U7Xh6xKAuXwy28VZgLvMQ3/LumeTech-%E2%80%93-UI-UX-Assessment--Home---About-?node-id=0-1&t=GKrrCAQFpajNsENC-1&utm_source=chatgpt.com" },
  { title: "Glenns Medical — Hospital Management System", cat: "Web App", year: "2025", desc: "A complete hospital management system with role-based Admin and Doctor portals covering patient management, appointments, consultations, prescriptions, billing, medical records, lab coordination, and hospital operations.", tags: ["Healthcare", "HMS", "React", "Dashboard"], img: glennsMedicalImg, link: "https://glennsmedical.figma.site/?utm_source=chatgpt.com" },
  { title: "Medibank — Healthcare Mobile App", cat: "Mobile App", year: "2025", desc: "India’s first health identity infrastructure concept, designed to keep a complete medical history secure, portable, and accessible through one connected healthcare experience.", tags: ["Healthcare", "Mobile App", "Health Identity", "UI/UX"], img: medibankImg, link: "https://www.figma.com/design/TZBmwlxI5ACTzTy3jCbieP/Medibanks-Assignment?node-id=281-4038&t=92PfMSmdyOMT7Ar0-1&utm_source=chatgpt.com" },
  { title: "HRMS — Human Resource Management System", cat: "Web App", year: "2024", desc: "A comprehensive HR management platform that brings employee operations into one system, covering employee records, attendance, leave, payroll, performance, and analytics.", tags: ["HR", "SaaS", "React", "Dashboard"], img: hrmsImg, link: "https://hrms14.vercel.app/?utm_source=chatgpt.com" },
  { title: "Driver on Hire — Web Application", cat: "Web App", year: "2024", desc: "A hiring platform connecting companies with drivers for temporary and full-time work, with dedicated Admin, Company, and Driver portals for verification, job posting, discovery, and applications.", tags: ["Hiring", "Web App", "Multi-Role", "UI/UX"], img: driverOnHireImg, link: "https://www.figma.com/design/J5v0N45XcIkxfrjYwSSb5J/Driver-on-hire?node-id=14-1233&t=DSNNhvKfBU0Dtq1E-1&utm_source=chatgpt.com" },
  { title: "Medini — Farmstay Booking Platform", cat: "Web App", year: "2025", desc: "A warm digital experience for Medini Farm near Kaziranga, combining handcrafted stays, Assamese farm-to-fork cuisine, wildlife safaris, cultural experiences, and the living traditions of Assam.", tags: ["Hospitality", "Booking", "Culture", "Web Design"], img: mediniImg, link: "https://www.medini.farm/?utm_source=chatgpt.com" },
];

function ProjectPopup({ project, onClose }: { project: FeaturedProject; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(16px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(12px,3vw,40px)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
        style={{ background: "var(--c-surface)", borderRadius: 20, overflow: "hidden", width: "100%", maxWidth: 900, maxHeight: "92vh", display: "flex", flexDirection: "column", boxShadow: "0 60px 150px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.05)" }}
      >
        <div style={{ position: "relative", flexShrink: 0 }}>
          {project.img
            ? <img src={project.img} alt={project.title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
            : <div style={{ width: "100%", aspectRatio: "16/9", background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "Urbanist,sans-serif", fontSize: "clamp(14px,2vw,22px)", fontWeight: 700, color: "rgba(255,255,255,0.15)", letterSpacing: "0.05em", textTransform: "uppercase", textAlign: "center", padding: "0 24px" }}>{project.title}</span>
              </div>
          }
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,17,17,1) 0%, rgba(17,17,17,0.3) 50%, transparent 100%)" }} />
          <button onClick={onClose}
            style={{ position: "absolute", top: 16, right: 16, width: 38, height: 38, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.55)")}
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5l10 10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(16px,2.5vw,28px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{project.cat}</span>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>·</span>
              <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}>{project.year}</span>
            </div>
            <h2 style={{ fontFamily: U, fontWeight: 700, fontSize: "clamp(22px,3.5vw,40px)", color: "var(--c-text)", margin: 0, letterSpacing: "-0.03em", lineHeight: 1.1 }}>{project.title}</h2>
          </div>
        </div>
        <div style={{ padding: "clamp(20px,3vw,36px)", display: "flex", flexDirection: "column", gap: 20, overflowY: "auto" }}>
          <p style={{ fontFamily: I, fontSize: "clamp(14px,1.2vw,16px)", color: "var(--c-text-2)", margin: 0, lineHeight: 1.7 }}>{project.desc}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {project.tags.map(t => (
              <span key={t} style={{ fontFamily: I, fontSize: 12, fontWeight: 500, color: "var(--c-tag-text)", background: "var(--c-tag-bg)", borderRadius: 999, padding: "6px 12px", border: "1px solid var(--c-border)" }}>{t}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, paddingTop: 4, borderTop: "1px solid var(--c-border)", marginTop: 4 }}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--c-btn-primary-bg)", borderRadius: 10, padding: "11px 11px 11px 18px", textDecoration: "none", transition: "opacity 0.2s", flexShrink: 0 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <span style={{ fontFamily: I, fontSize: 14, fontWeight: 700, color: "var(--c-btn-primary-text)", whiteSpace: "nowrap" }}>View Project</span>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--c-btn-primary-arrow-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="13" height="13" viewBox="0 0 20 20" fill="none"><path d="M5 10h10M10 5l5 5-5 5" stroke="var(--c-btn-primary-arrow-stroke)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </a>
            )}
            <button onClick={onClose}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--c-subtle)", border: "1px solid var(--c-border-strong)", borderRadius: 10, padding: "11px 18px", cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--c-card2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--c-subtle)")}
            >
              <span style={{ fontFamily: I, fontSize: 14, fontWeight: 600, color: "var(--c-text-2)" }}>Close</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SelectedWorks() {
  const { setPage } = usePage();
  const [selected, setSelected] = useState<FeaturedProject | null>(null);
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0" }}>
      {selected && <ProjectPopup project={selected} onClose={() => setSelected(null)} />}
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(18px,2.5vw,32px)", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}
          >
            <div>
              <p style={{ fontFamily: I, fontWeight: 600, fontSize: 11, color: "var(--c-text-3)", margin: "0 0 8px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Portfolio</p>
              <h2 style={{ fontFamily: U, fontWeight: 600, fontSize: "clamp(22px,3vw,40px)", color: "var(--c-text)", margin: 0, letterSpacing: "-0.03em" }}>Selected Works</h2>
            </div>
            <PillBtn label="View All Projects" onClick={() => setPage("works")} />
          </motion.div>
          {/* Desktop grid / Mobile+Tablet horizontal scroll */}
          <div className="works-grid-home">
            {FEATURED.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(p)}
                className="work-card-home"
              >
                <div className="wc-img-wrap">
                  {p.img
                    ? <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.45s ease" }} className="wc-img" />
                    : <div className="wc-img" style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, #111 0%, #1c1c2e 100%)`, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.45s ease" }}>
                        <span style={{ fontFamily: "Urbanist,sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.12)", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", padding: "0 12px" }}>{p.title}</span>
                      </div>
                  }
                  <div className="wc-overlay">
                    <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.18)" }}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 4.17L15.83 10 10 15.83M4.17 10h11.67" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "12px 14px 14px" }}>
                  <p style={{ fontFamily: I, fontSize: "clamp(12px,1.2vw,15px)", fontWeight: 500, color: "var(--c-text)", margin: "0 0 4px", letterSpacing: "-0.03em", lineHeight: 1.3 }}>{p.title}</p>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span style={{ fontFamily: I, fontSize: 11, color: "var(--c-text-3)" }}>{p.cat}</span>
                    <span style={{ fontFamily: I, fontSize: 11, color: "var(--c-text-3)" }}>·</span>
                    <span style={{ fontFamily: I, fontSize: 11, color: "var(--c-text-3)" }}>{p.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      <style>{`
        /* ── Desktop: 3-col grid ── */
        .works-grid-home {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .work-card-home {
          background: var(--c-card);
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
        }
        .wc-img-wrap {
          aspect-ratio: 4/3;
          overflow: hidden;
          position: relative;
        }
        .wc-overlay {
          position: absolute; inset: 0;
          background: rgba(10,10,10,0.4);
          opacity: 0; transition: opacity 0.3s;
          display: flex; align-items: center; justify-content: center;
        }
        .work-card-home:hover .wc-img { transform: scale(1.04); }
        .work-card-home:hover .wc-overlay { opacity: 1 !important; }
        .wc-overlay > div { transform: translateY(6px); transition: transform 0.3s ease; }
        .work-card-home:hover .wc-overlay > div { transform: translateY(0); }

        /* ── Tablet: horizontal scroll ── */
        @media(max-width:1024px) {
          .works-grid-home {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 10px;
            padding-bottom: 8px;
            scrollbar-width: none;
          }
          .works-grid-home::-webkit-scrollbar { display: none; }
          .work-card-home {
            width: 72vw;
            max-width: 340px;
            min-width: 260px;
            scroll-snap-align: start;
          }
          .wc-img-wrap { aspect-ratio: 4/3; }
        }

        /* ── Mobile: slightly narrower cards ── */
        @media(max-width:600px) {
          .work-card-home {
            width: 78vw;
            max-width: 300px;
            min-width: 220px;
          }
          .wc-img-wrap { aspect-ratio: 3/2; }
        }
      `}</style>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. SERVICES — bento card grid redesign
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const SERVICES = [
  {
    n: "01", title: "UI/UX Design",
    desc: "Research-backed interfaces that guide users without friction — wireframes to pixel-perfect Figma screens.",
    tags: ["Figma", "User Research", "Prototyping"],
    accent: "#6366f1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    n: "02", title: "Frontend Dev",
    desc: "Fast, responsive React & Next.js apps that match the design pixel for pixel and run production-smooth.",
    tags: ["React", "Next.js", "TypeScript"],
    accent: "#22c55e",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    n: "03", title: "Design Systems",
    desc: "Token-based component libraries that keep every future screen on-brand at scale, forever.",
    tags: ["Tokens", "Components", "Docs"],
    accent: "#f59e0b",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    n: "04", title: "Dashboard & SaaS",
    desc: "Complex data made simple — multi-role dashboards users navigate without thinking twice.",
    tags: ["SaaS", "Data Viz", "Multi-role"],
    accent: "#ec4899",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M7 8h.01M11 8h6M7 12h.01M11 12h3" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  const { setPage } = usePage();
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0" }}>
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(18px,2.5vw,32px)", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}
          >
            <div>
              <p style={{ fontFamily: I, fontWeight: 600, fontSize: 11, color: "var(--c-text-3)", margin: "0 0 8px", letterSpacing: "0.12em", textTransform: "uppercase" }}>What I Do</p>
              <h2 style={{ fontFamily: U, fontWeight: 600, fontSize: "clamp(22px,3vw,40px)", color: "var(--c-text)", margin: 0, letterSpacing: "-0.03em" }}>Services</h2>
            </div>
            <PillBtn label="Enquire Now" onClick={() => setPage("about")} />
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8 }} className="svc-bento">
            {SERVICES.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="svc-card"
                style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(22px,2.5vw,36px)", display: "flex", flexDirection: "column", gap: 0, position: "relative", overflow: "hidden", minHeight: "clamp(220px,22vw,300px)", transition: "background 0.25s" }}
              >
                {/* accent top bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: s.accent, borderRadius: "10px 10px 0 0", opacity: 0.7 }} />

                {/* top row: number + icon */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "auto" }}>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 700, color: "var(--c-text-3)", letterSpacing: "0.1em" }}>{s.n}</span>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--c-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: s.accent }}>
                    {s.icon}
                  </div>
                </div>

                {/* content at bottom */}
                <div style={{ marginTop: "clamp(32px,4vw,56px)" }}>
                  <p style={{ fontFamily: U, fontWeight: 700, fontSize: "clamp(18px,2.2vw,28px)", color: "var(--c-text)", margin: "0 0 12px", letterSpacing: "-0.03em", lineHeight: 1.15 }}>{s.title}</p>
                  <p style={{ fontFamily: I, fontSize: "clamp(12px,1.1vw,15px)", color: "var(--c-text-2)", margin: "0 0 16px", lineHeight: 1.65 }}>{s.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {s.tags.map(t => (
                      <span key={t} style={{ fontFamily: I, fontSize: 11, fontWeight: 500, color: "var(--c-text-2)", background: "var(--c-subtle)", borderRadius: 6, padding: "4px 10px", border: "1px solid var(--c-border)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      <style>{`
        .svc-bento{grid-template-columns:repeat(2,1fr)}
        @media(max-width:768px){.svc-bento{grid-template-columns:1fr!important}}
        .svc-card:hover{background:var(--c-card2)!important}
      `}</style>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const STEPS = [
  { n: "01", title: "Discover", desc: "Deep dive into your goals, users, and constraints. Research-first, assumptions-last." },
  { n: "02", title: "Define",   desc: "Translate findings into a clear product brief, user flows, and information architecture." },
  { n: "03", title: "Design",   desc: "Wireframes → high-fidelity Figma screens. Iterate fast with real feedback." },
  { n: "04", title: "Develop",  desc: "Convert designs into clean React code — responsive, accessible, and production-ready." },
  { n: "05", title: "Deliver",  desc: "Ship with handoff docs, design tokens, and ongoing support as the product evolves." },
];

function ProcessSection() {
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0" }}>
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(18px,2.5vw,32px)", marginBottom: 8 }}
          >
            <p style={{ fontFamily: I, fontWeight: 600, fontSize: 11, color: "var(--c-text-3)", margin: "0 0 8px", letterSpacing: "0.12em", textTransform: "uppercase" }}>How I Work</p>
            <h2 style={{ fontFamily: U, fontWeight: 600, fontSize: "clamp(22px,3vw,40px)", color: "var(--c-text)", margin: 0, letterSpacing: "-0.03em" }}>My Process</h2>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {STEPS.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(16px,2vw,24px) clamp(18px,2.5vw,32px)", display: "flex", alignItems: "center", gap: "clamp(16px,3vw,48px)" }}
              >
                <span style={{ fontFamily: U, fontWeight: 700, fontSize: "clamp(28px,3.5vw,48px)", color: "var(--c-subtle)", letterSpacing: "-0.04em", flexShrink: 0, minWidth: "2.5ch" }}>{s.n}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: U, fontWeight: 600, fontSize: "clamp(15px,1.6vw,20px)", color: "var(--c-text)", margin: "0 0 6px", letterSpacing: "-0.03em" }}>{s.title}</p>
                  <p style={{ fontFamily: I, fontSize: "clamp(12px,1vw,15px)", color: "var(--c-text-2)", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
                <div style={{ width: 8, height: 8, borderRadius: 8, background: i === 0 ? "#4ade80" : "var(--c-border-strong)", flexShrink: 0 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SHARED — NMK Band (blue image section)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function NMKBand() {
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0" }}>
      <Section>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 16, overflow: "hidden",
            height: "clamp(200px,24vw,380px)",
            position: "relative",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <img src={footerBgImg} alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          {/* blue tint overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(30,40,100,0.72) 0%, rgba(60,20,80,0.6) 100%)", mixBlendMode: "multiply" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.38)" }} />
          <img src={nmkLogoImg} alt="NMK" style={{ position: "relative", zIndex: 1, height: "clamp(52px,9vw,130px)", objectFit: "contain", filter: "brightness(1.1)" }} />
        </motion.div>
      </Section>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SHARED — Contact Form (Send a Message)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function ContactForm() {
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0" }}>
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 8 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 8 }} className="cf-layout">
            {/* left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(20px,2.5vw,36px)", flex: 1 }}>
                <p style={{ fontFamily: I, fontWeight: 600, fontSize: 11, color: "var(--c-text-3)", margin: "0 0 12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Contact</p>
                <h3 style={{ fontFamily: U, fontWeight: 700, fontSize: "clamp(22px,2.8vw,36px)", color: "var(--c-text)", margin: "0 0 28px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>{"Let's work\ntogether."}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {[
                    { label: "Email", val: "namadimanojkumar@gmail.com", href: "mailto:namadimanojkumar@gmail.com" },
                    { label: "Phone", val: "+91 7993949805", href: "tel:+917993949805" },
                    { label: "Location", val: "Kakinada, AP, India", href: undefined },
                  ].map(c => (
                    <div key={c.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ fontFamily: I, fontSize: 10, fontWeight: 700, color: "var(--c-text-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{c.label}</span>
                      {c.href ? (
                        <a href={c.href} style={{ fontFamily: I, fontSize: "clamp(12px,1.1vw,14px)", color: "var(--c-text-2)", textDecoration: "none", transition: "color 0.2s" }}
                          onMouseEnter={e => (e.currentTarget.style.color = "var(--c-text)")}
                          onMouseLeave={e => (e.currentTarget.style.color = "var(--c-text-2)")}
                        >{c.val}</a>
                      ) : (
                        <span style={{ fontFamily: I, fontSize: "clamp(12px,1.1vw,14px)", color: "var(--c-text-2)" }}>{c.val}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "var(--c-card)", borderRadius: 12, padding: "14px 18px", display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 8, height: 8, borderRadius: 8, background: "#4ade80", flexShrink: 0 }} />
                <span style={{ fontFamily: I, fontSize: 13, color: "var(--c-text-2)" }}>Available for new projects</span>
              </div>
            </motion.div>

            {/* right: image only */}
       <>
  <style>{`
    .had-card {
      /* dark mode (default, unchanged) */
      --had-bg: var(--c-card);
      --had-img-opacity: 0.55;
      --had-img-filter: brightness(0.9) saturate(1.1);
      --had-mask: radial-gradient(ellipse at center, #000 35%, transparent 95%);
      --had-tint: linear-gradient(to bottom, rgba(10,10,10,0.35), rgba(10,10,10,0.6));
    }

    /* light mode: white shade, no circle */
    [data-theme="light"] .had-card,
    .light .had-card {
      --had-bg: #f4f5f3;
      --had-img-opacity: 1;
      --had-img-filter: brightness(1.2) saturate(1.2);
      --had-mask: none;                              /* mask removed, so no circle */
      --had-tint: rgba(255,255,255,0.62);            /* flat, even white shade */
    }
  `}</style>

  <motion.div
    className="had-card"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    style={{
      position: "relative",
      background: "var(--had-bg)",
      borderRadius: 12,
      minHeight: 480,
      overflow: "hidden",
      isolation: "isolate",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <img
      src={hadImg}
      alt="Design work"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        opacity: "var(--had-img-opacity)" as any,
        filter: "var(--had-img-filter)",
        WebkitMaskImage: "var(--had-mask)",
        maskImage: "var(--had-mask)",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />

    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        background: "var(--had-tint)",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />

    <div
      style={{
        position: "relative",
        zIndex: 2,
        padding: "clamp(24px,3vw,40px)",
      }}
    >
      {/* content */}
    </div>
  </motion.div>
</>
          </div>
        </div>
      </Section>
      <style>{`
        .cf-layout{grid-template-columns:1fr 1.5fr}
        @media(max-width:900px){.cf-layout{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SHARED — Footer links bar
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function SharedFooter() {
  const { setPage } = usePage();
  return (
    <section style={{ background: "var(--c-surface)", padding: "4px 0 16px" }}>
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(20px,2.5vw,32px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}
          >
            <img src={nmkLogoImg} alt="NMK" style={{ height: 28, objectFit: "contain" }} />
            <div className="footer-nav-links" style={{ display: "flex", gap: "clamp(16px,3vw,40px)", flexWrap: "wrap" }}>
              {([
                { label: "Home", p: "home" },
                { label: "Works", p: "works" },
                { label: "About", p: "about" },
              ] as const).map(n => (
                <button key={n.label} onClick={() => setPage(n.p)}
                  style={{ fontFamily: I, fontSize: 14, fontWeight: 500, color: "var(--c-text-3)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--c-text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--c-text-3)")}
                >{n.label}</button>
              ))}
            </div>
          </motion.div>
          {/* Social icons row */}
          <div style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(14px,1.8vw,22px) clamp(16px,2vw,28px)", marginTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div className="footer-social-row" style={{ display: "flex", gap: 10 }}>
              {[
                { icon: <Github size={16} />, href: "https://github.com/ManojKumarNamadi61", label: "GitHub" },
                { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/manoj-kumar-namadi-ba755829a", label: "LinkedIn" },
                { icon: <Dribbble size={16} />, href: "https://dribbble.com/NamadiManojKumar", label: "Dribbble" },
                { icon: <Instagram size={16} />, href: "https://www.instagram.com/horcrux_designs_wave/", label: "Instagram" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 36, height: 36, borderRadius: 9, background: "var(--c-subtle)", border: "1px solid var(--c-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--c-text-2)", transition: "background 0.2s, color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--c-card2)"; e.currentTarget.style.color = "var(--c-text)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--c-subtle)"; e.currentTarget.style.color = "var(--c-text-2)"; }}
                >{s.icon}</a>
              ))}
            </div>
            <p style={{ fontFamily: I, fontSize: 12, color: "var(--c-text-3)", margin: 0 }}>© {new Date().getFullYear()} Namadi Manoj Kumar. All rights reserved.</p>
          </div>
        </div>
      </Section>
      <style>{`
        @media(max-width:480px){
          .footer-nav-links{justify-content:center!important}
          .footer-social-row{flex-wrap:wrap!important;justify-content:center!important}
        }
      `}</style>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function Home() {
  return (
    <div style={{ background: "var(--c-bg)", minHeight: "100vh", transition: "background 0.3s ease" }}>
      <Hero />
      <StatsBar />
      <AboutSnippet />
      <SelectedWorks />
      <ServicesSection />
      <ProcessSection />
      <NMKBand />
      <ContactForm />
      <SharedFooter />
    </div>
  );
}
