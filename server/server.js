// src/index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { connectToDatabase } = require('./config/conn');
const dotenv = require('dotenv');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolver');

dotenv.config();

async function startServer() {
  await connectToDatabase();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: ({ req }) => ({ user: req.user }),
  });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
