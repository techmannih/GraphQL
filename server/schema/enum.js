// src/enums.js
const { gql } = require("apollo-server-express");

const enumTypeDefs = gql`
  enum City {
    NEWYORK
    LOSANGELES
    CHICAGO
    SEATTLE
    MIAMI
  }
`;

module.exports = {
  enumTypeDefs,
};
