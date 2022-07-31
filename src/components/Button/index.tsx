import { StyledButton } from "./styles";

interface Props {
  children: any;
  primary?: boolean;
  fullWidth?: boolean;
  rainbow?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  primary,
  fullWidth,
  rainbow,
  disabled,
}: Props) {
  return (
    <StyledButton
      primary={primary}
      fullWidth={fullWidth}
      rainbow={rainbow}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}
