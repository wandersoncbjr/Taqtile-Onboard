import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Users($offset: Int, $limit: Int) {
    users(data: { offset: $offset, limit: $limit }) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        name
        email
      }
      count
    }
  }
`;
