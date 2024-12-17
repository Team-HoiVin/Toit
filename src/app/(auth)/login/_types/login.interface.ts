export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: {
    id: number;
    nickname: string;
    createdAt: string;
    updatedAt: string;
    image?: null;
    teamId: string;
    email: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface IErrorResponse {
  details: {
    [key in keyof ILogin]: {
      message: string;
    };
  };
  message: string;
}
