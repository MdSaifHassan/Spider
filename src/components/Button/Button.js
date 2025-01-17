import React from 'react';
import { Button } from '@mui/material';

const CASPIAN_TO_MUI_VARIANTS = {
  primary: 'contained',
  secondary: 'outlined',
  tertiary: 'text',
  custom: 'contained',
};

export const CaspianButton = ({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  color = 'cta',
  isDisabled = false,
  onClick,
  title,
  children = title,
  className = '',
  sx,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      type={type}
      variant={CASPIAN_TO_MUI_VARIANTS[variant]}
      size={size}
      color={color}
      disabled={isDisabled}
      onClick={onClick}
      className={className}
      disableRipple
      sx={variant === 'custom' ? { ...sx, backgroundColor: '#009688', '&:hover': { backgroundColor: '#00796b' } } : sx}
    >
      {children}
    </Button>
  );
};

export default CaspianButton;
