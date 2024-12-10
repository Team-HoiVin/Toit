import type { PropsWithChildren } from 'react';

interface IFormLabel
  extends PropsWithChildren,
    React.LabelHTMLAttributes<HTMLLabelElement> {}

/**
 * FormLabel 컴포넌트
 *
 * 이 컴포넌트는 폼의 `label` 요소를 렌더링하며, `input` 요소와의 연결을 지원합니다.
 * React의 기본 `label` 속성을 확장하므로, HTML 기본 속성과 추가 속성을 함께 사용할 수 있습니다.
 *
 * @param {React.ReactNode} props.children - 라벨 안에 렌더링할 내용을 지정합니다.
 */

const FormLabel = ({ children, ...rest }: IFormLabel) => {
  return (
    <label className='font-medium text-text-primary' {...rest}>
      {children}
    </label>
  );
};

export default FormLabel;
