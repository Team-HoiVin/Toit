'use client';

import { useId } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Link from 'next/link';

import Button from '@/components/button/Button';
import FormControl from '@/components/form/FormControl';
import FormLabel from '@/components/form/FormLabel';
import Input from '@/components/input/Input';

import type { ILogin } from '../_types/login.interface';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ mode: 'onChange' });

  const emailId = useId();
  const passwordId = useId();

  const onSubmit: SubmitHandler<ILogin> = () => {
    /**
     * @TODO login 로직 작성
     */
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  value: /\S+@\S+\.\S+/,
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
        <Button type='submit' className='mt-16 w-full'>
          로그인
        </Button>
      </form>
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

export default LoginForm;
