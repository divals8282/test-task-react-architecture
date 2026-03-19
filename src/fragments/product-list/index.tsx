import { Card } from "./card";
import type { ComponentT } from "./types";

import "./styles.scss";

export const ProductList: ComponentT = ({ data }) => {
  return (
    <section className="product-list-fragment">
      {data.map((product) => (
        <Card data={product} key={product.id} />
      ))}
    </section>
  );
};
