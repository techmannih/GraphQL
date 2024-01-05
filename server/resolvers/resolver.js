// src/resolver.js
const resolvers = {
    Query: {
      hello: (_, { name }) => {
        if (name) {
          return `Hello, ${name}!`;
        } else {
          return 'Hello, GraphQL!';
        }
      },
    },
  };
  
  module.exports = resolvers;
  