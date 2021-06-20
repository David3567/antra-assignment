import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const baseUrl = "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache(),
});

export const getAllData = () => {
  console.log("apollo api");
  client
    .query({
      query: gql`
        query GetuserItems {
          usersRecommendedItems(username: "james") {
            id
            name
            img
            department
            category
            weight
            packagedWeight
            price
          }
        }
      `,
    })
    .then((result) => console.log(result));
};
