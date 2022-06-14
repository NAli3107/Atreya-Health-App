const express = require("express");
const db = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const path = require("path");
const { typeDefs, resolvers } = require('./schemas');
const {authMiddleware} = require('./schemas/utils/auth');
// import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;
 const server = new ApolloServer({
   typeDefs,
   resolvers,
   // introspection: true,
   playground: true,
   context: authMiddleware,
   plugins: [ApolloServerPluginLandingPageGraphQLPlayground],

   // introspection: true,
   // playground: true,
 });

// app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const startApolloServer = async (typeDefs, resolvers) => {
 
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
