import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { NMKBand, ContactForm, SharedFooter } from "./Home";
import nmkLogoImg from "@/imports/HomePage/Logo-Without-BG.png";
import lumeTechImg from "@/imports/Works/LumeTech.png";
import glennsImg from "@/imports/Works/Glenns.png";
import medibankImg from "@/imports/Works/Medibank.png";
import hrmsImg from "@/imports/Works/HRMS.png";
import driverOnHireImg from "@/imports/Works/Driver-on-Hire.png";
import prayerConnectImg from "@/imports/Works/Prayerconnect.png";
import driver33Img from "@/imports/Works/33 Drivers.png";
import kuber33Img from "@/imports/Works/33kuber.png";
import landingPagesImg from "@/imports/Works/20+ Landing Pages.png";
import mobileAppsImg from "@/imports/Works/4-Mobile Applications.png";
import coldtruckImg from "@/imports/Works/coldtruck.png";
import mediniImg from "@/imports/Works/Medini.jpeg";
import doctorsNearbyImg from "@/imports/Works/Doctors Nearby.png";
import mentorLoopImg from "@/imports/Works/Mentorlooop.png";
import greatOutdoorsImg from "@/imports/Works/The Great Outdoors.jpeg";
import mobileDesignsImg from "@/imports/Works/Mobile Designs.png";
import dashboardImg from "@/imports/Works/Dashboard.jpg";
import animationImg from "@/imports/Works/Animation.png";
import loginPageDesignImg from "@/imports/Works/Login Page Design.png";

void nmkLogoImg;


const F = "Urbanist,sans-serif";

type Category = "All" | "Live Projects" | "Pure Designs" | "AI-Applications" | "Conceptual Designs & Collection";
const CATEGORIES: Category[] = ["All", "Live Projects", "Pure Designs", "AI-Applications", "Conceptual Designs & Collection"];

interface Project {
  img?: string;
  title: string;
  category: Exclude<Category, "All">;
  categories: Exclude<Category, "All">[];
  year: string;
  desc: string;
  tags: string[];
  accent: string;
  link?: string;
}

