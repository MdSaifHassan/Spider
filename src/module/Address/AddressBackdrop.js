import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  FormControlLabel,
  Checkbox,
  Backdrop,
} from "@mui/material";
import CustomAutoComplete from "@components/Autocomplete/CustumAutocomplete";
import CustomTextField from "@components/TextField/Textfield";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  updateAddress,
  setDefaultAddress,
} from "@utils/slices/addresSlice";
import { useFormik } from "formik";
import { addressValidationSchema } from "@utils/formvalidation/addressValidationSchema";
import CaspianButton from "@components/Button/Button";

const AddAddressBackdrop = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [setAsDefault, setSetAsDefault] = useState(false);
  const addresses = useSelector((state) => state.address.addresses);

  const formik = useFormik({
    initialValues: {
      address: "",
      state: "",
      city: "",
      postalCode: "",
      additionalInfo: "",
    },
    validationSchema: addressValidationSchema,
    onSubmit: (values) => {
      if (setAsDefault && addresses.length > 0) {
        const updatedAddress = {
          ...addresses[0],
          ...values,
          id: addresses[0].id,
        };
        dispatch(updateAddress(updatedAddress));
        dispatch(setDefaultAddress(updatedAddress.id));
      } else {
        const newAddress = { ...values, id: Date.now() };
        dispatch(addAddress(newAddress));
        if (setAsDefault) {
          dispatch(setDefaultAddress(newAddress.id));
        }
      }
      formik.resetForm();
      onClose();
    },
  });

  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "rgba(0, 0, 0, 0.5)",
      }}
    >
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
       
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "80%",
            margin: "auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Box p={3} bgcolor="#fff" borderRadius={2} width="400px">
            <Typography variant="h6" mb={2}>
              Add Address
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={2}>
                <CustomTextField
                  label="Address"
                  name="address"
                  multiline
                  rows={2}
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                  fullWidth
                />
                <CustomAutoComplete
                  label="State"
                  options={[
                    { id: 1, label: "State 1" },
                    { id: 2, label: "State 2" },
                  ]}
                  getOptionLabel={(option) => option.label || ""}
                  onChange={(e, value) =>
                    formik.setFieldValue("state", value?.label || "")
                  }
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                />
                <CustomAutoComplete
                  label="City"
                  options={[
                    { id: 1, label: "City 1" },
                    { id: 2, label: "City 2" },
                  ]}
                  getOptionLabel={(option) => option.label || ""}
                  onChange={(e, value) =>
                    formik.setFieldValue("city", value?.label || "")
                  }
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
                <CustomTextField
                  label="Postal Code"
                  name="postalCode"
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.postalCode &&
                    Boolean(formik.errors.postalCode)
                  }
                  helperText={
                    formik.touched.postalCode && formik.errors.postalCode
                  }
                  fullWidth
                />
                <CustomTextField
                  label="Additional Information"
                  name="additionalInfo"
                  value={formik.values.additionalInfo}
                  onChange={formik.handleChange}
                  fullWidth
                  multiline
                  rows={2}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setAsDefault}
                      onChange={(e) => setSetAsDefault(e.target.checked)}
                    />
                  }
                  label="Set as default address"
                />
                <Box textAlign="left">
                  <CaspianButton type="submit" variant="custom" color="#fff">
                    Save Address & Proceed
                  </CaspianButton>
                </Box>
              </Stack>
            </form>
          </Box>
          <Box
            sx={{
              flex: 1,
              height: { xs: "300px", md: "500px" },
              marginLeft: { xs: 0 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
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

export default AddAddressBackdrop;
