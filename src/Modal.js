import React, { useState } from "react";
import ModalChild from "./ModalChild";
import "./popup.css";

const Modal = () => {
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  // const [closeModal, setCloseModal] = useState(false);

  const handleOpen = () => {
    setCount(count + 1);
    setOpenModal(true);
  };

  const handleReset = () => {
    setCount(0);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const modalView = () => {
    if (openModal) {
      return (
        <div className="popup" style={{ display: "block" }}>
          <ModalChild count={count} closeModal={closeModal} />
        </div>
      );
    }
  };

  return (
    <>
      Hello from Modal
      <br />
      <button onClick={handleOpen}>Open</button>
      <button onClick={handleReset}>Reset</button>
      {/* {modalView()} */}
      {openModal && (
        <div className="popup" style={{ display: "block" }}>
          <ModalChild count={count} closeModal={closeModal} />
        </div>
      )}
    </>
  );
};

export default Modal;
