export const usersQuery = {
  users: (_: any, {}: any, { dataSources }: any) => dataSources.users.users(),
  getUser: (_: any, { id }: any, { dataSources }: any) =>
    dataSources.users.getUser(id),
};
