import { useQuery } from "@tanstack/react-query";
import "./styles.scss";

import type { ComponentT } from "./types";
import type { ProductI } from "../../api/products/types";

import { getProducts } from "../../api";
import { ProductList } from "../../fragments/product-list";
import { Typeography } from "../../ui-kit/typeography";
import { useState } from "react";
import { Select } from "../../ui-kit/select";
import { Input } from "../../ui-kit/input";

export const Home: ComponentT = () => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const filterBySearch = (products: ProductI[]) => {
    if (search) {
      return products.filter(
        (product) =>
          product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1,
      );
    }

    return products;
  };

  const filterByCategory = (products: ProductI[]) => {
    if (categoryFilter) {
      return products.filter((product) => product.category === categoryFilter);
    }

    return products;
  };

  const getPossibleCategories = (products: ProductI[]) => {
    const filters = products.reduce((acc, curr) => {
      if (!acc.find((value) => value === curr.category)) {
        acc.push(curr.category);
      }

      return acc;
    }, [] as string[]);

    return filters.map((filter) => <option key={filter}>{filter}</option>);
  };

  return (
    <section className="home-page">
      <div className="home-page__filters">
        <div className="home-page__filters__filter">
          <div className="home-page__filters__filter--title">
            <Typeography>Search</Typeography>
          </div>
          <div className="home-page__filters__filter--action">
            <Input
              value={search}
              onChange={({ target: { value } }) => setSearch(value)}
            />
          </div>
        </div>
        <div className="home-page__filters__filter">
          <div className="home-page__filters__filter--title">
            <Typeography>Category</Typeography>
          </div>
          <div className="home-page__filters__filter--action">
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value={""}>All</option>
              {!isPending && !error
                ? getPossibleCategories(data as ProductI[])
                : null}
            </Select>
          </div>
        </div>
      </div>
      {error ? <Typeography>Something wrong with server</Typeography> : null}
      {isPending && !error ? (
        <Typeography>loading...</Typeography>
      ) : (
        <ProductList
          data={filterBySearch(filterByCategory(data as ProductI[]))}
        />
      )}
    </section>
  );
};
