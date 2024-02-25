import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme
} from "@mui/material";
import EditOutLinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import { registerSchema, loginSchema } from "./YupSchema";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/slice";
import Dropzone from "react-dropzone";
import FlexBetween from "./FlexBetween";

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
const [pageType, setPagetype] = useState("login");
const {palette} = useTheme();
const dispatch = useDispatch();
const navigate = useNavigate();
const isNonMobile = useMediaQuery("(min-width: 600px");
const isLogin = pageType === "login";
const isRegister = pageType === "register";

const handleFormSubmit = async (values, onSubmitProps) => {
  return (
    <Formik onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}>
  {({
    values,
    errors,
    louched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  }) => (
    <form onSubmit={handleSubmit}>
      <Box display="grid">

      </Box>
    </form>

  )}

    </Formik>
  )
}
}

export default Form;
