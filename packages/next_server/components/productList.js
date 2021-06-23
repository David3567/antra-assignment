import React from "react";
import ProductCard from "./productCard";
import style from "./productList.module.css";

function ProductsList({ products }) {
  return (
    <div>
      <h2>Products You May Also Like</h2>
      <div className={style.products_list}>
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}

export default ProductsList;
