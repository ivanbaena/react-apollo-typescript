import { UserInterFace } from '../../models';

export const userMutations = {
  signup: (
    _: any,
    { username, password }: UserInterFace,
    { dataSources }: any
  ): void => {
    dataSources.users.save(username, password);
  },
  deleteUser: (_: any, { _id }: UserInterFace, { dataSources }: any): void => {
    dataSources.users.delete(_id);
  },
  updateUser: (
    _: any,
    { _id, username }: UserInterFace,
    { dataSources }: any
  ): void => {
    dataSources.users.update(_id, username);
  },
};
