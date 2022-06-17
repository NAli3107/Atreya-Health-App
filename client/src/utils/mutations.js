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
mutation createPost($title: String!, $message: String!) {
  createPost(title: $title, message: $message) {
    title
    message
    creator
    createdAt
  }
}
`
export const EDIT_POST = gql `
mutation updatePost($title: String!, $message: String!) {
  updatePost(title: $title, message: $message) {
    title
    message
    creator
    createdAt
  }
}
`
// export const DELETE_POST = gql `
// mutation createPost($title: String!, $message: String!) {
//   createPost(title: $title, message: $message) {
//     title
//     message
//     creator
//     createdAt
//   }
// }
// `
