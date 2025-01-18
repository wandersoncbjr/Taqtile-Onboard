interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Nodes {
  name: string;
  email: string;
  id: string;
}

export interface UsersQueryResponse {
  users: {
    pageInfo: PageInfo;
    nodes: Nodes[];
    count: number;
  };
}
