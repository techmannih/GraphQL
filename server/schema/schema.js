// src/schema.js
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello(name: String): String
    User: [User]
  }

  type User {
    name: String!
    age: Int!
    city: String!
    friends: [User]
  }
`;

module.exports = typeDefs;
