import { Button } from '../../button/button';
import { Card } from '../../card/card';
import { Divider } from '../../divider/divider';
import { Input } from '../../input/input';
import './Login.css';

export function Login() {
  return (
    <div className='container-login'>
      <Card>
        <h1>Bem vindo(a) à Instaq!</h1>
        <Divider size='large' />
        <Input expand type='text' label='E-mail' />
        <Divider size='small' />
        <Input expand label='Senha' type='password' />
        <Divider size='large' />
        <Button expand>Entrar</Button>
      </Card>
    </div>
  );
}
