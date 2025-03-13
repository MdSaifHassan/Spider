"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import CustomTextField from "@/src/Components/TextField/Textfield";
import CaspianButton from "@/src/Components/Button/Button";
import { useForgotPassword } from "@/src/api/api";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [apiError, setApiError] = useState("");
  const { mutate, isLoading } = useForgotPassword();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.string().required("Mobile is required"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      setApiError("");
      mutate(values, {
        onSuccess: (data) => {
          if (data?.result === "success") {
            router.push("/Login");
          } else {
            setApiError("Failed to reset password. Please try again.");
          }
        },
        onError: (error) => {
          setApiError(error?.message || "An error occurred.");
        },
      });
    },
  });

  return (
    <Container maxWidth="xs" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Paper sx={{ p: 4, borderRadius: 3, width: "100%" }} elevation={3}>
        <Typography variant="h5" sx={{ mb: 3, color: "#34A76C", textAlign: "center" }}>
          Forgot Password
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <CustomTextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            onBlur={formik.handleBlur}
            fullWidth
            sx={{ mb: 2 }}
          />

          <CustomTextField
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            onBlur={formik.handleBlur}
            fullWidth
            sx={{ mb: 2 }}
          />

          <CustomTextField
            label="Mobile"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            onBlur={formik.handleBlur}
            fullWidth
            sx={{ mb: 2 }}
          />

          <CustomTextField
            label="New Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            onBlur={formik.handleBlur}
            fullWidth
            sx={{ mb: 2 }}
          />

          {apiError && (
            <Typography color="error" variant="body2" sx={{ mb: 2 }}>
              {apiError}
            </Typography>
          )}

          <Box sx={{ textAlign: "center" }}>
            <CaspianButton
              type="submit"
              variant="custom3"
              disabled={isLoading}
              sx={{
                minWidth: "120px",
                fontSize: "16px",
                backgroundColor: "#34A76C",
                color: "#fff",
                ":hover": { backgroundColor: "#2E8B57" },
              }}
            >
              {isLoading ? "Processing..." : "Reset Password"}
            </CaspianButton>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default ForgotPasswordPage;
