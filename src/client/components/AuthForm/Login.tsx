import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { LOGIN, LOGOUT } from '../../mutations';
import { CURRENT_USER } from '../../queries';
import { AuthForm } from './AuthForm';

export const LoginForm = () => {
  const { loading, error, data } = useQuery(CURRENT_USER);
  const [
    login,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(LOGIN, {
    refetchQueries: [{ query: CURRENT_USER }],
  });
  const [logout, {}] = useMutation(LOGOUT, {
    refetchQueries: [{ query: CURRENT_USER }],
  });

  return (
    <div id='login-form'>
      <AuthForm
        onSubmit={login}
        logout={logout}
        userData={data}
        isSignup={false}
      />
    </div>
  );
};
