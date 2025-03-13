import React from "react";
import { Button, IconButton } from "@mui/material";

const CASPIAN_TO_MUI_VARIANTS = {
  primary: "contained",
  secondary: "outlined",
  tertiary: "text",
  custom: "contained",
  custom2: "contained",
  custom3: "contained",
};

export const CaspianButton = ({
  type = "button",
  variant = "primary",
  size = "medium",
  color = "cta",
  isDisabled = false,
  onClick,
  onStartIconClick, 
  onEndIconClick, 
  title,
  children = title,
  startIcon,
  endIcon,
  isIconButton = false,
  className = "", 
  DisableIcon,
  sx,
  background="none",
  ...rest
}) => {
  if (isIconButton) {
    return (
      <IconButton
        {...rest}
        onClick={onClick}
        disabled={isDisabled}
        className={className}
        disableRipple
        sx={{
          ...sx,
          padding: "8px",
          color: variant === "custom" ? "#fff" : "inherit",
          backgroundColor: variant === "custom" ? "#009688" : "transparent",
          "&:hover": {
            backgroundColor: variant === "custom" ? "#00796b" : "transparent",
          },
        }}
      >
        {startIcon}
      </IconButton>
    );
  }

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
        variant === "custom"
          ? {
              ...sx,
              backgroundColor: "#009688",
              color: "#fff",
              "&:hover": { backgroundColor: "#00796b" },
            }
          : variant === "custom2"
          ? {
              ...sx,
              backgroundColor: "#ffffff",
              "&:hover": { boxShadow: "none" },
              border: "1px solid #34A76C",
              color: "#34A76C",
              borderRadius: "5px",
              padding: "5px 20px",
              boxShadow: "none",
            }
          : variant === "custom3"
          ? {
              ...sx,
              backgroundColor: "#34A76C",
              color: "#fff",
            }
            : variant === "IconBtn"
            ? {
                ...sx,
                padding:"1px 5px",
                backgroundColor: "#ffffff",
                "&:hover": { boxShadow: "none" },
                border: "1px solid #34A76C",
                color: "#34A76C",
                borderRadius: "5px",
                boxShadow: "none",
              }
            : sx
      }
      startIcon={
        startIcon && (
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation(); 
              onStartIconClick && onStartIconClick();
            }}
            disabled={DisableIcon} 
          >
            {startIcon}
          </IconButton>
        )
      }
      endIcon={
        endIcon && (
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation(); 
              onEndIconClick && onEndIconClick();
            }}
          >
            {endIcon}
          </IconButton>
        )
      }
    >
      {children}
    </Button>
  );
};

export default CaspianButton;

