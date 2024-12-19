import { useEffect, useState, type PropsWithChildren } from 'react';

import { cn } from '@/lib/cssMerge';

import Portal from './Portal';

interface IModal extends PropsWithChildren {
  active: boolean;
  onClose: () => void;
}

const Modal = ({ active, children, onClose }: IModal) => {
  const [visible, setVisible] = useState<boolean>(active);

  useEffect(() => {
    let timer: NodeJS.Timeout | null;

    if (active) {
      setVisible(true);
    } else {
      timer = setTimeout(() => {
        setVisible(false);
      }, 300);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [active]);

  return (
    visible && (
      <Portal>
        <div className='fill-mode-forwards fixed inset-0'>
          <div
            className={cn(
              'fixed -z-[1] size-full bg-black/50',
              active ? 'animate-fade-in' : 'animate-fade-out',
            )}
            onClick={onClose}
          />
          <div
            className={cn(
              'absolute bottom-0 left-0 right-0 rounded-[1.2rem] rounded-b-none bg-background-secondary px-[1.6rem] pb-[3.2rem] pt-[1.6rem] sm:bottom-auto sm:left-1/2 sm:right-auto sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-b-[1.2rem]',
              active
                ? 'animate-slide-up sm:animate-fade-in'
                : 'animate-slide-down sm:animate-fade-out',
            )}
          >
            {children}
          </div>
        </div>
      </Portal>
    )
  );
};

export default Modal;
