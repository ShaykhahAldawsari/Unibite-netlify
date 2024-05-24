import React from "react";
import { useNavigate } from "react-router-dom";

import "../../orderConfirmed.css";

import gify from "../../images/giphy (2).gif";
import Header from "../../components/Header";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <header>
        <Header />
      </header>
      <div className="receipt anim-typewriter">
        <h3
          style={{
            marginBottom: "40px",
            textAlign: "center",
            margin: "30px 0",
          }}
        >
          Your order has been Confirmed
        </h3>
        <img
          src={gify}
          alt="GIF eats his phone"
          width="200px"
          style={{ marginLeft: "100px" }}
        />

        <div
          style={{
            margin: "30px",
          }}
        >
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btn btn-info"
            style={{ marginLeft: "130px", width: "150px" }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
