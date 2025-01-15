import * as Yup from "yup";

export const addressValidationSchema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  state: Yup.object().nullable().required("State is required"),
  city: Yup.object().nullable().required("City is required"),
  postalCode: Yup.string()
    .matches(/^\d{1,10}$/, "Must be a valid postal code (up to 10 digits)") // Allow 1-10 digits
    .required("Postal code is required"),
  additionalInfo: Yup.string(),
});
