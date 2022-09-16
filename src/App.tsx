import { AlertProvider } from "shared/contexts/alert.context";
import { ThemeProvider } from "shared/contexts/theme.context";
import { AppRoutes } from "shared/routes";

export const App = () => {
  return (
    <ThemeProvider>
      <AlertProvider>
        <AppRoutes />
      </AlertProvider>
    </ThemeProvider>
  );
};
