import { Card } from '@components/card/card';
import './home.css';

export function Home() {
  const users = [
    { name: 'Wanderson', email: 'wanderson@example.com' },
    { name: 'Lucas Silva', email: 'lucas.silva@example.com' },
    { name: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
    { name: 'João Souza', email: 'joao.souza@example.com' },
    { name: 'Lucas Silva', email: 'lucas.silva@example.com' },
    { name: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
    { name: 'João Souza', email: 'joao.souza@example.com' },
    { name: 'Lucas Silva', email: 'lucas.silva@example.com' },
    { name: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
    { name: 'João Souza', email: 'joao.souza@example.com' },
    { name: 'Lucas Silva', email: 'lucas.silva@example.com' },
    { name: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
    { name: 'João Souza', email: 'joao.souza@example.com' },
  ];

  return (
    <Card>
      <h1>Home</h1>
      <table className='user-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
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
