import mongoose, { Schema, Document } from 'mongoose';

export interface PostInterface extends Document {
  _id: String;
  post: String;
  date: Date;
  userId: String;
}

export const PostSchema = new Schema({
  post: { type: String, required: true },
  date: { type: Date },
  userId: { type: String, required: true },
  name: String,
});

export const post = mongoose.model<PostInterface>('posts', PostSchema);
