import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import "../styles/first-timer.css";

import Nav from "./Nav";
import Footer from "./Footer";
import Logo from "./Logo";
import PlayVideo from "./PlayVideo";
import { firstTimerCarouselCardContent } from "./carouselContent";
import CarouselCardNoLink from "./CarouselCardNoLink";
import Information from "./Information";
import { firstTimerInformation } from "./informationContent";
import Carousel from "./Carousel";
import BuyWorkouts from "./BuyWorkouts";
import { firstTimerBuyWorkoutContent } from "./informationContent";

const FirstTimer = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideo = () => {
    setShowVideo(true);
  };

  return (
    <>
      <Nav />
      <main>
        <div
          className="first-timer-header"
          style={showVideo ? { position: "fixed", zIndex: "10" } : {}}
        >
          <Logo />
          {showVideo && <PlayVideo setShowVideo={setShowVideo} />}
          <div className="hero-content">
            <h1>Next level gym</h1>
            <h3>Cross the line</h3>
            <button
              onClick={handleVideo}
              className="btn-primary"
              style={{ marginTop: "0" }}
            >
              Play video
            </button>
          </div>
        </div>
        <div className="container">
          <div className="text-container">
            <h2>Join our tribe</h2>
            <p>
              This is the next level gym where everything becomes possible.
              Where Star Trainers crush your limits and make you run faster,
              lift more, punch harder and get shredded. When the doors close,
              lights dim and music turns up. That's when the magic happens. A
              revolution for your body, mind and soul and designed to burn up to
              1000 calories and build muscle at the same time. Are you ready to
              cross the line?
            </p>
          </div>
          <div className="info-btn-container">
            <button className="btn-primary" style={{ marginTop: "0" }}>
              Try now
            </button>
          </div>
        </div>
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
              {firstTimerCarouselCardContent.map((content) => (
                <SplideSlide key={content.id}>
                  <CarouselCardNoLink content={content} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <Information info={firstTimerInformation} />
        <div className="container">
          <div className="text-container" style={{ marginBottom: "60px" }}>
            <h2>Our concepts</h2>
            <p>
              We offer 7 contagious Holy Concepts divided over 2 clubs. Inspired
              by boxing, spinning and bootcamp, we designed 3 HIIT workouts:
              Holy Shred, Holy Ride & Holy Box. Wanna build muscle and increase
              strength? Try our Holy Build & badass workout Holy Booty. Is
              Personal Training or Open Gym more your thing? We've got you
              covered.
            </p>
          </div>
        </div>
        <Carousel />
        <BuyWorkouts info={firstTimerBuyWorkoutContent} />
      </main>
      <Footer />
    </>
  );
};

export default FirstTimer;
