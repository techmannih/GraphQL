const {User} = require('../models/user');
const {UserAuth} = require('../models/user'); 
const bcrypt = require('bcryptjs');

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
    deleteUser: async (_, { id }) => {
      const deletedUser = await User.findByIdAndDelete(id);
      return deletedUser;
    },
    userRegister: async (_, { input }) => {
      const hashedPassword = await bcrypt.hash(input.password, 10);
      const newUserAuth = await UserAuth.create({
        ...input,
        password: hashedPassword,
      });
      return newUserAuth;
    },
    userLogin: async (_, { input }) => {
      const { email, password } = input;

      // Find the user by email
      const user = await UserAuth.findOne({ email });

      // If user doesn't exist or password doesn't match, throw an error
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid email or password');
      }

      // Return the authenticated user
      return user;
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
