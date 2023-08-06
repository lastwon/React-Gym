import React from "react";

import "../styles/mainInfo.css";

const MainInfo = () => {
  return (
    <div className="main-info">
      <div className="container">
        <div className="text-container">
          <h2>This is our tribe</h2>
          <p>
            At Saints & Stars you define your line and we give you everything
            we've got to help you cross it. Discover the next level fitness
            experience that refuses to cut corners when it comes to quality,
            atmosphere and vibe. Welcome to our tribe, we're very happy you're
            here.
          </p>
        </div>
        <div className="info-btn-container">
          <button className="btn-primary" style={{ marginTop: "0" }}>
            Start now
          </button>
        </div>
      </div>
      <div className="container">
        <div className="text-container">
          <h2>Our concepts</h2>
          <p>
            We offer 7 contagious Holy Concepts divided over 2 clubs. Inspired
            by boxing, spinning and bootcamp, we designed 3 HIIT workouts: Holy
            Shred, Holy Ride & Holy Box. Wanna build muscle and increase
            strength? Try our Holy Build & badass workout Holy Booty. Is
            Personal Training or Open Gym more your thing? We've got you
            covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
