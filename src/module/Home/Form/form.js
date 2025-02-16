// "use client";
// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation"; 
// import { Box, TextField, Typography } from "@mui/material";
// import { DatePicker, TimePicker } from "@mui/x-date-pickers";
// import { formValidationSchema } from "../../../utils/formvalidation/ServicesForm";
// import CaspianButton from "../../../components/Button/Button";
// import CustomAutoComplete from "@/src/components/Autocomplete/CustumAutocomplete";
// import axios from "axios";

// const Form = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const router = useRouter(); 
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       const token = sessionStorage.getItem("authToken");

//       if (!token) {
//         setError("Authentication token missing.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get("http://139.59.59.238:8081/api/v1/service", {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (response.data.result !== "success") {
//           throw new Error(response.data.error || "Failed to fetch services");
//         }

//         const serviceOptions = response.data.data.map((service) => ({
//           value: service.id,
//           label: service.name,
//         }));

//         setServices(serviceOptions);
//       } catch (error) {
//         setError("Failed to load services.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []); 

//   const formik = useFormik({
//     initialValues: {
//       category: "",
//       service: "",
//       date: null,
//       time: null,
//       description: "",
//     },
//     validationSchema: formValidationSchema,
//     onSubmit: (values) => {
//       if (!isAuthenticated) {
//         router.push("/Login"); 
//       } else {
//         console.log("Submitted Data:", values);
//       }
//     },
//   });

//   const handleFieldChange = (field, value) => {
//     formik.setFieldValue(field, value);
//   };

//   const getError = (field) =>
//     Boolean(formik.touched[field] && formik.errors[field]);

//   return (
//     <Box
//       component="form"
//       onSubmit={formik.handleSubmit}
//       sx={{
//         maxWidth: 400,
//         mx: "auto",
//         background: "#EEEEEEE5",
//         borderRadius: 2,
//         padding: 3,
//       }}
//     >
//       <Typography variant="h5" fontWeight="bold" mb={2}>
//         Service Selection Form
//       </Typography>

//       {/* Category Selection */}
//       <Box mb={2}>
//         <CustomAutoComplete
//           options={[
//             { value: "Category1", label: "Category 1" },
//             { value: "Category2", label: "Category 2" },
//           ]}
//           label="Select Category"
//           value={formik.values.category}
//           onChange={(e, value) => handleFieldChange("category", value?.value)}
//           placeholder="Select a category"
//           textFieldProps={{
//             error: getError("category"),
//             size: "small",
//           }}
//         />
//       </Box>

//       {/* Service Selection (Fetched from API) */}
//       <Box mb={2}>
//         <CustomAutoComplete
//           options={services}
//           label="Select Service"
//           value={formik.values.service}
//           onChange={(e, value) => handleFieldChange("service", value?.value)}
//           placeholder={loading ? "Loading..." : "Select a service"}
//           textFieldProps={{
//             error: getError("service"),
//             size: "small",
//           }}
//           disabled={loading || error}
//         />
//         {error && <Typography color="error">{error}</Typography>}
//       </Box>

//       {/* Date Selection */}
//       <Box mb={2}>
//         <DatePicker
//           label="Select Date"
//           value={formik.values.date ? new Date(formik.values.date) : null}
//           onChange={(value) => handleFieldChange("date", value)}
//           minDate={new Date()}
//           slotProps={{
//             textField: {
//               fullWidth: true,
//               error: getError("date"),
//               helperText: getError("date") ? "" : null,
//               size: "small",
//             },
//           }}
//         />
//       </Box>

//       {/* Time Selection */}
//       <Box mb={2}>
//         <TimePicker
//           label="Select Time"
//           value={formik.values.time ? new Date(formik.values.time) : null}
//           onChange={(value) => handleFieldChange("time", value)}
//           slotProps={{
//             textField: {
//               fullWidth: true,
//               error: getError("time"),
//               helperText: getError("time") ? "" : null,
//               size: "small",
//             },
//           }}
//         />
//       </Box>

//       {/* Description */}
//       <Box mb={2}>
//         <TextField
//           label="Description"
//           multiline
//           rows={3}
//           value={formik.values.description}
//           onChange={(e) => handleFieldChange("description", e.target.value)}
//           fullWidth
//           error={getError("description")}
//           size="small"
//         />
//       </Box>

//       <CaspianButton
//         size="medium"
//         type="submit"
//         title="Submit"
//         sx={{
//           background: "#34A76C",
//           color: "#fff",
//           padding: "0.4rem 5rem",
//           fontWeight: "bold",
//         }}
//       />
//     </Box>
//   );
// };

// export default Form;





"use client";

import React from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; 
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { formValidationSchema } from "../../../utils/formvalidation/ServicesForm";
import CaspianButton from "../../../components/Button/Button";
import CustomAutoComplete from "@/src/components/Autocomplete/CustumAutocomplete";
import { useServices } from "@/src/api/api"; // ✅ Use React Query for API call

const Form = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter(); 

  // ✅ Fetch services using React Query
  const { data: servicesData, isLoading, error } = useServices();

  // ✅ Format services for AutoComplete
  const services = servicesData?.data?.map((service) => ({
    value: service.id,
    label: service.name,
  })) || [];

  // ✅ Formik Setup
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
      if (!isAuthenticated) {
        router.push("/Login"); 
      } else {
        console.log("Submitted Data:", values);
      }
    },
  });

  // ✅ Handle Field Change
  const handleFieldChange = (field, value) => {
    formik.setFieldValue(field, value);
  };

  // ✅ Get Form Errors
  const getError = (field) =>
    Boolean(formik.touched[field] && formik.errors[field]);

  return (
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

      {/* Category Selection */}
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
          }}
        />
      </Box>

      {/* Service Selection (Fetched from API) */}
      <Box mb={2}>
        <CustomAutoComplete
          options={services}
          label="Select Service"
          value={formik.values.service}
          onChange={(e, value) => handleFieldChange("service", value?.value)}
          placeholder={isLoading ? "Loading..." : "Select a service"}
          textFieldProps={{
            error: getError("service"),
            size: "small",
          }}
          disabled={isLoading || error}
        />
        {error && <Typography color="error">Failed to load services.</Typography>}
      </Box>

      {/* Date Selection */}
      <Box mb={2}>
        <DatePicker
          label="Select Date"
          value={formik.values.date}
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

      {/* Time Selection */}
      <Box mb={2}>
        <TimePicker
          label="Select Time"
          value={formik.values.time}
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

      {/* Description */}
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
        sx={{
          background: "#34A76C",
          color: "#fff",
          padding: "0.4rem 5rem",
          fontWeight: "bold",
        }}
      />
    </Box>
  );
};

export default Form;
