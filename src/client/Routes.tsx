import React from 'react';
import { renderRoutes } from 'react-router-config';
// import App from './App';

const App = ({ route }: any) => {
  return <div>{renderRoutes(route.routes)}</div>;
};

const AppRoute = {
  component: App,
};

const HomePage = () => {
  return (
    <div>
      HomePage<button></button>
    </div>
  );
};

const loadData = () => {
  return console.log('load data');
};
const HomeRoute = {
  component: HomePage,
  loadData: () => console.log('ivan'),
};

const AboutPage = () => {
  return <div>AboutPage</div>;
};

const AboutRoute = {
  component: AboutPage,
};

export const Routes = [
  {
    ...AppRoute,
    routes: [
      {
        ...HomeRoute,
        path: '/',
        exact: true,
      },
      {
        ...AboutRoute,
        path: '/about',
        exact: true,
      },
    ],
  },
];
