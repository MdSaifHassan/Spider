import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PropTypes from 'prop-types';

const CustomSelect = ({
  label,
  value,
  onChange,
  options,
  fullWidth = true,
  variant = 'outlined',
  color = 'primary',
  size = 'medium',
  disabled = false,
  error = false,
  helperText = '',
  sx = {},
  placeholder = '',
  ...selectProps
}) => {
  return (
    <FormControl
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      error={error}
      sx={sx.formControl}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        label={label}
        value={value}
        onChange={onChange}
        {...selectProps}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) {
            return <em>{placeholder}</em>;  
          }
          return selected;
        }}
        sx={sx.select}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={sx.menuItem}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && (
        <p style={{ color: error ? 'red' : 'grey', fontSize: '0.75rem', margin: '4px 14px 0' }}>
          {helperText}
        </p>
      )}
    </FormControl>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.node.isRequired,
    })
  ).isRequired,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  sx: PropTypes.object,
  placeholder: PropTypes.string, 
};

export default CustomSelect;
