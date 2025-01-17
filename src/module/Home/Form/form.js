"use client";
import React from "react";
import { useFormik } from "formik";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { formValidationSchema } from "../../../utils/formvalidation/ServicesForm";
import CustomAutoComplete from "../../../components/Autocomplete/CustumAutocomplete";
import CaspianButton from "../../../components/Button/Button";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      category: "",
      service: "",
      date: null,
      time: null,
      description: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Submitted Data:", values);
    },
  });

  const handleFieldChange = (field, value) => {
    formik.setFieldValue(field, value);
  };

  const getError = (field) =>
    Boolean(formik.touched[field] && formik.errors[field]);

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        background: "#f9f9f9",
        borderRadius: 2,
        padding: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Service Selection Form
      </Typography>

      <Box mb={2}>
        <CustomAutoComplete
          options={[{ value: "Category1", label: "Category 1" }, { value: "Category2", label: "Category 2" }]}
          label="Select Category"
          value={formik.values.category}
          onChange={(e, value) => handleFieldChange("category", value?.value)}
          placeholder="Select a category"
          textFieldProps={{
            error: getError("category"),
            size: "small",
          }}
        />
      </Box>

      <Box mb={2}>
        <CustomAutoComplete
          options={[{ value: "Service1", label: "Service 1" }, { value: "Service2", label: "Service 2" }]}
          label="Select Service"
          value={formik.values.service}
          onChange={(e, value) => handleFieldChange("service", value?.value)}
          placeholder="Select a service"
          textFieldProps={{
            error: getError("service"),
            size: "small",
          }}
        />
      </Box>

      <Box mb={2}>
        <DatePicker
          label="Select Date"
          value={formik.values.date}
          onChange={(value) => handleFieldChange("date", value)}
          slotProps={{
            textField: {
              fullWidth: true,
              error: getError("date"),
              helperText: formik.errors.date,
              size: "small",
            },
          }}
        />
      </Box>

      <Box mb={2}>
        <TimePicker
          label="Select Time"
          value={formik.values.time}
          onChange={(value) => handleFieldChange("time", value)}
          slotProps={{
            textField: {
              fullWidth: true,
              error: getError("time"),
              helperText: formik.errors.time,
              size: "small",
            },
          }}
        />
      </Box>

      <Box mb={2}>
        <TextField
          label="Description"
          multiline
          rows={3}
          value={formik.values.description}
          onChange={(e) => handleFieldChange("description", e.target.value)}
          fullWidth
          error={getError("description")}
          helperText={formik.errors.description}
          size="small"
        />
      </Box>

      <CaspianButton
        fullWidth
        type="submit"
        title="Submit"
        sx={{ background: "#34A76C", color: "#fff" }}
      />
    </Box>
  );
};

export default Form;