import { ReactNode } from "react";
import { IBaseComponent } from "shared/interfaces";

export interface ModalProps extends IBaseComponent {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void
}
