import { User, UserInterFace } from '../../models';

export const userMutations = {
  addUser: (_: any, { username, password }: UserInterFace, { User: [] }) => {
    new User({ username, password }).save();
  },
  deleteUser: (_: any, { _id }: UserInterFace, { User: [] }): void => {
    User.findByIdAndDelete(_id).exec();
  },
  updateUser: (
    _: any,
    { _id, username }: UserInterFace,
    { User: [] }
  ): void => {
    User.findByIdAndUpdate(_id, { username: username }).exec();
  },
};
