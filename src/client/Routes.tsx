import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';

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
        ...LoginPage,
        path: '/login',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
