import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { PostSchema, PostInterface } from './post';

export interface UserInterFace extends Document {
  _id: String;
  email: String;
  username: String;
  password: String;
  post: PostInterface[];
}

const UserSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  post: { type: Array },
});

// The user's password is never saved in plain text.  Prior to saving the
// user model, we 'salt' and 'hash' the users password.  This is a one way
// procedure that modifies the password - the plain text password cannot be
// derived from the salted + hashed version. See 'comparePassword' to understand
// how this is used.
UserSchema.pre('save', function save(next) {
  const user: any = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;

      next();
    });
  });
});

// We need to compare the plain text password (submitted whenever logging in)
// with the salted + hashed version that is sitting in the database.
// 'bcrypt.compare' takes the plain text password and hashes it, then compares
// that hashed password to the one stored in the DB.  Remember that hashing is
// a one way process - the passwords are never compared in plain text form.
UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword: any,
  cb: Function
) {
  bcrypt.compare(
    candidatePassword,
    this.password,
    (err: Error, isMatch: Boolean) => {
      cb(err, isMatch);
    }
  );
};

export const user = mongoose.model<UserInterFace>('users', UserSchema);
