import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/Card";

import unnamed from "../../images/unnamed.png";

import useCafes from "../../hooks/uesCafes";
import Header from "../../components/Header";

const Cafes = () => {
  const navigate = useNavigate();
  const { fetchItems } = useCafes();

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [tempItems, setTempItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetchItems();
      if (response) {
        setItems(response);
        setTempItems(response);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (query == "") {
      setItems(tempItems);
      return;
    }
    const filteredItems = tempItems.filter((item) =>
      item?.cafename?.includes(query)
    );
    setItems(filteredItems);
  };

  const navigateToMenus = (title, location, imageSrc) => {
    navigate("/menus", {
      state: {
        title: title,
        location: location,
        imageSrc: imageSrc,
      },
    });
  };

  return (
    <main>
      <header>
        <Header />
      </header>

      {loading ? (
        <>Loading...</>
      ) : (
        <div
          style={{
            marginTop: "80px",
          }}
        >
          <div
            style={{
              margin: " 10px",
              padding: "12x",
            }}
          >
            <p
              style={{
                fontSize: "32px",
                fontWeight: "600",
              }}
            >
              Popular Cafes
            </p>
          </div>
          <div
            style={{
              margin: "10px",
              padding: "12x",
              display: "flex",
              overflowX: "scroll",
            }}
          >
            {items &&
              items.length > 0 &&
              items.map((item) => {
                return (
                  <div
                    onClick={() => {
                      navigateToMenus(
                        item?.cafename,
                        item?.cafelocation,
                        item?.cafeimg
                      );
                    }}
                    style={{
                      margin: "0px 10px",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={item?.cafeimg ?? ""}
                      alt=""
                      width={450}
                      height={240}
                      style={{
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                      }}
                    />

                    <div
                      style={{
                        padding: "12px 12px",
                        width: "450px",
                        backgroundColor: "white",
                        marginBottom: "20px",
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {item?.cafename ?? ""}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>

          <section
            class="search-container"
            style={{
              marginTop: "80px",
            }}
          >
            <input
              type="search"
              placeholder=" Search"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </section>
          <section
            className="cards-container"
            style={{
              marginTop: "50px",
            }}
          >
            {items &&
              items.length > 0 &&
              items.map((cafe) => (
                <Card
                  imageSrc={cafe?.cafeimg ?? unnamed}
                  title={cafe?.cafename ?? "N/A"}
                  rating="5.0"
                  location={cafe?.cafelocation ?? ""}
                />
              ))}
          </section>
        </div>
      )}
    </main>
  );
};

export default Cafes;
