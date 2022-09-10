import { InputProps } from "./input.interfaces";
import * as C from "./input.styles";

export const Input = ({
  title,
  placeholder,
  value,
  name,
  onChange = () => {},
  ...rest
}: InputProps) => {
  return (
    <C.Container {...rest}>
      {title && <C.Title>{title}</C.Title>}

      <C.Input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </C.Container>
  );
};
