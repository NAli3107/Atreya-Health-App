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

export const CREATE_POST = gql `
mutation CreatePost($title: String!, $message: String!, $creator: String!, $selectedFile: String!) {
  createPost(title: $title, message: $message, creator: $creator, selectedFile: $selectedFile) {
    title
    message
  }
}
`
