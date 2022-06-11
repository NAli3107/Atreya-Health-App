const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    password: String
  }
  type Post {
    postId: ID!
    title: String
    message: String
    creator: String
    tags: [String]
    selectedFile: String
    likeCount: Int
    createdAt: String
  }
  input PostInput {
    postId: ID!
    title: String
    message: String
    creator: String
    tags: [String]
    selectedFile: String
    likeCount: Int
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    posts: [Post]
    post: ID!
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createPost(
      title: String!
      message: String!
      creator: String!
      tags: [String]
      selectedFile: String!
    ): Post
    editPost(
      title: String
      message: String
      creator: String
      tags: [String]
      selectedFile: String
    ): Post
    removePost(postId: ID!): Post
    likePost(postId: ID!): Post
  }
`;

module.exports = typeDefs;
