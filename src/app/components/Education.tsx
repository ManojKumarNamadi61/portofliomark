import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

const EDU = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Gayatri Vidya Parishad College for Degree and PG Courses",
    period: "2019 – 2022",
    score: "CGPA · 7.23",
    level: "Degree",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.12)",
  },
  {
    degree: "Diploma (Equivalent to 12th Grade)",
    field: "Computer Engineering",
    institution: "Andhra Polytechnic, Kakinada",
    period: "2016 – 2019",
    score: "Score · 69%",
    level: "Diploma",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.12)",
  },
  {
    degree: "Secondary School Certificate (SSC / 10th)",
    field: "General Education",
    institution: "St. Marks Public School",
    period: "2015 – 2016",
    score: "GPA · 8.5",
    level: "10th",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.12)",
  },
];

export function Education() {
  return (
    <section id="education" style={{ padding: "80px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 52 }}
        >
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", color: "#6366f1", marginBottom: 10 }}>
            / EDUCATION
          </div>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: "clamp(44px, 8vw, 96px)", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.02em", color: "#e8e8f0", margin: 0 }}>
            MY<br /><span style={{ color: "#6366f1" }}>EDUCATION</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 300, color: "#6b6b85", marginTop: 16, lineHeight: 1.7, maxWidth: 480 }}>
            Solid foundation in Computer Science with practical experience in design and development.
          </p>
        </motion.div>

        {/* Desktop timeline (hidden on mobile) */}
        <div className="edu-desktop">
          {/* Centre line */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: 22, bottom: 22, width: 1, background: "rgba(255,255,255,0.07)", transform: "translateX(-50%)", zIndex: 0 }} />

            {EDU.map((e, i) => {
              const left = i % 2 === 0; // even → institution left, card right
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  style={{ display: "grid", gridTemplateColumns: "1fr 44px 1fr", alignItems: "center", gap: "0 24px", marginBottom: 28 }}
                >
                  {/* Left col */}
                  <div style={{ textAlign: "right" }}>
                    {left ? (
                      <Institution e={e} align="right" />
                    ) : (
                      <EduCard e={e} />
                    )}
                  </div>

                  {/* Centre dot */}
                  <div style={{ display: "flex", justifyContent: "center", zIndex: 1 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: e.glow, border: `2px solid ${e.color}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 20px ${e.color}35`, flexShrink: 0 }}>
                      <GraduationCap size={18} style={{ color: e.color }} />
                    </div>
                  </div>

                  {/* Right col */}
                  <div>
                    {left ? (
                      <EduCard e={e} />
                    ) : (
                      <Institution e={e} align="left" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile stacked (hidden on desktop) */}
        <div className="edu-mobile">
          {EDU.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ display: "flex", gap: 14, marginBottom: 20 }}
            >
              {/* Dot + line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: e.glow, border: `2px solid ${e.color}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <GraduationCap size={14} style={{ color: e.color }} />
                </div>
                {i < EDU.length - 1 && (
                  <div style={{ flex: 1, width: 1, background: "rgba(255,255,255,0.07)", marginTop: 6, minHeight: 20 }} />
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1, paddingBottom: 8 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: e.color, letterSpacing: "0.06em", marginBottom: 3 }}>{e.period}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#6b6b85", marginBottom: 10, lineHeight: 1.4 }}>{e.institution}</div>
                <EduCard e={e} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-desktop { display: block; }
        .edu-mobile  { display: none; }
        @media (max-width: 640px) {
          .edu-desktop { display: none; }
          .edu-mobile  { display: block; }
        }
      `}</style>
    </section>
  );
}

function Institution({ e, align }: { e: typeof EDU[0]; align: "left" | "right" }) {
  return (
    <div style={{ textAlign: align }}>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: "#a0a0b8", lineHeight: 1.45, marginBottom: 6 }}>{e.institution}</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: e.color, letterSpacing: "0.05em" }}>{e.period}</div>
    </div>
  );
}

function EduCard({ e }: { e: typeof EDU[0] }) {
  return (
    <div
      style={{ borderRadius: 16, border: `1px solid ${e.color}25`, background: "#0e0e12", padding: "18px 20px", transition: "border-color 0.25s, transform 0.25s", cursor: "default" }}
      onMouseEnter={ev => { (ev.currentTarget as HTMLDivElement).style.borderColor = e.color + "55"; (ev.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
      onMouseLeave={ev => { (ev.currentTarget as HTMLDivElement).style.borderColor = e.color + "25"; (ev.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 6 }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#e8e8f0", lineHeight: 1.35 }}>{e.degree}</div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.07em", padding: "3px 9px", borderRadius: 100, background: e.glow, color: e.color, border: `1px solid ${e.color}40`, flexShrink: 0, whiteSpace: "nowrap" }}>{e.level}</span>
      </div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 300, color: "#6b6b85", marginBottom: 10 }}>{e.field}</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: e.color, fontWeight: 500 }}>{e.score}</div>
    </div>
  );
}
