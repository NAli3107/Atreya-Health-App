// const { gql } = require("apollo-server-express");

// const typeDefs = gql`
// type Query {
//     dummy: String
//   }
// `;

// module.exports = typeDefs;


const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
}
type Auth {
  _id: ID!
  user: User
}
type Query {
  me: User
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password:String!): Auth
}
`;

module.exports = typeDefs;


