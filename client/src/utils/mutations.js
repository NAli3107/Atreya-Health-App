import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        password
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($post: postInput) {
    createPost(post: $post) {
      posts {
        title: String!
        message: String!
        creator: String!
        tags: [String]
        selectedFile: String!
      }
    }
  }
`;

export const EDIT_POST = gql`
  mutation editPost($post: postInput) {
    editProject(post: $post) {
      _id
      posts {
        title: String!
        message: String!
        creator: String!
        tags: [String]
        selectedFile: String!
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
      username
      email
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      _id
      username
      email
    }
  }
`;