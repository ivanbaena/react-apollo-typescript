import { gql } from 'apollo-server-express';

export const user = gql`
  type User {
    name: String
    id: String
  }

  extend type Query {
    users: [User]
    fetchUser(id: String!): User
  }

  extend type Mutation {
    addUser(id: String!): User
  }
`;
