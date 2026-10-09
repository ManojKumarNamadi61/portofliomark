import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "../ThemeContext";
import hspImg from "@/imports/hsp.jpg";
import medibankImg from "@/imports/Medibank1.png";
import mentorloopImg from "@/imports/Mentorlooop.png";
import driverImg from "@/imports/Driver.png";
import mediniImg from "@/imports/medini.jpeg";
import hrImg from "@/imports/hr2.png";
import driver33Img from "@/imports/image-2.png";
import kuber33Img from "@/imports/image-3.png";
import prayerImg from "@/imports/image-4.png";
import greatImg from "@/imports/great.jpeg";
import groovynImg from "@/imports/Groovyn-1.jpeg";
import pauzImg from "@/imports/Pauz-web.png";
import mobileCollectionImg from "@/imports/1.png";
import landingCollectionImg from "@/imports/1.jpeg";
import animationImg from "@/imports/Music_Design.png";
import dashboardCollectionImg from "@/imports/dasboard-1.jpg";
import loginImg from "@/imports/Mockuuups_Free_iPad_Pro_mockup_on_textured_fabric_and_wooden_surface.png";

const TABS = ["All","Design + Code","Pure Design","Concept & UI","Mobile","Dashboards"];

type Project = {
  id:number; name:string; desc:string; tags:string[]; tools:string;
  badge:string; accentColor:string; gradient:{dark:string;light:string}; initial:string;
  categories:string[]; featured:boolean; link:string; image?:string;
};

