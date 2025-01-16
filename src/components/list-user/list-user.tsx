import { Card } from '@components/card/card';
import './list-user.css';

interface UserData {
  name: string;
  email: string;
}

interface UserListProps {
  userList: UserData[];
}

export function ListUser({ userList }: UserListProps) {
  return (
    <Card>
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
