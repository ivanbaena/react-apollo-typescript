import { MongoDataSource } from 'apollo-datasource-mongodb';
import { PostInterface } from '../models';
import { Types } from 'mongoose';

export class Posts extends MongoDataSource<PostInterface> {
  posts() {
    return this.model.find();
  }

  userPosts(id: Number) {
    return this.model.find({ userId: id }).exec();
  }

  save(post: String, userId: Number) {
    new this.model({ post: post, userId: userId }).save();
  }

  delete(id: Types.ObjectId) {
    this.model.findByIdAndDelete(id).exec();
  }

  update(id: Types.ObjectId, post: String) {
    this.model.findByIdAndUpdate(id, { post: post }).exec();
  }
}