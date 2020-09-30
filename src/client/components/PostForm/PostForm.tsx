import React, { FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../mutations';
import { USER_POSTS } from '../../queries';

export const PostForm = ({ userId }: any) => {
  const [post, setPost] = useState('');
  const [
    addPost,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(ADD_POST, {
    refetchQueries: [{ query: USER_POSTS, variables: { userId } }],
  });

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    addPost({ variables: { post, userId } });
    setPost('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <textarea
        value={post}
        onChange={(e) => {
          setPost(e.target.value);
        }}
        name='post'
        rows={4}
        cols={50}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
