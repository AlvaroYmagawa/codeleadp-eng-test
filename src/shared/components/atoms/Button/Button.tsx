import { ButtonProps } from "./button.interfaces";
import * as C from "./button.styles";

export const Button = ({
  content,
  variant = "filled",
  onClick = () => {},
  ...rest
}: ButtonProps) => {
  return (
    <C.Button {...rest} variant={variant} onClick={onClick}>
      {content}
    </C.Button>
  );
};
