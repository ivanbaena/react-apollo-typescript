import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { USER_POSTS } from '../../queries';
import { Post, PostProps } from './Post';

interface PostListProps {
  userId: string;
}
export const PostList = ({ userId }: PostListProps) => {
  const { loading, error, data } = useQuery(USER_POSTS, {
    ssr: false,
    variables: { userId },
  });

  useEffect(() => {
    console.log('posts', data);
  }, [loading]);

  const renderPosts = (data: any) => {
    if (data) {
      return data.userPosts.map((post: any, i: number) => {
        return <Post post={post.post} key={i} />;
      });
    }
    return;
  };

  return (
    <div>
      <h3>Posts</h3>
      <ul className='post-list'>{renderPosts(data)}</ul>
    </div>
  );
};
