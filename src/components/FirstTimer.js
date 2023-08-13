import React, { useState } from "react";

import "../styles/first-timer.css";

import Nav from "./Nav";
import Footer from "./Footer";
import Logo from "./Logo";
import PlayVideo from "./PlayVideo";

const FirstTimer = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideo = () => {
    setShowVideo(true);
  };

  return (
    <>
      <Nav />
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
      <Footer />
    </>
  );
};

export default FirstTimer;
