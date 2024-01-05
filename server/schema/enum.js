// src/enums.js
const { gql } = require("apollo-server-express");

const enumTypeDefs = gql`
  enum City {
    NEW YORK
    LOS ANGELES
    CHICAGO
    SEATTLE
    MIAMI
  }
`;

module.exports = {
  enumTypeDefs,
};
