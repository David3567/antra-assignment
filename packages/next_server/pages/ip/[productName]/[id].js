import React, { useEffect, userState } from "react";
import { useRouter } from "next/router";
import ProductsList from "../../components/productList";
import ProductInfo from "../../components/productInof";
import { getSpecificationData } from "../../../server/api";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  ReactQueryDevtools,
} from "react-query";

const queryClient = new QueryClient();

function ProductDetails(props) {
  const router = useRouter();
  console.log(router.query.productName, router.query.id, router.query.username);

  // getSpecificationData(
  //   router.query.productName,
  //   router.query.id,
  //   router.query.username
  // );

  const { isLoading, isError, data, error } = useQuery("getDataFromApi", () => {
    return {
      isLoading: true,
      isError: false,
      data: "hello",
      error: "message",
    };
  });
  // const { isLoading, isError, data, error } = useQuery("getDataFromApi", () =>
  //   getSpecificationData("james", "0007", "apple_tv")
  // );

  console.log(isLoading, isError, data, error);

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
