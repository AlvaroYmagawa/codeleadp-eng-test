import { IBaseComponent } from "shared/interfaces";

export type ButtonVariants = 'outlined' | 'filled';

export interface ButtonProps extends IBaseComponent {
  onClick?: () => void;
  variant?: ButtonVariants;
  isDisabled?: boolean;
  content: string;
}
