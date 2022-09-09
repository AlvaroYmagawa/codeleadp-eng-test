import { ThemeProvider } from "shared/contexts/theme.context";
import { AppRoutes } from "shared/routes";
import "./shared/styles/global";

export const App = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
};
