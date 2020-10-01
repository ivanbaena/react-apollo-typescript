import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../queries';
import { AuthContext, isAuth } from '../hooks/';
import { PostForm } from '../components/PostForm';
import { PostList } from '../components/PostList';

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
      <PostForm userId={authContext.currentUser._id} />
      <PostList userId={authContext.currentUser._id} />
    </div>
  );
};

const loadData = () => {};

export default {
  component: Dashboard,
  loadData: loadData,
};
