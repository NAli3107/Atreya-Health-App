const { gql } = require("apollo-server-express");

const typeDefs = gql`
scalar Date

  type User {
    _id: ID!
    username: String!
    email: String
    password: String
  }
  type Post {
    _id: ID!
    title: String
    message: String
    createdAt: Date
  }
  input postInput {
    _id: ID!
    title: String
    message: String
    creator: String
    createdAt: Date
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createPost(title: String!, message: String!): Post
    editPost(postId: ID, title: String, message: String, creator: String): Post
    removePost(postId: ID!): Post
  }
`;

module.exports = typeDefs;
