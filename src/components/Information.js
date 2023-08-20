import React from "react";

import "../styles/information.css";

const Information = ({ info }) => {
  return (
    <div className="info-container">
      <div className="info-cards">
        {info.map((content) => (
          <div className="info-card" key={content.id}>
            <h3>{content.title}</h3>
            <p>{content.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
