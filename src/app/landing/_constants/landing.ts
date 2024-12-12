import type { LandingFeature } from '../_types/landing.type';

export const LANDING_FEATURES: LandingFeature[] = [
  {
    image: {
      src: '/images/landing/info-1.png',
      alt: 'info-1',
    },
    icon: {
      src: '/images/icon/folder.svg',
      alt: 'folder',
    },
    description: '그룹으로\n할 일을 관리해요',
  },
  {
    image: {
      src: '/images/landing/info-2.png',
      alt: 'info-2',
    },
    icon: {
      src: '/images/icon/message.svg',
      alt: 'message',
    },
    description: '간단하게 맴버들을\n초대해요',
    reverse: true,
  },
  {
    image: {
      src: '/images/landing/info-3.png',
      alt: 'info-3',
    },
    icon: {
      src: '/images/icon/done.svg',
      alt: 'done',
    },
    description: '할 일도 간편하게\n체크해요',
  },
];
