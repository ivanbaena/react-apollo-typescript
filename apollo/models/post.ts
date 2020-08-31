import mongoose, { Schema, Document } from 'mongoose';

export interface PostInterface extends Document {
  _id: String;
  post: String;
  date: Date;
  userId: Number;
}

const PostSchema = new Schema({
  post: { type: String, required: true },
  date: Date,
  userId: Number,
});

export const Post = mongoose.model<PostInterface>('posts', PostSchema);
