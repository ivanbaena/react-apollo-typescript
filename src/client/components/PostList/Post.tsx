import React from 'react';

export interface PostProps {
  post: string;
}
export const Post = ({ post }: PostProps) => {
  return <div>{post}</div>;
};
