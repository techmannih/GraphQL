// src/schema.js
const { gql } = require("apollo-server-express");
const { enumTypeDefs } = require("./enum");

const typeDefs = gql`
  type Query {
    hello(name: String): String
    User: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    deleteUser(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    city: City!
    friends: [User]
  }

  input CreateUserInput {
    name: String!
    age: Int!
    city: City!
  }

  ${enumTypeDefs}
`;

module.exports = typeDefs;
