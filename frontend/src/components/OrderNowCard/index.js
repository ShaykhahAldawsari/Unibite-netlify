import React from "react";

import { useNavigate } from "react-router-dom";

const OrderNowCard = ({ imageSrc, title, desc, itemPrice, itemCals }) => {
  const naviagte = useNavigate();

  return (
    <div className="menu">
      <img
        src={imageSrc}
        alt="DRINKS"
        height="220px"
        width="290px"
        style={{ borderRadius: "10px" }}
      />
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
        <h3>{"SAR " + itemPrice}</h3>
      </div>
      <button
        onClick={() => {
          naviagte("/delivery", {
            state: [
              {
                title: title,
                imageSrc: imageSrc,
                itemPrice: itemPrice,
              },
            ],
          });
        }}
        className="order-button"
      >
        Order Now
      </button>
    </div>
  );
};

export default OrderNowCard;
