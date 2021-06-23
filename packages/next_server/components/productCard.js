import style from "./productCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={style.products_card}>
      <img
        src={`/images/${product.img}`}
        alt={product.name}
        className={style.img}
      />
      <p>{product.name}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;
