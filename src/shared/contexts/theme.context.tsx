import { ReactElement, useState } from "react";
import { createContext, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { colors } from "shared/styles/colors";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState(colors);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within ThemeProvider");

  return context;
};

export { ThemeProvider, useTheme };