const PROJECTS: Project[] = [
  { title: "Lumetech", category: "Pure Designs", categories: ["Pure Designs"], year: "2025", desc: "A modern corporate website presenting the company, capabilities, and offerings through a structured Home and About experience with a complete design system.", tags: ["Corporate", "UI/UX", "Website", "Design System"], accent: "#6ee7b7", img: lumeTechImg, link: "https://www.figma.com/design/U7Xh6xKAuXwy28VZgLvMQ3/LumeTech-%E2%80%93-UI-UX-Assessment--Home---About-?node-id=0-1&t=GKrrCAQFpajNsENC-1&utm_source=chatgpt.com" },
  { title: "Glenns Medical", category: "Live Projects", categories: ["Live Projects"], year: "2025", desc: "Role-based hospital management system with Admin and Doctor portals covering patient care, appointments, billing, records, and hospital operations.", tags: ["React", "Figma", "Dashboard", "Healthcare"], accent: "#6ee7b7", img: glennsImg, link: "https://glennsmedical.figma.site/?utm_source=chatgpt.com" },
  { title: "Medibank", category: "Pure Designs", categories: ["Pure Designs"], year: "2025", desc: "Healthcare mobile concept focused on secure, portable medical history and a connected identity-driven experience.", tags: ["Mobile", "UI/UX", "Healthcare", "Figma"], accent: "#6ee7b7", img: medibankImg, link: "https://www.figma.com/design/TZBmwlxI5ACTzTy3jCbieP/Medibanks-Assignment?node-id=281-4038&t=92PfMSmdyOMT7Ar0-1&utm_source=chatgpt.com" },
  { title: "HRMS", category: "Live Projects", categories: ["Live Projects"], year: "2024", desc: "Comprehensive employee operations platform covering records, attendance, leave, payroll, performance, and analytics.", tags: ["HR", "SaaS", "React", "Dashboard"], accent: "#38bdf8", img: hrmsImg, link: "https://hrms14.vercel.app/?utm_source=chatgpt.com" },
  { title: "Driver on Hire", category: "Pure Designs", categories: ["Pure Designs"], year: "2024", desc: "Role-based hiring platform with Admin, Company, and Driver portals for job discovery, verification, and application flows.", tags: ["Web App", "Figma", "Recruitment", "UI Design"], accent: "#fcd34d", img: driverOnHireImg, link: "https://www.figma.com/design/J5v0N45XcIkxfrjYwSSb5J/Driver-on-hire?node-id=14-1233&t=DSNNhvKfBU0Dtq1E-1&utm_source=chatgpt.com" },
  { title: "Medini", category: "Live Projects", categories: ["Live Projects"], year: "2025", desc: "Warm farmstay booking experience for a heritage hospitality brand combining stays, dining, safaris, and cultural experiences.", tags: ["Next.js", "Figma", "Booking", "Hospitality"], accent: "#fcd34d", img: mediniImg, link: "https://www.medini.farm/?utm_source=chatgpt.com" },
  { title: "Doctors Nearby", category: "Live Projects", categories: ["Live Projects", "AI-Applications"], year: "2025", desc: "Doctor discovery and care application connecting users to nearby specialists, appointments, and healthcare access.", tags: ["Healthcare", "AI", "Mobile", "UX"], accent: "#a78bfa", img: doctorsNearbyImg, link: "https://docnearby.lovable.app/?utm_source=chatgpt.com" },
  { title: "Prayer Connect", category: "Live Projects", categories: ["Live Projects", "AI-Applications"], year: "2025", desc: "Community-driven platform for prayer requests, worship engagement, and faith-based connection.", tags: ["Community", "React", "UI/UX", "Figma"], accent: "#f472b6", img: prayerConnectImg, link: "https://faithprayer.lovable.app/?utm_source=chatgpt.com" },
  { title: "33 Driver", category: "Live Projects", categories: ["Live Projects"], year: "2025", desc: "Driver management platform enabling registration, allocation, workforce tracking, and operational visibility.", tags: ["React", "Fleet", "Dashboard", "Figma"], accent: "#fb923c", img: driver33Img, link: "https://33driver.com/?utm_source=chatgpt.com" },
  { title: "33 Kuber", category: "Live Projects", categories: ["Live Projects"], year: "2025", desc: "Corporate landing experience designed to strengthen brand value and drive business enquiries.", tags: ["React", "Figma", "Corporate", "Landing"], accent: "#a78bfa", img: kuber33Img, link: "https://33kuber.com/?utm_source=chatgpt.com" },
  { title: "20+ Landing Pages", category: "Pure Designs", categories: ["Pure Designs"], year: "2025", desc: "Collection of responsive marketing pages designed across multiple industries with a strong conversion-focused layout system.", tags: ["Landing", "Figma", "Marketing", "UI"], accent: "#38bdf8", img: landingPagesImg, link: "https://www.figma.com/design/QrenlPyaDQwI5Ybv1uV7DH/20--Landing-Pages-Design?node-id=3-43598&t=DSNNhvKfBU0Dtq1E-1&utm_source=chatgpt.com" },
  { title: "4-Mobile Applications", category: "Pure Designs", categories: ["Pure Designs"], year: "2025", desc: "A set of mobile application concepts spanning utility, lifestyle, and productivity-focused journeys.", tags: ["Mobile", "Apps", "UI Design", "Collection"], accent: "#f472b6", img: mobileAppsImg, link: "https://www.figma.com/design/uMIPgTOfc1dR49ybeMhvX0/Mobile-Applications?node-id=6-31670&t=92PfMSmdyOMT7Ar0-1&utm_source=chatgpt.com" },
  { title: "Coldtruck", category: "Conceptual Designs & Collection", categories: ["Conceptual Designs & Collection"], year: "2024", desc: "Cold-chain monitoring dashboard designed to detect temperature irregularities and support fleet performance.", tags: ["Logistics", "Figma", "Dashboard", "B2B"], accent: "#38bdf8", img: coldtruckImg, link: "https://www.figma.com/design/8IjjE1ZlRFSiUaMBOYfmwl/Cold-Chain-Monitoring-SaaS?node-id=115-3707&t=92PfMSmdyOMT7Ar0-1&utm_source=chatgpt.com" },
  { title: "Mentor Loop", category: "Pure Designs", categories: ["Pure Designs"], year: "2025", desc: "Mentorship platform landing page with clear positioning, story flow,CTA structure, and a modern interface language.", tags: ["Landing", "EdTech", "Figma", "UI Design"], accent: "#a78bfa", img: mentorLoopImg, link: "https://www.figma.com/design/w7MQCTryvVN9VAlHXe8zSQ/Mentor-Loop?node-id=0-1&t=DSNNhvKfBU0Dtq1E-1&utm_source=chatgpt.com" },
  { title: "The Great Outdoors", category: "Pure Designs", categories: ["Pure Designs"], year: "2025", desc: "Adventure travel landing page with immersive storytelling, editorial layouts, and a premium visual rhythm.", tags: ["Travel", "Landing", "Figma", "Editorial"], accent: "#fb923c", img: greatOutdoorsImg, link: "https://www.figma.com/design/XhuTCd4m8TMkrCsHDJZyLd/The-Great-Out-Doors?node-id=0-1&t=5WVfFdVxDRWnuOMs-1&utm_source=chatgpt.com" },
  { title: "Mobile Designs", category: "Conceptual Designs & Collection", categories: ["Conceptual Designs & Collection"], year: "2024–25", desc: "Curated mobile UI journeys spanning onboarding, dashboards, health, and commerce-oriented experiences.", tags: ["Mobile", "Figma", "Collection", "UI"], accent: "#6ee7b7", img: mobileDesignsImg, link: "https://www.figma.com/design/19ONEHOeDMbfVk6aolYxl5/All-My-Works?node-id=0-1&t=BeVznavBLWpG8tNb-1&utm_source=chatgpt.com" },
  { title: "Dashboard", category: "Conceptual Designs & Collection", categories: ["Conceptual Designs & Collection"], year: "2024–25", desc: "Collection of dashboard concepts spanning analytics, operations, finance, and system-driven decision-making views.", tags: ["Dashboard", "Figma", "Collection", "Data Viz"], accent: "#fb923c", img: dashboardImg, link: "https://www.figma.com/design/19ONEHOeDMbfVk6aolYxl5/All-My-Works?node-id=1-7010&t=BeVznavBLWpG8tNb-1&utm_source=chatgpt.com" },
  { title: "Animations", category: "Conceptual Designs & Collection", categories: ["Conceptual Designs & Collection"], year: "2025", desc: "Motion and interaction studies focused on micro-animations, transitions, and prototype-driven movement design.", tags: ["Animation", "Framer", "Figma", "Motion"], accent: "#f472b6", img: animationImg, link: "https://www.figma.com/design/19ONEHOeDMbfVk6aolYxl5/All-My-Works?node-id=1-5879&t=BeVznavBLWpG8tNb-1&utm_source=chatgpt.com" },
  { title: "Login Page Design", category: "Conceptual Designs & Collection", categories: ["Conceptual Designs & Collection"], year: "2024", desc: "Authentication UI explorations covering sign-in, OTP, and recovery flows across clean, dark, and minimal themes.", tags: ["Auth", "UI Design", "Figma", "Collection"], accent: "#a78bfa", img: loginPageDesignImg, link: "https://www.figma.com/design/19ONEHOeDMbfVk6aolYxl5/All-My-Works?node-id=1-7009&t=BeVznavBLWpG8tNb-1&utm_source=chatgpt.com" },
];

