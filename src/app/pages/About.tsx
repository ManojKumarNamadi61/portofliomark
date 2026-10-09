import { motion } from "motion/react";
import { usePage } from "../PageContext";
import { NMKBand, ContactForm, SharedFooter } from "./Home";

import profileImg from "@/imports/HomePage/42827f7d40b6377532fe0a1ad710c187ed17b2d4.png";
import nmkLogoImg from "@/imports/HomePage/Logo-Without-BG.png";
import heroBgImg from "@/imports/HomePage/Hero-Background.png";
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
        style={{ display: "inline-flex", alignItems: "center", gap: 6, background: dark ? "var(--c-pill-dark-bg)" : "var(--c-btn-primary-bg)", borderRadius: 8, padding: "8px 8px 8px 16px", cursor: "pointer", transition: "opacity 0.2s", border: dark ? "1px solid var(--c-pill-dark-border)" : "none", flexShrink: 0 }}
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

/* ── Bio ─────────────────────────────────────────────── */
function Bio() {
  const { setPage } = usePage();
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0", transition: "background 0.3s ease" }}>
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 12, padding: 8 }}>
          {/* Page title strip */}
          <div style={{ background: "var(--c-card)", borderRadius: 8, padding: "clamp(20px,2.5vw,28px)", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <h1 style={{ fontFamily: U, fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", color: "var(--c-text)", letterSpacing: "-0.04em", margin: 0, lineHeight: 1 }}>About</h1>
            <span style={{ fontFamily: U, fontSize: 12, fontWeight: 600, color: "var(--c-text-3)" }}>UI/UX Designer · Frontend Developer · Kakinada, India</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 8 }} className="bio-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85 }}
              style={{ background: "var(--c-card)", borderRadius: 12, overflow: "hidden", minHeight: "clamp(300px,40vw,560px)" }}
            >
              <img src={profileImg} alt="Namadi Manoj Kumar" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85 }}
              style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(24px,3vw,48px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}>
              <div>
                <p style={{ fontFamily: I, fontWeight: 600, fontSize: 11, color: "var(--c-text-3)", margin: "0 0 16px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Who I Am</p>
                <h2 style={{ fontFamily: U, fontWeight: 600, fontSize: "clamp(22px,3vw,40px)", color: "var(--c-text)", margin: "0 0 20px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>Namadi Manoj Kumar</h2>
                <p style={{ fontFamily: I, fontSize: "clamp(13px,1.2vw,16px)", color: "var(--c-text-2)", margin: "0 0 16px", lineHeight: 1.8, maxWidth: 520 }}>
                  {"I picked up Figma back in college and never really put it down. What started as curiosity about how apps are built turned into a full-time obsession with making complex workflows feel simple."}
                </p>
                <p style={{ fontFamily: I, fontSize: "clamp(13px,1.2vw,16px)", color: "var(--c-text-2)", margin: 0, lineHeight: 1.8, maxWidth: 520 }}>
                  {"Raw wireframes, honest feedback, real users — that's how I work. For the past 3+ years I've been turning messy, complicated processes into products people actually enjoy using, from hospital front desks to legal firm dashboards."}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {["UI/UX Design", "React", "Next.js", "Figma", "Framer", "TypeScript"].map(t => (
                    <span key={t} style={{ fontFamily: I, fontSize: 12, fontWeight: 500, color: "var(--c-tag-text)", background: "var(--c-tag-bg)", borderRadius: 32, padding: "6px 12px" }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <PillBtn label="Download Resume" onClick={() => {
                    const link = document.createElement("a");
                    link.href = resumePdf;
                    link.download = "NamadiManojKumar_Resume_2026.pdf";
                    link.rel = "noopener";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }} />
                  <PillBtn label="See My Work" dark onClick={() => setPage("works")} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      <style>{`
        .bio-grid{grid-template-columns:1fr 1.4fr}
        @media(max-width:900px){.bio-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

/* ── Stats ───────────────────────────────────────────── */
function Stats() {
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0" }}>
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 8 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }} className="about-stats">
            {[
              { n: "20+", label: "Projects Shipped", desc: "Across healthcare, legal, hospitality & SaaS" },
              { n: "7+",  label: "Live Products",     desc: "From wireframe all the way to production" },
              { n: "3+",  label: "Years Experience",  desc: "Design + frontend, end to end" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: i * 0.12 }}
                style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(20px,2.5vw,32px)", display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontFamily: U, fontWeight: 700, fontSize: "clamp(36px,5vw,64px)", color: "var(--c-text)", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</span>
                <div>
                  <p style={{ fontFamily: I, fontWeight: 600, fontSize: "clamp(13px,1.2vw,16px)", color: "var(--c-text)", margin: "0 0 4px" }}>{s.label}</p>
                  <p style={{ fontFamily: I, fontSize: "clamp(11px,0.9vw,13px)", color: "var(--c-text-2)", margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      <style>{`@media(max-width:640px){.about-stats{grid-template-columns:1fr 1fr!important}} @media(max-width:380px){.about-stats{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ── Experience ──────────────────────────────────────── */
const EXP_DATA = [
  {
    n: "01",
    role: "UI/UX Designer",
    company: "33 Kuber Advisory India LLP",
    location: "Bengaluru",
    period: "May 2025 – Present",
    type: "Full-time",
    accent: "#818cf8",
    bullets: [
      "Designed responsive interfaces and scalable design systems using Figma and Framer AI",
      "Improved usability through AI-powered feedback analysis and user journey optimization",
      "Led design-to-development handoffs using component-based UI architecture",
    ],
    tags: ["Figma", "Framer AI", "Design Systems", "React"],
  },
  {
    n: "02",
    role: "Freelance UI/UX Designer & Frontend Developer",
    company: "Independent / Creative Studios",
    location: "Remote",
    period: "Jan 2024 – Apr 2025",
    type: "Freelance",
    accent: "#34d399",
    bullets: [
      "Delivered 20+ projects across healthcare, legal, and hospitality verticals",
      "Specialized in responsive design and AI-assisted layout ideation",
      "Built production web apps using React, Next.js, HTML/CSS/JS",
    ],
    tags: ["React", "Next.js", "TypeScript", "Figma"],
  },
  {
    n: "03",
    role: "Cyber Review Analyst",
    company: "EPIQ Systems",
    location: "Remote",
    period: "Jan 2023 – Dec 2023",
    type: "Full-time",
    accent: "#fbbf24",
    bullets: [
      "Reviewed and classified cyber-related data using automation tools",
      "Improved data review efficiency by 15% through streamlined classification",
    ],
    tags: ["Data Analysis", "Classification", "Automation"],
  },
  {
    n: "04",
    role: "Project Trainee – Frontend Development",
    company: "Knify Software Technologies",
    location: "On-site · Internship",
    period: "May 2018 – Dec 2018",
    type: "Internship",
    accent: "#f472b6",
    bullets: [
      "Developed Qapp, a quiz web app using HTML, CSS, JavaScript, PHP & MySQL",
      "Improved frontend performance and UI consistency by 20%",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

function Experience() {
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0" }}>
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 8 }}>

          {/* Header */}
          <div style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(18px,2vw,28px)", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <p style={{ fontFamily: I, fontWeight: 600, fontSize: 11, color: "var(--c-text-3)", margin: "0 0 8px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Career</p>
              <h2 style={{ fontFamily: U, fontWeight: 700, fontSize: "clamp(22px,3vw,40px)", color: "var(--c-text)", margin: 0, letterSpacing: "-0.03em" }}>Experience</h2>
            </div>
            <span style={{ fontFamily: I, fontSize: 12, color: "var(--c-text-3)", background: "var(--c-card2)", borderRadius: 32, padding: "6px 14px", border: "1px solid var(--c-border)" }}>4 roles · 3+ years</span>
          </div>

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {EXP_DATA.map((e, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="exp-card-v2"
                style={{
                  background: "var(--c-card)",
                  borderRadius: 12,
                  padding: "clamp(20px,2.5vw,36px)",
                  position: "relative",
                  overflow: "hidden",
                  borderLeft: `3px solid ${e.accent}`,
                  transition: "background 0.25s",
                }}
              >
                {/* Ghost number */}
                <span style={{
                  position: "absolute", right: "clamp(12px,3vw,40px)", top: "50%",
                  transform: "translateY(-50%)",
                  fontFamily: U, fontWeight: 900,
                  fontSize: "clamp(72px,12vw,140px)",
                  color: "var(--c-subtle)",
                  letterSpacing: "-0.06em", lineHeight: 1,
                  pointerEvents: "none", userSelect: "none",
                }}>{e.n}</span>

                {/* Top row: role + badges */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 18, position: "relative" }}>
                  <div>
                    <p style={{ fontFamily: U, fontWeight: 700, fontSize: "clamp(15px,2vw,22px)", color: "var(--c-text)", margin: "0 0 5px", letterSpacing: "-0.03em", lineHeight: 1.2 }}>{e.role}</p>
                    <p style={{ fontFamily: I, fontSize: "clamp(11px,1vw,13px)", color: "var(--c-text-2)", margin: 0 }}>{e.company} · {e.location}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, flexShrink: 0 }}>
                    <span style={{
                      fontFamily: I, fontSize: 11, fontWeight: 700,
                      color: e.accent,
                      background: `${e.accent}1a`,
                      borderRadius: 32, padding: "5px 12px",
                      border: `1px solid ${e.accent}35`,
                      letterSpacing: "0.03em",
                    }}>{e.type}</span>
                    <span style={{ fontFamily: I, fontSize: 11, color: "var(--c-text-3)", whiteSpace: "nowrap" }}>{e.period}</span>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "var(--c-border)", marginBottom: 18, position: "relative" }} />

                {/* Bullets */}
                <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 20, position: "relative" }}>
                  {e.bullets.map((b, bi) => (
                    <div key={bi} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 5, height: 5, borderRadius: 5, background: e.accent, flexShrink: 0, marginTop: 8, opacity: 0.75 }} />
                      <span style={{ fontFamily: I, fontSize: "clamp(12px,1vw,14px)", color: "var(--c-text-2)", lineHeight: 1.7 }}>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", position: "relative" }}>
                  {e.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: I, fontSize: 11, fontWeight: 500,
                      color: "var(--c-text-3)",
                      background: "var(--c-subtle)",
                      borderRadius: 6, padding: "4px 10px",
                      border: "1px solid var(--c-border)",
                    }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Section>
      <style>{`.exp-card-v2:hover { background: var(--c-card2) !important; }`}</style>
    </section>
  );
}

/* ── Education ───────────────────────────────────────── */
function Education() {
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0" }}>
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 8 }}>
          <div style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(18px,2vw,28px)", marginBottom: 8 }}>
            <p style={{ fontFamily: I, fontWeight: 600, fontSize: 11, color: "var(--c-text-3)", margin: "0 0 8px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Academic</p>
            <h2 style={{ fontFamily: U, fontWeight: 600, fontSize: "clamp(22px,3vw,40px)", color: "var(--c-text)", margin: 0, letterSpacing: "-0.03em" }}>Education</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="edu-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(20px,2.5vw,32px)", display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <p style={{ fontFamily: U, fontWeight: 600, fontSize: "clamp(15px,1.6vw,20px)", color: "var(--c-text)", margin: "0 0 4px", letterSpacing: "-0.03em" }}>Bachelor of Technology (B.Tech)</p>
                  <p style={{ fontFamily: I, fontSize: "clamp(12px,1vw,14px)", color: "var(--c-text-2)", margin: 0 }}>Computer Science & Engineering</p>
                </div>
                <span style={{ fontFamily: I, fontSize: 12, fontWeight: 500, color: "var(--c-text-3)", background: "var(--c-card2)", borderRadius: 32, padding: "6px 12px", flexShrink: 0 }}>2019 — 2022</span>
              </div>
              <ul style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: 6 }}>
                <li style={{ fontFamily: I, fontSize: "clamp(12px,1vw,15px)", color: "var(--c-text-2)", lineHeight: 1.6 }}>Score — 7.23</li>
                <li style={{ fontFamily: I, fontSize: "clamp(12px,1vw,15px)", color: "var(--c-text-2)", lineHeight: 1.6 }}>Gayatri Vidya Parishad College for Degree and PG Courses</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(20px,2.5vw,32px)", display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <p style={{ fontFamily: U, fontWeight: 600, fontSize: "clamp(15px,1.6vw,20px)", color: "var(--c-text)", margin: "0 0 4px", letterSpacing: "-0.03em" }}>Diploma (Equivalent to 12th Grade)</p>
                  <p style={{ fontFamily: I, fontSize: "clamp(12px,1vw,14px)", color: "var(--c-text-2)", margin: 0 }}>Computer Engineering</p>
                </div>
                <span style={{ fontFamily: I, fontSize: 12, fontWeight: 500, color: "var(--c-text-3)", background: "var(--c-card2)", borderRadius: 32, padding: "6px 12px", flexShrink: 0 }}>2016 — 2019</span>
              </div>
              <ul style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: 6 }}>
                <li style={{ fontFamily: I, fontSize: "clamp(12px,1vw,15px)", color: "var(--c-text-2)", lineHeight: 1.6 }}>Score — 69%</li>
                <li style={{ fontFamily: I, fontSize: "clamp(12px,1vw,15px)", color: "var(--c-text-2)", lineHeight: 1.6 }}>Andhra Polytechnic, Kakinada</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>
      <style>{`
        .edu-grid{grid-template-columns:1fr 1fr}
        @media(max-width:768px){.edu-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

/* ── Tools ───────────────────────────────────────────── */
function Tools() {
  const groups = [
    { label: "Design", items: ["Figma & Figma Make", "Framer AI", "Canva", "Lovable", "Stitch"] },
    { label: "Development", items: ["React", "Next.js", "JavaScript", "HTML/CSS", "VS Code"] },
    { label: "Tools & Platforms", items: ["GitHub", "Notion", "Jira", "Vercel", "Netlify"] },
  ];
  return (
    <section style={{ background: "var(--c-bg)", padding: "4px 0" }}>
      <Section>
        <div style={{ background: "var(--c-surface)", borderRadius: 16, padding: 8 }}>
          <div style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(18px,2vw,28px)", marginBottom: 8 }}>
            <p style={{ fontFamily: I, fontWeight: 600, fontSize: 11, color: "var(--c-text-3)", margin: "0 0 8px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Stack</p>
            <h2 style={{ fontFamily: U, fontWeight: 600, fontSize: "clamp(22px,3vw,40px)", color: "var(--c-text)", margin: 0, letterSpacing: "-0.03em" }}>My Tools</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }} className="tools-grid">
            {groups.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: i * 0.1 }}
                style={{ background: "var(--c-card)", borderRadius: 12, padding: "clamp(20px,2.5vw,32px)", display: "flex", flexDirection: "column", gap: 20 }}>
                <p style={{ fontFamily: I, fontWeight: 600, fontSize: 13, color: "var(--c-text)", margin: 0 }}>{g.label}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {g.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: 6, background: "var(--c-border-strong)", flexShrink: 0 }} />
                      <span style={{ fontFamily: I, fontSize: "clamp(13px,1.1vw,15px)", color: "var(--c-text-2)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      <style>{`@media(max-width:900px){.tools-grid{grid-template-columns:1fr 1fr!important}} @media(max-width:560px){.tools-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ── ROOT ────────────────────────────────────────────── */
export function About() {
  return (
    <div style={{ paddingTop: 84, background: "var(--c-bg)", minHeight: "100vh", transition: "background 0.3s ease" }}>
      <Bio />
      <Stats />
      <Experience />
      <Education />
      <Tools />
      <NMKBand />
      <ContactForm />
      <SharedFooter />
    </div>
  );
}
