import React, { FormEvent, useState } from 'react';

interface AuthFormProps {
  onSubmit: Function;
  logout: Function;
  userData: any;
  isSignup: Boolean;
}
export const AuthForm = ({
  onSubmit,
  logout,
  userData,
  isSignup,
}: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    isSignup
      ? onSubmit({ variables: { email, username, password } })
      : onSubmit({ variables: { email, password } });
  };

  return (
    <div className='authform'>
      <form onSubmit={onFormSubmit}>
        <input
          name='email'
          type='text'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        {isSignup && (
          <input
            name='username'
            type='text'
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          name='password'
          type='text'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {userData && userData.currentUser ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => console.log(userData)}>Not Logged</button>
      )}
    </div>
  );
};
