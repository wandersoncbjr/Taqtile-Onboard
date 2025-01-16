import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from 'graphql/mutations/mutation-login/mutation-login';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
}

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: 'all',
  });
  const navigate = useNavigate();
  const [login, { error, loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      localStorage.setItem('token', `${data.login.token}`);
      navigate('/');
    },
  });

  const handleLoginFormSubmit = (formData: LoginFormData) => {
    login({
      variables: {
        login: {
          email: formData.email,
          password: formData.password,
        },
      },
    });
  };

  return {
    register,
    error,
    handleSubmit,
    errors,
    handleLoginFormSubmit,
    loading,
  };
}
