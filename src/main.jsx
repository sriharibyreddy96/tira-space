import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom"; // ✅ ADD THIS

// Styled Components
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/tira-space"> {/* ✅ VERY IMPORTANT */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);