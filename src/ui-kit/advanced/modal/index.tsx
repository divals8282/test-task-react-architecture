import "./styles.scss";
import type { ComponentT } from "./types";
import { createPortal } from "react-dom";
import { Typeography } from "../../typeography";
import { Button } from "../../button";

export const Modal: ComponentT = ({ children, title, onClose, open }) => {
  return createPortal(
    <div className={`modal ${open ? "modal--open" : ""}`} onClick={onClose}>
      <div className="modal__window" onClick={(e) => e.stopPropagation()}>
        <div className="modal__window__header">
          <div className="modal__window__header__title">
            <Typeography>{title}</Typeography>
          </div>
          <div className="modal__window__header__action">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
        <div className="modal__window__content">{children}</div>
      </div>
    </div>,
    document.body,
  );
};
