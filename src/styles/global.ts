import styled, { createGlobalStyle } from "styled-components";
import { dark as theme } from "./themes";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body { 
    font-family: 'Inter', sans-serif;
    background: ${theme.colors.black1};
  }

  a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  margin-top: 5rem;
  padding: 0 5rem 0 calc(300px + 5rem);
`;

export const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  > * {
    width: 100vw;
  }
`;
