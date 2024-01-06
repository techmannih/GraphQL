const { User } = require('../models/user');
const { UserAuth } = require('../models/user'); 
const bcrypt = require('bcryptjs');

const resolvers = {
  Query: {
    hello: (_, { name }) => {
      try {
        if (name) {
          return `Hello, ${name}!`;
        } else {
          return 'Hello, GraphQL!';
        }
      } catch (error) {
        // Handle or log the error appropriately
        console.error('Error in hello query:', error);
        throw new Error('An internal server error occurred.');
      }
    },
    User: async () => {
      try {
        return await User.find();
      } catch (error) {
        // Handle or log the error appropriately
        console.error('Error in User query:', error);
        throw new Error('An internal server error occurred.');
      }
    },
    user: async (_, { id }) => {
      try {
        return await User.findById(id);
      } catch (error) {
        // Handle or log the error appropriately
        console.error('Error in user query:', error);
        throw new Error('An internal server error occurred.');
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const newUser = await User.create(input);
        return newUser;
      } catch (error) {
        // Handle or log the error appropriately
        console.error('Error in createUser mutation:', error);
        throw new Error('An internal server error occurred.');
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser;
      } catch (error) {
        // Handle or log the error appropriately
        console.error('Error in deleteUser mutation:', error);
        throw new Error('An internal server error occurred.');
      }
    },
    userRegister: async (_, { input }) => {
      try {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        const newUserAuth = await UserAuth.create({
          ...input,
          password: hashedPassword,
        });
        return newUserAuth;
      } catch (error) {
        // Handle or log the error appropriately
        console.error('Error in userRegister mutation:', error);
        throw new Error('An internal server error occurred.');
      }
    },
    userLogin: async (_, { input }) => {
      try {
        const { email, password } = input;

        // Find the user by email
        const user = await UserAuth.findOne({ email });

        // If user doesn't exist or password doesn't match, throw an error
        if (!user || !(await bcrypt.compare(password, user.password))) {
          throw new Error('Invalid email or password');
        }

        // Return the authenticated user
        return user;
      } catch (error) {
        // Handle or log the error appropriately
        console.error('Error in userLogin mutation:', error);
        throw new Error('An internal server error occurred.');
      }
    },
  },
  User: {
    friends: async (parent) => {
      try {
        await parent.populate('friends').execPopulate();
        return parent.friends;
      } catch (error) {
        // Handle or log the error appropriately
        console.error('Error in friends resolver:', error);
        throw new Error('An internal server error occurred.');
      }
    },
  },
};

module.exports = resolvers;
