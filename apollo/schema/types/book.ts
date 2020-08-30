import { gql } from 'apollo-server-express';

export const book = gql`
  type Book {
    title: String
    author: String
  }

  extend type Query {
    books: [Book]
  }
`;
