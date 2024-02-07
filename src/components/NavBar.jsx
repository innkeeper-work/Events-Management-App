import React from "react";
import "../css/navbar.css";
import "../css/styleguide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="top-nav">
        <p>
          <a href="/">
            عربي <FontAwesomeIcon icon={faCaretDown} />
          </a>
        </p>
        <h5 className="login">
          <a href="/">Login</a>
        </h5>
        <h5 className="signup">
          <a href="/">Sign Up </a>
        </h5>
      </div>
      <header>
        {/* <img src={logo} alt="Events-logo" /> */}
        <h3>Company Name</h3>
        <nav>
          <a href="http://" className="active" rel="noopener noreferrer">
            Home
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            About Us
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Venue
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Media
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </nav>
        <FontAwesomeIcon className="icon" icon={faSearch} />
      </header>
    </>
  );
};

export default NavBar;
