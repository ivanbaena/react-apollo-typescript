import { gql } from 'apollo-server-express';

export const user = gql`
  type User {
    username: String
    password: String
    id: ID
  }

  extend type Query {
    users: [User]
    fetchUser(id: Int!): User
  }

  extend type Mutation {
    addUser(id: Int!): User
  }
`;
