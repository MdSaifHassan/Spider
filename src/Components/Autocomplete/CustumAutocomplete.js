import React from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

const CustomAutoComplete = ({
  options = [],
  label = "",
  onChange = () => {},
  value = null,
  multiple = false,
  disableCloseOnSelect = false,
  isOptionEqualToValue = (option, value) => option === value,
  getOptionLabel = (option) => option.label || option,
  renderOption = (props, option) => (
    <Box {...props} key={option.id || option}>
      {option.label || option}
    </Box>
  ),
  placeholder = "Type to search...",
  fullWidth = true,
  autocompleteSx = {},
  textFieldSx = {}, 
  textFieldProps = {}, 
  variant = "outlined", 
  disableOverlay = false, 
  SideIcon=false,
}) => {
  return (
    <Autocomplete
      freeSolo={SideIcon}
      options={options}
      value={value}
      onChange={onChange}
      multiple={multiple}
      disableCloseOnSelect={disableCloseOnSelect}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      disablePortal={disableOverlay} 
      
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          variant={variant}
          sx={{ ...textFieldSx}} 
          {...textFieldProps}
        />
      )}
      fullWidth={fullWidth}
      sx={{
        ...autocompleteSx,padding:"0px"
      }}
    />
  );
};

export default CustomAutoComplete;

