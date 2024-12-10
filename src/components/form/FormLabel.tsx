import type { PropsWithChildren } from 'react';

interface IFormLabel
  extends PropsWithChildren,
    React.LabelHTMLAttributes<HTMLLabelElement> {}

const FormLabel = ({ children, ...rest }: IFormLabel) => {
  return (
    <label className='font-medium text-text-primary' {...rest}>
      {children}
    </label>
  );
};

export default FormLabel;
