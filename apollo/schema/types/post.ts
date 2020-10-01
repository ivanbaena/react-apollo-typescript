import { gql } from 'apollo-server-express';

export const post = gql`
  scalar Date

  type Post {
    _id: ID
    post: String
    date: Date
    userId: String
  }

  extend type Query {
    posts: [Post]
    userPosts(userId: String!): [Post]
  }

  extend type Mutation {
    addPost(post: String!, userId: String!): Post
    deletePost(_id: String): Post
    updatePost(_id: ID, post: String): Post
  }
`;
