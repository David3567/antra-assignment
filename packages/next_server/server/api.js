import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//     if (graphqlErrors) {
//         graphqlErrors.map(({ message, location, path }) => {
//             console.log(`Graphql error ${message}`);
//         });
//     }
// });

const baseUrl = "http://localhost:4000/graphql";

export const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache(),
});

const POSTS_AND_COMMENTS_QUERIES = gql`
  query GetuserItems($id: ID! = "0007", $username: String! = "james") {
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
    }
  }
`;

export const getSpecificationData = (username, productId, productName) => {
  return client
    .query({
      query: POSTS_AND_COMMENTS_QUERIES,
      variables: { id: productId, username: username },
    })
    .then(({ data }) => {
      console.log("get data from graphql: ", data);
      if (data.item.img.split(".")[0] === productName) return data;
      return { message: "no such product" };
    });
};
