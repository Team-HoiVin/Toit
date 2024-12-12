import React from 'react';

import Image from 'next/image';

import { cn } from '@/lib/cssMerge';

interface FeatureCardProps {
  image: {
    src: string;
    alt: string;
  };
  icon: {
    src: string;
    alt: string;
  };
  description: string;
  reverse?: boolean;
  isFirst?: boolean;
}

const FeatureCard = ({
  image,
  icon,
  description,
  reverse,
  isFirst,
}: FeatureCardProps) => {
  return (
    <li
      className={cn(
        'flex aspect-[996/419] items-start justify-center gap-[6.7rem] rounded-[4rem]',
        reverse && 'flex-row-reverse',
        isFirst
          ? 'landing-border-gradient shadow-light backdrop-blur-[0.6rem]'
          : 'border border-border-primary/10 bg-background-secondary',
      )}
    >
      <div className='relative aspect-[291/338] w-full max-w-[29.1rem]'>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className='object-contain'
          sizes='max-width:24px'
        />
      </div>
      <div
        className={cn(
          'grid aspect-[291/338] size-full max-w-[29.1rem] items-center',
          reverse ? 'justify-start' : 'justify-end',
        )}
      >
        <div>
          <div
            className={cn(
              'mb-[1.6rem] grid size-[4.8rem] place-items-center rounded-[1.2rem] border border-border-primary/10 bg-background-secondary shadow-dark',
              reverse && 'ml-auto',
            )}
          >
            <div className='relative size-[2.4rem]'>
              <Image
                src={icon.src}
                alt={icon.alt}
                fill
                className='object-contain'
              />
            </div>
          </div>
          <p
            className={cn(
              'text-2xl font-medium text-text-primary',
              reverse && 'text-right',
            )}
          >
            {description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index !== description.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </li>
  );
};

export default FeatureCard;
