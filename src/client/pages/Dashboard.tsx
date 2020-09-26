import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../queries';
import { AuthContext, isAuth } from '../hooks/';

const Dashboard = () => {
  const authContext: any = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    console.log(authContext);

    if (authContext !== null && !isAuth(authContext)) {
      history.push('/');
    }
  }, [authContext]);

  if (authContext === null) {
    return <div />;
  }

  return <div>Protected Route</div>;
};

const loadData = () => {};

export default {
  component: Dashboard,
  loadData: loadData,
};
