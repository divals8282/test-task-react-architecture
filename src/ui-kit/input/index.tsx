import "./styles.scss";
import type { ComponentT } from "./types";

export const Input: ComponentT = (props) => {
  return (
    <input
      {...props}
      className={`${props.className ? props.className : ""} input`}
    />
  );
};
