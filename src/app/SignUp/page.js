"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Box, Link, Typography, Container, Paper } from "@mui/material";
import validationSchema from "@/src/utils/formvalidation/SignupValidation";
import { useSignup } from "@/src/api/api";
import { signupSuccess } from "@/src/utils/slices/authSlice";
import CaspianButton from "@/src/Components/Button/Button";
import CustomTextField from "@/src/components/TextField/Textfield";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [apiError, setApiError] = useState("");

  const { mutate, isLoading } = useSignup();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setApiError("");
      console.log("Submitting Signup Data:", values);

      mutate(values, {
        onSuccess: (data) => {
          console.log("Signup Response Data:", data);
        
          if (data?.result === "success" && data?.data?.token) {
            const { token, ...user } = data.data;
            dispatch(signupSuccess({ token, user }));
            sessionStorage.setItem("authToken", token);
            router.push("/");
          } else if (data?.result === "emailExist") {
            setApiError("This email is already registered. Please login or use another email.");
          } else {
            setApiError("Signup failed, please try again.");
          }
        },
        onError: (error) => {
          console.error("Signup API Error:", error);
          setApiError(error?.message || "An unexpected error occurred.");
        },
      });
    },
  });

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2.5rem",
        height: "100vh",
      }}
    >
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
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ textAlign: "center", mb: 3, color: "#34A76C" }}
        >
          Sign Up
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <CustomTextField
            label="Name"
            name="name"
            autoComplete="name"
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
            autoComplete="email"
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
            autoComplete="tel"
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
            autoComplete="new-password"
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
            <Link href="/Login" underline="hover" color="gray" variant="body2">
              Already have an account? Login
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CaspianButton type="submit" variant="custom3" disabled={isLoading} sx={{
                minWidth: "120px",
                fontSize: "16px",
                backgroundColor: "#34A76C",
                color: "#fff",
                ":hover": { backgroundColor: "#2E8B57" },
              }}>
              {isLoading ? "Signing Up..." : "Sign Up"}
            </CaspianButton>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUpPage;





// "use client";

// import React, { useState } from "react";
// import { useFormik } from "formik";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
// import { Box, Link, Typography, Container, Paper } from "@mui/material";
// import validationSchema from "@/src/utils/formvalidation/SignupValidation";
// import { useSignup, useLogin } from "@/src/api/api"; 
// import CustomTextField from "@/src/components/TextField/Textfield";
// import CaspianButton from "@/src/components/Button/Button";
// import { signupSuccess } from "@/src/utils/slices/authSlice";

// const SignUpPage = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [apiError, setApiError] = useState("");

//   const { mutate: signup, isLoading: isSignupLoading } = useSignup();
//   const { mutate: login, isLoading: isLoginLoading } = useLogin();

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       mobile: "",
//       password: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       setApiError("");
//       console.log("Submitting Signup Data:", values);

//       signup(values, {
//         onSuccess: (data) => {
//           console.log("Signup Response Data:", data);

//           if (data?.result === "success" && data?.data?.token) {
//             const { token, ...user } = data.data;
//             dispatch(signupSuccess({ token, user }));
//             sessionStorage.setItem("authToken", token);
//             router.push("/");
//           } else if (data?.result === "emailExist") {
//             console.log("Email already exists. Attempting to log in...");
//             login(
//               { email: values.email, password: values.password },
//               {
//                 onSuccess: (loginData) => {
//                   if (loginData?.result === "success" && loginData?.data?.token) {
//                     const { token, ...user } = loginData.data;
//                     dispatch(signupSuccess({ token, user }));
//                     sessionStorage.setItem("authToken", token);
//                     router.push("/");
//                   } else {
//                     setApiError("Email exists, but login failed. Please check your credentials.");
//                   }
//                 },
//                 onError: (error) => {
//                   console.error("Login API Error:", error);
//                   setApiError("Email exists, but login failed. Please check your credentials.");
//                 },
//               }
//             );
//           } else {
//             setApiError("Signup failed, please try again.");
//           }
//         },
//         onError: (error) => {
//           console.error("Signup API Error:", error);
//           setApiError(error?.message || "An unexpected error occurred.");
//         },
//       });
//     },
//   });

//   return (
//     <Container
//       maxWidth="xs"
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: "1.5rem",
//         height: "100vh",
//       }}
//     >
//       <Paper
//         elevation={5}
//         sx={{
//           width: "100%",
//           padding: 4,
//           borderRadius: 3,
//           boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
//           border: "1px solid #ddd",
//         }}
//       >
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           sx={{ textAlign: "center", mb: 3, color: "#34A76C" }}
//         >
//           Sign Up
//         </Typography>

//         <form onSubmit={formik.handleSubmit}>
//           <CustomTextField
//             label="Name"
//             name="name"
//             autoComplete="name"
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.name && Boolean(formik.errors.name)}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           <CustomTextField
//             label="Email"
//             name="email"
//             autoComplete="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.email && Boolean(formik.errors.email)}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           <CustomTextField
//             label="Mobile"
//             name="mobile"
//             autoComplete="tel"
//             value={formik.values.mobile}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.mobile && Boolean(formik.errors.mobile)}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           <CustomTextField
//             label="Password"
//             name="password"
//             type="password"
//             autoComplete="new-password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.password && Boolean(formik.errors.password)}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           {apiError && (
//             <Typography color="error" variant="body2" sx={{ mb: 2 }}>
//               {apiError}
//             </Typography>
//           )}

//           <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//             <Link href="/Login" underline="hover" color="gray" variant="body2">
//               Already have an account? Login
//             </Link>
//           </Box>

//           <Box sx={{ display: "flex", justifyContent: "center" }}>
//             <CaspianButton
//               type="submit"
//               variant="custom3"
//               disabled={isSignupLoading || isLoginLoading}
//               sx={{
//                 minWidth: "120px",
//                 fontSize: "16px",
//                 backgroundColor: "#34A76C",
//                 color: "#fff",
//                 ":hover": { backgroundColor: "#2E8B57" },
//               }}
//             >
//               {isSignupLoading || isLoginLoading ? "Processing..." : "Sign Up"}
//             </CaspianButton>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default SignUpPage;
