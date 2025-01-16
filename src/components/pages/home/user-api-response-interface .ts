interface pageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface nodes {
  name: string;
  email: string;
}

export interface UsersQueryResponse {
  users: {
    pageInfo: pageInfo;
    nodes: nodes[];
    count: number;
  };
}
