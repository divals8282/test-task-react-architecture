export type ThemeT = "light" | "dark";

export interface StoreI {
  theme: ThemeT;
  toggleTheme: () => void;
}
