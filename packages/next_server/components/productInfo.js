function ProductInfo({ product }) {
  let shipweight = "";
  if (product.weight) shipweight = product.weight;
  else if (product.packagedWeight) shipweight = product.packagedWeight;

  return (
    <div>
      <h3>This is details</h3>
      <h3>{product.name}</h3>
      <img
        src={`/images/${product.img}`}
        alt={product.name}
        width="400"
        height="500"
      />
      <hr />
      <h4>Specifications</h4>
      <div>
        Weight:{" "}
        <span>
          <strong>{product.weight}</strong>
        </span>
      </div>
      <div>
        Department:{" "}
        <span>
          <strong>{product.department}</strong>
        </span>
      </div>
      <div>
        Category:{" "}
        <span>
          <strong>{product.category}</strong>
        </span>
      </div>
      <div>
        ShipWeight:{" "}
        <span>
          <strong>{shipweight}</strong>
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;
