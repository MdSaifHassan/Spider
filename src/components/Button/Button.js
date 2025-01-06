import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const CustomButton = ({
  type = 'button',
  variant = 'contained', // 'contained', 'outlined', or 'text' for MUI
  size = 'medium',       // 'small', 'medium', or 'large' for MUI
  color = 'primary',     // 'primary', 'secondary', 'success', 'error', 'info', 'warning', or 'inherit'
  isDisabled = false,
  onClick,
  children,
  className = '',
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      color={color}
      disabled={isDisabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning', 'inherit']),
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CustomButton;
