import React, { useState } from 'react';
import CustomModal from '@/components/Modal/modal';
import CaspianButton from '@/components/Button/Button';
import CustomTextField from '@/components/TextField/Textfield';

const ModalExamplePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState(''); 

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    console.log('Save button clicked with input:', inputValue);
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <CaspianButton
        variant="primary"
        onClick={handleOpenModal}
        title="Open Modal"
      >
        Open Modal
      </CaspianButton>

      <CustomModal
        open={isModalOpen}
        onClose={handleCloseModal}
        title="Modal Title"
        content={
          <>
            <p>This is the modal content.</p>
            <CustomTextField
              label="Enter some text"
              value={inputValue}
              helperText="This is a custom text field."
              onChange={handleInputChange}
              placeholder="Type something..."
            />
          </>
        }
        actions={[
          {
            label: 'Close',
            props: {
              variant: 'secondary',
              onClick: handleCloseModal,
            },
          },
        ]}
        onSave={handleSave}
      />
    </div>
  );
};

export default ModalExamplePage;
