import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user{
        email
        password
  }
}
}
`;

export const CREATE_POST = gql `

`;

export const EDIT_POST = gql `

`;

export const REMOVE_POST = gql `

`;

export const LIKE_POST = gql `

`;