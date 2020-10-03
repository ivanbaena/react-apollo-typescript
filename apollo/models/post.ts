import mongoose, { Schema, Document } from 'mongoose';
import { UserInterFace } from './user';

export interface PostInterface extends Document {
  _id: String;
  post: String;
  date: Date;
  userId: String;
  username: String;
  attributes: {
    likes: Array<UserInterFace>;
  };
}

export const PostSchema = new Schema({
  post: { type: String, required: true },
  date: { type: Date },
  userId: { type: String, required: true },
  username: { type: String, required: true },
  attributes: {
    type: [
      {
        likes: { type: Array, default: [] },
      },
    ],
  },
  name: String,
});

export const post = mongoose.model<PostInterface>('posts', PostSchema);
