import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/nav.css";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
      <button onClick={handleOpenMenu} className="nav-menu">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <path
            d="M0 12h18v-2H0v2Zm0-5h18V5H0v2Zm0-7v2h18V0H0Z"
            fill="#2916BA"
          ></path>
        </svg>
      </button>
      {openMenu && (
        <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      )}
      <div className="log-in">
        <svg width="24" height="24" fill="rgb(41, 22, 186)" viewBox="0 0 16 16">
          <path d="M7.99992 1.33334C4.31992 1.33334 1.33325 4.32001 1.33325 8.00001C1.33325 11.68 4.31992 14.6667 7.99992 14.6667C11.6799 14.6667 14.6666 11.68 14.6666 8.00001C14.6666 4.32001 11.6799 1.33334 7.99992 1.33334ZM7.99992 3.33334C9.10659 3.33334 9.99992 4.22668 9.99992 5.33334C9.99992 6.44001 9.10659 7.33334 7.99992 7.33334C6.89325 7.33334 5.99992 6.44001 5.99992 5.33334C5.99992 4.22668 6.89325 3.33334 7.99992 3.33334ZM7.99992 12.8C6.33325 12.8 4.85992 11.9467 3.99992 10.6533C4.01992 9.32668 6.66659 8.60001 7.99992 8.60001C9.32659 8.60001 11.9799 9.32668 11.9999 10.6533C11.1399 11.9467 9.66659 12.8 7.99992 12.8Z"></path>
        </svg>
        <Link to={"/login"}>Log in</Link>
        <Link to={"/register"}>Start Today</Link>
      </div>
    </nav>
  );
};

export default Nav;
