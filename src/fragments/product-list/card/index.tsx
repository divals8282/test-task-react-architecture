import { useState } from "react";
import { Modal } from "../../../ui-kit/advanced/modal";
import { Button } from "../../../ui-kit/button";
import { Typeography } from "../../../ui-kit/typeography";
import "./styles.scss";
import type { ComponentT } from "./types";

export const Card: ComponentT = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content__info">
          <Typeography>
            <b>title:</b> {data.title}
          </Typeography>
          <Typeography>
            <b>price:</b> {data.price}
          </Typeography>
          <Typeography>
            <b>category:</b> {data.category}
          </Typeography>
        </div>
        <div className="card__content__image">
          <img src={data.image} alt="" />
        </div>
      </div>
      <div className="card__actions">
        <Button onClick={() => setModalIsOpen(true)}>See More</Button>
      </div>
      <Modal
        title={data.title}
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <div className="card-modal">
          <div className="card-modal__content">
            <div className="card-modal__content__image">
              <img src={data.image} />
            </div>
            <div className="card-modal__content__info">
              <Typeography>
                <b>Price:</b> {data.price}
              </Typeography>
              <Typeography>
                <b>Category:</b> {data.category}
              </Typeography>
              <Typeography>
                <b>Description:</b> {data.description}
              </Typeography>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
