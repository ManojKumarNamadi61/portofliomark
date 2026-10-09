import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light";
interface ThemeCtx { theme: Theme; toggle: () => void; }

const Ctx = createContext<ThemeCtx>({ theme: "dark", toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try { return (localStorage.getItem("nmk-theme") as Theme) || "dark"; } catch { return "dark"; }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("nmk-theme", theme); } catch {}
  }, [theme]);

  const toggle = () => setTheme(t => t === "dark" ? "light" : "dark");
  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
