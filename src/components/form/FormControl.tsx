import type { PropsWithChildren } from 'react';

interface IFormControl extends PropsWithChildren {}

const FormControl = ({ children }: IFormControl) => {
  return <div className='grid gap-[1.2rem]'>{children}</div>;
};

export default FormControl;
