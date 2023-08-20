import React from "react";

import "../styles/buyWorkouts.css";

const BuyWorkouts = ({ info }) => {
  return (
    <div className="container">
      {info.map((content) => (
        <div
          className="buy-workouts"
          key={content.id}
          style={{ backgroundImage: `url(${content.bg})` }}
        >
          <div className="banner-content">
            <h1>{content.title}</h1>
            <p>{content.text}</p>
            <button className="btn-primary">{content.button}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyWorkouts;
