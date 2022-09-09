import { InputProps } from "./input.interfaces";
import * as C from "./input.styles";

export const Input = ({
  title,
  placeholder,
  onChange = () => {},
  ...rest
}: InputProps) => {
  return (
    <C.Container {...rest}>
      {title && <C.Title>{title}</C.Title>}

      <C.Input
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </C.Container>
  );
};
