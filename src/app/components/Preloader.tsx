import { useEffect, useState } from "react";

const NAME = "NAMADIMANOJKUMAR";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 2200);
    const t2 = setTimeout(onDone, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#000",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24,
      opacity: phase === "out" ? 0 : 1,
      transition: "opacity 0.6s ease",
      pointerEvents: phase === "out" ? "none" : "all",
    }}>
      {/* Letter-by-letter reveal */}
      <div style={{ display: "flex", alignItems: "center", overflow: "hidden" }}>
        {NAME.split("").map((char, i) => (
          <span key={i} style={{
            fontFamily: "Urbanist,sans-serif",
            fontWeight: 800,
            fontSize: "clamp(20px,4.5vw,56px)",
            color: "#fff",
            letterSpacing: "0.06em",
            display: "inline-block",
            animation: "nmk-letter 0.45s cubic-bezier(0.22,1,0.36,1) both",
            animationDelay: `${i * 55}ms`,
          }}>{char}</span>
        ))}
      </div>

      {/* Netflix-style red progress bar */}
      <div style={{ width: "clamp(200px,36vw,480px)", height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(90deg,#b20710,#E50914,#f40612)",
          borderRadius: 2,
          animation: "nmk-bar 1.8s cubic-bezier(0.4,0,0.2,1) forwards",
        }} />
      </div>

      <style>{`
        @keyframes nmk-letter {
          from { opacity: 0; transform: translateY(22px) scaleY(0.7); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0) scaleY(1); filter: blur(0); }
        }
        @keyframes nmk-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
