import { Button } from '@components/button/button';
import { Card } from '@components/card/card';
import { Input } from '@components/input/input';
import { UseCreateUser } from './hooks/use-create-user';
import './add-user.css';
import { errorMessages } from '@validation-forms/validation-messages';
import { validationRegex } from '@validation-forms/validation-regex';
import { validateBirthDate } from './validate-birth-date';
import { theme } from 'theme/theme';

export function CreateUser() {
  const { data, loading, error, errors, register, handleSubmit, handleCreateUserSubmit } = UseCreateUser();
  return (
    <div className='add-user-screen-container'>
      <Card>
        <h1>Criar usuário</h1>
        <form className='form-create-user' onSubmit={handleSubmit(handleCreateUserSubmit)}>
          {error && <p style={{ color: theme.colors.FeedbackError }}>Erro: {error.message}</p>}
          {data && <p style={{ color: theme.colors.FeedbackSuccess }}>Usuário criado com sucesso!</p>}
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
              className='role-select-create-user'
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
            {errors.role?.message && <p style={{ color: theme.colors.FeedbackError }}> {errors.role?.message}</p>}
          </div>
          <Button expand type='submit' disabled={loading}>
            {loading ? 'Criando...' : 'Criar Usuário'}
          </Button>
        </form>
      </Card>
    </div>
  );
}
