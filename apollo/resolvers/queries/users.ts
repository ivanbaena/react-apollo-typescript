export const usersQuery = {
  users: (_: any, {}: any, { dataSources }: any) => dataSources.users.users(),
  getUser: (_: any, { id }: any, { dataSources }: any) =>
    dataSources.users.getUser(id),
  isAuth: (_: any, { id }: any, context: any) => {
    // validate auth status
    // with call to service
    // located on apollo context
    return context.isAuth(id);
  },
};
