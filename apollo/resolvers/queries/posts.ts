import { Post } from '../../models';

export const postsQuery = {
  posts: () => Post.find({}),
  fetchUserPosts: async (_: any, { id }: any, { posts: [] }) =>
    await Post.find({ userId: id }),
};
