import TitleContentLayout from '@/components/common/TitleContentLayout';

import SignupForm from './_components/SignupForm';

const page = () => {
  return (
    <TitleContentLayout title='회원가입'>
      <SignupForm />
    </TitleContentLayout>
  );
};

export default page;
