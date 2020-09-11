import React from 'react';

export const AuthForm = () => {
  return (
    <div className='loginForm'>
      <form>
        <input name='email' type='text' />
        <input name='password' type='text' />
      </form>
      <button type='submit'>Submit</button>
    </div>
  );
};
