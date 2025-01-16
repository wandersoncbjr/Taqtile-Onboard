import { useQuery } from '@apollo/client';
import { GET_USERS } from '@graphql/query/query-get-user';
import { UsersQueryResponse } from '../user-api-response-interface .ts';

export const userAuthToken = localStorage.getItem('token');
export function useUsersData(offset?: number, limit?: number) {
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
