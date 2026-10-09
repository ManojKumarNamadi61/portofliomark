import { Linkedin, Dribbble, Github, Instagram } from "lucide-react";

export function Footer() {
  const socials = [
    { icon:<Linkedin size={14}/>, href:"https://www.linkedin.com/in/manoj-kumar-namadi-ba755829a", label:"LinkedIn" },
    { icon:<Dribbble size={14}/>, href:"https://dribbble.com/NamadiManojKumar",                  label:"Dribbble" },
    { icon:<Github   size={14}/>, href:"https://github.com/ManojKumarNamadi61",                 label:"GitHub"   },
    { icon:<Instagram size={14}/>, href:"https://www.instagram.com/horcrux_designs_wave/",      label:"Instagram" },
  ];
  return (
    <footer style={{ padding:"28px 20px", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 clamp(16px,4vw,48px)", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:16 }}>
        <div style={{ fontFamily:"'Big Shoulders Display',sans-serif", fontSize:22, fontWeight:900, letterSpacing:"-0.01em", color:"var(--fg)" }}>
          Manoj<span style={{ color:"var(--accent)" }}>.</span>
        </div>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"var(--fg-dim)", letterSpacing:"0.03em" }}>
          © 2025–2026 Namadi Manoj Kumar
        </div>
        <div style={{ display:"flex", gap:8 }}>
          {socials.map(({icon,href,label})=>(
            <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
              style={{ width:34, height:34, borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid var(--border)", color:"var(--fg-muted)", transition:"border-color 0.2s, color 0.2s" }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.borderColor="var(--accent)"; (e.currentTarget as HTMLAnchorElement).style.color="var(--accent)"; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.borderColor="var(--border)"; (e.currentTarget as HTMLAnchorElement).style.color="var(--fg-muted)"; }}
            >{icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
