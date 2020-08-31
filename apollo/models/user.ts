import mongoose, { Schema, Document } from 'mongoose';
import { PostSchema, PostInterface } from './post';

export interface UserInterFace extends Document {
  _id: String;
  username: String;
  password: String;
  post: PostInterface[];
}

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  post: [PostSchema],
});

export const User = mongoose.model<UserInterFace>('users', UserSchema);
