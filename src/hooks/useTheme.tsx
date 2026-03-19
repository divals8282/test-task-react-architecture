import { useEffect } from "react";
import { useTheme as useThemeStore } from "../stores/theme";

export const useTheme = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return null;
};
