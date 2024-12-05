'use client';

import React from 'react';

import { cn } from '@/lib/cssMerge';

import ProgressIcon from '../icon/ProgressIcon';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'small';
  isLoading?: boolean;
}

/**
 * Button 공통 컴포넌트
 *
 * 공통 Button 컴포넌트 입니다.
 * @param {'large' | 'small'} props.size - Button의 크기를 결정합니다. 기본값은 large 입니다.
 * @param {boolean} props.isLoading - 버튼 로딩 상태 값입니다.
 */

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.LegacyRef<HTMLButtonElement>) => {
    const {
      size = 'large',
      isLoading,
      type,
      className,
      disabled,
      children,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        type={type || 'button'}
        disabled={disabled || isLoading}
        className={cn(
          'relative block rounded-[1.2rem] px-[1.25rem] font-semibold',
          size === 'large' ? 'h-[4.8rem]' : 'h-[3.2rem] text-md',
          disabled ? 'cursor-not-allowed' : '',
          className,
        )}
        {...rest}
      >
        {isLoading ? <ProgressIcon size={19} /> : children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
