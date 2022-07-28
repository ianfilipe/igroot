import React from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants";
import AppRouter from "./routes";

const container = document.getElementById("root")!;
const root = createRoot(container);

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body { 
    font-family: 'Inter', sans-serif;
    background: ${COLORS.black1};
  }
`;

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouter />
  </React.StrictMode>
);
