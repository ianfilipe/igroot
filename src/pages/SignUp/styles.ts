import styled from "styled-components";
import { dark as theme } from "../../styles/themes";

export const Wrapper = styled.div`
  color: ${theme.colors.white};
  background: ${theme.colors.black2};
  border-radius: 0.5rem;
  display: flex;
  > div:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
    background-image: url("assets/signup-background.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    flex: 1;
    width: 100%;
    height: auto;
  }
  > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > :last-child {
      margin-top: 2rem;
    }
    flex: 1;
    padding: 3rem;
    h1 {
      align-self: flex-start;
      margin-bottom: 3rem;
      width: 50%;
      font-size: ${theme.fontSizes.xl};
      font-weight: 500;
    }
  }
`;
