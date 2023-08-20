import React from "react";

const CarouselCardNoLink = ({ content }) => {
  const { img, title, text } = content;
  return (
    <div className="carousel-card" style={{ backgroundImage: `url(${img})` }}>
      <div className="carousel-card-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CarouselCardNoLink;
