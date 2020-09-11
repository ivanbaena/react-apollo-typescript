import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Header } from './components/Header/Header';

const App = ({ route }: any) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
};
