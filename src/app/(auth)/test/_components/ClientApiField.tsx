'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

const ClientApiField = () => {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => fetch('/api/user').then((res) => res.json()),
  });

  return (
    <div>
      클라이언트에서 호출했습니다.
      <p className='text-slate-400'>{JSON.stringify(data)}</p>
    </div>
  );
};

export default ClientApiField;
