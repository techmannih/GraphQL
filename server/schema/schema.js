// src/schema.js
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello(name: String): String
    User: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    deleteUser(id: ID!): User
    userRegister(input: RegisterInput!): UserAuth
    userLogin(input: LoginInput!): UserAuth
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    city: String!
    friends: [User]
  }

  type UserAuth {
    id: ID!
    fullname: String
    email: String
  }

  input CreateUserInput {
    name: String!
    age: Int!
    city: String!
  }

  input RegisterInput {
    fullname: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
