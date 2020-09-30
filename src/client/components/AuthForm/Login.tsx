import React, { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { LOGIN, LOGOUT } from '../../mutations';
import { CURRENT_USER } from '../../queries';
import { AuthForm } from './AuthForm';
import { AuthContext } from '../../hooks/';

export const LoginForm = () => {
  const authContext: any = useContext(AuthContext);
  const history = useHistory();

  const [
    login,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(LOGIN, {
    refetchQueries: [{ query: CURRENT_USER }],
    onCompleted: (data) => {
      if (data) {
        history.push(`/dashboard/${data.login._id}`);
      }
    },
    awaitRefetchQueries: true,
  });
  const [logout, {}] = useMutation(LOGOUT, {
    refetchQueries: [{ query: CURRENT_USER }],
  });

  return (
    <div id='login-form'>
      <AuthForm
        onSubmit={login}
        logout={logout}
        userData={authContext}
        isSignup={false}
        className='login-form'
      />
    </div>
  );
};
