import { InputProps } from "./input.interfaces";
import * as C from "./input.styles";

export const Input = ({
  placeholder,
  onChange = () => {},
  ...rest
}: InputProps) => {
  return (
    <C.Input
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
