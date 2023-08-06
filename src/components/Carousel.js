import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import "../styles/carousel.css";
import CarouselCard from "./CarouselCard";

import shred from "../images/holy-shred.webp";
import booty from "../images/holy-booty.webp";
import ride from "../images/holy-ride.webp";
import box from "../images/holy-box.webp";
import build from "../images/holy-build.webp";
import personal from "../images/personal-training.webp";
import open from "../images/open-gym.webp";

const Carousel = () => {
  const carouselCardContent = [
    {
      id: 1,
      img: shred,
      title: "Holy Shred",
      text: "As much a workout as a complete mindshift. Our high-intensity cardio workout utilizes all the tools of the bootcamp trade to help you slim down and buff up.",
    },
    {
      id: 2,
      img: booty,
      title: "Holy Booty",
      text: "A true badass workout. During this 50-minute workout you will be using the stair masters, weights & our booty band, to give you the ultimate booty building experience.",
    },
    {
      id: 3,
      img: ride,
      title: "Holy Ride",
      text: "A high-intensity, rhythm-based ride where you get carried away by the world’s best tracks, immersive light shows and epic on-stage performances. The result? Goosebumps.",
    },
    {
      id: 4,
      img: box,
      title: "Holy Box",
      text: "Step into the zone. Our HIIT workout focuses on speed, balance & agility. This explosive 50-minute boxing session is most of all a battle against yourself.",
    },
    {
      id: 5,
      img: build,
      title: "Holy Build",
      text: "Let's build a better you with our small group, technique-based Holy workout. This 50-minute class aims to build confidence, strength and performance.",
    },
    {
      id: 6,
      img: personal,
      title: "Personal training",
      text: "Maximize your potential with our 360 degree approach. From lifestyle & nutrition to stress reduction. We are dedicated to help you reach your goals.",
    },
    {
      id: 7,
      img: open,
      title: "Open Gym",
      text: "Discover our spacious Next Level gym where you can create your ultimate workout. Going next level in a truly luxurious atmosphere is what we promise.",
    },
  ];

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
