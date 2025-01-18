import { gql } from '@apollo/client';

export const GET_USER_DETAILS = gql`
  query Query($userId: ID) {
    user(id: $userId) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;
