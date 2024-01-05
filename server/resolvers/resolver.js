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
    user: (_, { id }) => {
      // Find the user by id in the peopleData array
      return peopleData.find(user => user.id === id);
    },
  },
  Mutation: {
    createUser: (_, { input }) => {
      const newUser = {
        id: (peopleData.length + 1).toString(), // Assuming the ID is generated here
        ...input,
      };
      peopleData.push(newUser);
      return newUser;
    },
    deleteUser: (_, { id }) => {
      const deletedUser = peopleData.find(user => user.id === id);
      peopleData = peopleData.filter(user => user.id !== id); // This should work now
      return deletedUser;
    },
  },
};

module.exports = resolvers;
