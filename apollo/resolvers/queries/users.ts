const users = [
  {
    name: 'Harry Potter',
    id: 1,
  },
  {
    name: 'Ron Granger',
    id: 2,
  },
];

export const usersQuery = {
  users: () => users,
  fetchUser: (_: any, { id }: any, { users: [] }) =>
    users.find((user) => user.id === id),
};
