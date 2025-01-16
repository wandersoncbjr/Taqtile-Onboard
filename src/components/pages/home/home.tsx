import { useState } from 'react';
import { UsersList } from '@components/users-list/users-list';
import './home.css';
import { LoadingScreen } from '@components/loading-screen/loading-screen';
import { theme } from 'theme/theme';
import { Button } from '@components/button/button';
import { useUsersData } from './hooks/use-users-data.';

export function Home() {
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const { data, error, loading } = useUsersData(offset, limit);

  const userPaginationDetails = {
    users: data?.users.nodes ?? [],
    pageInfo: data?.users.pageInfo,
    totalUsersCount: data?.users.count ?? 0,
  };

  const pageCalculation = {
    totalPages: Math.ceil(userPaginationDetails.totalUsersCount / limit),
    currentPage: Math.floor(offset / limit) + 1,
  };

  const handleNextPage = () => {
    if (userPaginationDetails.pageInfo?.hasNextPage) {
      setOffset(offset + limit);
    }
  };

  const handlePreviousPage = () => {
    if (userPaginationDetails.pageInfo?.hasPreviousPage) {
      setOffset(offset - limit);
    }
  };

  return (
    <div className='home-container'>
      <h1>Home</h1>
      {error && <h2 style={{ color: theme.colors.FeedbackError }}>{error.message}</h2>}
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <UsersList userList={userPaginationDetails.users} />
          <div className='pagination'>
            <Button onClick={handlePreviousPage} disabled={!userPaginationDetails?.pageInfo?.hasPreviousPage}>
              Previous
            </Button>
            <span>
              <p>{`Página ${pageCalculation.currentPage} De ${pageCalculation.totalPages}`}</p>
            </span>
            <Button onClick={handleNextPage} disabled={!userPaginationDetails?.pageInfo?.hasNextPage}>
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
