import type { PropsWithChildren } from 'react';

interface IFormControl extends PropsWithChildren {}

/**
 * FormControl 컴포넌트
 *
 * 이 컴포넌트는 `label`과 `input` 같은 폼 요소를 감싸며, 요소 간의 간격(`gap`)을 지정합니다.
 * React의 `PropsWithChildren`을 상속하여 자식 요소를 동적으로 렌더링할 수 있습니다.
 *
 * @param {React.ReactNode} props.children - FormControl 안에 들어갈 자식 요소를 지정합니다.
 */

const FormControl = ({ children }: IFormControl) => {
  return <div className='grid gap-[1.2rem]'>{children}</div>;
};

export default FormControl;
