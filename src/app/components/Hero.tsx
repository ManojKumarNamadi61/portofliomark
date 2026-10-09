import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Linkedin, Dribbble, Github, Instagram, ArrowDown } from "lucide-react";
import resumePdf from "@/imports/NamadiManojKumar_Resume_2026.pdf";

const roles = ["Product Designer","UI/UX Specialist","Web Developer","Framer Expert"];

function useTypewriter(words: string[]) {
  const [idx, setIdx]   = useState(0);
  const [text, setText] = useState("");
  const [del, setDel]   = useState(false);
  useEffect(() => {
    const w = words[idx];
    if (!del && text.length < w.length)  { const t = setTimeout(()=>setText(w.slice(0,text.length+1)), 70); return ()=>clearTimeout(t); }
    if (!del && text.length === w.length) { const t = setTimeout(()=>setDel(true), 2000); return ()=>clearTimeout(t); }
    if (del  && text.length > 0)          { const t = setTimeout(()=>setText(text.slice(0,-1)), 40); return ()=>clearTimeout(t); }
    if (del  && text.length === 0)        { setDel(false); setIdx((idx+1)%words.length); }
  }, [text, del, idx, words]);
  return text;
}

export function Hero() {
  const role = useTypewriter(roles);

  return (
    <section id="hero" style={{ position:"relative", minHeight:"100svh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"80px clamp(16px,4vw,48px) 60px", overflow:"hidden" }}>

      {/* Subtle static glow — no animation, GPU-composited */}
      <div style={{ position:"absolute", top:"20%", left:"50%", transform:"translate(-50%,-50%) translateZ(0)", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,var(--accent-glow) 0%,transparent 70%)", pointerEvents:"none", willChange:"auto" }} />

      <div style={{ position:"relative", zIndex:1, maxWidth:860, width:"100%", textAlign:"center" }}>

        {/* Available badge */}
        <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1, duration:0.5 }}
          style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"7px 16px", borderRadius:100, border:"1px solid var(--border-hover)", background:"var(--accent-glow2)", marginBottom:32 }}
        >
          <span style={{ width:7, height:7, borderRadius:"50%", background:"var(--green)", display:"inline-block", animation:"glow-dot 2s ease-in-out infinite" }} />
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:"0.1em", color:"var(--fg-muted)" }}>AVAILABLE FOR WORK</span>
        </motion.div>

        {/* Name */}
        <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.7 }}
          style={{ fontFamily:"'Big Shoulders Display',sans-serif", fontWeight:900, letterSpacing:"-0.02em", lineHeight:0.88, marginBottom:28, fontSize:"clamp(52px,11vw,140px)" }}
        >
          <span style={{ color:"var(--fg)" }}>NAMADI</span><br />
          <span style={{ color:"var(--accent)" }}>MANOJ</span><br />
          <span style={{ color:"var(--fg)" }}>KUMAR</span>
        </motion.div>

        {/* Typewriter */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}
          style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"clamp(15px,2.5vw,20px)", fontWeight:300, color:"var(--fg-muted)", minHeight:30, marginBottom:40 }}
        >
          {role}
          <span style={{ display:"inline-block", width:2, height:"1em", background:"var(--accent)", verticalAlign:"text-bottom", marginLeft:2, animation:"caret 1s step-end infinite" }} />
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.8 }}
          style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", marginBottom:36 }}
        >
          <button onClick={()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}
            style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:500, padding:"12px 28px", borderRadius:10, background:"var(--accent)", color:"#fff", transition:"opacity 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.opacity="0.82")}
            onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
          >View Work</button>
          <a href={resumePdf} download="NamadiManojKumar_Resume_2026.pdf"
            style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:400, padding:"12px 28px", borderRadius:10, border:"1px solid var(--border)", color:"var(--fg-muted)", transition:"border-color 0.2s, color 0.2s" }}
            onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.borderColor="var(--accent)"; (e.currentTarget as HTMLAnchorElement).style.color="var(--fg)"; }}
            onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.borderColor="var(--border)"; (e.currentTarget as HTMLAnchorElement).style.color="var(--fg-muted)"; }}
          >Download CV</a>
        </motion.div>

        {/* Social */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.95 }}
          style={{ display:"flex", gap:10, justifyContent:"center" }}
        >
          {[
            { icon:<Linkedin size={15}/>, href:"https://www.linkedin.com/in/manoj-kumar-namadi-ba755829a", label:"LinkedIn" },
            { icon:<Dribbble size={15}/>, href:"https://dribbble.com/NamadiManojKumar", label:"Dribbble" },
            { icon:<Github   size={15}/>, href:"https://github.com/ManojKumarNamadi61", label:"GitHub" },
            { icon:<Instagram size={15}/>, href:"https://www.instagram.com/horcrux_designs_wave/", label:"Instagram" },
          ].map(({icon,href,label})=>(
            <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
              style={{ width:38, height:38, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid var(--border)", background:"var(--bg-card)", color:"var(--fg-muted)", transition:"border-color 0.2s, color 0.2s" }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.borderColor="var(--accent)"; (e.currentTarget as HTMLAnchorElement).style.color="var(--accent)"; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.borderColor="var(--border)"; (e.currentTarget as HTMLAnchorElement).style.color="var(--fg-muted)"; }}
            >{icon}</a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue — CSS animation instead of JS-driven motion */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
        style={{ position:"absolute", bottom:28, display:"flex", flexDirection:"column", alignItems:"center", gap:6, color:"var(--fg-dim)" }}
      >
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:"0.15em" }}>SCROLL</span>
        <ArrowDown size={13} style={{ animation:"bounce-arrow 1.8s ease-in-out infinite" }} />
      </motion.div>

      <style>{`
        @keyframes caret       { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes glow-dot    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.8)} }
        @keyframes bounce-arrow{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
      `}</style>
    </section>
  );
}
