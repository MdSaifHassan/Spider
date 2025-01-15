"use client"
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { formValidationSchema } from "../../../utils/formvalidation/ServicesForm";
import { updateForm } from "../../../utils/slices/formSlice";
import CustomAutoComplete from "../../../components/Autocomplete/CustumAutocomplete";
import CaspianButton from "../../../components/Button/Button";

const Form = () => {
  const dispatch = useDispatch();
  const { categories, services, formData } = useSelector((state) => state.form);

  const formik = useFormik({
    initialValues: {
      ...formData,
      date: formData.date ? new Date(formData.date) : null,
      time: formData.time ? new Date(formData.time) : null,
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Submitted Data:", values);
    },
  });

  const handleFieldChange = (field, value) => {
    const serializedValue =
      field === "date" || field === "time" ? value?.toISOString() : value;
    formik.setFieldValue(field, serializedValue);
    dispatch(updateForm({ [field]: serializedValue }));
  };

  const getError = (field) =>
    Boolean(formik.touched[field] && formik.errors[field]);

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        maxWidth: 350,
        mx: "auto",
        background: "#EEEEEEE5",
        borderRadius: 2,
        padding: 2,
      }}
    >
      <Typography variant="h5" fontWeight={"bold"} mb={2}>
        Select Our Services
      </Typography>

      <Box mb={2}>
        <CustomAutoComplete
          options={categories} 
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
          options={services} // No change here
          label="Select Services"
          value={formik.values.service}
          onChange={(e, value) => handleFieldChange("service", value?.value)} // Adjust value handling
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
          value={formik.values.date ? new Date(formik.values.date) : null}
          onChange={(value) => handleFieldChange("date", value)}
          minDate={new Date()}
          slotProps={{
            textField: {
              fullWidth: true,
              error: getError("date"),
              helperText: getError("date") ? "" : null,
              size: "small",
            },
          }}
        />
      </Box>

      <Box mb={2}>
        <TimePicker
          label="Select Time"
          value={formik.values.time ? new Date(formik.values.time) : null}
          onChange={(value) => handleFieldChange("time", value)}
          slotProps={{
            textField: {
              fullWidth: true,
              error: getError("time"),
              helperText: getError("time") ? "" : null,
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
