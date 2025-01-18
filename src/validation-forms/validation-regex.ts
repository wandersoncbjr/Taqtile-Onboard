export const validationRegex = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  password: /^(?=.*[a-zA-Z])(?=.*\d).+$/,
  name: /^\s*[a-zA-ZÀ-ÿ]+(\s+[a-zA-ZÀ-ÿ]+)+\s*$/,
  phone: /^\d{10,11}$/,
};
