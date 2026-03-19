import type { ProductI } from "./types";

export const getProducts: () => Promise<ProductI[]> = () => {
  return fetch(`${import.meta.env.VITE_API_URL}/products`).then((res) =>
    res.json(),
  );
};
