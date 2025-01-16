import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import CustomTextField from '../../components/TextField/Textfield';
import CustomModal from '../../components/Modal/modal';
import CaspianButton from '../../components/Button/Button';
import validationSchema from '../../utils/formvalidation/LoginValidation';
import { loginUser } from '../../utils/slices/formSlice';

const LoginModal = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values))
      console.log('Login Successful:', values);
      onClose();
    },
  });

  return (
    <CustomModal
      showCloseIcon={false}
      sx={{
        width: "600px",
        "@media (max-width: 768px)": {
          width: "90%",
        },
        "@media (max-width: 480px)": {
          width: "95%",
        },
      }}
      open={open}
      onClose={onClose}
      title="Login"
      variant="h5"
      fontWeight="bold"
      content={
        <form onSubmit={formik.handleSubmit}>
          <CustomTextField
            label="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
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

          <Box sx={{ display: 'flex', mb: 2 }} gap={2}>
            <Link href="#" underline="hover" color="gray" variant="body2"
              sx={{
                ':hover': { color: '#388e3c', },

              }}>
              Forgot Password?
            </Link>
            <Link href="#" underline="hover" color="gray" variant="body2"
              sx={{
                ':hover': { color: '#388e3c', },

              }}
            >
              Don't have an account? Sign Up
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
              Login
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

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
