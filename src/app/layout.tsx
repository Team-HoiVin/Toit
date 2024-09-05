import '@/styles/global.css';

import type { Metadata, NextPage } from 'next';
import React from 'react';

import ReactQueryProvider from '@/components/provider/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'Toit',
  description: 'Together do it! Toit',
};

const RootLayout: NextPage<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <html lang='ko'>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
