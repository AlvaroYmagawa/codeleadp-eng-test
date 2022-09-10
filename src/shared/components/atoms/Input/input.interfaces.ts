import { IBaseComponent } from "shared/interfaces";

export interface InputProps extends IBaseComponent {
  title?: string;
  name: string;
  placeholder: string;
  value?: string | number | readonly string[] | undefined
  onChange?: (text: string) => void;
  ref?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined
}
