import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getSpecificationData } from "../../../server/api";
import ProductsList from "../../../components/productList";
import ProductInfo from "../../../components/productInfo";

function ProductDetails(props) {
  const router = useRouter();
  const fetchData = () =>
    getSpecificationData(
      router.query.productName,
      router.query.id,
      router.query.username
    ).then((data) => {
      console.log(data);
      return data;
    });

  const { isLoading, isError, data, error } = useQuery(
    "getDataFromApi",
    fetchData
  );

  if (isLoading) return "Loading...";
  if (isError) {
    console.log(isError);
    return "An error has occurred: " + isError.message;
  }

  const [productInfo, setProductInfo] = useState({});

  // useEffect(() => {
  //   console.log(data.item);
  //   setProductInfo(data.item);
  // });

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
