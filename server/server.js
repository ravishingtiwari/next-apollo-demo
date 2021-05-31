const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas/schema');
const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
  const app = express();
  app.use(cors());
  app.use(helmet());
  app.disable('x-powered-by');
  app.use('/hi', (req, res, next) => { res.json({message:'Hi'}) });
  server.applyMiddleware({ app });
  const port = 3000; // process.env.PORT || 4000;
  const HOST = '0.0.0.0';
  return { app: app.listen(port, HOST), port: port };
}).then((res) => {
  console.log(`Server ready at http://localhost:${res.port}${server.graphqlPath}`);
});


