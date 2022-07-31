import styled from "styled-components";
import { dark as theme } from "../../styles/themes";

export const StyledFeed = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3rem;
  color: white;
`;

export const Post = styled.div`
  width: 100%;
  background: ${theme.colors.black2};
  border-radius: 0.5rem;
  > div:first-child {
    aspect-ratio: 16/9;
    border-radius: 0.5rem 0.5rem 0 0;
    background-image: url("assets/signup-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  > div:nth-child(2) {
    color: ${theme.colors.gray1};
    padding: 2rem 2rem 1rem;
  }
`;
