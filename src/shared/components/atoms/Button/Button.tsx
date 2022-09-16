import { ButtonProps } from "./button.interfaces";
import { ClipLoader } from "react-spinners";
import * as C from "./button.styles";
import { useTheme } from "shared/contexts/theme.context";

export const Button = ({
  content,
  variant = "filled",
  disabled = false,
  type,
  onClick = () => {},
  isLoading = false,
  ...rest
}: ButtonProps) => {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <C.Button
      {...rest}
      type={type}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      {isLoading ? (
        <ClipLoader size={18} color={colors.primaryText} />
      ) : (
        content
      )}
    </C.Button>
  );
};
