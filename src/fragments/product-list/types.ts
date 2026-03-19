import type { ReactNode } from "react";
import type { ProductI } from "../../api/products/types";

interface PropsI {
  data: ProductI[];
}

export type ComponentT = (props: PropsI) => ReactNode;
