import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let raf: number;
    function animate(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);

    // Patch anchor scroll so navbar smooth-scroll still works
    const origScrollIntoView = HTMLElement.prototype.scrollIntoView;
    HTMLElement.prototype.scrollIntoView = function(opts?: boolean | ScrollIntoViewOptions) {
      if (opts && typeof opts === "object" && opts.behavior === "smooth") {
        const top = this.getBoundingClientRect().top + window.scrollY - 60;
        lenis.scrollTo(top, { duration: 1.0 });
      } else {
        origScrollIntoView.call(this, opts);
      }
    };

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      HTMLElement.prototype.scrollIntoView = origScrollIntoView;
    };
  }, []);

  return lenisRef;
}
