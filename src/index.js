import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import theme from "./theme/theme";

// fungsi react render untuk render semua component pada sisi client
ReactDOM.render(
  <React.StrictMode>
    {/* Router berguna untuk menghubungkan route yg tersedia ke web engine */}
    <Router>
      {/* theme provider berfungsi untuk override global style pada material ui */}
      <ThemeProvider theme={theme}>
        {/* CSS Baseline untuk mereset style default css */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
