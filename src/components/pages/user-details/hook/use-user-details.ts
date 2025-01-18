import { useQuery } from '@apollo/client';
import { userAuthToken } from '@components/pages/home/hooks/use-users-data.';
import { GET_USER_DETAILS } from '@graphql/query/query-user-details/query-user-details';
import { useParams } from 'react-router-dom';

export const useUserDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useQuery(GET_USER_DETAILS, {
    variables: {
      userId: id,
    },
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
};
