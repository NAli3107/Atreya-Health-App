const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
    dummy: String
  }
`;

module.exports = typeDefs;
