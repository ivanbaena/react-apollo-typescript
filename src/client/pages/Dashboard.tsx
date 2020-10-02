import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext, isAuth } from '../hooks/';
import { PostForm } from '../components/PostForm';
import { PostList } from '../components/PostList';
import { USER_POSTS } from '../queries';

const Dashboard = () => {
  const authContext: any = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (authContext !== null && !isAuth(authContext)) {
      history.push('/');
    }
  }, [authContext]);

  if (authContext === null || authContext.currentUser === null) {
    return <div />;
  }

  return (
    <div>
      Protected Route
      <PostForm
        userId={authContext.currentUser._id}
        username={authContext.currentUser.username}
      />
      <PostList
        userId={authContext.currentUser._id}
        fetchQuery={USER_POSTS}
        fetchType={'userPosts'}
      />
    </div>
  );
};

const loadData = () => {};

export default {
  component: Dashboard,
  loadData: loadData,
};
