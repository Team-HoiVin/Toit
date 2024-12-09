interface TitleContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

/**
 * TitleContentLayout
 *
 * 페이지 상단에 제목(title)을 표시하고, 그 하단에 자식 요소(children)를 렌더링하는 레이아웃 컴포넌트입니다.
 *
 * @param {string} title 페이지 타이틀로, 주 콘텐츠의 주제를 나타냅니다.
 * @param {React.ReactNode} children 타이틀 하단에 렌더링되는 콘텐츠입니다.
 */
const TitleContentLayout = ({ title, children }: TitleContentLayoutProps) => {
  return (
    <section className='mx-auto min-h-[calc(100dvh-60px)] w-full max-w-[460px] px-[1.6rem]'>
      <div className='py-[2.4rem] sm:py-40 lg:py-56'>
        <div className='grid gap-[2.4rem] sm:gap-32'>
          <h1 className='break-keep text-center text-2xl font-medium text-text-primary lg:text-4xl'>
            {title}
          </h1>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default TitleContentLayout;
