import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const SKILLS = [
  {name:"UI/UX Design",         level:90},
  {name:"Figma · Framer AI",    level:90},
  {name:"Frontend Development", level:80},
  {name:"Design Systems",       level:85},
  {name:"React · Next.js",      level:75},
  {name:"Prototyping",          level:88},
];
const TOOLS = ["Figma","Framer AI","React","Next.js","Tailwind CSS","TypeScript","Wix","Adobe XD","Design Systems","Prototyping","Accessibility","User Research"];

function SkillBar({name,level,delay}:{name:string;level:number;delay:number}) {
  const [go,setGo]=useState(false);
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting)setGo(true)},{threshold:0.3});
    if(ref.current)ob.observe(ref.current);
    return()=>ob.disconnect();
  },[]);
  return (
    <div ref={ref} style={{marginBottom:20}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
        <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"var(--fg-muted)"}}>{name}</span>
        <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"var(--accent)"}}>{level}%</span>
      </div>
      <div style={{height:3,background:"var(--border)",borderRadius:3,overflow:"hidden"}}>
        <motion.div initial={{width:0}} animate={{width:go?`${level}%`:0}} transition={{delay,duration:1.2}}
          style={{height:"100%",borderRadius:3,background:"linear-gradient(90deg,var(--accent),var(--accent-2))"}}
        />
      </div>
    </div>
  );
}

const fadeUp   = {hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:0.65}}};
const slideL   = {hidden:{opacity:0,x:-32},show:{opacity:1,x:0,transition:{duration:0.7}}};
const slideR   = {hidden:{opacity:0,x:32}, show:{opacity:1,x:0,transition:{duration:0.7,delay:0.1}}};
const stagger  = {show:{transition:{staggerChildren:0.08}}};

export function About() {
  return (
    <section id="about" style={{padding:"80px 0",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 clamp(16px,4vw,48px)"}}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} style={{marginBottom:52}}>
          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,letterSpacing:"0.14em",color:"var(--accent)",marginBottom:12}}>/ ABOUT ME</div>
          <h2 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:"clamp(44px,8vw,96px)",fontWeight:900,lineHeight:0.88,letterSpacing:"-0.02em",color:"var(--fg)",margin:0}}>
            THE PERSON<br/><span style={{color:"var(--accent)"}}>BEHIND</span> THE WORK
          </h2>
        </motion.div>

        <div className="about-layout">
          <motion.div variants={slideL} initial="hidden" whileInView="show" viewport={{once:true}}>
            <div style={{display:"flex",alignItems:"center",gap:16,padding:20,borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",marginBottom:28}}>
              <div style={{width:56,height:56,borderRadius:14,background:"linear-gradient(135deg,var(--accent),var(--accent-2))",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Big Shoulders Display',sans-serif",fontSize:20,fontWeight:900,color:"#fff",flexShrink:0}}>MK</div>
              <div>
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:20,fontWeight:800,color:"var(--fg)",lineHeight:1.1}}>Namadi Manoj Kumar</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"var(--fg-muted)",marginTop:3}}>UI/UX Designer &amp; Web Developer</div>
                <div style={{display:"inline-flex",alignItems:"center",gap:5,marginTop:6,padding:"3px 10px",borderRadius:100,background:"var(--accent-glow2)",border:"1px solid var(--border-hover)"}}>
                  <span style={{width:6,height:6,borderRadius:"50%",background:"var(--green)",display:"inline-block"}}/>
                  <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:"0.08em",color:"var(--green)"}}>AVAILABLE FOR WORK</span>
                </div>
              </div>
            </div>

            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:300,color:"var(--fg-muted)",lineHeight:1.85,marginBottom:16}}>
              UI/UX Designer &amp; Web Developer with <strong style={{color:"var(--fg)",fontWeight:500}}>3+ years</strong> shipping responsive, accessible digital products across healthcare, legal, hospitality, and SaaS.
            </p>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:300,color:"var(--fg-muted)",lineHeight:1.85,marginBottom:32}}>
              I design with systems thinking and build with clean code. Currently at <strong style={{color:"var(--fg)",fontWeight:500}}>33 Kuber Advisory India LLP</strong> in Bengaluru.
            </p>

            <motion.div className="facts-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}}>
              {[
                {icon:<GraduationCap size={13}/>, label:"Degree",    value:"B.Tech CSE · CGPA 7.23"},
                {icon:<GraduationCap size={13}/>, label:"Diploma",   value:"Computer Engg · 69%"},
                {icon:<MapPin size={13}/>,        label:"Location",  value:"Bengaluru, India"},
                {icon:<Briefcase size={13}/>,     label:"Experience",value:"3+ Years"},
              ].map(({icon,label,value})=>(
                <motion.div key={label} variants={fadeUp} style={{padding:"14px 16px",borderRadius:14,border:"1px solid var(--border)",background:"var(--bg-card)"}}>
                  <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:5,color:"var(--accent)"}}>{icon}<span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:"0.08em",color:"var(--fg-muted)",textTransform:"uppercase"}}>{label}</span></div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:500,color:"var(--fg)"}}>{value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={slideR} initial="hidden" whileInView="show" viewport={{once:true}}>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:600,color:"var(--fg)",marginBottom:24,letterSpacing:"0.01em"}}>Skill Proficiency</div>
            {SKILLS.map((s,i)=><SkillBar key={s.name} name={s.name} level={s.level} delay={i*0.08}/>)}
            <div style={{marginTop:36}}>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:600,color:"var(--fg)",marginBottom:14}}>Tools &amp; Technologies</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {TOOLS.map(t=>(
                  <span key={t} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,padding:"5px 12px",borderRadius:7,border:"1px solid var(--border)",color:"var(--fg-muted)",background:"var(--bg-card)",cursor:"default",transition:"border-color 0.2s,color 0.2s"}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--accent)";(e.currentTarget as HTMLElement).style.color="var(--fg)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border)";(e.currentTarget as HTMLElement).style.color="var(--fg-muted)";}}
                  >{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .about-layout{display:grid;grid-template-columns:1fr;gap:48px}
        .facts-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        @media(min-width:900px){.about-layout{grid-template-columns:1fr 1fr;gap:72px}}
      `}</style>
    </section>
  );
}
