import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePge";
import ProfilePage from "./pages/ProfilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import CssBaseLine from "@mui/material/CssBaseline";
import {createTheme,  ThemeProvider} from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseLine/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile/:userId" element={<ProfilePage/>}/>
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
