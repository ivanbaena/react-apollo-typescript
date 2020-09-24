import React, { useContext } from 'react';
import { AuthContext } from '../hooks/AuthProvider';

const HomePage = (props: any) => {
  const authContext: any = useContext(AuthContext);
  return (
    <div>
      HomePage SSR Client
      {authContext &&
        authContext.currentUser &&
        ` Welcome Back ${authContext.currentUser.username}`}
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
