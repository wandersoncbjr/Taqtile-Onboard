import { useQuery } from '@apollo/client';
import { GET_USERS } from '@graphql/query/query-get-user';
import { UsersQueryResponse } from '../user-api-response-interface ';

export const userAuthToken = localStorage.getItem('token');

interface UseUsersDataParams {
  offset?: number;
  limit?: number;
}

export function useUsersData({ offset, limit }: UseUsersDataParams = {}) {
  const { data, loading, error } = useQuery<UsersQueryResponse>(GET_USERS, {
    variables: { offset, limit },
    context: {
      headers: {
        Authorization: `${userAuthToken}`,
      },
    },
  });

  return {
    data,
    loading,
    error,
  };
}
