import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

const getUser = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  const res = await fetch(`${process.env.BASE_URL}/api/user`, {
    cache: 'force-cache',
    headers: {
      Cookie: `accessToken=${accessToken?.value}`,
    },
  });
  const result = await res.json();
  if (!result) notFound();

  return result;
};

const ServerApiField = async () => {
  const user = await getUser();

  return (
    <div>
      서버에서 호출했습니다.
      <p className='text-slate-400'>{JSON.stringify(user)}</p>
    </div>
  );
};

export default ServerApiField;
