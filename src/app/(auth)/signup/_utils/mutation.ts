'use client';

import type { IErrorResponse, ISignup } from '../_types/signup.interface';
import type { ILoginResponse } from '../../login/_types/login.interface';

export const signUpMutationFn = async (data: ISignup) => {
  const res = await fetch('/api/auth/signUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw result as IErrorResponse;
  }

  return result as ILoginResponse;
};
