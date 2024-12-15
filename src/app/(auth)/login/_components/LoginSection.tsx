'use client';

import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';

import type { ILogin } from '../_types/login.interface';
import { loginMutationFn } from '../_utils/mutation';

import LoginForm from './LoginForm';

const cookies = new Cookies();

const LoginSection = () => {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: loginMutationFn,
    onSuccess: (res) => {
      cookies.set('accessToken', res.accessToken);
      cookies.set('refreshToken', res.refreshToken);
      router.push('/');
    },
    onError: (error) => {
      console.error('Failed to login', error);
    },
  });

  const handleLogin = (data: ILogin) => {
    loginMutation.mutate(data);
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
      <div className='my-[2.4rem] flex flex-wrap items-center justify-center gap-[1.2rem] sm:mb-[4.8rem]'>
        <p className='text-md font-medium leading-[1.2] text-text-primary sm:text-base sm:leading-[1.2]'>
          아직 계정이 없으신가요?
        </p>
        <Link href={'/signup'} className='green-underline leading-normal'>
          가입하기
        </Link>
      </div>
    </div>
  );
};

export default LoginSection;
