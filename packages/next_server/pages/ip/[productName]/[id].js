import React, { userState } from "react";
import { useRouter } from "next/router";
import ProductsList from "../../components/productList";
import ProductInfo from "../../components/productInof";
import { getSpecificationData } from "../../../server/api";

function ProductDetails(props) {
  const router = useRouter();

  // console.log(router.query.productName, router.query.id);
  getSpecificationData("james", "0007", "apple_tv");

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
      <ProductInfo product={product} />
      <hr />
      <ProductsList />
    </div>
  );
}

export default ProductDetails;
