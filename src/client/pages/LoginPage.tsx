import React from 'react';
import { useQuery } from '@apollo/client';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { CURRENT_USER } from '../queries';

const LoginPage = ({ staticContext }: any) => {
  // const { loading, error, data } = useQuery(CURRENT_USER);

  // if (loading) return <div>'Loading...'</div>;
  // if (error) return <div>Error! {error.message}</div>;
  // console.log('data-client', data);

  return (
    <div>
      <h1>Please Login or SignUp</h1>
      <AuthForm />
    </div>
  );
};

export default {
  component: LoginPage,
};
