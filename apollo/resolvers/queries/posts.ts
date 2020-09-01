export const postsQuery = {
  posts: (_: any, {}: any, { dataSources }: any) => dataSources.posts.posts(),
  userPosts: (_: any, { id }: any, { dataSources }: any) =>
    dataSources.posts.userPosts(id),
};
