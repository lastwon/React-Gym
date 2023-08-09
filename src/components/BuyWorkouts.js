import React from "react";

import "../styles/buyWorkouts.css";

const BuyWorkouts = () => {
  return (
    <div className="container">
      <div className="buy-workouts">
        <div className="banner-content">
          <h1>Buy workouts</h1>
          <p>
            Pay as you go, that's the way we roll. You can buy a single workout
            or a handful of them, it's up to you!
          </p>
          <button className="btn-primary">Let's go</button>
        </div>
      </div>
    </div>
  );
};

export default BuyWorkouts;
