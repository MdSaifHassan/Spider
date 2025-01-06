import React from "react";
import { TextField, MenuItem } from "@mui/material";

const ReusableInputField = ({ field, value, onChange }) => {
  if (field.type === "dropdown") {
    return (
      <TextField
        select
        fullWidth
        label={field.label}
        value={value}
        onChange={onChange}
        variant="outlined"
        margin="normal"
      >
        {field.options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }

  return (
    <TextField
      fullWidth
      label={field.label}
      type={field.type}
      value={value}
      onChange={onChange}
      variant="outlined"
      margin="normal"
    />
  );
};

export default ReusableInputField;
