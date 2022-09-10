import { ButtonProps } from "./button.interfaces";
import * as C from "./button.styles";

export const Button = ({
  content,
  variant = "filled",
  disabled = false,
  type,
  onClick = () => {},
  ...rest
}: ButtonProps) => {
  return (
    <C.Button
      {...rest}
      type={type}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      {content}
    </C.Button>
  );
};
