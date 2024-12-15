'use client';

import type { ILogin } from '../_types/login.interface';

export const loginMutationFn = async (data: ILogin) => {
  const res = await fetch('/auth/signIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result;
};
