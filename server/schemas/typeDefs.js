const { gql } = require("apollo-server-express");

const typeDefs = gql`
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
`;

module.exports = typeDefs;
