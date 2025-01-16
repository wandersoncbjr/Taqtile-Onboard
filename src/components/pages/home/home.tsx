import { ListUser } from '@components/list-user/list-user';
import './home.css';

export function Home() {
  const userList = [
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
    <div className='home-container'>
      <h1>Home</h1>
      <ListUser userList={userList} />
    </div>
  );
}
