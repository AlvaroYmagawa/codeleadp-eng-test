import { ModalProps } from "shared/components/atoms";

export interface AlertProps extends Omit<ModalProps, "children"> {
  message: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}
