import { Post, PostInterface } from '../../models';

export const postMutations = {
  addPost: (_: void, { post, userId }: PostInterface, { dataSources }: any) => {
    dataSources.posts.save(post, userId, new Date());
  },
  deletePost: (_: void, { _id }: PostInterface): void => {
    Post.findByIdAndDelete(_id).exec();
  },
  updatePost: (_: void, { _id, post }: PostInterface): void => {
    Post.findByIdAndUpdate(_id, { post: post }).exec();
  },
};
