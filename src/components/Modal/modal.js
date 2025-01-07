import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CaspianButton from '@/components/Button/Button';

const CustomModal = ({ open, onClose, title, content, actions, sx, showCloseIcon = false, onSave }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          ...sx, 
        }}
      >
        {showCloseIcon && (
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'grey.500',
            }}
          >
            <CloseIcon />
          </IconButton>
        )}

        {title && (
          <Typography variant="h6" component="h2" gutterBottom>
            {title}
          </Typography>
        )}

        {content && (
          <Typography variant="body1" gutterBottom>
            {content}
          </Typography>
        )}

        {actions && (
          <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
            {actions.map((action, index) => (
              <CaspianButton key={index} {...action.props}>
                {action.label}
              </CaspianButton>
            ))}
            {onSave && (
              <CaspianButton
                variant="primary"
                onClick={onSave}
              >
                Save
              </CaspianButton>
            )}
          </Box>
        )}
      </Box>
    </Modal>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.node,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      props: PropTypes.object, 
    })
  ),
  sx: PropTypes.object, 
  showCloseIcon: PropTypes.bool,
  onSave: PropTypes.func,
};



export default CustomModal;
