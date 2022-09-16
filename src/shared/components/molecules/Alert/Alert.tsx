import { Button, Modal } from "shared/components/atoms";
import { AlertProps } from "./alert.interfaces";

import * as C from "./alert.styles";

export const Alert = ({
  message,
  onCancel,
  onConfirm,
  onClose,
  ...rest
}: AlertProps) => {
  return (
    <Modal onClose={onClose} {...rest}>
      <C.Container>
        <C.Message>{message}</C.Message>

        <C.Buttons>
          <Button variant="outlined" content="Cancel" onClick={onCancel} />
          <Button variant="outlined" content="OK" onClick={onConfirm} />
        </C.Buttons>
      </C.Container>
    </Modal>
  );
};
