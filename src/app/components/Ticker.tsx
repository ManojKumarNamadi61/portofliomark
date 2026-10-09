const items = ["Figma","Framer AI","React","Next.js","Healthcare","SaaS","20+ Projects","UI/UX Design","Bengaluru","Available for Work","Design Systems","Frontend Dev"];

export function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow:"hidden", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"13px 0", contain:"layout style" }}>
      <div style={{ display:"flex", width:"max-content", animation:"ticker 26s linear infinite", willChange:"transform", transform:"translateZ(0)" }}>
        {doubled.map((item,i)=>(
          <span key={i} style={{ fontFamily:"'Big Shoulders Display',sans-serif", fontSize:13, fontWeight:700, letterSpacing:"0.05em", textTransform:"uppercase", color:"var(--fg-dim)", padding:"0 24px", whiteSpace:"nowrap" }}>
            {item} <span style={{ color:"var(--accent)", marginLeft:24 }}>·</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker{0%{transform:translateX(0) translateZ(0)}100%{transform:translateX(-50%) translateZ(0)}}`}</style>
    </div>
  );
}
