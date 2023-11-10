import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = {
  mode: "light" | "dark";
  toggleMode: (theme: "light" | "dark") => void;
};
export const useTheme = create<Theme>()(
  persist(
    (set) => ({
      mode: "light",
      toggleMode: (theme) => set((state) => ({ mode: theme })),
    }),
    { name: "theme" }
  )
);
