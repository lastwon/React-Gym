import React, { useState } from "react";

import video from "../images/first-timer-video.mp4";

import "../styles/playVideo.css";

const PlayVideo = ({ setShowVideo }) => {
  return (
    <div className="modal">
      <div className="video-container">
        <button className="close-video" onClick={() => setShowVideo(false)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M16 1.53345 14.4665 0 8 6.46655 1.53345 0 0 1.53345 6.46655 8 0 14.4665 1.53345 16 8 9.53345 14.4665 16 16 14.4665 9.53345 8 16 1.53345Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <video src={video} autoPlay muted playsInline controls></video>
      </div>
    </div>
  );
};

export default PlayVideo;
