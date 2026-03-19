import { useQuery } from "@tanstack/react-query";
import "./styles.scss";

import type { ComponentT } from "./types";
import { getProducts } from "../../api";
import { ProductList } from "../../fragments/product-list";
import { Typeography } from "../../ui-kit/typeography";
import type { ProductI } from "../../api/products/types";

export const Home: ComponentT = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getProducts(),
  });

  return (
    <section className="home-page">
      {error ? <Typeography>Something wrong with server</Typeography> : null}
      {isPending && !error ? (
        "loading..."
      ) : (
        <ProductList data={data as ProductI[]} />
      )}
    </section>
  );
};
