import TitleContentLayout from '@/components/common/TitleContentLayout';

import QuickAuth from '../_components/QuickAuth';

import SignupForm from './_components/SignupForm';

const page = () => {
  return (
    <TitleContentLayout title='회원가입'>
      <div className='grid gap-[2.4rem] lg:gap-[4.8rem]'>
        <SignupForm />
        <QuickAuth title={'간편 회원가입하기'} />
      </div>
    </TitleContentLayout>
  );
};

export default page;
