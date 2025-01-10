import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  category: Yup.string().required("Category is required"),
  service: Yup.string().required("Service is required"),
  date: Yup.date().required("").nullable(),
  time: Yup.date().required("").nullable(),
  description: Yup.string()
    .required("Description is required")
    .max(200, "Description cannot exceed 200 characters"),
});
