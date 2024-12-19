'use client';

import { useState } from 'react';

import Button from '@/components/button/Button';
import Modal from '@/components/modal/Modal';

const TestPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Button onClick={handleModalOpen}>modal open</Button>
      <Modal active={modalOpen} onClose={handleModalClose}>
        <div>모달 열려따</div>
      </Modal>
    </div>
  );
};

export default TestPage;
