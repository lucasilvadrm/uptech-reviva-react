import { GlobalStyle } from "styles/GlobalStyle";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
