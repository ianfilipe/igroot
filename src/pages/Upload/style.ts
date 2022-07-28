import styled from "styled-components";
import { COLORS } from "../../constants";

interface Props {
  primary?: boolean;
}

export const Container = styled.div`
  margin-top: 5rem;
  padding: 0 5rem;
`;

export const Wrapper = styled.div`
  color: ${COLORS.white};
  background: ${COLORS.black2};
  border-radius: 0.5rem;
  padding: 3rem;
`;

export const UploadAImage = styled.div`
  cursor: pointer;
  text-align: center;
  border-radius: 0.25rem;
  padding: 3rem;
  background: ${COLORS.black3};
  &:hover {
    background: ${COLORS.black4};
  }
  p:first-of-type {
    font-weight: 500;
    font-size: 1.25rem;
    margin: 1.5rem 0 0.5rem;
  }
  p:last-of-type {
    color: ${COLORS.gray1};
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 2rem;
  div {
    border-radius: 0 0.25rem 0.25rem 0;
    background: ${COLORS.black3};
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
    font-size: 0.875rem;
  }
  input {
    margin-top: 1rem;
    font-family: "Inter";
    color: ${COLORS.white};
    width: 100%;
    border: none;
    border-radius: 0.25rem 0 0 0.25rem;
    background: ${COLORS.black3};
    padding: 1rem 2rem;
    font-size: 1rem;
    :focus-visible {
      background: ${COLORS.black4};
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

export const Button = styled.button<Props>`
  font-family: "Inter";
  color: ${COLORS.white};
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  font-size: 0.875rem;
  transition: background 0.2s;
  padding: ${(props) => (props.primary ? "1rem 2rem" : "1rem")};
  background: ${(props) => (props.primary ? COLORS.purple : "transparent")};
  &:hover {
    background: ${(props) => (props.primary ? COLORS.blue : COLORS.black3)};
    cursor: pointer;
  }
`;