const P:Project[] = [
  { id:1,  name:"Glenns Medical – Hospital Management System", desc:"Role-based HMS with Receptionist and Doctor portals covering patient registration, appointments, billing, bed management, discharge, and analytics.", tags:["Healthcare","Dashboard","0→1"], tools:"Figma · React · Next.js", badge:"Live", accentColor:"#22c55e", gradient:{dark:"linear-gradient(135deg,#061a0f,#092215)",light:"linear-gradient(135deg,#e8f9f0,#d4f5e3)"}, initial:"HMS", categories:["Design + Code","Dashboards"], featured:true, link:"https://glennsmedical.figma.site/", image:hspImg },
  { id:2,  name:"Medini – Farmstay Booking Platform", desc:"Live farmstay website for Medini near Kaziranga National Park — rooms, curated experiences, farm-to-fork dining, and enquiry flow rooted in Assam's craft heritage.", tags:["Hospitality","Booking","Travel"], tools:"Figma · Wix · Framer AI", badge:"Live", accentColor:"#c8912a", gradient:{dark:"linear-gradient(135deg,#1a1000,#241800)",light:"linear-gradient(135deg,#fef8e6,#fdecc8)"}, initial:"MDN", categories:["Design + Code"], featured:false, link:"https://www.medinikaziranga.com/", image:mediniImg },
  { id:3,  name:"33 Kuber – Landing Page", desc:"Corporate landing page for 33 Kuber Advisory India LLP — clean, professional, and conversion-focused.", tags:["Corporate","Landing Page"], tools:"Figma · Web Technologies", badge:"Live", accentColor:"#c8912a", gradient:{dark:"linear-gradient(135deg,#1a1000,#221600)",light:"linear-gradient(135deg,#fef8e6,#fdeec8)"}, initial:"33K", categories:["Design + Code"], featured:false, link:"https://33kuber.com/", image:kuber33Img },
  { id:4,  name:"33 Driver – Platform", desc:"Driver services platform designed and developed for 33 Kuber's driver management operations.", tags:["Platform","SaaS"], tools:"Figma · Web Technologies", badge:"Live", accentColor:"#D4641C", gradient:{dark:"linear-gradient(135deg,#1a0a04,#241008)",light:"linear-gradient(135deg,#fef0e7,#fde0cc)"}, initial:"33D", categories:["Design + Code"], featured:false, link:"https://33driver.com/", image:driver33Img },
  { id:5,  name:"HR Management System", desc:"Fully live HR dashboard covering employee management, attendance, leave tracking, payroll, and analytics reports.", tags:["Dashboard","SaaS","HR"], tools:"React · Next.js", badge:"Live", accentColor:"#a07858", gradient:{dark:"linear-gradient(135deg,#160e08,#1e1208)",light:"linear-gradient(135deg,#f5ede6,#edddd0)"}, initial:"HRM", categories:["Design + Code","Dashboards"], featured:false, link:"https://v0-full-featured-hr-dashboard.vercel.app/", image:hrImg },
  { id:6,  name:"PrayerConnect – Faith Platform", desc:"A community faith platform for prayer requests, worship, and spiritual connection — designed and developed end to end.", tags:["Community","Platform","0→1"], tools:"Figma · Lovable · Web Technologies", badge:"Live", accentColor:"#E8821A", gradient:{dark:"linear-gradient(135deg,#1e0e04,#2a1406)",light:"linear-gradient(135deg,#fff3e6,#ffe4c4)"}, initial:"PCN", categories:["Design + Code"], featured:false, link:"https://faithprayer.lovable.app/", image:prayerImg },
  { id:7,  name:"Medibank – Mobile App & Landing Page", desc:"Full healthcare mobile app across 7 modules — appointments, doctor consultation, health tracking, pharmacy, patient records, insurance, and onboarding.", tags:["Healthcare","Mobile","Landing Page"], tools:"Figma", badge:"Design", accentColor:"#D4641C", gradient:{dark:"linear-gradient(135deg,#1a0a04,#241008)",light:"linear-gradient(135deg,#fef0e7,#fde0cc)"}, initial:"MED", categories:["Pure Design","Mobile"], featured:false, link:"https://www.figma.com/design/TZBmwlxI5ACTzTy3jCbieP/Medibanks-Assignment?node-id=158-108", image:medibankImg },
  { id:8,  name:"Driver on Hire – Web Application", desc:"Role-based job platform for drivers with three portals — Admin, Company, and Driver.", tags:["Platform","Multi-role","Job Board"], tools:"Figma", badge:"Design", accentColor:"#E8821A", gradient:{dark:"linear-gradient(135deg,#1e1006,#281608)",light:"linear-gradient(135deg,#fff3e6,#ffe0c2)"}, initial:"DOH", categories:["Pure Design"], featured:false, link:"https://www.figma.com/design/J5v0N45XcIkxfrjYwSSb5J/Driver-on-hire?node-id=0-1", image:driverImg },
  { id:9,  name:"Mentor Loop – Landing Page", desc:"Clean, modern landing page design for a mentorship platform — focused on conversion, clarity, and visual storytelling.", tags:["Landing Page","EdTech"], tools:"Figma", badge:"Design", accentColor:"#a07858", gradient:{dark:"linear-gradient(135deg,#160e08,#1e1208)",light:"linear-gradient(135deg,#f5ede6,#eaddd0)"}, initial:"ML", categories:["Pure Design"], featured:false, link:"https://www.figma.com/design/w7MQCTryvVN9VAlHXe8zSQ/Mentor-Loop", image:mentorloopImg },
  { id:10, name:"The Great Outdoors – Landing Page", desc:"Adventure and travel booking platform landing page with bold visuals and an immersive outdoor aesthetic.", tags:["Travel","Booking","Landing Page"], tools:"Figma", badge:"Design", accentColor:"#E8821A", gradient:{dark:"linear-gradient(135deg,#1e0e04,#2a1404)",light:"linear-gradient(135deg,#fff2e4,#ffdec0)"}, initial:"OUT", categories:["Pure Design"], featured:false, link:"https://www.figma.com/design/XhuTCd4m8TMkrCsHDJZyLd/The-Great-Out-Doors?node-id=0-1", image:greatImg },
  { id:11, name:"Pauz – Mobile Application", desc:"Full mobile UI/UX for a Gen-Z social platform — wireframes, prototypes, and a complete design system.", tags:["Social","Mobile","Design System"], tools:"Figma", badge:"Mobile", accentColor:"#D4641C", gradient:{dark:"linear-gradient(135deg,#1e0c06,#280e08)",light:"linear-gradient(135deg,#fef0e7,#fdddd0)"}, initial:"PAZ", categories:["Pure Design","Mobile"], featured:false, link:"https://www.figma.com/design/Xp66scUmzSvHcIEJjOY3oC/Pauz-Mobile-Design?node-id=0-1", image:pauzImg },
  { id:12, name:"Groovyn – Shopping & Tailor App", desc:"On-demand app to shop clothing and book tailors for home visits — tailors take measurements and deliver custom outfits.", tags:["Mobile","Shopping","On-Demand"], tools:"Figma", badge:"Mobile", accentColor:"#c8912a", gradient:{dark:"linear-gradient(135deg,#1a1000,#261800)",light:"linear-gradient(135deg,#fef6e0,#fdeac0)"}, initial:"GRV", categories:["Pure Design","Mobile"], featured:false, link:"https://www.figma.com/design/tXCbwjkw07YGrxfnq76RYH/groovyn?node-id=0-1", image:groovynImg },
  { id:13, name:"Mobile Design Collection", desc:"A curated collection of mobile UI designs across multiple app categories — social, lifestyle, utility, and more.", tags:["Mobile","Collection","UI"], tools:"Figma", badge:"Design", accentColor:"#D4641C", gradient:{dark:"linear-gradient(135deg,#1e0e06,#280e06)",light:"linear-gradient(135deg,#feede4,#fdd8c0)"}, initial:"MOB", categories:["Concept & UI","Mobile"], featured:false, link:"https://www.figma.com/design/19ONEHOeDMbfVk6aolYxl5/All-My-Works?node-id=0-1", image:mobileCollectionImg },
  { id:14, name:"Landing Page Collection", desc:"Multiple landing page UI concepts across industries — clean layouts, strong hierarchy, and conversion-focused design.", tags:["Landing Page","Collection","Multi-industry"], tools:"Figma", badge:"Design", accentColor:"#E8821A", gradient:{dark:"linear-gradient(135deg,#1e1006,#2a1608)",light:"linear-gradient(135deg,#fff3e4,#ffe0c0)"}, initial:"LP", categories:["Concept & UI"], featured:false, link:"https://www.figma.com/design/19ONEHOeDMbfVk6aolYxl5/All-My-Works?node-id=0-1", image:landingCollectionImg },
  { id:15, name:"Login & Auth Screen Designs", desc:"20+ login, signup, and authentication screen UI concepts across web and mobile with varied styles and layouts.", tags:["UI","Auth","Collection"], tools:"Figma", badge:"Design", accentColor:"#a07858", gradient:{dark:"linear-gradient(135deg,#160e08,#1e1208)",light:"linear-gradient(135deg,#f5ede6,#edddd0)"}, initial:"AUTH", categories:["Concept & UI"], featured:false, link:"https://www.figma.com/design/19ONEHOeDMbfVk6aolYxl5/All-My-Works?node-id=1-7009", image:loginImg },
  { id:16, name:"Dashboard Designs", desc:"Admin, analytics, and operational dashboard UI concepts — data-heavy interfaces designed for clarity and usability.", tags:["Dashboard","Analytics","Collection"], tools:"Figma", badge:"Design", accentColor:"#22c55e", gradient:{dark:"linear-gradient(135deg,#061a0f,#092215)",light:"linear-gradient(135deg,#e8f9f0,#d0f5e2)"}, initial:"DSH", categories:["Concept & UI","Dashboards"], featured:false, link:"https://www.figma.com/design/19ONEHOeDMbfVk6aolYxl5/All-My-Works?node-id=1-7010", image:dashboardCollectionImg },
  { id:17, name:"Animation & Other Projects", desc:"Motion design concepts, animated UI elements, and experimental visual projects showcasing creative exploration.", tags:["Animation","Motion","Experimental"], tools:"Figma", badge:"Design", accentColor:"#c8912a", gradient:{dark:"linear-gradient(135deg,#1a1000,#241800)",light:"linear-gradient(135deg,#fef8e6,#fdecc8)"}, initial:"ANM", categories:["Concept & UI"], featured:false, link:"https://www.figma.com/design/19ONEHOeDMbfVk6aolYxl5/All-My-Works?node-id=1-5879", image:animationImg },
];

