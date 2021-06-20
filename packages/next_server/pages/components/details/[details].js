import React, { userState } from "react";

function ProductDetails(props) {
  const product = {
    id: "0007",
    name: "Apple Tv",
    img: "apple_tv.jpg",
    department: "electronics",
    category: "tv and video",
    weight: "10lbs",
    price: 150.05,
  };

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

export default ProductDetails;
