import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  Box,
  Typography,
  Backdrop,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CustomTextField from "../../Components/TextField/Textfield";
import CustomAutoComplete from "../../Components/Autocomplete/CustumAutocomplete";
import { addressValidationSchema } from "../../utils/formvalidation/addressValidationSchema";
import { updateForm } from "../../utils/slices/addresSlice";
import CaspianButton from "../../Components/Button/Button";

const AddAddressPage = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const states = [
    { label: "State 1", id: 1 },
    { label: "State 2", id: 2 },
  ];

  const cities = [
    { label: "City 1", id: 1 },
    { label: "City 2", id: 2 },
  ];

  const formik = useFormik({
    initialValues: formData,
    validationSchema: addressValidationSchema,
    onSubmit: (values) => {
      dispatch(updateForm(values));
      onClose();
    },
  });

  return (
    <Backdrop open={open} onClick={onClose}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start", 
          backgroundColor: { xs: "#fff", md: "transparent" },
          overflowY: "auto", 
          paddingTop: { xs: "20px", md: 0 }, 
          paddingBottom: { xs: "20px", md: 0 },

        }}
        onClick={(e) => e.stopPropagation()} 
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "80%",
            // gap: 2,
            margin:"auto"
          }}
        >
          {/* Form Section */}
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              width: { xs: "100%", md: "400px" },
              p: 2,
              boxShadow: 3,
              marginBottom: { xs: 2, md: 0 },
              overflowY: "auto", 
              // flex: 1, 
            }}
          >
            <Typography component="h1" variant="h6" sx={{ mb: 2 }}>
              Add Address
            </Typography>
            <Typography
              component="div"
              variant="body2"
              sx={{ mb: 2, color: "gray" }}
            >
              Add a new address where you want our services.
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <CustomTextField
                label="Address"
                name="address"
                fullWidth
                multiline
                rows={2}
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={
                  formik.touched.address && formik.errors.address
                    ? formik.errors.address
                    : ""
                }
                sx={{ mb: 2 }}
              />
              <CustomAutoComplete
                options={states}
                label="State"
                name="state"
                value={formik.values.state}
                onChange={(e, value) => formik.setFieldValue("state", value)}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={
                  formik.touched.state && formik.errors.state
                    ? formik.errors.state
                    : ""
                }
                fullWidth
                autocompleteSx={{ mb: 2 }}
              />
              <CustomAutoComplete
                options={cities}
                label="City"
                name="city"
                value={formik.values.city}
                onChange={(e, value) => formik.setFieldValue("city", value)}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={
                  formik.touched.city && formik.errors.city
                    ? formik.errors.city
                    : ""
                }
                fullWidth
                autocompleteSx={{ mb: 2 }}
              />
              <CustomTextField
                label="Postal Code"
                name="postalCode"
                fullWidth
                value={formik.values.postalCode}
                onChange={formik.handleChange}
                error={
                  formik.touched.postalCode && Boolean(formik.errors.postalCode)
                }
                helperText={
                  formik.touched.postalCode && formik.errors.postalCode
                    ? formik.errors.postalCode
                    : ""
                }
                placeholder="e.g. 495000"
                sx={{ mb: 2 }}
              />
              <CustomTextField
                label="Additional Information"
                name="additionalInfo"
                fullWidth
                multiline
                rows={2}
                value={formik.values.additionalInfo}
                onChange={formik.handleChange}
                error={
                  formik.touched.additionalInfo &&
                  Boolean(formik.errors.additionalInfo)
                }
                helperText={
                  formik.touched.additionalInfo && formik.errors.additionalInfo
                    ? formik.errors.additionalInfo
                    : ""
                }
                sx={{ mb: 2 }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="isDefault"
                    checked={formik.values.isDefault}
                    onChange={formik.handleChange}
                  />
                }
                label="Set as default address"
                sx={{ mb: 2 }}
              />
              <CaspianButton
                type="submit"
                variant="custom"
                size="medium"
                title="Save Address & Proceed"
              />
            </form>
          </Box>

          {/* Map Section */}
          <Box
            sx={{
              flex: 1,
              height: { xs: "300px", md: "500px" },
              marginLeft: { xs: 0 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin:"auto"
            }}
          >
            <img
              src="/map.png"
              alt="Map Placeholder"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default AddAddressPage;
