import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Header } from './components/Header/Header';
import { AuthProvider } from './hooks/AuthProvider';

const App = ({ route }: any) => {
  return (
    <AuthProvider>
      <div>
        <Header />
        {renderRoutes(route.routes)}
      </div>
    </AuthProvider>
  );
};

export default {
  component: App,
};
