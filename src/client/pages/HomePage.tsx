import React, { useContext } from 'react';
import { AuthContext } from '../hooks/';
import { PostList } from '../components/PostList';
import { ALL_POSTS } from '../queries/';

const HomePage = (props: any) => {
  const authContext: any = useContext(AuthContext);
  return (
    <div>
      HomePage SSR Client
      {authContext &&
        authContext.currentUser &&
        ` Welcome Back ${authContext.currentUser.username}`}
      <div>
        <PostList
          fetchQuery={ALL_POSTS}
          userId={
            authContext &&
            authContext.currentUser &&
            authContext.currentUser._id
          }
          fetchType={'posts'}
        />
      </div>
    </div>
  );
};

const loadData = () => {
  console.log('load data');
};

export default {
  component: HomePage,
  loadData: loadData,
};
