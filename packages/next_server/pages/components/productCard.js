import React, { useEffect, useState } from "react";

function ProductCard(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.product);
  });

  return (
    <div>
      <img
        src={`/images/${product.img}`}
        alt={product.name}
        width="50"
        height="50"
      />
      <p>{product.name}</p>
    </div>
  );
}

export default ProductCard;
