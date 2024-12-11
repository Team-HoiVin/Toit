import TitleContentLayout from '@/components/common/TitleContentLayout';

import SocialLogin from '../_components/SocialLogin';

import LoginForm from './_components/LoginForm';

const page = () => {
  return (
    <TitleContentLayout title='로그인'>
      <LoginForm />
      <SocialLogin title='간편 로그인하기' />
    </TitleContentLayout>
  );
};

export default page;
