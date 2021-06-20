import React, { useState, useEffect } from "react";

function ProductInfo(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.product);
  });

  return (
    <div>
      <h3>This is details</h3>
      <h3>{product.name}</h3>
      <img
        src={`/images/${product.img}`}
        alt={product.name}
        width="500"
        height="600"
      />
      <hr />
      <h4>Specifications</h4>
      <div>
        Weight: <span>{product.weight}</span>
      </div>
      <div>
        Department: <span>{product.department}</span>
      </div>
      <div>
        Category: <span>{product.category}</span>
      </div>
    </div>
  );
}

export default ProductInfo;
