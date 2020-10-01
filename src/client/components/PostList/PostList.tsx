import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { USER_POSTS } from '../../queries';
import { Post } from './Post';

interface PostListProps {
  userId: string;
}
export const PostList = ({ userId }: PostListProps) => {
  const { loading, error, data } = useQuery(USER_POSTS, {
    ssr: false,
    variables: { userId },
  });

  useEffect(() => {}, [loading]);

  const renderPosts = (data: any) => {
    if (data) {
      console.log('IVAN', data);

      return data.userPosts.map((post: any, i: number) => {
        return <Post postData={post} key={i} userId={userId} />;
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
