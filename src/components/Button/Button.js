import React from 'react';
import { Button } from '@mui/material';

const CASPIAN_TO_MUI_VARIANTS = {
  primary: 'contained',
  secondary: 'outlined',
  tertiary: 'text',
  custom: 'contained',
  custom2: 'contained', 
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
      sx={
        variant === 'custom'
          ? {
              ...sx,
              backgroundColor: '#009688',
              color:"#fff",
              '&:hover': { backgroundColor: '#00796b' },
            }
          : variant === 'custom2'
          ? {
              ...sx,
              backgroundColor: '#ffffff',
              '&:hover': { boxShadow:"none" },
              border: '1px solid #34A76C',
              color: '#34A76C',
              borderRadius: '5px',
              padding: '5px 20px',
              boxShadow:"none"
            }
          : sx
      }
    >
      {children}
    </Button>
  );
};

export default CaspianButton;
