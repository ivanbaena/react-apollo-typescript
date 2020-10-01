import React from 'react';
import { useMutation } from '@apollo/client';
import { USER_POSTS } from '../../queries';
import { DELETE_POST } from '../../mutations';

export interface PostProps {
  postData: {
    post: string;
    _id: string;
    userId: string;
  };
  userId: string;
}
export const Post = ({ postData, userId }: PostProps) => {
  const [
    deletePost,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: USER_POSTS, variables: { userId } }],
  });

  return (
    <div>
      {postData.post}
      <button onClick={() => deletePost({ variables: { _id: postData._id } })}>
        X
      </button>
    </div>
  );
};
