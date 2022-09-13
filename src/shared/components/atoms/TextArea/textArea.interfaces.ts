import { IBaseComponent } from "shared/interfaces";

export interface TextAreaProps extends IBaseComponent {
  title?: string;
  name: string;
  placeholder: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: (text: string) => void;
}
