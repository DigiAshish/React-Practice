import React from "react";

const FlipCard = () => {
  return (
    <>
      <p>Hello from FlipCard</p>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>This is front side</h1>
          </div>
          <div className="flip-card-back">
            <h1>This is back side</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
