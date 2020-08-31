import { User } from '../../models';

export const usersQuery = {
  users: () => User.find({}),
  fetchUser: (_: any, { id }: any, { User: [] }) =>
    User.find((user) => user.id === id),
};
