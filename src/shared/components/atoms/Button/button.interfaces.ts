import { IBaseComponent } from "shared/interfaces";

export type ButtonVariants = "outlined" | "filled";

export interface ButtonProps extends IBaseComponent {
  onClick?: () => void;
  variant?: ButtonVariants;
  disabled?: boolean;
  content: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}
