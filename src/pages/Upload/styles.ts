import styled from "styled-components";
import { dark as theme } from "../../styles/themes";

export const Wrapper = styled.div`
  color: ${theme.colors.white};
  background: ${theme.colors.black2};
  border-radius: 0.5rem;
  padding: 3rem;
`;

export const UploadAImage = styled.div`
  cursor: pointer;
  text-align: center;
  border-radius: 0.25rem;
  padding: 3rem;
  background: ${theme.colors.black3};
  &:hover {
    background: ${theme.colors.black4};
  }
  p:first-of-type {
    font-weight: 500;
    font-size: ${theme.fontSizes.lg};
    margin: 1.5rem 0 0.5rem;
  }
  p:last-of-type {
    color: ${theme.colors.gray1};
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 2rem;
  div {
    border-radius: 0 0.25rem 0.25rem 0;
    background: ${theme.colors.black3};
    padding: 1rem 1rem;
    display: flex;
    gap: 1rem;
    > * {
      cursor: pointer;
    }
  }
  label {
    flex: 1;
    font-weight: 500;
    font-size: ${theme.fontSizes.sm};
  }
  input {
    margin-top: 1rem;
    font-family: "Inter";
    color: ${theme.colors.white};
    width: 100%;
    border: none;
    border-radius: 0.25rem 0 0 0.25rem;
    background: ${theme.colors.black3};
    padding: 1rem 2rem;
    font-size: ${theme.fontSizes.base};
    :focus-visible {
      background: ${theme.colors.black4};
      outline: none;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
