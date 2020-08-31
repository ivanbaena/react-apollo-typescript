import { usersQuery } from './users';
import { postsQuery } from './posts';

export const queryResolvers = {
  ...postsQuery,
  ...usersQuery,
};
