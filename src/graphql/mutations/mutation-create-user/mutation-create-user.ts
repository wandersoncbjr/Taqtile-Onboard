import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
  mutation Mutation($data: UserInput!) {
    createUser(data: $data) {
      name
      phone
      birthDate
      email
      role
    }
  }
`;
