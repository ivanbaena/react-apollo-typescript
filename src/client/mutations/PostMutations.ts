import { gql } from '@apollo/client';

export const ADD_POST = gql`
  mutation AddPost($post: String!, $userId: String!) {
    addPost(post: $post, userId: $userId) {
      post
      _id
    }
  }
`;
