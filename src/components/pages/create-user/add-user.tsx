import { Button } from '@components/button/button';
import { Card } from '@components/card/card';
import { Input } from '@components/input/input';
import { UseCreateUser } from './hooks/use-create-user';
import './add-user.css';
import { errorMessages } from '@validation-forms/validation-messages';
import { validationRegex } from '@validation-forms/validation-regex';
import { validateBirthDate } from './validate-birth-date';

export function CreateUser() {
  const { data, loading, error, errors, register, handleSubmit, handleCreateUserSubmit } = UseCreateUser();

  return (
    <div className='add-user-screen-container'>
      <Card>
        <h1>Adicionar usuário</h1>
        <form onSubmit={handleSubmit(handleCreateUserSubmit)}>
          <Input
            label='Nome Completo'
            expand
            error={errors.name?.message}
            placeholder='Digite seu nome completo'
            {...register('name', {
              required: errorMessages.name.required,
              pattern: {
                value: validationRegex.name,
                message: errorMessages.name.pattern,
              },
            })}
          />
          <Input
            label='E-mail'
            type='email'
            error={errors.email?.message}
            expand
            placeholder='Digite seu e-mail'
            {...register('email', {
              required: errorMessages.email.required,
              pattern: {
                value: validationRegex.email,
                message: errorMessages.email.pattern,
              },
            })}
          />
          <Input
            label='Senha'
            expand
            error={errors.password?.message}
            type='password'
            placeholder='Crie uma senha segura'
            {...register('password', {
              required: errorMessages.password.required,
              pattern: {
                value: validationRegex.password,
                message: errorMessages.password.pattern,
              },
            })}
          />
          <Input
            label='Telefone'
            expand
            type='tel'
            error={errors.phone?.message}
            placeholder='Digite seu telefone'
            {...register('phone', {
              required: errorMessages.phone.required,
              pattern: {
                value: validationRegex.phone,
                message: errorMessages.phone.pattern,
              },
            })}
          />
          <Input
            label='Data de Nascimento'
            type='date'
            error={errors.birthDate?.message}
            expand
            placeholder='Selecione sua data de nascimento'
            {...register('birthDate', {
              required: errorMessages.birthDate.required,
              validate: (value: string) => validateBirthDate(value),
            })}
          />

          <div>
            <select
              {...register('role', {
                required: errorMessages.role.required,
              })}
              defaultValue=''
            >
              <option value='' disabled>
                Selecione o cargo
              </option>
              <option value='user'>usuário</option>
              <option value='admin'>admin</option>
            </select>
            {errors.role?.message}
          </div>
          <Button expand type='submit' disabled={loading}>
            {loading ? 'Criando...' : 'Criar Usuário'}
          </Button>
        </form>
        {error && <p className='error-message'>Erro: {error.message}</p>}
        {data && <p>Usuário criado com sucesso!</p>}
      </Card>
    </div>
  );
}
