import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const CustomTextField = ({
  label,
  variant = 'outlined',
  size = 'medium',
  fullWidth = true,
  value,
  onChange,
  placeholder,
  type = 'text',
  helperText,
  error = false,
  disabled = false,
  InputProps,
  sx,
  ...rest
}) => {
  return (
    <TextField
      {...rest}
      label={label}
      variant={variant} 
      size={size} 
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      helperText={helperText}
      error={error}
      disabled={disabled}
      InputProps={InputProps}
      sx={sx}
    />
  );
};

CustomTextField.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  size: PropTypes.oneOf(['small', 'medium']),
  fullWidth: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  InputProps: PropTypes.object,
  sx: PropTypes.object,
};


export default CustomTextField;
