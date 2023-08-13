import React from "react";
import { Link } from "react-router-dom";

import "../styles/cards.css";

const Cards = () => {
  return (
    <div className="container">
      <div className="cards">
        <Link className="first-time" to={"/first-timer"}>
          <h3>First-timer</h3>
          <p>Is it your first time? Discover our next level gym.</p>
          <span>read more</span>
        </Link>
        <Link className="memberships" to={"/memberships"}>
          <h3>Memberships</h3>
          <p>Become a Gold member now & get unlimited workouts!</p>
          <span>read more</span>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
