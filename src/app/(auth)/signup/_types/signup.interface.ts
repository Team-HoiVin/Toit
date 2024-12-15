export interface ISignup {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export interface ISignUpResponse {
  user: {
    id: number;
    nickname: string;
    createdAt: string;
    updatedAt: string;
    image?: string;
    teamId: string;
    email: string;
  };
  accessToken: string;
  refreshToken: string;
}
