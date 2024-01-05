// src/schema.js
const { gql } = require("apollo-server-express");
const { enumTypeDefs } = require("./enum");

const typeDefs = gql`
  type Query {
    hello(name: String): String
    User: [User]
  }

  type User {
    name: String!
    age: Int!
    city: City!
    friends: [User]
  }

  enum City {
    NEWYORK
    LOSANGELES
    CHICAGO
    SEATTLE
    MIAMI
  }
`;

module.exports = typeDefs;
