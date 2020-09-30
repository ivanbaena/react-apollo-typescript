import { gql } from '@apollo/client';

export const USER_POSTS = gql`
  query UserPosts($userId: String!) {
    userPosts(userId: $userId) {
      post
    }
  }
`;
