import { StyledInput } from "./styles";

export interface InputProps {
  label: string;
  placeholder?: string;
  type: string;
}

export default function Input({ label, placeholder, type }: InputProps) {
  return (
    <StyledInput>
      <label>
        {label}
        <input type={type} placeholder={placeholder} />
      </label>
    </StyledInput>
  );
}
