export const postsQuery = {
  posts: (_: any, {}: any, { dataSources }: any) => dataSources.posts.posts(),
  userPosts: (_: any, { userId }: any, { dataSources }: any) =>
    dataSources.posts.userPosts(userId),
};
