import React from "react";

import "../styles/hamburgerMenu.css";

const HamburgerMenu = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={`hamburger-menu ${openMenu ? "active" : ""}`}>
      <div className="close-hamburger-menu">
        <button onClick={() => setOpenMenu(false)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M16 1.53345 14.4665 0 8 6.46655 1.53345 0 0 1.53345 6.46655 8 0 14.4665 1.53345 16 8 9.53345 14.4665 16 16 14.4665 9.53345 8 16 1.53345Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <div className="navigation-links">
        <ul>
          <li>About</li>
          <li>Locations</li>
          <li>Concepts</li>
          <li>First-timer</li>
          <li>Memberships</li>
          <li>Book a workout</li>
          <li>Pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
