import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  FormControlLabel,
  Checkbox,
  Backdrop,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  updateAddress,
  setDefaultAddress,
} from "@/src/utils/slices/addresSlice";
import { useFormik } from "formik";

import { addressValidationSchema } from "@/src/utils/formvalidation/addressValidationSchema";
import CustomTextField from "@/src/components/TextField/Textfield";
import CustomAutoComplete from "@/src/components/Autocomplete/CustumAutocomplete";
import CaspianButton from "@/src/components/Button/Button";
import styles from "./Address.module.scss"
import Image from "next/image";


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
      style={{
        zIndex:9000
      }}
    >
      <Grid className={styles.Container}>
        <div className={styles.contentBox}
          onClick={(e) => e.stopPropagation()}
        >
          <Grid p={3} bgcolor="#fff" borderRadius={2} width="400px">
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
                <Stack textAlign="left">
                  <CaspianButton type="submit" variant="custom" color="#fff">
                    Save Address & Proceed
                  </CaspianButton>
                </Stack>
              </Stack>
            </form>
          </Grid>
          <Stack className={styles.imageBox}>
            <Image
            width={1000}
            height={1000}
              src="/map.png"
              alt="Map Placeholder"
              style={{
                width:"100%",
                height:"100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Stack>
        </div>
      </Grid>
    </Backdrop>
  );
};

export default AddAddressBackdrop;