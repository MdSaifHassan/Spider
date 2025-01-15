import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import CustomTextField from '../../components/TextField/Textfield';
import CustomModal from '../../components/Modal/modal';
import CaspianButton from '../../components/Button/Button';
import validationSchema from '../../utils/formvalidation/SignupValidation';
import { registerUser } from '../../utils/slices/formSlice';

const SignUpModal = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      console.log('Sign Up Successful:', values);
      onClose();
    },
  });

  return (
    <CustomModal
      showCloseIcon={false}
      sx={{
        width: "600px",
        "@media (max-width: 768px)": {
          width: "90%",  // 90% of the screen width on smaller devices
        },
        "@media (max-width: 480px)": {
          width: "95%",  // 95% of the screen width on very small devices
        },  
      }}  
        
          open={open}
      onClose={onClose}
      title="Sign Up"
      variant="h5"
       fontWeight="bold"
      content={
        <form onSubmit={formik.handleSubmit}>
          <CustomTextField
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            fullWidth
            sx={{ mb: 2 }}
          />

          <CustomTextField
            label="Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            fullWidth
            sx={{ mb: 2 }}
          />

          <CustomTextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            fullWidth
            sx={{ mb: 2 }}
          />

          <Box sx={{ display: 'flex', mb: 2 }} gap={2}>
            <Link
              href="#"
              underline="hover"
              color="gray"
              variant="body2"
              sx={{ ':hover': { color: '#388e3c' } }}
            >
              Already have an account? Login
            </Link>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} gap={1}>
            <CaspianButton
              type="submit"
              variant="outlined"
              sx={{
                color: '#388e3c',
                ':hover': { backgroundColor: '#388e3c', color: '#fff' },
              }}
            >
              Sign Up
            </CaspianButton>
            <CaspianButton
              variant="outlined"
              onClick={onClose}
              sx={{
                color: 'red',
                ':hover': { backgroundColor: 'red', color: '#fff' },
              }}
            >
              Cancel
            </CaspianButton>
          </Box>
        </form>
      }
    />
  );
};

SignUpModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignUpModal;
