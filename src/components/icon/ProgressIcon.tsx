'use client';

import React from 'react';

import { motion } from 'framer-motion';

interface ProgressIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
}

/**
 * Progress Icon
 *
 * 커스텀하게 사용할 수 있는 원형 모양의 Progress Icon입니다.
 * @param {number} props.size - Progress Icon의 크기를 결정합니다. 기본값은 20입니다 * 단위 px 기준
 */

const ProgressIcon = (props: ProgressIconProps) => {
  const { size = 20 } = props;
  const radius = size / 2;
  const stroke = size / 10;
  const round = radius - stroke / 2;
  const offset = Math.round(2 * Math.PI * round);

  return (
    <motion.span
      className='inline-block'
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.4,
        ease: 'linear',
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox={`0 0 ${size} ${size}`}
        className='block stroke-current'
      >
        <motion.circle
          cx={radius}
          cy={radius}
          r={round}
          stroke='currentColor'
          fill='none'
          strokeWidth={stroke}
          strokeDasharray={offset}
          strokeDashoffset={offset}
          animate={{
            strokeDashoffset: [offset, 0, -offset],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.4,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </motion.span>
  );
};

export default ProgressIcon;
