import { Home } from '@components/pages/home/home';
import { Login } from '@components/pages/login/login';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './protected-route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
