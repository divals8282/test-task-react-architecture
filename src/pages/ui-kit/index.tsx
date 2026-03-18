import "./styles.scss";
import { Typeography } from "../../ui-kit/typeography";
import { Input } from "../../ui-kit/input";
import { Button } from "../../ui-kit/button";
import { Modal } from "../../ui-kit/advanced/modal";
import { useState } from "react";

export const UIKit = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <section className="ui-kit-page">
      <div className="ui-kit-page__component">
        <div className="ui-kit-page__component--title">
          <Typeography size="large">Typeography</Typeography>
        </div>
        <div className="ui-kit-page__component--variants">
          <Typeography size="large">Home Page</Typeography>
          <Typeography size="medium">Home Page</Typeography>
          <Typeography size="small">Home Page</Typeography>
        </div>
      </div>
      <div className="ui-kit-page__component">
        <div className="ui-kit-page__component--title">
          <Typeography size="large">Input</Typeography>
        </div>
        <div className="ui-kit-page__component--variants">
          <Input />
        </div>
      </div>
      <div className="ui-kit-page__component">
        <div className="ui-kit-page__component--title">
          <Typeography size="large">Modal</Typeography>
        </div>
        <div className="ui-kit-page__component--variants">
          <Button onClick={() => setModalState(true)}>Open Modal</Button>
          <Modal
            open={modalState}
            onClose={() => setModalState(false)}
            title="Modal Title"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            sapiente cum fugiat, eius veritatis nulla est nam sint, maxime,
            dolorem aspernatur! Culpa qui cumque id et dolor, ipsa ex ipsum.
            dolorem aspernatur! Culpa qui cumque id et dolor, ipsa ex ipsum.
            dolorem aspernatur! Culpa qui cumque id et dolor, ipsa ex ipsum.
            dolorem aspernatur! Culpa qui cumque id et dolor, ipsa ex ipsum.
            dolorem aspernatur! Culpa qui cumque id et dolor, ipsa ex ipsum.
            dolorem aspernatur! Culpa qui cumque id et dolor, ipsa ex ipsum.
            dolorem aspernatur! Culpa qui cumque id et dolor, ipsa ex ipsum.
            dolorem aspernatur! Culpa qui cumque id et dolor, ipsa ex ipsum.
            dolorem aspernatur! Culpa qui cumque id et dolor, ipsa ex ipsum.
          </Modal>
        </div>
      </div>
    </section>
  );
};
