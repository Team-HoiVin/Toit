import Image from 'next/image';

import { cn } from '@/lib/cssMerge';

interface IPasswordButtonProps {
  onClick: () => void;
  passwordState: boolean;
  disabled?: boolean;
}

const PASSWORD_ICON: Record<string, { src: string; alt: string }> = {
  true: {
    src: '/icons/visibility_off.svg',
    alt: '비밀번호 숨기기',
  },
  false: {
    src: '/icons/visibility_on.svg',
    alt: '비밀번호 보기',
  },
};

/**
 * PasswordButton 컴포넌트
 *
 * 비밀번호 입력 필드에서 비밀번호 숨기기/보기를 토글할 수 있는 버튼 컴포넌트입니다.
 * `disabled` 상태에 따라 다른 UI를 렌더링하며, 사용자 인터랙션을 처리합니다.
 *
 * @param {() => void} props.onClick - 토글 버튼 클릭 시 호출되는 핸들러 함수입니다.
 * @param {boolean} props.passwordState - 비밀번호 상태를 나타냅니다. `true`는 비밀번호 숨김 상태를, `false`는 보임 상태를 나타냅니다.
 * @param {boolean} [props.disabled] - 버튼 비활성화 상태를 나타냅니다. `true`일 경우 버튼이 클릭되지 않으며 대체 UI가 렌더링됩니다.
 */

const PasswordButton = ({
  onClick,
  passwordState,
  disabled,
}: IPasswordButtonProps) => {
  return (
    <div
      className={cn(
        'absolute right-[1.6rem] top-1/2 flex -translate-y-1/2 justify-end',
        !disabled && 'w-[3.8rem] bg-background-gradient',
      )}
    >
      {disabled ? (
        // TODO button 컴포넌트로 변경 필요
        <button>변경하기</button>
      ) : (
        <button
          type='button'
          onClick={onClick}
          className='relative size-[2.4rem]'
        >
          <Image
            src={PASSWORD_ICON[String(passwordState)].src}
            alt={PASSWORD_ICON[String(passwordState)].alt}
            fill
            sizes='maxWidth:100%'
          />
        </button>
      )}
    </div>
  );
};

export default PasswordButton;
