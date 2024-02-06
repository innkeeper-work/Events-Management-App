import React from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <>
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
