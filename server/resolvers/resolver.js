// resolvers.js
const User = require('../models/user');

const resolvers = {
  Query: {
    hello: (_, { name }) => {
      if (name) {
        return `Hello, ${name}!`;
      } else {
        return 'Hello, GraphQL!';
      }
    },
    User: async () => {
      return await User.find();
    },
    user: async (_, { id }) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const newUser = await User.create(input);
      return newUser;
    },
  },
  User: {
    friends: async (parent) => {
      await parent.populate('friends').execPopulate();
      return parent.friends;
    },
  },
};

module.exports = resolvers;
