import {  Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePge";
import ProfilePage from "./pages/ProfilePage";
import CssBaseLine from "@mui/material/CssBaseline";
import {  ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { selectTheme } from "./redux/selectors";


function App() {
  const mode = useSelector(selectTheme);
  console.log("Current mode:", mode);

  const theme = useMemo(() =>
  createTheme(themeSettings(mode)), [mode]);

  console.log("Theme settings for current mode:", theme);
  return (
    <div className="app">
        <ThemeProvider theme={theme}>
        <CssBaseLine/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile/:userId" element={<ProfilePage/>}/>
      </Routes>
      </ThemeProvider>

    </div>
  );
}

export default App;
