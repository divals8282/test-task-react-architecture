import { useEffect } from "react";
import { useTheme } from "./stores/theme";

export const ThemeProvider = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return null;
};
