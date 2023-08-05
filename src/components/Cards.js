import React from "react";

import "../styles/cards.css";

const Cards = () => {
  return (
    <div className="container">
      <div className="cards">
        <button className="first-time">
          <h3>First-timer</h3>
          <p>Is it your first time? Discover our next level gym.</p>
          <span>read more</span>
        </button>
        <button className="memberships">
          <h3>Memberships</h3>
          <p>Become a Gold member now & get unlimited workouts!</p>
          <span>read more</span>
        </button>
      </div>
    </div>
  );
};

export default Cards;
