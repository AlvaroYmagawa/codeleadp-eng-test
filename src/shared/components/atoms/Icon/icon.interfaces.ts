import { IBaseComponent } from "shared/interfaces";

export type IconNames = "edit" | "delete";

export interface IconProps extends IBaseComponent {
  name: IconNames;
}
