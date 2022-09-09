import { TypographyProps } from "./typography.interfaces";

import * as C from "./typography.styles";

export const Typography = ({
  variant = "regular",
  children,
  ...rest
}: TypographyProps) => {
  return <C.Typography variant={variant} {...rest}>{children}</C.Typography>;
};
