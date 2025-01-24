export interface User {
  id: number;
  username: string;
  token: string;
}

export interface LoginForm {
  username: string;
  password: string;
}

export interface RegisterForm extends LoginForm {
  passwordConfirm: string;
}
