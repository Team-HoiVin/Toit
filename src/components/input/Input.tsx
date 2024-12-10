'use client';

import { forwardRef, useState } from 'react';

import { cn } from '@/lib/cssMerge';

import PasswordButton from '../button/PasswordButton';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'large' | 'small';
  error?: boolean;
  helperText?: string;
  password?: boolean;
}

/**
 * Input 공통 컴포넌트
 *
 * 다양한 옵션을 지원하는 Input 컴포넌트입니다. 크기, 에러 메시지, 비밀번호 입력, 및 기타 속성을 커스터마이징할 수 있습니다.
 *
 * @param {'large' | 'small'} props.size - Input의 크기를 결정합니다. `large` 또는 `small` 중 하나를 선택할 수 있습니다.
 * @param {boolean} [props.error] - 에러 상태를 나타냅니다. `true`일 경우 에러 스타일이 적용됩니다.
 * @param {string} [props.helperText] - 에러 메시지나 보조 텍스트를 표시합니다. `error`가 `true`일 때만 표시됩니다.
 * @param {boolean} [props.password] - 비밀번호 입력 필드로 설정합니다. `true`일 경우 비밀번호 숨기기/보기 토글 버튼이 활성화됩니다.
 */

const Input = (
  {
    type,
    size = 'large',
    error,
    helperText,
    disabled,
    password,
    ...rest
  }: InputProps,
  ref: React.LegacyRef<HTMLInputElement>,
) => {
  const [passwordOff, setPasswordOff] = useState(true);

  const handlePasswordState = () => {
    setPasswordOff(!passwordOff);
  };

  return (
    <div>
      <div
        className={cn(
          'relative',
          size === 'large' ? 'h-[44px] sm:h-[48px]' : 'h-[44px]',
        )}
      >
        <input
          ref={ref}
          type={password ? (passwordOff ? 'password' : 'text') : type}
          disabled={disabled}
          className={cn(
            'h-full w-full rounded-[1.2rem] border border-solid border-border-primary bg-background-secondary px-[1.6rem] text-md text-text-primary outline-none placeholder:text-text-default sm:text-base',
            size === 'small' && 'sm:text-md',
            error
              ? 'border-status-danger'
              : !disabled &&
                  'hover:border-interaction-hover focus:border-interaction-focus',
            disabled && 'bg-background-tertiary',
            password && (disabled ? 'pr-36' : 'pr-16'),
          )}
          {...rest}
        />
        {password && (
          <PasswordButton
            onClick={handlePasswordState}
            passwordState={passwordOff}
            disabled={disabled}
          />
        )}
      </div>
      {error && helperText && (
        <div className='mt-[1.2rem] text-md font-medium text-status-danger sm:mt-[0.8rem]'>
          {helperText}
        </div>
      )}
    </div>
  );
};

export default forwardRef(Input);
