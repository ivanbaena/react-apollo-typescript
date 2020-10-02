import { gql } from '@apollo/client';

export const ADD_POST = gql`
  mutation AddPost($post: String!, $userId: String!, $username: String!) {
    addPost(post: $post, userId: $userId, username: $username) {
      post
      _id
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($_id: String!) {
    deletePost(_id: $_id) {
      _id
    }
  }
`;
