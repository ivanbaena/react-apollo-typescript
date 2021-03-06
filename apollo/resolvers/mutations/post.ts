import { PostInterface } from '../../models';

export const postMutations = {
  addPost: (
    _: void,
    { post, userId, username }: PostInterface,
    { dataSources }: any
  ) => {
    return dataSources.posts.save(post, userId, username, new Date());
  },
  deletePost: (_: void, { _id }: PostInterface, { dataSources }: any): void => {
    return dataSources.posts.delete(_id);
  },
  updatePost: (
    _: void,
    { _id, post }: PostInterface,
    { dataSources }: any
  ): void => {
    dataSources.posts.update(_id, post);
  },
};
