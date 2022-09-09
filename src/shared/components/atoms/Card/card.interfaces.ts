import { ReactNode } from "react";
import { IBaseComponent } from "shared/interfaces";

export interface CardProps extends IBaseComponent {
  children?: ReactNode;
}
