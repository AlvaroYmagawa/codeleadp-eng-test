import { IconNames } from "../icon.interfaces";
import { MdDeleteForever, MdEdit } from "react-icons/md";

export const getIcon = (name: IconNames) => {
  switch (name) {
    case "delete":
      return <MdDeleteForever />;

    default:
      return <MdEdit />;
  }
};
