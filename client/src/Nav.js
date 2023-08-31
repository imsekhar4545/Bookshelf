import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        
        <div className="logo">
          <h2>
            <span>B</span>ook
            <span>S</span>helf
          </h2>
        </div>

        
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.instagram.com/imsekhar45/"
                target="_sekhar">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/imsekhar45/"
                target="_sekhar">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/imsekhar45/"
                target="_sekhar">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;