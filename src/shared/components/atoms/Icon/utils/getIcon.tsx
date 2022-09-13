import { IconNames } from "../icon.interfaces";
import { MdDeleteForever, MdEdit } from "react-icons/md";

export const getIcon = ({
  name,
  ...rest
}: {
  name: IconNames;
  color?: string;
  size?: number;
}) => {
  switch (name) {
    case "delete":
      return <MdDeleteForever {...rest} />;

    default:
      return <MdEdit {...rest} />;
  }
};
