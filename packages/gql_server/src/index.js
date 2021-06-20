"use strict";

const express = require("express");
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");
const axios = require("axios");

// =================
// type definitions and resolvers
// =================
const typeDefs = gql`
  type Query {
    usersRecommendedItems(username: String!): [Item!]!
    item(id: ID!): Item
  }

  type Item {
    id: ID!
    name: String!
    img: String!
    department: String!
    category: String!
    weight: String
    packagedWeight: String
    price: Float!
  }
`;

const resolvers = {
  Query: {
    usersRecommendedItems: async (parent, args, context, info) => {
      // extract needed arguments
      const { username } = args;
      const baseUrl = "http://localhost:3000";

      // log point before call
      console.log(
        `\nusersRecommendedItems > before GET /users/recommendations?username=${username}\n`
      );

      // fetch the requested data from the data source
      const responseFromDataSource = await axios.get(
        `${baseUrl}/users/recommendations?username=${username}`
      );
      const listOfRecommendedItemIds = responseFromDataSource.data;

      // log point after call
      console.log(
        `\nusersRecommendedItems > after GET /users/recommendations?username=${username}, response => `,
        listOfRecommendedItemIds,
        "\n"
      );

      const collectAllPromise = [];
      for (const itemId of listOfRecommendedItemIds) {
        // log point before call
        console.log(
          `\nusersRecommendedItems > before GET /items?ids=${itemId}\n`
        );

        // fetch the requested data from the data source
        const responseFromDataSource = axios.get(
          `${baseUrl}/items?ids=${itemId}`
        );

        collectAllPromise.push(responseFromDataSource);
      }
      const listOfRecommendedItemsToReturn = (
        await axios.all(collectAllPromise)
      ).map((ele) => {
        // log point after call
        console.log(
          `\nusersRecommendedItems > after GET /items?ids=${ele.data[0].id}, response => ${ele.data[0].name}\n`
        );
        return ele.data[0];
      });
      return listOfRecommendedItemsToReturn;
    },
    item: async (parent, args, context, info) => {
      // extract needed arguments
      const { id } = args;

      // log point before call
      console.log(`\nitem > before GET /items?ids=${id}\n`);

      // fetch the requested data from the data source
      const responseFromDataSource = await axios.get(
        `${baseUrl}/items?ids=${id}`
      );

      // log point after call
      console.log(
        `\nitem > after GET /items?ids=${id}, response => `,
        responseFromDataSource.data,
        "\n"
      );

      // return the data
      return responseFromDataSource.data[0];
    },
  },
};

// =================
// configure the server
// =================
const port = 4000;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app });

// =================
// start / turn-on the server
// =================
app.listen({ port }, () => {
  console.log(
    `Graphql endpoint is at http://localhost:${port}${apolloServer.graphqlPath}`
  );
});
