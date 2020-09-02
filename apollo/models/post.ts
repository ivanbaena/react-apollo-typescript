import mongoose, { Schema, Document } from 'mongoose';

export interface PostInterface extends Document {
  _id: String;
  post: String;
  date: Date;
  userId: Number;
}

export const PostSchema = new Schema({
  post: { type: String, required: true },
  date: Date,
  userId: Number,
  name: String,
});

export const post = mongoose.model<PostInterface>('posts', PostSchema);
