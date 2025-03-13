"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Box, Link, Typography, Container, Paper } from "@mui/material";
import validationSchema from "@/src/utils/formvalidation/LoginValidation";
import { useLogin } from "@/src/api/api";
import { loginSuccess } from "@/src/utils/slices/authSlice";
import CaspianButton from "@/src/Components/Button/Button";
import CustomTextField from "@/src/components/TextField/Textfield";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [apiError, setApiError] = useState("");

  const { mutate, isLoading } = useLogin();

  const formik = useFormik({
    initialValues: {
      emailOrMobile: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setApiError("");

      mutate(values, {
        onSuccess: (data) => {
          if (data?.result === "success" && data?.data?.token) {
            const { token, ...user } = data.data;
            dispatch(loginSuccess({ token, user }));
            sessionStorage.setItem("authToken", token);
            router.push("/");
          } else {
            setApiError("Invalid Credentials, please try again.");
          }
        },
        onError: (error) => {
          setApiError(error?.message || "An unexpected error occurred.");
        },
      });
    },
  });

  return (
    <Container maxWidth="xs" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
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
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <CustomTextField
            label="Email or Mobile"
            name="emailOrMobile"
            autoComplete="email"
            value={formik.values.emailOrMobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.emailOrMobile && Boolean(formik.errors.emailOrMobile)}
            fullWidth
            sx={{ mb: 2 }}
          />

          <CustomTextField
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
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
            <Link href="/ForgotPassword" underline="hover" color="gray" variant="body2" sx={{ ":hover": { color: "#34A76C" } }}>
              Forgot Password?
            </Link>
            <Link href="/SignUp" underline="hover" color="gray" variant="body2" sx={{ ":hover": { color: "#34A76C" } }}>
              Don't have an account? Sign Up
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
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
              {isLoading ? "Logging in..." : "Login"}
            </CaspianButton>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
