import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getSpecificationData } from "../../../server/api";
import ProductsList from "../../../components/productList";
import ProductInfo from "../../../components/productInfo";

const fetchData = (productName, productId, username) =>
  getSpecificationData(productName, productId, username).then((data) => {
    console.log(data);
    return data;
  });

function ProductDetails(props) {
  const router = useRouter();

  if (!router.isReady) return <p>router is not ready</p>;

  const { isLoading, isError, data, error } = useQuery("fetchdata", () =>
    fetchData(router.query.productName, router.query.id, router.query.username)
  );
  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div>
      {data.item.id}
      <ProductInfo product={data.item} />
      <hr />
      <ProductsList products={data.usersRecommendedItems} />
    </div>
  );
}

export default ProductDetails;
