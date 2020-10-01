import React from 'react';
import { LoginForm, SignupForm } from '../components/AuthForm/';

const LoginPage = ({ staticContext }: any) => {
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
