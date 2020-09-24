import React from 'react';
import { useQuery } from '@apollo/client';
import { LoginForm, SignupForm } from '../components/AuthForm/';
import { CURRENT_USER } from '../queries';

const LoginPage = ({ staticContext }: any) => {
  // const { loading, error, data } = useQuery(CURRENT_USER);

  // if (loading) return <div>'Loading...'</div>;
  // if (error) return <div>Error! {error.message}</div>;
  // console.log('data-client', data);

  return (
    <div>
      <div>
        <h1>Please Login</h1>
        <LoginForm />
      </div>
      <h2>Or</h2>
      <div>
        <h1>Please Signup</h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default {
  component: LoginPage,
};
