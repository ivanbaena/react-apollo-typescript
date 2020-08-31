import { Post, PostInterface } from '../../models';

export const postMutations = {
  addPost: (_: void, { post, userId }: PostInterface) => {
    new Post({ post, userId, date: new Date() }).save();
  },
  deletePost: (_: void, { _id }: PostInterface, { Post }: any): void => {
    Post.findByIdAndDelete(_id).exec();
  },
  updatePost: (_: void, { _id, post }: PostInterface, { Post }: any): void => {
    Post.findByIdAndUpdate(_id, { post: post }).exec();
  },
};
