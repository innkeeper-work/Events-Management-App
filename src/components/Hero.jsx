import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../css/hero.css";
import "../css/styleguide.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h2>Your Wedding, Your Way</h2>
        <form action="" method="post">
          <select name="category" className="custom-select">
            <option value="select" selected disabled>
              Select Category
            </option>
            <option value="Rice">Rice</option>
            <option value="Beans">Beans</option>
            <option value="Spaghetti">Spaghetti</option>
          </select>
          <select name="location" className="custom-select">
            <option value="select" selected disabled>
              Select Location
            </option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Anambra">Anambra</option>
            <option value="Lagos">Lagos</option>
            <option value="Abeokuta">Abeokuta</option>
          </select>
          <input
            type="search"
            className="search"
            name="search"
            id="search"
            placeholder="Search"
          />{" "}
          <FontAwesomeIcon className="icon" icon={faSearch} />
        </form>
      </div>
    </>
  );
};

export default Hero;
