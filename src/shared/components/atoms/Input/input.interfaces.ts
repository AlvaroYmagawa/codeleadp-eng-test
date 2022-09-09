import { IBaseComponent } from "shared/interfaces";

export interface InputProps extends IBaseComponent {
  title?: string;
  placeholder: string;
  onChange?: (text: string) => void;
}
