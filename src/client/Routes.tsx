import React from 'react';
import { renderRoutes } from 'react-router-config';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export const Routes = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
