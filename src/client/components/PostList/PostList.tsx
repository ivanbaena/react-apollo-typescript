import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Post } from './Post';

interface PostListProps {
  userId: string;
  fetchQuery: any;
  fetchType: string;
}
export const PostList = ({ userId, fetchQuery, fetchType }: PostListProps) => {
  const { loading, error, data } = useQuery(fetchQuery, {
    ssr: false,
    variables: { userId },
  });

  useEffect(() => {}, [loading]);

  const renderPosts = (data: any) => {
    if (data) {
      return data[fetchType]
        .slice()
        .sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((post: any, i: number) => {
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