const CURRENTLY_WORKING_ON = [
  {
    title: "EMI — Easy Move-In Interiors",
    short: "Upload your space, choose your style and requirements, explore designs, get an estimated quotation, and move closer to your dream interior — all in one place.",
    description: "EMI — Easy Move-In Interiors is a platform that simplifies the entire interior journey, from understanding your space and designing it to selecting services, materials, budgeting, and execution.",
    status: "Currently Working On",
  },
  {
    title: "Spacekai — Architecture Company Website",
    short: "An architecture company website currently in development for Spacekai.",
    description: "An architecture company website currently in development for Spacekai.",
    status: "Currently Working On",
  },
];

/* ── Animated section reveal wrapper ─────────────────── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 52 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ── Project Detail Modal ─────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(24px)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(12px,3vw,40px)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ duration: 0.42 }}
        onClick={e => e.stopPropagation()}
        style={{ background: "var(--c-card)", borderRadius: 24, overflow: "hidden", width: "100%", maxWidth: 960, maxHeight: "94vh", display: "flex", flexDirection: "column", boxShadow: "0 80px 200px rgba(0,0,0,0.98), 0 0 0 1px rgba(255,255,255,0.07)" }}
      >
        {/* Image */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          {project.img
            ? <img src={project.img} alt={project.title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
            : <div style={{ width: "100%", aspectRatio: "16/9", background: `linear-gradient(135deg, #111 0%, #1c1c2e 60%, #0d1117 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "Urbanist,sans-serif", fontSize: "clamp(14px,2vw,22px)", fontWeight: 700, color: "rgba(255,255,255,0.12)", letterSpacing: "0.05em", textTransform: "uppercase", textAlign: "center", padding: "0 32px" }}>{project.title}</span>
              </div>
          }
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #111 0%, rgba(17,17,17,0.3) 50%, transparent 100%)" }} />

          {/* Close btn */}
          <button onClick={onClose}
            style={{ position: "absolute", top: 16, right: 16, width: 40, height: 40, borderRadius: 12, background: "var(--c-card2)", backdropFilter: "blur(12px)", border: "1px solid var(--c-border-strong)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "scale(1.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--c-card2)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5l10 10" stroke="var(--c-text)" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>

          {/* Accent line */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

          {/* Title overlay */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(16px,2.5vw,32px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontFamily: F, fontSize: 10, fontWeight: 700, color: project.accent, letterSpacing: "0.12em", textTransform: "uppercase" }}>{project.category}</span>
              <span style={{ color: "var(--c-text-3)" }}>·</span>
              <span style={{ fontFamily: F, fontSize: 10, fontWeight: 600, color: "var(--c-text-3)", letterSpacing: "0.08em" }}>{project.year}</span>
            </div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: "clamp(20px,3.5vw,42px)", color: "var(--c-text)", margin: 0, letterSpacing: "-0.035em", lineHeight: 1.1 }}>{project.title}</h2>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "clamp(20px,3vw,40px)", display: "flex", flexDirection: "column", gap: 24, overflowY: "auto" }}>
          <p style={{ fontFamily: F, fontSize: "clamp(14px,1.2vw,17px)", color: "var(--c-text-2)", margin: 0, lineHeight: 1.85 }}>{project.desc}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {project.tags.map(t => (
              <span key={t} style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: "var(--c-tag-text)", background: "var(--c-tag-bg)", borderRadius: 8, padding: "6px 14px", border: "1px solid var(--c-border)", letterSpacing: "0.02em" }}>{t}</span>
            ))}
          </div>
          {/* View Project button */}
          <div style={{ display: "flex", gap: 10, paddingTop: 4, borderTop: "1px solid var(--c-border)", marginTop: 4 }}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--c-btn-primary-bg)", borderRadius: 8, padding: "11px 11px 11px 20px", textDecoration: "none", transition: "opacity 0.2s", flexShrink: 0 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <span style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: "var(--c-btn-primary-text)", whiteSpace: "nowrap" }}>View Project</span>
                <div style={{ width: 30, height: 30, borderRadius: 6, background: "var(--c-btn-primary-arrow-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="13" height="13" viewBox="0 0 20 20" fill="none"><path d="M5 10h10M10 5l5 5-5 5" stroke="var(--c-btn-primary-arrow-stroke)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 5L5 15" stroke="none" /></svg>
                </div>
              </a>
            )}
            <button onClick={onClose}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--c-subtle)", border: "1px solid var(--c-border-strong)", borderRadius: 8, padding: "11px 20px", cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--c-card2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--c-subtle)")}
            >
              <span style={{ fontFamily: F, fontSize: 14, fontWeight: 600, color: "var(--c-text-2)" }}>Close</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Project Card ─────────────────────────────────────── */
function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 52 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: (index % 4) * 0.1 }}
      onClick={onClick}
      className="proj-card"
      style={{ cursor: "pointer", borderRadius: 16, overflow: "hidden", background: "var(--c-card)", border: "1px solid var(--c-border)", position: "relative" }}
    >
      {/* Image */}
      <div className="card-img-wrap" style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
        {project.img
          ? <img src={project.img} alt={project.title} className="card-img" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }} />
          : <div className="card-img" style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, #141414 0%, #1c1c28 100%)`, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}>
              <span style={{ fontFamily: "Urbanist,sans-serif", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.1)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", padding: "0 12px" }}>{project.title}</span>
            </div>
        }
        {/* Hover overlay */}
        <div className="card-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", opacity: 0, transition: "opacity 0.35s", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span style={{ fontFamily: F, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em", textTransform: "uppercase" }}>View</span>
          </div>
        </div>
        {/* Accent bottom line */}
        <div className="card-accent" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${project.accent}, transparent)`, opacity: 0, transition: "opacity 0.35s" }} />
      </div>

      {/* Info */}
      <div style={{ padding: "14px 16px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
          <span style={{ fontFamily: F, fontSize: 10, fontWeight: 700, color: project.accent, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.85 }}>{project.category.split(" ")[0]}</span>
          <span style={{ fontFamily: F, fontSize: 11, color: "var(--c-text-3)", fontWeight: 500 }}>{project.year}</span>
        </div>
        <p style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: "var(--c-text)", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.3 }}>{project.title}</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 10 }}>
          {project.tags.slice(0, 3).map(t => (
            <span key={t} style={{ fontFamily: F, fontSize: 10, fontWeight: 600, color: "var(--c-text-3)", background: "var(--c-subtle)", borderRadius: 6, padding: "3px 9px", letterSpacing: "0.03em" }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Works Page ──────────────────────────────────────── */
export function Works() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = PROJECTS.filter(p => {
    const matchCat = activeCategory === "All" || p.categories.includes(activeCategory);
    const matchSearch = search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div style={{ paddingTop: 84, background: "var(--c-bg)", minHeight: "100vh", transition: "background 0.3s ease" }}>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal key="modal" project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <style>{`
        /* Card hover effects */
        .proj-card:hover .card-img { transform: scale(1.07); }
        .proj-card:hover .card-overlay { opacity: 1 !important; }
        .proj-card:hover .card-accent { opacity: 1 !important; }

        /* Works grid */
        .works-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        @media (max-width: 1200px) { .works-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; } }
        @media (max-width: 768px)  { .works-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } }
        @media (max-width: 480px)  { .works-grid { grid-template-columns: 1fr; gap: 8px; } }

        /* Filter scroll */
        .cat-scroll { overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; scrollbar-width: none; -ms-overflow-style: none; }
        .cat-scroll::-webkit-scrollbar { display: none; }

        /* Search */
        .works-search::placeholder { color: var(--c-text-3); }
        .works-search:focus { outline: none; }

        /* Smooth page scroll */
        html { scroll-behavior: smooth; }

        /* Mobile card image aspect */
        @media (max-width: 520px) {
          .card-img-wrap { aspect-ratio: 16/9 !important; }
        }
      `}</style>

      {/* ── Page Header ─────────────────────────────────── */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px) 4px" }}>
        <Reveal>
          <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: "clamp(24px,3vw,40px) clamp(20px,3vw,40px)", marginBottom: 4, position: "relative", overflow: "hidden" }}>
            {/* BG decoration */}
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, position: "relative" }}>
              <div>
                <p style={{ fontFamily: F, fontSize: 11, fontWeight: 700, color: "var(--c-text-3)", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 8px" }}>Portfolio</p>
                <h1 style={{ fontFamily: F, fontWeight: 900, fontSize: "clamp(36px,6vw,72px)", color: "var(--c-text)", letterSpacing: "-0.045em", margin: 0, lineHeight: 0.95 }}>Selected Works</h1>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 10px #4ade80" }} />
                  <span style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: "var(--c-text-2)", letterSpacing: "0.04em" }}>Available for work</span>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: F, fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, color: "var(--c-text)", letterSpacing: "-0.04em", lineHeight: 1 }}>{PROJECTS.length}</div>
                    <div style={{ fontFamily: F, fontSize: 10, color: "var(--c-text-3)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Projects</div>
                  </div>
                  <div style={{ width: 1, background: "var(--c-border)", alignSelf: "stretch" }} />
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: F, fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, color: "var(--c-text)", letterSpacing: "-0.04em", lineHeight: 1 }}>{CATEGORIES.length - 1}</div>
                    <div style={{ fontFamily: F, fontSize: 10, color: "var(--c-text-3)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Categories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Filter + Search Bar ──────────────────────────── */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px) 4px" }}>
        <Reveal delay={0.08}>
          <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 10, marginBottom: 4 }}>
            {/* Search row */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--c-card2)", borderRadius: 10, padding: "10px 16px", marginBottom: 8, border: "1px solid var(--c-border)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--c-text-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                className="works-search"
                type="text"
                placeholder="Search by project or tag…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ background: "transparent", border: "none", outline: "none", color: "var(--c-text)", fontFamily: F, fontSize: 14, fontWeight: 500, flex: 1 }}
              />
              {search && (
                <button onClick={() => setSearch("")} style={{ color: "var(--c-text-3)", cursor: "pointer", display: "flex", padding: 2, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--c-text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--c-text-3)")}
                >
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </button>
              )}
              <span style={{ fontFamily: F, fontSize: 11, fontWeight: 600, color: "var(--c-text-3)", flexShrink: 0 }}>{filtered.length} of {PROJECTS.length}</span>
            </div>

            {/* Category filter tabs */}
            <div className="cat-scroll" style={{ display: "flex", gap: 5, overflowX: "auto", paddingBottom: 2 }}>
              {CATEGORIES.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    padding: "9px 18px",
                    borderRadius: 8,
                    fontFamily: F,
                    fontSize: 13,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    flexShrink: 0,
                    transition: "all 0.22s cubic-bezier(0.22,1,0.36,1)",
                    background: activeCategory === cat ? "var(--c-btn-primary-bg)" : "var(--c-subtle)",
                    color: activeCategory === cat ? "var(--c-btn-primary-text)" : "var(--c-text-2)",
                    border: `1px solid ${activeCategory === cat ? "var(--c-btn-primary-bg)" : "var(--c-border)"}`,
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={e => { if (activeCategory !== cat) { e.currentTarget.style.color = "var(--c-text)"; e.currentTarget.style.borderColor = "var(--c-border-strong)"; e.currentTarget.style.background = "var(--c-card2)"; } }}
                  onMouseLeave={e => { if (activeCategory !== cat) { e.currentTarget.style.color = "var(--c-text-2)"; e.currentTarget.style.borderColor = "var(--c-border)"; e.currentTarget.style.background = "var(--c-subtle)"; } }}
                >
                  {cat}
                  {cat !== "All" && (
                    <span style={{ marginLeft: 7, fontSize: 10, opacity: 0.55, fontWeight: 700 }}>
                      {PROJECTS.filter(p => p.categories.includes(cat)).length}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Project Grid ─────────────────────────────────── */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px) 4px" }}>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 10, marginBottom: 4 }}>
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ padding: "80px 24px", textAlign: "center" }}
              >
                <div style={{ fontFamily: F, fontSize: 40, marginBottom: 12 }}>🔍</div>
                <p style={{ fontFamily: F, fontSize: 16, fontWeight: 600, color: "var(--c-text-2)", margin: "0 0 6px" }}>No projects found</p>
                <p style={{ fontFamily: F, fontSize: 13, color: "var(--c-text-3)", margin: 0 }}>Try a different search or category</p>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory + search}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="works-grid"
              >
                {filtered.map((p, i) => (
                  <ProjectCard key={p.title} project={p} index={i} onClick={() => setSelectedProject(p)} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Currently Working On ─────────────────────────── */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px) 4px" }}>
        <Reveal delay={0.08}>
          <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: "clamp(24px,3vw,32px)", marginBottom: 4 }}>
            <div style={{ marginBottom: 18 }}>
              <p style={{ fontFamily: F, fontSize: 11, fontWeight: 700, color: "var(--c-text-3)", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 8px" }}>Ongoing</p>
              <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "var(--c-text)", letterSpacing: "-0.04em", margin: 0 }}>Currently Working On</h2>
              <p style={{ fontFamily: F, fontSize: 14, color: "var(--c-text-2)", margin: "8px 0 0" }}>A few projects currently in progress.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
              {CURRENTLY_WORKING_ON.map((project) => (
                <div key={project.title} style={{ background: "var(--c-card)", border: "1px solid var(--c-border)", borderRadius: 16, padding: 18 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: F, fontSize: 10, fontWeight: 700, color: "var(--c-text-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{project.status}</span>
                  </div>
                  <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: "var(--c-text)", margin: "0 0 12px", letterSpacing: "-0.03em" }}>{project.title}</h3>
                  <p style={{ fontFamily: F, fontSize: 14, color: "var(--c-text-2)", lineHeight: 1.75, margin: "0 0 12px" }}>{project.description}</p>
                  <p style={{ fontFamily: F, fontSize: 13, color: "var(--c-text-3)", lineHeight: 1.7, margin: 0 }}>{project.short}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── NMK Band → Contact → Footer ──────────────────── */}
      <NMKBand />
      <ContactForm />
      <SharedFooter />
    </div>
  );
}
