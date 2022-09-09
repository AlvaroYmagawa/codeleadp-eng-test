import { IBaseComponent } from "shared/interfaces";

export interface InputProps extends IBaseComponent {
  placeholder: string;
  onChange?: (text: string) => void;
}
