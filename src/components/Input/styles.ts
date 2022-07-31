import styled from "styled-components";
import { dark as theme } from "../../styles/themes";

export const StyledInput = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1.5rem;
  label {
    flex: 1;
    font-weight: 500;
    font-size: ${theme.fontSizes.sm};
  }
  input {
    width: 100%;
    margin-top: 1rem;
    padding: 1rem 2rem;
    font-family: "Inter";
    color: ${theme.colors.white};
    border: none;
    border-radius: 0.25rem;
    background: ${theme.colors.black3};
    font-size: ${theme.fontSizes.base};
    :focus-visible {
      background: ${theme.colors.black4};
      outline: none;
    }
    &[type="date"]::-webkit-calendar-picker-indicator {
      opacity: 0;
    }
  }
`;
