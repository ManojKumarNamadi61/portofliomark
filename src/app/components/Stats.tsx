import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const STATS = [
  { num:20, suffix:"+", label:"Projects Shipped", desc:"End-to-end" },
  { num:3,  suffix:"+", label:"Years Experience", desc:"Professional" },
  { num:7,  suffix:"",  label:"Live Products",    desc:"In production" },
  { num:5,  suffix:"",  label:"Domains Covered",  desc:"Industries" },
];

function Count({to,suffix}:{to:number;suffix:string}) {
  const [val,setVal]=useState(0);
  const ref=useRef<HTMLSpanElement>(null);
  const done=useRef(false);
  useEffect(()=>{
    const ob=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!done.current){
        done.current=true;
        let v=0; const step=Math.ceil(to/40);
        const t=setInterval(()=>{v=Math.min(v+step,to);setVal(v);if(v>=to)clearInterval(t);},28);
      }
    },{threshold:0.5});
    if(ref.current)ob.observe(ref.current);
    return()=>ob.disconnect();
  },[to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function Stats() {
  return (
    <section style={{padding:"64px 0",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 clamp(16px,4vw,48px)"}}>
        <div className="stats-grid">
          {STATS.map((s,i)=>(
            <motion.div key={s.label}
              initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{delay:i*0.1,duration:0.6}}
              style={{padding:"28px 24px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",position:"relative",overflow:"hidden"}}
            >
              <div style={{position:"absolute",top:-20,right:-10,fontFamily:"'Big Shoulders Display',sans-serif",fontSize:90,fontWeight:900,color:"var(--accent)",opacity:0.04,lineHeight:1,userSelect:"none",pointerEvents:"none"}}>
                {s.num}{s.suffix}
              </div>
              <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:"clamp(44px,7vw,68px)",fontWeight:900,color:"var(--fg)",lineHeight:1,marginBottom:4}}>
                <Count to={s.num} suffix={s.suffix}/>
              </div>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:600,color:"var(--fg)",marginBottom:2}}>{s.label}</div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,letterSpacing:"0.08em",color:"var(--fg-dim)",textTransform:"uppercase"}}>{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`.stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}@media(min-width:640px){.stats-grid{grid-template-columns:repeat(4,1fr)}}`}</style>
    </section>
  );
}
