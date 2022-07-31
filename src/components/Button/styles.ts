import styled from "styled-components";
import { dark as theme } from "../../styles/themes";

interface Props {
  primary?: boolean;
  fullWidth?: boolean;
  rainbow?: boolean;
  disabled?: boolean;
}

export const StyledButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  gap: 0.5rem;
  font-family: "Inter";
  color: ${(props) =>
    props.disabled ? theme.colors.gray2 : theme.colors.white};
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  font-size: ${theme.fontSizes.sm};
  padding: ${(props) => (props.primary ? "1rem 2rem" : "1rem")};
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  background: ${(props) => {
    if (props.primary) {
      return theme.colors.purple;
    } else if (props.rainbow) {
      return theme.colors.rainbow;
    } else {
      return "transparent";
    }
  }};
  animation: gradient 15s ease infinite;
  background-size: 400% 400% !important;
  &:hover {
    background: ${(props) => {
      if (props.primary) {
        return theme.colors.blue;
      } else if (props.rainbow) {
        return theme.colors.rainbow;
      } else if (props.disabled) {
        return "transparent";
      } else {
        return theme.colors.black3;
      }
    }};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;
