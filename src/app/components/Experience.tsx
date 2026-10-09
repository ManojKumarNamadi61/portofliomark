import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const EXP = [
  { role:"UI/UX Designer", company:"33 Kuber Advisory India LLP", period:"May 2025 – Present", location:"Bengaluru", current:true,
    bullets:["Responsive interfaces & scalable design systems using Figma and Framer AI","AI-assisted design workflows reducing iteration time significantly","Cross-functional collaboration with engineering and product teams","Component library development, maintenance, and documentation","User research, wireframing, and high-fidelity prototyping"] },
  { role:"Freelance Designer & Developer", company:"Independent", period:"Jan 2024 – Apr 2025", location:"Remote", current:false,
    bullets:["20+ end-to-end projects across healthcare, legal, hospitality, and social media","Full design-to-development delivery: Figma → React/Next.js → production","Built Glenns HMS, Pauz social app, Medini booking platform, and more","Mobile-first interfaces for both iOS and Android form factors"] },
  { role:"Cyber Review Analyst", company:"EPIQ Systems", period:"Jan 2023 – Dec 2023", location:"Remote", current:false,
    bullets:["Cybersecurity data review, triage, and cross-functional documentation","Structured analysis workflows and quality assurance processes"] },
];

const fadeUp  = {hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:0.65}}};
const stagger = {show:{transition:{staggerChildren:0.12}}};

export function Experience() {
  const [open,setOpen]=useState<number|null>(0);
  return (
    <section id="resume" style={{padding:"80px 0",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 clamp(16px,4vw,48px)"}}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} style={{marginBottom:52}}>
          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,letterSpacing:"0.14em",color:"var(--accent)",marginBottom:12}}>/ EXPERIENCE</div>
          <h2 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:"clamp(44px,8vw,96px)",fontWeight:900,lineHeight:0.88,letterSpacing:"-0.02em",color:"var(--fg)",margin:0}}>
            CAREER<br/><span style={{color:"var(--accent)"}}>TIMELINE</span>
          </h2>
        </motion.div>

        <div style={{maxWidth:760}}>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute",left:15,top:8,bottom:8,width:1,background:"var(--border)"}}/>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}}>
              {EXP.map((e,i)=>(
                <motion.div key={i} variants={fadeUp} style={{position:"relative",paddingLeft:48,marginBottom:14}}>
                  <div style={{position:"absolute",left:7,top:22,width:16,height:16,borderRadius:"50%",background:e.current?"var(--accent)":"var(--bg-card)",border:`2px solid ${e.current?"var(--accent)":"var(--border)"}`,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1}}>
                    {e.current&&<div style={{width:5,height:5,borderRadius:"50%",background:"#fff",opacity:0.9}}/>}
                  </div>
                  <button onClick={()=>setOpen(open===i?null:i)}
                    style={{width:"100%",textAlign:"left",padding:"20px 22px",borderRadius:18,border:`1px solid ${open===i?"var(--border-hover)":"var(--border)"}`,background:"var(--bg-card)",cursor:"pointer",transition:"border-color 0.25s,box-shadow 0.25s",display:"block",boxShadow:open===i?"0 8px 32px rgba(212,100,28,0.08)":"none"}}
                    onMouseEnter={e=>{if(open!==i)(e.currentTarget as HTMLButtonElement).style.borderColor="rgba(212,100,28,0.25)";}}
                    onMouseLeave={e=>{if(open!==i)(e.currentTarget as HTMLButtonElement).style.borderColor="var(--border)";}}
                  >
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12}}>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,fontWeight:700,color:"var(--fg)",marginBottom:3}}>{e.role}</div>
                        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"var(--accent)",marginBottom:5}}>{e.company}</div>
                        <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"var(--fg-muted)"}}>{e.period} · {e.location}</div>
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
                        {e.current&&<span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:"0.06em",padding:"3px 10px",borderRadius:100,background:"var(--accent-glow)",color:"var(--accent)",border:"1px solid var(--border-hover)"}}>CURRENT</span>}
                        <ChevronDown size={15} style={{color:"var(--fg-muted)",transform:open===i?"rotate(180deg)":"none",transition:"transform 0.3s"}}/>
                      </div>
                    </div>
                    <AnimatePresence>
                      {open===i&&(
                        <motion.ul initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.3}}
                          style={{overflow:"hidden",margin:0,padding:0,listStyle:"none",marginTop:18}}
                        >
                          {e.bullets.map((b,j)=>(
                            <motion.li key={j} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:j*0.06}} style={{display:"flex",gap:10,fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:300,color:"var(--fg-muted)",lineHeight:1.7,marginBottom:8}}>
                              <span style={{color:"var(--accent)",flexShrink:0,marginTop:2}}>—</span>{b}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
