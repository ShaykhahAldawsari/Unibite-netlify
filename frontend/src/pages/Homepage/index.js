import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../restaurentModel.css";

import burgers from "../../images/burdemo.png";
import pancakes from "../../images/4053445_breakfast_hotcakes_kitchen_pancakes_restaurant_icon.png";
import pizza from "../../images/4053443_fast_food_gastronomy_pizza_restaurant_icon.png";
import drinks from "../../images/drinks.png";

import OrderNowCard from "../../components/OrderNowCard";
import Header from "../../components/Header";

import useItems from "../../hooks/useItems";

const Homepage = () => {
  const location = useLocation();
  const state = location.state;

  const { fetchItems } = useItems();

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (query) => {
    if (query == "") {
      console.log("true");
      setFilteredItems(items);
      return;
    }
    const filteredItems = items.filter((item) =>
      item?.itemname?.includes(query)
    );
    setFilteredItems(filteredItems);
  };

  const handleCategoryFilter = (query) => {
    if (query == "") {
      const filteredItems = items.filter((item) => true);
      setFilteredItems(filteredItems);
      return;
    }
    const filteredItems = items.filter((item) => item?.itemtype == query);
    setFilteredItems(filteredItems);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchItems();
      if (response) {
        if (!state) {
          setItems(response);
          setFilteredItems(response);
        } else {
          const filteredItems = response.filter(
            (item) => item.name === state.title
          );
          setItems(filteredItems);
          setFilteredItems(response);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            margin: "10px",
            padding: "24px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <img src={state.imageSrc ?? ""} alt="" width={200} height={150} />
          </div>

          <div
            style={{
              marginLeft: "24px",
            }}
          >
            <h1>{state?.title ?? ""}</h1>
            <p
              onClick={() => window.open(state?.location)}
              style={{
                fontSize: "18px",
                color: "grey",
                cursor: "pointer",
              }}
            >
              location 🗺️
            </p>
          </div>
        </div>

        <section class="search-container">
          <input
            type="search"
            placeholder=" Search"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div class="categories">
            <button onClick={() => handleCategoryFilter("")}>
              <span
                style={{
                  color: "white",
                }}
              >
                All
              </span>
            </button>
            <button onClick={() => handleCategoryFilter("Dessert")}>
              <img
                src={pancakes}
                alt="restuarnt icon"
                width="25"
                height="25"
                fill="currentColor"
              />
            </button>
            <button onClick={() => handleCategoryFilter("Savory")}>
              <img
                src={pizza}
                alt="food icon"
                width="25"
                height="25"
                fill="currentColor"
              />
            </button>

            <button
              onClick={() => handleCategoryFilter("Drink")}
              style={{ color: "#fffefe" }}
            >
              <img src={drinks} alt="cup of coffe" width="25" height="25" />
            </button>
          </div>
        </section>
        {loading ? (
          <div style={{ margin: "auto" }}>Loading...</div>
        ) : items.length === 0 ? (
          <>No items found</>
        ) : (
          <div>
            <div className="main-menu">
              {filteredItems &&
                filteredItems.map((item) => {
                  return (
                    <OrderNowCard
                      itemPrice={item?.itemprice ?? ""}
                      itemCals={item?.itemkcals ?? ""}
                      imageSrc={item?.itemIMG ?? burgers}
                      title={item?.itemname}
                      desc={"A delicious and fulfilling super snack"}
                    />
                  );
                })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Homepage;
