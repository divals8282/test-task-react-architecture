import "./styles.scss";
import type { ComponentT } from "./types";

export const Button: ComponentT = (props) => {
  return (
    <button
      {...props}
      className={`${props.className ? props.className : ""} button`}
    >
      {props.children}
    </button>
  );
};
