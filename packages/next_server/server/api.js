import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const baseUrl = "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache(),
});

export const getSpecificationData = (username, productId, produectName) => {
  const fetchedPromise = client
    .query({
      query: gql`
                query GetuserItems {
                    usersRecommendedItems(username: ${username}) {
                        id
                        name
                        img
                    }
                    item(id: ${productId}) {
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
    .then((result) => result.data);

  return fetchedPromise;
};
