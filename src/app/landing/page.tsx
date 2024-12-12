import React from 'react';

import FeatureCard from '@/app/landing/_components/FeatureCard';
import { LANDING_FEATURES } from '@/app/landing/_constants/landing';
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
          {LANDING_FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              image={feature.image}
              icon={feature.icon}
              description={feature.description}
              reverse={feature.reverse}
              isFirst={index === 0}
            />
          ))}
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
