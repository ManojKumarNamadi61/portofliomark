import { useState, useCallback, useEffect } from "react";
import Lenis from "lenis";
import { ThemeProvider } from "./ThemeContext";
import { PageCtx, type Page } from "./PageContext";
import { Navbar } from "./components/Navbar";
import { Preloader } from "./components/Preloader";
import { Home } from "./pages/Home";
import { Works } from "./pages/Works";
import { About } from "./pages/About";
import { AnimatePresence, motion } from "motion/react";

function Inner() {
  const [ready, setReady] = useState(false);
  const [page, setPage] = useState<Page>("home");
  const handleDone = useCallback(() => setReady(true), []);

  /* ── Lenis smooth scroll ── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
    });
    let raf: number;
    const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { lenis.destroy(); cancelAnimationFrame(raf); };
  }, []);

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0 });
  };

  return (
    <PageCtx.Provider value={{ page, setPage: navigate }}>
      <div style={{ background: "var(--c-bg)", color: "var(--c-text)", minHeight: "100vh", overflowX: "hidden", transition: "background 0.3s ease, color 0.3s ease" }}>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; }
          html { scroll-behavior: auto; }
          body { margin: 0; padding: 0; overscroll-behavior: none; }
          *::-webkit-scrollbar { display: none; }
          * { scrollbar-width: none; }
          ::selection { background: rgba(255,255,255,0.15); color: #fff; }
          a { text-decoration: none; color: inherit; }
          button { background: none; border: none; cursor: pointer; padding: 0; }
        `}</style>

        <Preloader onDone={handleDone} />

        <div style={{ opacity: ready ? 1 : 0, transition: "opacity 0.6s ease", transitionDelay: "0.1s" }}>
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.div key={page}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
            >
              {page === "home"  && <Home />}
              {page === "works" && <Works />}
              {page === "about" && <About />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageCtx.Provider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Inner />
    </ThemeProvider>
  );
}
