import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFontStyles } from "@/components/FontSizeProvider";
import { Button } from 'react-bootstrap';

const CustomButton = ({
  type = 'button',
  variant = 'primary',
  size,
  isOutline = false,
  isDisabled = false,
  isBlock = false,
  onClick,
  children,
  className = '',
}) => {
  const colorMap = {
    primary: '#3874ff',
    danger: '#EC1F00',
    success: '#25b003',
    dark: 'black',
    light: '#fff',
  };

  const btnClass = `btn ${isBlock ? 'd-block w-100' : ''} ${className}`.trim();
  const { fontSizes, fontFamily, fontWeight } = useFontStyles();
  
  const buttonStyles = {
    fontFamily,
    fontWeight,
    fontSize: fontSizes.header,
    backgroundColor: isOutline ? 'transparent' : colorMap[variant],
    color: isOutline ? colorMap[variant] : variant === 'light' ? 'black' : 'white',
    border: `1px solid ${colorMap[variant]}`,
  };

  return (
    <Button
      type={type}
      className={btnClass}
      disabled={isDisabled}
      onClick={onClick}
      style={buttonStyles}
      size={size}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
  size: PropTypes.oneOf(['sm', 'lg']),
  isOutline: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isBlock: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CustomButton;
