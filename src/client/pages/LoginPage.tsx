import React from 'react';
import { AuthForm } from '../components/AuthForm/AuthForm';

const LoginPage = ({ staticContext }: any) => {
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