const BADGE:Record<string,{color:string;bg:string}> = {
  Live:   {color:"#22c55e",bg:"rgba(34,197,94,0.12)"},
  Design: {color:"#D4641C",bg:"rgba(212,100,28,0.12)"},
  Mobile: {color:"#E8821A",bg:"rgba(232,130,26,0.12)"},
};

const fadeUp = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.07 } } };

/* ── Modal ─────────────────────────────────────────────── */
function ProjectModal({p,onClose}:{p:Project;onClose:()=>void}) {
  const {theme}=useTheme();
  const grad=theme==="dark"?p.gradient.dark:p.gradient.light;
  const badge=BADGE[p.badge]??{color:"#a07858",bg:"rgba(160,120,88,0.12)"};
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}
      style={{position:"fixed",inset:0,zIndex:1000,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}
    >
      <motion.div initial={{opacity:0,scale:0.88,y:32}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.9,y:24}}
        transition={{type:"spring",damping:24,stiffness:280}}
        onClick={e=>e.stopPropagation()}
        style={{width:"100%",maxWidth:460,borderRadius:24,overflow:"hidden",border:"1px solid var(--border-hover)",background:"var(--bg-card)",boxShadow:"0 40px 100px rgba(0,0,0,0.55)"}}
      >
        <div style={{position:"relative",height:220,background:grad,overflow:"hidden"}}>
          {p.image
            ? <img src={p.image} alt={p.name} loading="lazy" decoding="async" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
            : <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}><span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:100,color:p.accentColor,opacity:0.2,letterSpacing:"-0.04em"}}>{p.initial}</span></div>
          }
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,0.7) 0%,transparent 50%)"}}/>
          <span style={{position:"absolute",top:14,right:14,fontFamily:"'JetBrains Mono',monospace",fontSize:9,fontWeight:600,letterSpacing:"0.07em",padding:"4px 12px",borderRadius:100,color:badge.color,background:badge.bg,border:`1px solid ${badge.color}40`}}>{p.badge}</span>
          <button onClick={onClose} style={{position:"absolute",top:14,left:14,width:30,height:30,borderRadius:"50%",background:"rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff"}}><X size={13}/></button>
        </div>
        <div style={{padding:"22px 24px 28px"}}>
          <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,fontWeight:700,color:"var(--fg)",marginBottom:8,lineHeight:1.3}}>{p.name}</div>
          <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:300,color:"var(--fg-muted)",lineHeight:1.7,marginBottom:18}}>{p.desc}</div>
          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:"0.1em",color:"var(--accent)",marginBottom:10,textTransform:"uppercase"}}>Stack &amp; Tags</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:22}}>
            {p.tags.map(t=><span key={t} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,padding:"3px 9px",borderRadius:5,border:"1px solid var(--border)",color:"var(--fg-muted)"}}>{t}</span>)}
            {p.tools.split(" · ").map(t=><span key={t} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,padding:"3px 9px",borderRadius:5,background:`${p.accentColor}16`,border:`1px solid ${p.accentColor}38`,color:p.accentColor}}>{t}</span>)}
          </div>
          <a href={p.link} target="_blank" rel="noopener noreferrer"
            style={{display:"inline-flex",alignItems:"center",gap:7,fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#fff",background:"var(--accent)",padding:"10px 22px",borderRadius:10,textDecoration:"none"}}
          >View Project <ExternalLink size={13}/></a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Featured Hero Card ────────────────────────────────── */
function FeaturedCard({p,onOpen}:{p:Project;onOpen:()=>void}) {
  const [hov,setHov]=useState(false);
  const badge=BADGE[p.badge]??{color:"#a07858",bg:"rgba(160,120,88,0.12)"};
  return (
    <motion.div variants={fadeUp} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} onClick={onOpen}
      style={{position:"relative",borderRadius:24,overflow:"hidden",cursor:"pointer",border:`1px solid ${hov?"var(--border-hover)":"var(--border)"}`,transition:"border-color 0.3s",height:360}}
    >
      {p.image && <img src={p.image} alt={p.name} loading="eager" decoding="async" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s ease",transform:hov?"scale(1.04)":"scale(1)"}}/>}
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.3) 50%,transparent 100%)"}}/>
      <div style={{position:"absolute",top:18,left:18,display:"flex",gap:8,alignItems:"center"}}>
        <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,padding:"3px 10px",borderRadius:100,color:badge.color,background:badge.bg,border:`1px solid ${badge.color}40`}}>{p.badge}</span>
        <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,padding:"3px 10px",borderRadius:100,color:"rgba(255,255,255,0.7)",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.15)"}}>FEATURED</span>
      </div>
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"24px 28px"}}>
        <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12}}>
          {p.tags.map(t=><span key={t} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,padding:"2px 8px",borderRadius:4,background:"rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.65)",border:"1px solid rgba(255,255,255,0.15)"}}>{t}</span>)}
        </div>
        <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:"clamp(20px,3vw,28px)",fontWeight:900,color:"#fff",lineHeight:1.15,marginBottom:8}}>{p.name}</div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
          <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"rgba(255,255,255,0.6)",fontWeight:300,flex:1,lineHeight:1.5,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{p.desc}</span>
          <div style={{width:40,height:40,borderRadius:"50%",background:hov?"var(--accent)":"rgba(255,255,255,0.12)",border:`1px solid ${hov?"var(--accent)":"rgba(255,255,255,0.2)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"background 0.2s,border-color 0.2s"}}>
            <ArrowUpRight size={16} color="#fff"/>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Standard Card ─────────────────────────────────────── */
function Card({p,onOpen}:{p:Project;onOpen:()=>void}) {
  const {theme}=useTheme();
  const [hov,setHov]=useState(false);
  const grad=theme==="dark"?p.gradient.dark:p.gradient.light;
  const badge=BADGE[p.badge]??{color:"#a07858",bg:"rgba(160,120,88,0.12)"};
  return (
    <motion.div variants={fadeUp} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} onClick={onOpen}
      style={{borderRadius:20,overflow:"hidden",border:`1px solid ${hov?"var(--border-hover)":"var(--border)"}`,background:"var(--bg-card)",transition:"border-color 0.25s,transform 0.3s",transform:hov?"translateY(-5px) translateZ(0)":"translateY(0) translateZ(0)",cursor:"pointer",height:"100%",display:"flex",flexDirection:"column",willChange:"transform"}}
    >
      <div style={{position:"relative",height:150,flexShrink:0,background:grad,overflow:"hidden"}}>
        {p.image
          ? <img src={p.image} alt={p.name} loading="lazy" decoding="async" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s ease",transform:hov?"scale(1.06)":"scale(1)"}}/>
          : <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}><span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:64,color:p.accentColor,opacity:hov?0.3:0.14,letterSpacing:"-0.04em",transition:"opacity 0.3s"}}>{p.initial}</span></div>
        }
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 60%)"}}/>
        <span style={{position:"absolute",top:10,right:10,fontFamily:"'JetBrains Mono',monospace",fontSize:9,fontWeight:500,letterSpacing:"0.06em",padding:"3px 9px",borderRadius:100,color:badge.color,background:badge.bg,border:`1px solid ${badge.color}35`}}>{p.badge}</span>
        <motion.div initial={{opacity:0}} animate={{opacity:hov?1:0}} transition={{duration:0.2}}
          style={{position:"absolute",bottom:10,right:10,width:32,height:32,borderRadius:"50%",background:"var(--accent)",display:"flex",alignItems:"center",justifyContent:"center"}}
        ><ArrowUpRight size={14} color="#fff"/></motion.div>
      </div>
      <div style={{padding:"16px 18px 18px",display:"flex",flexDirection:"column",flex:1}}>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:700,color:"var(--fg)",marginBottom:6,lineHeight:1.3}}>{p.name}</div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:300,color:"var(--fg-muted)",lineHeight:1.65,marginBottom:14,flex:1}}>{p.desc}</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
          {p.tags.map(t=><span key={t} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,padding:"2px 8px",borderRadius:4,border:"1px solid var(--border)",color:"var(--fg-dim)"}}>{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Carousel (mobile) ─────────────────────────────────── */
function Carousel({items,onOpen}:{items:Project[];onOpen:(p:Project)=>void}) {
  const ref=useRef<HTMLDivElement>(null);
  const [idx,setIdx]=useState(0);
  const scrollTo=(i:number)=>{
    const next=Math.max(0,Math.min(i,items.length-1));
    setIdx(next);
    const child=ref.current?.children[next] as HTMLElement;
    child?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});
  };
  return (
    <div>
      <div ref={ref} style={{display:"flex",gap:14,overflowX:"auto",scrollSnapType:"x mandatory",paddingBottom:4,scrollbarWidth:"none"}}>
        {items.map(p=>(
          <div key={p.id} style={{minWidth:"80vw",maxWidth:310,flexShrink:0,scrollSnapAlign:"start",display:"flex"}}>
            <Card p={p} onOpen={()=>onOpen(p)}/>
          </div>
        ))}
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginTop:16}}>
        <button onClick={()=>scrollTo(idx-1)} disabled={idx===0} style={{width:32,height:32,borderRadius:"50%",border:"1px solid var(--border)",background:"var(--bg-card)",color:idx===0?"var(--fg-dim)":"var(--fg)",display:"flex",alignItems:"center",justifyContent:"center",cursor:idx===0?"default":"pointer"}}>
          <ChevronLeft size={14}/>
        </button>
        <div style={{display:"flex",gap:6}}>
          {items.map((_,i)=><button key={i} onClick={()=>scrollTo(i)} style={{width:i===idx?20:6,height:6,borderRadius:100,background:i===idx?"var(--accent)":"var(--fg-dim)",border:"none",cursor:"pointer",transition:"all 0.25s",padding:0}}/>)}
        </div>
        <button onClick={()=>scrollTo(idx+1)} disabled={idx===items.length-1} style={{width:32,height:32,borderRadius:"50%",border:"1px solid var(--border)",background:"var(--bg-card)",color:idx===items.length-1?"var(--fg-dim)":"var(--fg)",display:"flex",alignItems:"center",justifyContent:"center",cursor:idx===items.length-1?"default":"pointer"}}>
          <ChevronRight size={14}/>
        </button>
      </div>
    </div>
  );
}

/* ── Animated Grid ─────────────────────────────────────── */
function Grid({items,onOpen,isMobile}:{items:Project[];onOpen:(p:Project)=>void;isMobile:boolean}) {
  if (isMobile) return <Carousel items={items} onOpen={onOpen}/>;
  return (
    <motion.div className="proj-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:"-60px"}}>
      {items.map(p=>(
        <div key={p.id} style={{display:"flex"}}>
          <Card p={p} onOpen={()=>onOpen(p)}/>
        </div>
      ))}
    </motion.div>
  );
}

/* ── Section Label ─────────────────────────────────────── */
function SectionLabel({text}:{text:string}) {
  return (
    <motion.div variants={fadeUp} style={{display:"flex",alignItems:"center",gap:14,margin:"40px 0 20px"}}>
      <div style={{width:28,height:2,background:"var(--accent)",borderRadius:2,flexShrink:0}}/>
      <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,letterSpacing:"0.14em",color:"var(--fg-muted)",textTransform:"uppercase",whiteSpace:"nowrap"}}>{text}</span>
      <div style={{flex:1,height:1,background:"var(--border)"}}/>
    </motion.div>
  );
}

/* ── Main Export ───────────────────────────────────────── */
export function Projects() {
  const [tab,setTab]=useState("All");
  const [selected,setSelected]=useState<Project|null>(null);
  const [isMobile,setIsMobile]=useState(window.innerWidth<640);
  useState(()=>{
    const h=()=>setIsMobile(window.innerWidth<640);
    window.addEventListener("resize",h);
    return ()=>window.removeEventListener("resize",h);
  });

  const dc   = P.filter(p=>p.categories.includes("Design + Code"));
  const pd   = P.filter(p=>p.categories.includes("Pure Design"));
  const cu   = P.filter(p=>p.categories.includes("Concept & UI"));
  const mob  = P.filter(p=>p.categories.includes("Mobile"));
  const dash = P.filter(p=>p.categories.includes("Dashboards"));
  const featured = dc.find(p=>p.featured)!;
  const dcRest   = dc.filter(p=>!p.featured);

  const filtered =
    tab==="All"           ? P :
    tab==="Design + Code" ? dc :
    tab==="Pure Design"   ? pd :
    tab==="Concept & UI"  ? cu :
    tab==="Mobile"        ? mob : dash;

  return (
    <section id="projects" style={{padding:"80px 0",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 clamp(16px,4vw,48px)"}}>

        {/* Header */}
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.65}} style={{marginBottom:40}}>
          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,letterSpacing:"0.14em",color:"var(--accent)",marginBottom:12}}>/ SELECTED WORK</div>
          <h2 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:"clamp(48px,9vw,100px)",fontWeight:900,lineHeight:0.88,letterSpacing:"-0.02em",color:"var(--fg)",margin:0}}>PROJECTS</h2>
        </motion.div>

        {/* Tabs */}
        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.1}} style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:40}}>
          {TABS.map(t=>(
            <button key={t} onClick={()=>setTab(t)}
              style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:500,padding:"7px 18px",borderRadius:100,border:`1px solid ${tab===t?"var(--accent)":"var(--border)"}`,background:tab===t?"var(--accent)":"transparent",color:tab===t?"#fff":"var(--fg-muted)",cursor:"pointer",transition:"all 0.2s"}}
            >{t}</button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.28}}>
            {tab==="All" ? (
              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}}>
                <SectionLabel text="Featured · Design + Code · Live"/>
                <FeaturedCard p={featured} onOpen={()=>setSelected(featured)}/>
                <SectionLabel text="Design + Code · Live Products"/>
                <Grid items={dcRest} onOpen={setSelected} isMobile={isMobile}/>
                <SectionLabel text="Pure Design · Figma Projects"/>
                <Grid items={pd} onOpen={setSelected} isMobile={isMobile}/>
                <SectionLabel text="Concept & UI · Collections"/>
                <Grid items={cu} onOpen={setSelected} isMobile={isMobile}/>
              </motion.div>
            ) : tab==="Design + Code" ? (
              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}}>
                <SectionLabel text="Featured"/>
                <FeaturedCard p={featured} onOpen={()=>setSelected(featured)}/>
                <SectionLabel text="Live Products"/>
                <Grid items={dcRest} onOpen={setSelected} isMobile={isMobile}/>
              </motion.div>
            ) : (
              <Grid items={filtered} onOpen={setSelected} isMobile={isMobile}/>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal p={selected} onClose={()=>setSelected(null)}/>}
      </AnimatePresence>

      <style>{`
        .proj-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;contain:layout style}
        @media(min-width:900px){.proj-grid{grid-template-columns:repeat(3,1fr)}}
      `}</style>
    </section>
  );
}
