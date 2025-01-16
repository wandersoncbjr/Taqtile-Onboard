import { validationRegex } from '@validation-forms/validation-regex';
import './Login.css';
import { useLoginForm } from './hooks/useLoginForm';
import { Button } from '@components/button/button';
import { Input } from '@components/input/input';
import { Divider } from '@components/divider/divider';
import { Card } from '@components/card/card';
import { errorMessages } from '@validation-forms/validation-messages';
import { Spinner } from '@components/assets/spinner/spinner';

export function Login() {
  const { register, error, handleSubmit, errors, handleLoginFormSubmit, loading } = useLoginForm();

  return (
    <div className='container-login'>
      <Card>
        <h1>Bem-vindo(a) à Instaq!</h1>
        <Divider size='large' />
        <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
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
            {...register('password', {
              required: errorMessages.password.required,
              minLength: {
                value: 7,
                message: errorMessages.password.minLength,
              },
              pattern: {
                value: validationRegex.password,
                message: errorMessages.password.pattern,
              },
            })}
            error={errors.password?.message || error?.message}
          />
          <Divider size='large' />
          <Button expand type='submit' disabled={loading}>
            {loading ? <Spinner /> : 'Entrar'}
          </Button>
        </form>
      </Card>
    </div>
  );
}
