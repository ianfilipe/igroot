import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import AppRouter from "./routes";
import { GlobalStyle, Wrapper } from "./styles/global";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <AppRouter />
    </Wrapper>
  </React.StrictMode>
);
