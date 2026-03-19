import "./styles.scss";
import type { ComponentT } from "./types";

export const Select: ComponentT = (props) => {
  return (
    <select {...props} className="select">
      {props.children}
    </select>
  );
};
