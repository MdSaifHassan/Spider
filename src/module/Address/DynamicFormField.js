// src/Components/DynamicFormField/DynamicFormField.js
import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import CustomAutoComplete from "../../Components/Autocomplete/CustumAutocomplete";
import CustomTextField from "../../Components/TextField/Textfield";

const DynamicFormField = ({ field, formik, options = [] }) => {
  if (!formik) {
    return null;  
  }

  switch (field.component) {
    case "textField":
      return (
        <CustomTextField
          label={field.label}
          name={field.name}
          value={formik.values[field.name]}
          onChange={formik.handleChange}
          error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
          helperText={formik.touched[field.name] && formik.errors[field.name]}
          fullWidth
          multiline={field.multiline}
          rows={field.rows || 1}
          placeholder={field.placeholder}
          sx={{ mb: 2 }}
        />
      );
    case "autocomplete":
      return (
        <CustomAutoComplete
          options={options}
          label={field.label}
          name={field.name}
          value={formik.values[field.name]}
          onChange={(e, value) => formik.setFieldValue(field.name, value)}
          error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
          helperText={formik.touched[field.name] && formik.errors[field.name]}
          fullWidth
          autocompleteSx={{ mb: 2 }}
        />
      );
    case "checkbox":
      return (
        <FormControlLabel
          control={
            <Checkbox
              name={field.name}
              checked={formik.values[field.name]}
              onChange={formik.handleChange}
            />
          }
          label={field.label}
          sx={{ mb: 2 }}
        />
      );
    default:
      return null;
  }
};

export default DynamicFormField;
