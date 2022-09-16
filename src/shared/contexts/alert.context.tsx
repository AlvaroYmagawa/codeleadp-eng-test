import { ReactElement, useCallback, useState } from "react";
import { createContext, useContext } from "react";
import { Alert, AlertProps } from "shared/components/molecules";

type Props = Pick<AlertProps, "message" | "onCancel" | "onConfirm" | "onClose">;

type AlertContextData = {
  openAlert: (props: Props) => void;
  closeAlert: () => void;
};

const AlertContext = createContext<AlertContextData>({} as AlertContextData);

const AlertProvider = ({ children }: { children: ReactElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alertProps, setAlertProps] = useState<Props>({} as Props);

  const openAlert = useCallback((props: Props) => {
    setAlertProps(props);
    setIsOpen(true);
  }, []);

  const closeAlert = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <AlertContext.Provider value={{ openAlert, closeAlert }}>
      <Alert {...alertProps} isOpen={isOpen} onClose={closeAlert} />
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) throw new Error("useAlert must be used within AlertProvider");

  return context;
};

export { AlertProvider, useAlert };
