import { IconProps } from "./icon.interfaces";
import { getIcon } from "./utils/getIcon";

export const Icon = ({
  name,
  color,
  size,
  onClick = () => {},
  ...rest
}: IconProps) => {
  return (
    <div {...rest} onClick={onClick}>
      {getIcon({ name, color, size })}
    </div>
  );
};
