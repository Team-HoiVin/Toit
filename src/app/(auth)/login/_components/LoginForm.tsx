'use client';

import { useId } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';

import Button from '@/components/button/Button';
import FormControl from '@/components/form/FormControl';
import FormLabel from '@/components/form/FormLabel';
import Input from '@/components/input/Input';

import type { IErrorResponse, ILogin } from '../_types/login.interface';
import { loginMutationFn } from '../_utils/mutation';
import { EMAIL_PATTERN } from '../../_constants/validationPatterns';

const cookies = new Cookies();

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<ILogin>({ mode: 'onChange' });

  const emailId = useId();
  const passwordId = useId();

  const loginMutation = useMutation({
    mutationFn: loginMutationFn,
    onSuccess: (res) => {
      cookies.set('accessToken', res.accessToken);
      cookies.set('refreshToken', res.refreshToken);
      router.push('/');
    },
    onError: (error: IErrorResponse) => {
      console.error('Failed to login', error);

      const errorKeys = Object.keys(error.details) as Array<
        keyof typeof error.details
      >;

      setError(errorKeys[0], { message: error.message });
    },
  });

  const handleLogin: SubmitHandler<ILogin> = (data: ILogin) => {
    loginMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className='grid gap-[2.4rem]'>
        {/* email field */}
        <FormControl>
          <FormLabel htmlFor={emailId}>이메일</FormLabel>
          <Input
            id={emailId}
            type='email'
            placeholder='이메일을 입력해 주세요.'
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value: EMAIL_PATTERN,
                message: '이메일 형식으로 작성해 주세요.',
              },
            })}
          />
        </FormControl>
        {/* password field */}
        <FormControl>
          <FormLabel htmlFor={passwordId}>비밀번호</FormLabel>
          <Input
            id={passwordId}
            password
            placeholder='비밀번호를 입력해 주세요.'
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            {...register('password', {
              required: '비밀번호는 필수 입력입니다.',
            })}
          />
        </FormControl>
      </div>
      <p className='mt-[1.2rem] text-right'>
        <Link href={'#none'} className='green-underline leading-[1.7]'>
          비밀번호를 잊으셨나요?
        </Link>
      </p>
      <Button
        type='submit'
        disabled={!isValid}
        isLoading={loginMutation.isPending}
        className='mt-16 w-full'
      >
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
