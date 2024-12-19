'use client';

import useModalState from '@/hooks/useModalState';

import Button from '@/components/button/Button';
import Modal from '@/components/modal/Modal';

const TestPage = () => {
  const { modalOpen, handleModalOpen, handleModalClose } = useModalState();

  return (
    <div>
      <Button onClick={handleModalOpen}>modal open</Button>
      <Modal active={modalOpen} onClose={handleModalClose} closeButton>
        <div>모달 열려따</div>
      </Modal>
    </div>
  );
};

export default TestPage;
