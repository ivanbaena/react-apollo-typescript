import { gql } from 'apollo-server-express';

export const user = gql`
  type User {
    _id: ID
    username: String
    password: String
    post: [Post]
  }

  extend type Query {
    users: [User]
    fetchUser(id: Int!): User
  }

  extend type Mutation {
    addUser(username: String!, password: String!): User
    deleteUser(_id: ID!): User
    updateUser(id: ID!, username: String!): User
  }
`;
