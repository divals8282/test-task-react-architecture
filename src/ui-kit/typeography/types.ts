import type { ReactNode } from "react";

export interface PropsI {
  size?: "small" | "medium" | "large";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  weight?: "light" | "bold";
  children: ReactNode;
}

export type ComponentT = (props: PropsI) => ReactNode;
