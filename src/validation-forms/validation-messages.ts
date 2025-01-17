export const errorMessages = {
  email: {
    required: 'E-mail é obrigatório',
    pattern: 'Por favor, insira um e-mail válido',
  },
  password: {
    required: 'Senha é obrigatória',
    minLength: 'A senha deve ter pelo menos 7 caracteres',
    pattern: 'Senha deve conter pelo menos uma letra e um número',
  },
  name: {
    required: 'O Nome Completo é obrigatório',
    pattern: 'O Nome Completo deve conter pelo menos um nome e um sobrenome',
  },
  phone: {
    required: 'O número de Telefone é obrigatório',
    pattern: 'O número de Telefone deve conter apenas números e ter entre 10 e 11 dígitos',
  },
  role: {
    required: 'O Cargo é obrigatório',
  },

  birthDate: {
    required: 'A Data de Nascimento é obrigatória',
    futureDate: 'A data de nascimento não pode estar no futuro.',
    minDate: 'A data de nascimento deve ser posterior a 01/01/1900.',
  },
};
