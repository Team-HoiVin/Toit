'use client';

import type {
  IErrorResponse,
  ILogin,
  ILoginResponse,
} from '../_types/login.interface';

export const loginMutationFn = async (data: ILogin) => {
  const res = await fetch('/api/auth/signIn', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw result as IErrorResponse;
  }

  return result as ILoginResponse;
};
