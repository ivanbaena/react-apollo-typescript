import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../queries';

export const AuthContext = createContext(null);

interface ProviderProps {
  children: any;
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const { loading, error, data } = useQuery(CURRENT_USER, { ssr: false });
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    console.log('ok', data);

    if (data !== undefined) {
      setAuth(data);
    }
  }, [loading]);

  if (error) return <div>Error! {error.message}</div>;
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const isAuth = (authContext: any): Boolean => {
  return authContext && authContext.currentUser;
};
