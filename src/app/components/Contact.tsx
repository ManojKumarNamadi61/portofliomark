import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Dribbble, Instagram, MapPin } from "lucide-react";

const INFO = [
  {icon:<Mail size={15}/>,      label:"Email",     value:"namadimanojkumar@gmail.com",           href:"mailto:namadimanojkumar@gmail.com"},
  {icon:<Phone size={15}/>,     label:"Phone",     value:"+91 7993949805",                        href:"tel:+917993949805"},
  {icon:<Linkedin size={15}/>,  label:"LinkedIn",  value:"manoj-kumar-namadi-ba755829a",          href:"https://www.linkedin.com/in/manoj-kumar-namadi-ba755829a"},
  {icon:<Dribbble size={15}/>,  label:"Dribbble",  value:"NamadiManojKumar",                      href:"https://dribbble.com/NamadiManojKumar"},
  {icon:<Instagram size={15}/>, label:"Instagram", value:"horcrux_designs_wave",                  href:"https://www.instagram.com/horcrux_designs_wave/"},
  {icon:<MapPin size={15}/>,    label:"Address",   value:"Kakinada, Andhra Pradesh, India",        href:"https://maps.google.com/?q=Kakinada,Andhra+Pradesh,India"},
];

const fadeUp  = {hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:0.65}}};
const stagger = {show:{transition:{staggerChildren:0.08}}};

export function Contact() {
  return (
    <section id="contact" style={{padding:"80px 0",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 clamp(16px,4vw,48px)"}}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} style={{marginBottom:48,textAlign:"center"}}>
          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,letterSpacing:"0.14em",color:"var(--accent)",marginBottom:12}}>/ CONTACT</div>
          <h2 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:"clamp(44px,8vw,96px)",fontWeight:900,lineHeight:0.88,letterSpacing:"-0.02em",color:"var(--fg)",margin:"0 0 18px"}}>
            LET'S BUILD<br/><span style={{color:"var(--accent)"}}>SOMETHING</span>
          </h2>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,fontWeight:300,color:"var(--fg-muted)",lineHeight:1.8,margin:"0 auto",maxWidth:480}}>
            Open to freelance projects, full-time roles, and design collaborations. I respond within 24 hours.
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}}
          style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:12,maxWidth:900,margin:"0 auto"}}
        >
          {INFO.map(({icon,label,value,href})=>(
            <motion.a key={label} variants={fadeUp} href={href} target="_blank" rel="noopener noreferrer"
              style={{display:"flex",alignItems:"center",gap:14,padding:"16px 18px",borderRadius:16,border:"1px solid var(--border)",background:"var(--bg-card)",transition:"border-color 0.22s,transform 0.22s",textDecoration:"none",willChange:"transform"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.borderColor="var(--border-hover)";(e.currentTarget as HTMLAnchorElement).style.transform="translateY(-3px)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.borderColor="var(--border)";(e.currentTarget as HTMLAnchorElement).style.transform="translateY(0)";}}
            >
              <div style={{width:38,height:38,borderRadius:11,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--accent-glow)",color:"var(--accent)",flexShrink:0}}>{icon}</div>
              <div>
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:"0.1em",color:"var(--fg-muted)",marginBottom:3,textTransform:"uppercase"}}>{label}</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:500,color:"var(--fg)"}}>{value}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
