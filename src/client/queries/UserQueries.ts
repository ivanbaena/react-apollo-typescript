import { gql } from '@apollo/client';

export const CURRENT_USER = gql`
  query {
    currentUser {
      username
      _id
    }
  }
`;

export const FIND_USER = gql`
  query GetUser($userId: String!) {
    getUser(userId: $userId) {
      username
    }
  }
`;
