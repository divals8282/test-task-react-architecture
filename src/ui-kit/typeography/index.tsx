import type { ComponentT } from "./types";
import "./styles.scss";
export const Typeography: ComponentT = ({
  component = "p",
  size = "small",
  weight = "light",
  children,
}) => {
  switch (component) {
    case "h1":
      return (
        <h1
          className={`typeography typeography--${size} typeography--${weight}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`typeography typeography--${size} typeography--${weight}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`typeography typeography--${size} typeography--${weight}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`typeography typeography--${size} typeography--${weight}`}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`typeography typeography--${size} typeography--${weight}`}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`typeography typeography--${size} typeography--${weight}`}
        >
          {children}
        </h6>
      );
    case "p":
      return (
        <p
          className={`typeography typeography--${size} typeography--${weight}`}
        >
          {children}
        </p>
      );
  }
};
