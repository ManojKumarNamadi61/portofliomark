import { useState } from "react";
import { motion } from "motion/react";
import { usePage } from "../PageContext";
import svgPaths from "@/imports/Contact/svg-w4n5wo9b0b";

import heroBgImg from "@/imports/Contact/952a57729160cca422e31f4ca9d638903a0d69df.png";
import profileImg from "@/imports/Contact/42827f7d40b6377532fe0a1ad710c187ed17b2d4.png";
import nmkLogoImg from "@/imports/HomePage-1/Logo-Without-BG.png";

void svgPaths;

const I = "Urbanist,sans-serif";

function Section({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: "#0a0a0a", width: "100%", display: "flex", justifyContent: "center", ...style }}>
      <div style={{ width: "100%", maxWidth: 1400, padding: "0 clamp(16px, 4vw, 48px)" }}>
        {children}
      </div>
    </div>
  );
}

function ContactFooter() {
  const { setPage } = usePage();
  return (
    <Section>
      <div style={{ background: "#111", borderRadius: 12, padding: "8px", marginBottom: 4 }}>
        <div style={{ background: "#161616", borderRadius: 8, padding: "48px 32px", display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <img src={nmkLogoImg} alt="NMK" style={{ height: 32, objectFit: "contain" }} />
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {([
                { label: "Home", p: "home" },
                { label: "Works", p: "works" },
                { label: "About", p: "about" },
                { label: "Contact", p: "contact" },
              ] as const).map(n => (
                <button key={n.label} onClick={() => setPage(n.p)}
                  style={{ fontFamily: I, fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >{n.label}</button>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }}>
            <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.3)", margin: 0 }}>
              © {new Date().getFullYear()} Namadi Manoj Kumar. All rights reserved.
            </p>
            <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.3)", margin: 0 }}>
              UI/UX Designer & Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div style={{ paddingTop: 84, background: "#0a0a0a", minHeight: "100vh" }}>
      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: minmax(280px, 380px) 1fr;
          gap: 8px;
        }
        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr; }
        }
        .contact-input {
          width: 100%;
          background: #222;
          border: none;
          outline: none;
          border-radius: 12px;
          padding: 18px;
          font-family: Urbanist, sans-serif;
          font-size: 16px;
          color: #fff;
          box-sizing: border-box;
          transition: background 0.2s;
        }
        .contact-input::placeholder { color: rgba(255,255,255,0.5); }
        .contact-input:focus { background: #2a2a2a; }
        .contact-textarea {
          width: 100%;
          background: #222;
          border: none;
          outline: none;
          border-radius: 12px;
          padding: 18px;
          font-family: Urbanist, sans-serif;
          font-size: 16px;
          color: #fff;
          box-sizing: border-box;
          resize: none;
          min-height: 160px;
          transition: background 0.2s;
        }
        .contact-textarea::placeholder { color: rgba(255,255,255,0.5); }
        .contact-textarea:focus { background: #2a2a2a; }
        .contact-select {
          width: 100%;
          background: #222;
          border: none;
          outline: none;
          border-radius: 12px;
          padding: 18px;
          font-family: Urbanist, sans-serif;
          font-size: 16px;
          color: rgba(255,255,255,0.5);
          box-sizing: border-box;
          appearance: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .contact-select:focus { background: #2a2a2a; }
        .contact-select option { background: #222; color: #fff; }
        .contact-select.has-value { color: #fff; }
        .cf-row { grid-template-columns: 1fr 1fr; }
        @media(max-width:600px){ .cf-row { grid-template-columns: 1fr !important; } }
        @media(max-width:480px){ .contact-submit { width: 100% !important; justify-content: center; } }
      `}</style>

      {/* ── Page title strip ────────────────────────────── */}
      <Section>
        <div style={{ background: "#111", borderRadius: 12, padding: 8, marginBottom: 4 }}>
          <div style={{ background: "#161616", borderRadius: 8, padding: "clamp(20px,2.5vw,28px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <h1 style={{ fontFamily: I, fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", color: "#fff", letterSpacing: "-0.04em", margin: 0, lineHeight: 1 }}>Contact</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80" }} />
              <span style={{ fontFamily: I, fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)" }}>Available for new projects</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Contact section ─────────────────────────────── */}
      <Section>
        <div style={{ background: "#111", borderRadius: 12, padding: "8px", marginBottom: 4, overflow: "hidden" }}>
          <div className="contact-layout">
            {/* ── Left: contact cards ─────────────────── */}
            <div style={{ background: "#161616", borderRadius: 8, padding: 8, display: "flex", flexDirection: "column", gap: 8 }}>
              {/* Chat With Me card */}
              <div style={{ background: "#1c1c1c", borderRadius: 12, padding: 8, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 240 }}>
                <div style={{ background: "#1c1c1c", borderRadius: 8, padding: 12, display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: I, fontSize: 16, fontWeight: 500, color: "#fff", margin: "0 0 6px", letterSpacing: "-0.04em" }}>Chat With Me</p>
                    <p style={{ fontFamily: I, fontSize: 13, color: "#888", margin: 0, lineHeight: 1.5 }}>Have a question? We would love to hear from you.</p>
                  </div>
                </div>
                <a href="mailto:namadimanojkumar@gmail.com"
                  style={{ display: "block", background: "#222", borderRadius: 8, padding: "12px 14px", fontFamily: I, fontSize: 15, fontWeight: 500, color: "#fff", letterSpacing: "-0.04em", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#2a2a2a")}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#222")}
                >namadimanojkumar@gmail.com</a>
              </div>

              {/* Call Me card */}
              <div style={{ background: "#1c1c1c", borderRadius: 12, padding: 8, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 240 }}>
                <div style={{ background: "#1c1c1c", borderRadius: 8, padding: 12, display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.46 2 2 0 0 1 3.59 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: I, fontSize: 16, fontWeight: 500, color: "#fff", margin: "0 0 6px", letterSpacing: "-0.04em" }}>Call Me</p>
                    <p style={{ fontFamily: I, fontSize: 13, color: "#888", margin: 0, lineHeight: 1.5 }}>Mon to Sat from 9am to 6pm. {`I don't attend calls any other time.`}</p>
                  </div>
                </div>
                <a href="tel:+917993949805"
                  style={{ display: "block", background: "#222", borderRadius: 8, padding: "12px 14px", fontFamily: I, fontSize: 15, fontWeight: 500, color: "#fff", letterSpacing: "-0.04em", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#2a2a2a")}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#222")}
                >+91 7993949805</a>
              </div>

              {/* Profile image */}
              <div style={{ borderRadius: 12, overflow: "hidden", flexShrink: 0 }}>
                <img src={profileImg} alt="Namadi Manoj Kumar" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }} />
              </div>
            </div>

            {/* ── Right: form ─────────────────────────── */}
            <div style={{ background: "#161616", borderRadius: 8, padding: 8, display: "flex", flexDirection: "column", gap: 8 }}>
              {/* Heading card */}
              <div style={{ background: "#1c1c1c", borderRadius: 12, padding: "20px 20px" }}>
                <h2 style={{ fontFamily: I, fontSize: "clamp(22px,3vw,32px)", fontWeight: 600, color: "#fff", letterSpacing: "-0.04em", margin: "0 0 10px", lineHeight: 1.25 }}>
                  Got a project worth<br />talking about? {`Let's talk.`}
                </h2>
                <p style={{ fontFamily: I, fontSize: 14, color: "#888", margin: 0, lineHeight: 1.6 }}>
                  Tell me a little about yourself and what you have in mind.<br />Every great product starts with a simple conversation.
                </p>
              </div>

              {/* Form card */}
              <div style={{ background: "#1c1c1c", borderRadius: 12, padding: 20, flex: 1 }}>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 200, gap: 16 }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 48, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p style={{ fontFamily: I, fontSize: 16, fontWeight: 500, color: "#fff", margin: 0 }}>Message sent!</p>
                    <p style={{ fontFamily: I, fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0 }}>{"I'll get back to you soon."}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="cf-row">
                      <input className="contact-input" type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} required />
                      <input className="contact-input" type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} required />
                    </div>
                    <input className="contact-input" type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData(d => ({ ...d, phone: e.target.value }))} />
                    <select className={`contact-select${formData.service ? " has-value" : ""}`} value={formData.service} onChange={e => setFormData(d => ({ ...d, service: e.target.value }))} required>
                      <option value="" disabled>Select a Service</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="frontend">Frontend Development</option>
                      <option value="design-system">Design Systems</option>
                      <option value="dashboard">Dashboard & SaaS</option>
                      <option value="custom">Custom Project</option>
                    </select>
                    <textarea className="contact-textarea" placeholder="Tell me about your project..." value={formData.message} onChange={e => setFormData(d => ({ ...d, message: e.target.value }))} required />
                    <button type="submit"
                      className="contact-submit"
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#fff", borderRadius: 8, padding: "14px 24px", fontFamily: I, fontSize: 15, fontWeight: 700, color: "#0a0a0a", cursor: "pointer", transition: "opacity 0.2s", marginTop: 4 }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >Send Message</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Footer ─────────────────────────────────────── */}
      <ContactFooter />
    </div>
  );
}
