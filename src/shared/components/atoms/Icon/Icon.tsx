import { IconProps } from "./icon.interfaces";
import { getIcon } from "./utils/getIcon";

const Icon = ({ name, ...rest }: IconProps) => {
  return <div {...rest}>{getIcon(name)}</div>;
};

export default Icon;
