import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const baseUrl = "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache(),
});

const POSTS_AND_COMMENTS_QUERIES = gql`
  query GetuserItems($id: ID!, $username: String!) {
    item(id: $id) {
      id
      name
      img
      department
      category
      weight
      packagedWeight
      price
    }
    usersRecommendedItems(username: $username) {
      id
      name
      img
      price
    }
  }
`;

export const getSpecificationData = (productName, productId, username) => {
  console.log("1111: ", productName, productId, username);
  console.log("2222: ", productName, productId, username);

  return client
    .query({
      query: POSTS_AND_COMMENTS_QUERIES,
      variables: { id: productId, username: username },
    })
    .then(({ data }) => data);
};
