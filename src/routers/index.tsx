import { createBrowserRouter } from 'react-router-dom';
import { Bilan } from '../views/bilan';
import { App } from '../views';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'bilan',
        loader: () => {
          const url = new URL(window.location.href);
          const searchParams = new URLSearchParams(url.search);
          const token = searchParams.get('token');
          const auth_token = localStorage.getItem('em_auth_token');

          if (!token && !auth_token) {
            window.location.href = 'http://localhost:3000/connexion';
            return true;
          } else if (token) {
            localStorage.setItem('em_auth_token', token);
            window.location.href = '/bilan';
            return null;
          }

          return null;
        },
        element: <Bilan />,
      },
    ],
  },
]);
