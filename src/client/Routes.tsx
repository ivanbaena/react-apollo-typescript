import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

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
        ...Dashboard,
        path: '/dashboard/:id',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
