import React from 'react';
import { useMutation } from '@apollo/client';
import { USER_POSTS } from '../../queries';
import { DELETE_POST } from '../../mutations';
import { post } from '../../../../apollo/schema/types/post';

export interface PostProps {
  postData: {
    post: string;
    _id: string;
    userId: string;
    username: string;
    date: Date;
  };
  userId: string;
}
const convert = (dateString: string | Date) => {
  const date = new Date(dateString).toLocaleString();
  return (
    date.substring(0, date.lastIndexOf(':')) +
    date.substring(date.lastIndexOf(':') + 3)
  );
};

export const Post = ({ postData, userId }: PostProps) => {
  const [
    deletePost,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: USER_POSTS, variables: { userId } }],
  });

  return (
    <div>
      <p>{postData.post}</p>
      <p>postedBy: {postData.username}</p>
      <p>posted: {convert(postData.date)}</p>
      {postData.userId === userId && (
        <button
          onClick={() => deletePost({ variables: { _id: postData._id } })}
        >
          delete
        </button>
      )}
    </div>
  );
};
