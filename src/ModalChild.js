import React from "react";

const ModalChild = ({ count, closeModal }) => {
  return (
    <div className="popup-content">
      <p>
        <b> Count : {count} </b>
      </p>
      <button onClick={closeModal}> Close </button>
    </div>
  );
};

export default ModalChild;
