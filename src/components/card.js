import React from "react";
import "./card.css";
import backpic from "./images/Phoenix.png";
import classnames from "classnames";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };
  return (
    <div className="cardstyle">
      <div
        className={classnames("card", {
          "is-flipped": isFlipped,
          "is-inactive": isInactive,
        })}
        onClick={handleClick}
      >
        <div className="card-face card-font-face">
          <img src={backpic} alt="backpic" className="img" />
        </div>
        <div className="card-face card-back-face">
          <img src={card.image} alt="frontpic" className="img" />
        </div>
      </div>
    </div>
  );
};
export default Card;
