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
  email: String!
  password: String!
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

type Auth {
  _id: ID!
  user: User
}

type Query {
  me: User
  posts: [Post]
  post: (_id: ID!)
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password:String!): Auth
  addPost(title: String, message: String, creator: String, tags: [String], selectedFile: String): User
  editPost(title: String, message: String, creator: String, tags: [String], selectedFile: String): User
  removePost(postId: ID!): User
  likePost(postId: ID!): User
}


`;

module.exports = typeDefs;


