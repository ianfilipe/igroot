import styled from "styled-components";
import { dark as theme } from "../../styles/themes";

export const StyledHeader = styled.header`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  height: 100vh;
  color: ${theme.colors.white};
  background: ${theme.colors.black2};
  top: 0;
  position: fixed;
  div:first-child {
    ul {
      li:last-child {
        margin-top: 1rem;
      }
    }
  }
  h1 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.25rem;
    width: fit-content;
    padding: 1rem;
    margin-bottom: 1.5rem;
    color: ${theme.colors.gray1};
    font-size: ${theme.fontSizes.base};
    font-weight: 500;
    &:hover {
      background: ${theme.colors.black3};
      color: ${theme.colors.white};
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    list-style: none;
  }
`;
