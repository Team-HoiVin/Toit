'use client';

import React from 'react';

import { cn } from '@/lib/cssMerge';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'small';
}

/**
 * Button 공통 컴포넌트
 *
 * 공통 Button 컴포넌트 입니다.
 * @param {'large' | 'small'} props.size - Button의 크기를 결정합니다. 기본값은 large 입니다.
 */

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.LegacyRef<HTMLButtonElement>) => {
    const {
      size = 'large',
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
        disabled={disabled}
        className={cn(
          'relative box-border rounded-[1.2rem] px-[1.25rem] font-semibold',
          size === 'large' ? 'h-[4.8rem]' : 'h-[3.2rem] text-md',
          disabled ? 'cursor-not-allowed' : '',
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
