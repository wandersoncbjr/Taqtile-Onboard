interface PaginationDetails {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface UserDetails {
  name: string;
  email: string;
}

export interface UsersQueryResponse {
  users: {
    pageInfo: PaginationDetails;
    nodes: UserDetails[];
    count: number;
  };
}
