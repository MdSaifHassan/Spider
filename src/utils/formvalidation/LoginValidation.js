import * as Yup from "yup";

const LoginValidation = Yup.object().shape({
  emailOrMobile: Yup.string()
    .test(
      "email-or-phone",
      "Invalid email or mobile number",
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 
        /^\d{10,15}$/.test(value) 
    )
    .required("Email or Mobile is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default LoginValidation;
