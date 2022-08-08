import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import useSound from "use-sound";
import toggleSound from "./assets/sound/toggle.mp3";

import HomePage from "./pages/Homepage/HomePage";
import CompanyPage from "./pages/Company/CompanyPage";

const getDesignTokens = (mode) => ({
  palette: {
    type: mode,
    background: {
      default: mode === "light" ? "hsl(0, 0%, 98%)" : "#121721",
      paper: mode === "light" ? "hsl(0, 0%, 98%)" : "#19202D",
    },
    primary: {
      main: mode === "light" ? "#5964E0" : "#FF0000",
    },
    secondary: {
      main: mode === "light" ? "hsl(208, 100%, 58%)" : "hsl(208, 100%, 58%)",
    },
    text: {
      primary: mode === "light" ? "#19202D" : "hsl(0, 0%, 100%)",
      secondary: mode === "light" ? "#6E8098" : "#19202D",
    },
  },
});
const localTheme = localStorage.getItem("theme");

function App() {
  const [mode, setmode] = useState(localTheme || "light");
  const [play] = useSound(toggleSound);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const toogleMode = () => {
    if (mode === "light") {
      play();
      setmode("dark");
      localStorage.setItem("theme", "dark");
    } else if (mode === "dark") {
      play();
      setmode("light");

      localStorage.setItem("theme", "light");
    }
  };

  const customTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  useEffect(() => {
    if (prefersDarkMode) {
      setmode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setmode("light");
      localStorage.setItem("theme", "light");
    }
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <NavBar toggleMode={toogleMode} />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/company/:companyname' element={<CompanyPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
