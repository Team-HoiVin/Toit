import React from 'react';

import Image from 'next/image';

import Button from '@/components/button/Button';

const LandingPage = () => {
  return (
    <>
      <section className='bg-landig-intro-large-img bg-contain bg-top bg-no-repeat pb-[12rem] pt-[8.4rem]'>
        <div className='text-center'>
          <h2 className='mb-8 text-5xl font-semibold'>
            함께 만들어가는 투두리스트
          </h2>
          <p className='inline-block bg-brand-gradient bg-clip-text text-6xl font-semibold text-transparent'>
            TOIT
          </p>
          <div className='relative mb-[13.4rem] mt-[5.6rem] aspect-[1535/484]'>
            <Image
              src={'/images/landing/train-large.svg'}
              alt='intro-train'
              fill
              className='object-contain'
              priority
            />
          </div>
          <Button
            pill
            className='m-auto min-w-[37.3rem] bg-brand-gradient font-semibold'
          >
            지금 시작하기
          </Button>
        </div>
      </section>
      <section className='pt-[6rem]'>
        <ul className='m-auto box-content grid max-w-[99.6rem] gap-[8rem] p-[2.4rem]'>
          <li className='randing-border-gradient flex aspect-[996/419] items-end justify-center gap-[6.7rem] rounded-[4rem] shadow-light backdrop-blur-[0.6rem]'>
            <div className='relative aspect-[291/338] w-full max-w-[29.1rem]'>
              <Image
                src={'/images/landing/info-1.png'}
                alt='info-1'
                fill
                className='object-contain'
              />
            </div>
            <div className='grid size-full max-w-[29.1rem] items-center justify-end'>
              <div>
                <div className='mb-[1.6rem] grid size-[4.8rem] place-items-center rounded-[1.2rem] border border-border-primary/10 bg-background-secondary shadow-dark'>
                  <div className='relative size-[2.4rem]'>
                    <Image
                      src={'/images/icon/folder.svg'}
                      alt='folder'
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
                <p className='text-2xl font-medium text-text-primary'>
                  그룹으로
                  <br />할 일을 관리해요
                </p>
              </div>
            </div>
          </li>
          <li className='flex aspect-[996/419] flex-row-reverse items-start justify-center gap-[6.7rem] rounded-[4rem] border border-border-primary/10 bg-background-secondary'>
            <div className='relative aspect-[291/338] w-full max-w-[29.1rem] self-start'>
              <Image
                src={'/images/landing/info-2.png'}
                alt='info-2'
                fill
                className='object-contain'
              />
            </div>
            <div className='grid aspect-[291/338] size-full max-w-[29.1rem] items-center justify-start'>
              <div>
                <div className='mb-[1.6rem] ml-auto grid size-[4.8rem] place-items-center rounded-[1.2rem] border border-border-primary/10 bg-background-secondary shadow-dark'>
                  <div className='relative size-[2.4rem]'>
                    <Image
                      src={'/images/icon/message.svg'}
                      alt='message'
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
                <p className='text-right text-2xl font-medium text-text-primary'>
                  간단하게 맴버들을
                  <br />
                  초대해요
                </p>
              </div>
            </div>
          </li>
          <li className='flex aspect-[996/419] items-start justify-center gap-[6.7rem] rounded-[4rem] bg-slate-950'>
            <div className='relative aspect-[291/338] w-full max-w-[29.1rem]'>
              <Image
                src={'/images/landing/info-3.png'}
                alt='info-3'
                fill
                className='object-contain'
              />
            </div>
            <div className='grid aspect-[291/338] size-full w-full max-w-[29.1rem] items-center justify-end'>
              <div>
                <div className='mb-[1.6rem] grid size-[4.8rem] place-items-center rounded-[1.2rem] border border-border-primary/10 bg-background-secondary shadow-dark'>
                  <div className='relative size-[2.4rem]'>
                    <Image
                      src={'/images/icon/done.svg'}
                      alt='done'
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
                <p className='text-2xl font-medium text-text-primary'>
                  할 일도 간편하게
                  <br />
                  체크해요
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3>지금 바로 시작해보세요</h3>
        <p>팀원 모두와 같은 방향, 같은 속도로 나아가는 가장 쉬운 방법</p>
      </section>
    </>
  );
};

export default LandingPage;
