import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { userAuthToken, useUsersData } from '@components/pages/home/hooks/use-users-data.';

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { error } = useUsersData();

  if (!userAuthToken || error?.message === 'Operação não autenticada.') {
    return <Navigate to='/login' replace />;
  }

  return children;
}
