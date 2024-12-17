export interface ISignup {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

type ErrorKeys = 'email' | 'nickname' | 'password';

export interface IErrorResponse {
  details: {
    [key in ErrorKeys]: {
      message: string;
    };
  };
  message: string;
}
