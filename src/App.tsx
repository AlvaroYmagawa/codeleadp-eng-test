import { ThemeProvider } from "shared/contexts/theme.context";
import { AppRoutes } from "shared/routes";

export const App = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
};
