import "./styles.scss";

import { useTheme } from "../stores/theme";
import { useTheme as useThemeProvider } from "../hooks/useTheme";

import { Button } from "../ui-kit/button";
import { Typeography } from "../ui-kit/typeography";
import { Link, Outlet } from "react-router";

export const Layout = () => {
  useThemeProvider();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__header__title">
          <Typeography size="medium">Test Task</Typeography>
        </div>
        <nav className="layout__header__nav">
          <Link to={"/"}>
            <Typeography>Home</Typeography>
          </Link>
          <Link to={"/ui-kit"}>
            <Typeography>UI Kit</Typeography>
          </Link>
          <Button
            className="layout__header__nav--theme-toggle"
            onClick={() => toggleTheme()}
          >
            {theme}
          </Button>
        </nav>
      </header>
      <main className="layout__main">
        <Outlet />
      </main>
      <footer className="layout__footer">
        <Typeography size="small">2026 &copy; Test Task</Typeography>
      </footer>
    </div>
  );
};
