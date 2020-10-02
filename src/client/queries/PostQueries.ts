import { gql } from '@apollo/client';

export const USER_POSTS = gql`
  query UserPosts($userId: String!) {
    userPosts(userId: $userId) {
      post
      userId
      username
      _id
      date
    }
  }
`;

export const ALL_POSTS = gql`
  query {
    posts {
      post
      userId
      username
      _id
      date
    }
  }
`;
