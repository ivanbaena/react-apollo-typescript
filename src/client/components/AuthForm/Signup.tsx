import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { AuthForm } from './AuthForm';
import { SIGN_UP, LOGOUT } from '../../mutations';
import { CURRENT_USER } from '../../queries';

export const SignupForm = () => {
  const { loading, error, data } = useQuery(CURRENT_USER);
  const [
    signup,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(SIGN_UP, {
    refetchQueries: [{ query: CURRENT_USER }],
  });
  const [logout, {}] = useMutation(LOGOUT, {
    refetchQueries: [{ query: CURRENT_USER }],
  });
  return (
    <div id='sign-up-form'>
      <AuthForm
        onSubmit={signup}
        logout={logout}
        userData={data}
        isSignup={true}
      />
    </div>
  );
};
