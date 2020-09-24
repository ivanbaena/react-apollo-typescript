import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      username
    }
  }
`;

export const LOGOUT = gql`
  mutation {
    logout
  }
`;

export const SIGN_UP = gql`
  mutation Signup($email: String!, $username: String!, $password: String!) {
    signup(email: $email, username: $username, password: $password) {
      username
    }
  }
`;
