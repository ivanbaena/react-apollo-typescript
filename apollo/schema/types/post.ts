import { gql } from 'apollo-server-express';

export const post = gql`
  scalar Date

  type Post {
    _id: ID
    post: String
    date: Date
    userId: Int
  }

  extend type Query {
    posts: [Post]
    fetchUserPosts(id: Int!): [Post]
  }

  extend type Mutation {
    addPost(post: String!, userId: Int!): Post
    deletePost(_id: ID): Post
    updatePost(_id: ID, post: String): Post
  }
`;
