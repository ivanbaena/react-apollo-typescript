import React, { FormEvent, useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { LOGIN, LOGOUT } from '../../mutations';
import { CURRENT_USER } from '../../queries';

export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    login({ variables: { email, password } });
  };

  useEffect(() => {
    console.log('data', data);
    console.log('mutationData', mutationData);
  }, [mutationLoading]);

  return (
    <div className='loginForm'>
      <form onSubmit={onFormSubmit}>
        <input
          name='email'
          type='text'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name='password'
          type='text'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {data && data.currentUser ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => console.log(data)}>Not Logged</button>
      )}
    </div>
  );
};
