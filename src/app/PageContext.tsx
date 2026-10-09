import { createContext, useContext } from "react";

export type Page = "home" | "works" | "about" | "contact";

export const PageCtx = createContext<{
  page: Page;
  setPage: (p: Page) => void;
}>({ page: "home", setPage: () => {} });

export const usePage = () => useContext(PageCtx);
