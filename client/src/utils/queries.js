import { gql } from "@apollo/client";

export const GET_USER = gql`
  query login {
    user {
      _id
      email
      password
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        title: String
        message: String
        creator: String
        createdAt: String
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      title: String
      message: String
      creator: String
      createdAt: String
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      title: String
      message: String
      creator: String
      createdAt: String
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
         _id
         title: String
         message: String
         creator: String
         createdAt: String
      }
    }
  }
`;
