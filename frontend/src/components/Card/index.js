import React from "react";

import { useNavigate } from "react-router-dom";

const Card = ({ imageSrc, title, rating, location }) => {
  const navigate = useNavigate();

  const navigateToMenus = () => {
    navigate("/menus", {
      state: {
        title: title,
        location: location,
        imageSrc: imageSrc,
      },
    });
  };

  return (
    <div
      className="card"
      style={{
        width: "450px",
        maxWidth: "450px",
      }}
    >
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1em"
          fill="rgb(227, 190, 105)"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        {rating}
      </p>
      <a
        style={{
          cursor: "pointer",
        }}
        onClick={navigateToMenus}
      >
        See Details
      </a>
    </div>
  );
};

export default Card;
