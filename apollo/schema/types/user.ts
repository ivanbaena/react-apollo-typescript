import { gql } from 'apollo-server-express';

export const user = gql`
  type User {
    _id: ID
    username: String
    password: String
    post: [Post]
    auth: Boolean
  }

  extend type Query {
    users: [User]
    getUser(id: ID): User
    isAuth(id: ID): Boolean
  }

  extend type Mutation {
    signup(username: String!, password: String!): User
    deleteUser(_id: ID!): User
    updateUser(_id: ID!, username: String!): User
  }
`;
