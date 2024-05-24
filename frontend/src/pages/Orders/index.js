import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header";

const Orders = () => {
  const naviagte = useNavigate();
  const location = useLocation();
  const state = location.state;

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (state?.items) {
      setItems(state.items);
    }
  }, []);

  const getTotal = () => {
    let total = 0;
    if (items) {
      items.map((item) => {
        total += parseInt(item?.itemPrice ?? "0");
      });
    }
    return total;
  };

  return (
    <div>
      <header><Header /></header>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="body">
          <div className="receipt">
            <h3 style={{ marginBottom: "40px" }}>My Order</h3>
            <div style={{ marginBottom: "10px" }}>
              <h4 className="orders">
                {items &&
                  items.length !== 0 &&
                  items.map((item) => {
                    return (
                      <h4 className="orders">
                        <pre>
                          {item?.title ?? ""}
                          <img
                            src={
                              item?.imageSrc ??
                              "https://www.auntieannes.com.my/web/assets/img/menu/pretzel_stix/2.png"
                            }
                            className="img-thumbnail"
                            alt="..."
                            width="90"
                          />
                        </pre>
                      </h4>
                    );
                  })}
              </h4>
              <h3 style={{ marginTop: "20px", marginBottom: "30px" }}>
                <pre>{"sub total SAR " + getTotal()}</pre>
              </h3>
            </div>
            <div>
              <table>
                <tr>
                  <td
                    onClick={() =>
                      naviagte("/pickp-up-reciept", {
                        state: {
                          items: items,
                          total: getTotal(),
                          building: state?.building ?? "",
                          mobileNumber: state?.mobileNumber ?? "",
                        },
                      })
                    }
                  >
                    <input
                      type="button"
                      className="btn btn-info"
                      value="Pick Up"
                      style={{ width: "150px" }}
                    />
                  </td>
                  <td
                    onClick={() =>
                      naviagte("/reciept", {
                        state: {
                          items: items,
                          total: getTotal(),
                          building: state?.building ?? "",
                          mobileNumber: state?.mobileNumber ?? "",
                        },
                      })
                    }
                  >
                    <input
                      type="button"
                      className="btn btn-info"
                      value="Delivery"
                      style={{ marginLeft: "70px", width: "150px" }}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Orders;
