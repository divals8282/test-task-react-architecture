import { create } from "zustand";
import type { StoreI } from "./types";

export const useTheme = create<StoreI>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
