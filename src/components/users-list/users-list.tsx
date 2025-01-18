import { Card } from '@components/card/card';
import './users-list.css';
import { useNavigate } from 'react-router-dom';
import { Nodes } from '@components/pages/home/user-api-response-interface ';

interface UserListProps {
  userList: Nodes[];
}

export function UsersList({ userList }: UserListProps) {
  const navigate = useNavigate();
  return (
    <Card expand>
      <table className='user-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr onClick={() => navigate(`/user-details/${user.id}`)} key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
