import { Button } from '../../button/button';
import { Card } from '../../card/card';
import { Divider } from '../../divider/divider';
import { Input } from '../../input/input';
import { useForm } from 'react-hook-form';
import './Login.css';
import { validationRegex } from '../../../validation-forms/validation-regex';
import { errorMessages } from '../../../validation-forms/validation-messages';

interface LoginFormData {
  email: string;
  senha: string;
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {};

  return (
    <div className='container-login'>
      <Card>
        <h1>Bem-vindo(a) à Instaq!</h1>
        <Divider size='large' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            expand
            type='text'
            label='E-mail'
            placeholder='Digite seu e-mail'
            {...register('email', {
              required: errorMessages.email.required,
              pattern: {
                value: validationRegex.email,
                message: errorMessages.email.pattern,
              },
            })}
            error={errors.email?.message}
          />
          <Divider size='small' />
          <Input
            expand
            type='password'
            label='Senha'
            placeholder='Digite sua senha'
            {...register('senha', {
              required: errorMessages.senha.required,
              minLength: {
                value: 7,
                message: errorMessages.senha.minLength,
              },
              pattern: {
                value: validationRegex.password,
                message: errorMessages.senha.pattern,
              },
            })}
            error={errors.senha?.message}
          />
          <Divider size='large' />
          <Button expand type='submit'>
            Entrar
          </Button>
        </form>
      </Card>
    </div>
  );
}
