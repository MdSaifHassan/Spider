"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { formValidationSchema } from "../../../utils/formvalidation/ServicesForm";
import CaspianButton from "../../../components/Button/Button";
import LoginModal from "@/src/module/Login/page";
import CustomAutoComplete from "@/src/components/Autocomplete/CustumAutocomplete";

const Form = () => {
  const { isAuthenticated } = useSelector((state) => state.form);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

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
      if (isAuthenticated) {
        console.log("Submitted Data:", values);
      } else {
        setLoginModalOpen(true);
      }
    },
  });

  const handleFieldChange = (field, value) => {
    formik.setFieldValue(field, value);
  };

  const getError = (field) =>
    Boolean(formik.touched[field] && formik.errors[field]);

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          maxWidth: 400,
          mx: "auto",
          background: "#EEEEEEE5",
          borderRadius: 2,
          padding: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Service Selection Form
        </Typography>

        <Box mb={2}>
          <CustomAutoComplete
            options={[
              { value: "Category1", label: "Category 1" },
              { value: "Category2", label: "Category 2" },
            ]}
            label="Select Category"
            value={formik.values.category}
            onChange={(e, value) => handleFieldChange("category", value?.value)}
            placeholder="Select a category"
            textFieldProps={{
              error: getError("category"),
              size: "small",
              sx: getError("category") ? { borderColor: "red" } : {},
            }}
          />
        </Box>

        <Box mb={2}>
          <CustomAutoComplete
            options={[
              { value: "Service1", label: "Service 1" },
              { value: "Service2", label: "Service 2" },
            ]}
            label="Select Service"
            value={formik.values.service}
            onChange={(e, value) => handleFieldChange("service", value?.value)}
            placeholder="Select a service"
            textFieldProps={{
              error: getError("service"),
              size: "small",
              sx: getError("service") ? { borderColor: "red" } : {},
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
          size="medium"
          type="submit"
          title="Submit"
          sx={{ background: "#34A76C", color: "#fff", padding: '0.4rem 5rem', fontWeight: "bold" }}
        />
      </Box>

      <LoginModal
        open={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </>
  );
};

export default Form;


