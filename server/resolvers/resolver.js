// src/resolver.js
const { peopleData } = require("../data");

const resolvers = {
  Query: {
    hello: (_, { name }) => {
      if (name) {
        return `Hello, ${name}!`;
      } else {
        return "Hello, GraphQL!";
      }
    },
    // Resolver for the "User" query to get all people data
    User: () => {
      return peopleData;
    },
  },
};

module.exports = resolvers;
