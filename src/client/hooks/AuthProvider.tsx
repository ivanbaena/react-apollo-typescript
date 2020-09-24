import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../queries';

export const AuthContext = createContext(null);

interface ProviderProps {
  children: any;
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const { loading, error, data } = useQuery(CURRENT_USER);

  if (error) return <div>Error! {error.message}</div>;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
