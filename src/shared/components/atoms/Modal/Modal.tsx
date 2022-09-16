import ReactModal from "react-modal";
import { ModalProps } from "./modal.interfaces";
import * as C from "./modal.styles";

export const Modal = ({
  children,
  onClose = () => {},
  isOpen = false,
  className,
}: ModalProps) => {
  return (
    <ReactModal
      ariaHideApp={false}
      contentLabel="Selected Option"
      style={C.styles}
      className={className}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentElement={(_, children) => (
        <C.Container onClick={onClose}>
          <C.Children onClick={(e) => e.stopPropagation()}>
            {children}
          </C.Children>
        </C.Container>
      )}
    >
      {children}
    </ReactModal>
  );
};
