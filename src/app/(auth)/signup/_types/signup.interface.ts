export interface ISignup {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export interface IErrorResponse {
  details: {
    [key in keyof ISignup]: {
      message: string;
    };
  };
  message: string;
}
