import { CardProps } from "./card.interfaces";

import * as C from "./card.styles";

export const Card = ({ children, ...rest }: CardProps) => {
  return <C.Card {...rest}>{children}</C.Card>;
};
