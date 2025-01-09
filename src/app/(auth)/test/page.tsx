import ClientApiField from './_components/ClientApiField';
import ServerApiField from './_components/ServerApiField';

const page = () => {
  return (
    <div>
      <h2 className='text-2xl font-semibold'>API TEST</h2>
      <p>회원 전용 API 정상 호출 시 아래에 표시</p>
      <ServerApiField />
      <ClientApiField />
    </div>
  );
};

export default page;
