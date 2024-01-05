// src/schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello(name: String): String
  }
`;

module.exports = typeDefs;
