import React from "react";

import "../styles/footer.css";

import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoSpotify } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-about">
              <p>About us</p>
              <ul>
                <li>Locations</li>
                <li>Contact</li>
                <li>Trainers</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div className="footer-offer">
              <p>What we offer</p>
              <ul>
                <li>First-timer</li>
                <li>Memberships</li>
                <li>Merchandise</li>
                <li>Corporate deal</li>
                <li>Our app</li>
              </ul>
            </div>
            <div className="footer-more">
              <p>Read more</p>
              <ul>
                <li>Faq</li>
                <li>Holy friends</li>
                <li>Press</li>
                <li>Terms & conditions</li>
                <li>Saintscare</li>
              </ul>
            </div>
            <div className="footer-join">
              <p>Join our tribe</p>
              <p>
                You are not yet a member of Saints and Stars, please register
                yourself quickly!
              </p>
              <button className="btn-primary">Register now</button>
            </div>
          </div>
          <div className="footer-socials">
            <AiOutlineInstagram className="footer-socials-icon" />
            <BiLogoSpotify className="footer-socials-icon" />
            <BiLogoTiktok className="footer-socials-icon" />
            <BiLogoFacebookCircle className="footer-socials-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
