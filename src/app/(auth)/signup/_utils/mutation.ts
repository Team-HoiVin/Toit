'use client';

import type { ISignup, ISignUpResponse } from '../_types/signup.interface';

export const signUpMutationFn = async (data: ISignup) => {
  const res = await fetch('/auth/signUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result: ISignUpResponse = await res.json();

  return result;
};
