import { queryResolvers } from './queries';
import { mutationsResolver } from './mutations';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: queryResolvers,
  Mutation: mutationsResolver,
};
