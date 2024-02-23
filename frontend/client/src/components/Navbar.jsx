import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  useTheme,
  useMediaQuery
} from "@mui/icons-material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import StyledComponent from "./StyledComponent";

const Navbar = () => {
  return(
    <div>Navbar</div>
  )
  }
  
  export default Navbar;