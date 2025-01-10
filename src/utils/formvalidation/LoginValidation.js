import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export default validationSchema;
