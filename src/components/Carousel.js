import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import "../styles/carousel.css";
import CarouselCard from "./CarouselCard";
import { carouselCardContent } from "./carouselContent";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="container">
        <Splide
          className="splide"
          options={{
            type: "slide",
            perPage: 3,
            drag: true,
            perMove: 1,
            pagination: false,
          }}
        >
          {carouselCardContent.map((content) => (
            <SplideSlide key={content.id}>
              <CarouselCard content={content} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;
