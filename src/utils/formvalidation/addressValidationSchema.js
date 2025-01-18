import * as Yup from "yup";

export const addressValidationSchema = Yup.object({
  address: Yup.string().required("Address is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  postalCode: Yup.string().required("Postal Code is required"),
  additionalInfo: Yup.string(),
});
