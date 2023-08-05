import React from "react";

import "../styles/intro.css";

import IntroVideo from "../images/intro.mp4";

const Hero = () => {
  return <video src={IntroVideo} autoPlay muted loop></video>;
};

export default Hero;
