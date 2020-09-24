import React from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../queries';

const HomePage = (props: any) => {
  const { loading, error, data } = useQuery(CURRENT_USER);

  if (error) return <div>Error! {error.message}</div>;

  return (
    <div>
      HomePage SSR Client
      {data && data.currentUser && ` Welcome Back ${data.currentUser.username}`}
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
