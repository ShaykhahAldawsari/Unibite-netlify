import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const Delivery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  const [mobileNumber, setMobileNumber] = useState("");
  const [college, setCollege] = useState("");
  const [building, setBuilding] = useState("");

  const handleSubmit = () => {
    if (mobileNumber === "" || college === "" || building === "") {
      return alert("all details are required");
    }

    navigate("/orders", {
      state: { items: state, building: building, mobileNumber: mobileNumber },
    });
  };

  return (
    <div className="body">
      <header>
        <Header />
      </header>
      <div className="receipt">
        <h3 style={{ marginBottom: "40px" }}>Delivery</h3>
        <div style={{ marginBottom: "10px" }}>
          {!state ? (
            <>Linked order missing</>
          ) : (
            <form action="#">
              <h4 className="orders">
                <pre>Enter your college name:</pre>
                <input
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  type="text"
                  style={{
                    boxShadow: "1px 1px 6px 3px #f5f9fd",
                    borderColor: "rgb(198, 195, 195)",
                    borderRadius: "15px",
                    height: "33px",
                    width: "310px",
                  }}
                />
              </h4>

              <h4 className="orders">
                <pre>Enter your building number:</pre>
                <input
                  onChange={(e) => setBuilding(e.target.value)}
                  value={building}
                  type="text"
                  style={{
                    borderColor: "rgb(198, 195, 195)",
                    borderRadius: "15px",
                    height: "33px",
                    width: "310px",
                  }}
                />
              </h4>

              <h4 className="orders">
                <pre>Enter your phone number:</pre>
                <input
                  onChange={(e) => setMobileNumber(e.target.value)}
                  value={mobileNumber}
                  type="number"
                  placeholder="+966"
                  name=""
                  id=""
                  minLength="9"
                  maxLength="9"
                  style={{
                    borderColor: "rgb(198, 195, 195)",
                    borderRadius: "15px",
                    height: "33px",
                    width: "310px",
                  }}
                />
              </h4>

              <div>
                <input
                  onClick={handleSubmit}
                  type="button"
                  className="btn btn-info"
                  value="Submit"
                  style={{ marginLeft: "150px", marginTop: "5px" }}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
