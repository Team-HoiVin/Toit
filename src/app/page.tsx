import React from 'react';

import Input from '@/components/input/Input';
import ZustandTest from '@/components/ZustandTest';

const page = () => {
  return (
    <div>
      <ZustandTest />
      <div className='my-4 grid gap-4'>
        <Input size='small' placeholder='size : small' />
        <Input size='large' placeholder='size : large' />
        <label htmlFor='error'>error</label>
        <div>
          <Input
            id='error'
            size='large'
            placeholder='error'
            error
            helperText='이메일을 입력해주세요'
          />
        </div>
        <Input
          size='large'
          placeholder='비밀번호(영문, 숫자 포함, 12자 이내)를 입력해주세요.'
          password
        />
        <Input size='large' disabled placeholder='disabled' />
        <Input size='large' placeholder='password disabled' disabled password />
      </div>
    </div>
  );
};

export default page;
