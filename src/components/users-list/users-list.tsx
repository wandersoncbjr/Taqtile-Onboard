import { Card } from '@components/card/card';
import './users-list.css';

interface UserData {
  name: string;
  email: string;
}

interface UserListProps {
  userList: UserData[];
}

export function UsersList({ userList }: UserListProps) {
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
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
