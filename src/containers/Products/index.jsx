import React from "react";
import { products } from "../../utils/index";
import { Product } from "../../components";

export const Products = () => {
  return (
    <>
      <div className="products-list">
        {products.map((item, index) => (
          <Product data={item} key={index} />
        ))}
      </div>
    </>
  );
};
