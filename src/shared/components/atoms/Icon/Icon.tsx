import { IconProps } from "./icon.interfaces";
import { getIcon } from "./utils/getIcon";

export const Icon = ({ name, color, size, ...rest }: IconProps) => {
  return <div {...rest}>{getIcon({ name, color, size })}</div>;
};
