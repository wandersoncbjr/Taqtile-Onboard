interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface Nodes {
  name: string;
  email: string;
}

export interface UsersQueryResponse {
  users: {
    pageInfo: PageInfo;
    nodes: Nodes[];
    count: number;
  };
}
