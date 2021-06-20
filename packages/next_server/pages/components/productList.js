import React from "react";
import ProductCard from "./productCard";
import style from "./productList.module.css";

function ProductsList(props) {
  const productList = [
    {
      id: "0001",
      name: "Honeycrisp Apple",
      img: "honeycrisp_apple.jpg",
      department: "grocery",
      category: "fresh produce",
      weight: "1g",
      packagedWeight: null,
      price: 1.01,
    },
    {
      id: "0002",
      name: "Anjou Pear",
      img: "anjou_pear.jpg",
      department: "grocery",
      category: "fresh produce",
      weight: "2g",
      packagedWeight: null,
      price: 2.02,
    },
    {
      id: "0003",
      name: "Mens Bucket Hat",
      img: "mens_bucket_hat.jpg",
      department: "apparel",
      category: "mens",
      weight: "3lbs",
      packagedWeight: null,
      price: 50.05,
    },
    {
      id: "0004",
      name: "Samsung TV",
      img: "samsung_tv.jpg",
      department: "electronics",
      category: "tv and video",
      weight: "50lbs",
      packagedWeight: null,
      price: 100.01,
    },
    {
      id: "0005",
      name: "Puffy Chair",
      img: "puffy_chair.jpg",
      department: "home and furniture",
      category: "furniture",
      weight: null,
      packagedWeight: "20lbs",
      price: 90,
    },
    {
      id: "0006",
      name: "Sharp TV",
      img: "sharp_tv.jpg",
      department: "electronics",
      category: "tv and video",
      weight: null,
      packagedWeight: "100lbs",
      price: 80,
    },
    {
      id: "0007",
      name: "Apple Tv",
      img: "apple_tv.jpg",
      department: "electronics",
      category: "tv and video",
      weight: "10lbs",
      packagedWeight: null,
      price: 150.05,
    },
  ];

  return (
    <div>
      <h2>Products You May Also Like</h2>
      <div className={style.products_list}>
        {productList.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}

export default ProductsList;
