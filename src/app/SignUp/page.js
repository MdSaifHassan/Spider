"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Box, Link, Typography, Container, Paper } from "@mui/material";
import validationSchema from "@/src/utils/formvalidation/SignupValidation";
import { signupSuccess } from "@/src/utils/slices/authSlice";
import axios from "axios";
import CaspianButton from "@/src/components/Button/Button";
import CustomTextField from "@/src/components/TextField/Textfield";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [apiError, setApiError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setApiError("");
        const response = await axios.post("http://139.59.59.238:8081/api/v1/usersignup", values);

        console.log("Sign Up API Response:", response.data);
        dispatch(signupSuccess(response.data));

        console.log("Sign Up Successful:", values);
        router.push("/");
      } catch (error) {
        console.error("Sign Up API Error:", error);
        setApiError(error.response?.data?.message || "An unexpected error occurred.");
      }
    },
  });

  return (
    <Container maxWidth="xs" sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1.5rem" ,height: "100vh" }}>
      <Paper
        elevation={5}
        sx={{
          width: "100%",
          padding: 4,
          borderRadius: 3,
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
          border: "1px solid #ddd",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center", mb: 3, color: "#34A76C" }}>
          Sign Up
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <CustomTextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            fullWidth
            sx={{ mb: 2 }}
          />

          <CustomTextField
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            fullWidth
            sx={{ mb: 2 }}
          />

          <CustomTextField
            label="Mobile"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            fullWidth
            sx={{ mb: 2 }}
          />

          <CustomTextField
            label="Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            fullWidth
            sx={{ mb: 2 }}
          />

          {apiError && (
            <Typography color="error" variant="body2" sx={{ mb: 2 }}>
              {apiError}
            </Typography>
          )}

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Link href="/Login" underline="hover" color="gray" variant="body2" sx={{ ":hover": { color: "#34A76C" } }}>
              Already have an account? Login
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CaspianButton
              type="submit"
              variant="custom3"
              sx={{
                minWidth: "120px",
                fontSize: "16px",
                backgroundColor: "#34A76C",
                color: "#fff",
                ":hover": { backgroundColor: "#2E8B57" },
              }}
            >
              Sign Up
            </CaspianButton>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUpPage;
