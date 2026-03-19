import type { ReactNode } from "react";

export type ComponentT = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >,
) => ReactNode;
