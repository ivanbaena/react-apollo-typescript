import { Post } from '../../models';

export const postMutations = {
  addPost: (_: any, { post, userId }: any, { Post: [] }) => {
    new Post({ post, userId, date: new Date() }).save();
  },
  deletePost: (_: any, { _id }: any, { Post: [] }): void => {
    Post.findByIdAndDelete(_id).exec();
  },
  updatePost: (_: any, { _id, post }: any, { Post: [] }): void => {
    Post.findByIdAndUpdate(_id, { post: post }).exec();
  },
};
