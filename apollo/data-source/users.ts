import { MongoDataSource } from 'apollo-datasource-mongodb';
import { UserInterFace } from '../models';
import { Types } from 'mongoose';

export class Users extends MongoDataSource<UserInterFace> {
  users() {
    return this.model.find();
  }
  getUser(userId: Types.ObjectId) {
    return this.findOneById(userId);
  }

  save(username: String, password: String) {
    new this.model({ username: username, password: password, post: [] }).save();
  }

  delete(id: Types.ObjectId) {
    this.model.findByIdAndDelete(id).exec();
  }

  update(id: Types.ObjectId, username: String) {
    this.model.findByIdAndUpdate(id, { username: username }).exec();
  }
}
