import { useMutation } from '@apollo/client';
import { userAuthToken } from '@components/pages/home/hooks/use-users-data.';
import { CREATE_USER_MUTATION } from '@graphql/mutations/mutation-create-user/mutation-create-user';
import { useForm } from 'react-hook-form';

interface CreateUserData {
  email: string;
  password: string;
  birthDate: string;
  name: string;
  role: string;
  phone: string;
}

export function UseCreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    mode: 'all',
  });
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER_MUTATION, {
    context: {
      headers: {
        Authorization: `${userAuthToken}`,
      },
    },
  });

  const handleCreateUserSubmit = (formDataUSerCreate: CreateUserData) => {
    createUser({
      variables: {
        data: {
          birthDate: formDataUSerCreate.birthDate,
          email: formDataUSerCreate.email,
          name: formDataUSerCreate.name,
          password: formDataUSerCreate.password,
          role: formDataUSerCreate.role,
          phone: formDataUSerCreate.phone,
        },
      },
    });
  };
  return {
    handleSubmit,
    register,
    handleCreateUserSubmit,
    data,
    loading,
    error,
    errors,
  };
}
