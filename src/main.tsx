import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";

import "survey-core/defaultV2.min.css";
import "survey-core/themes/layered-dark-panelless";

import App from "./App.tsx";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

theme.styles.global = {
  "html, body": {},
  "#root": {
    width: "100%",
    height: "100%",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </CookiesProvider>
  </React.StrictMode>
);
