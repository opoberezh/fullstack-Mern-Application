import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("Name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string()
  .email('Invalid email address')
  .required('Email is required'),
  password: yup.string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required'),
  location: yup.string().required("Location is required"),
  occupation: yup.string().required("Occupation is required"),
  picture: yup.string().required("Picture is required"),
})

export const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});
