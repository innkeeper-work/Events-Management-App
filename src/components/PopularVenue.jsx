import React from "react";
import "../css/category_cards.css";
import "../css/styleguide.css";
import CategoryTitle from "./CategoryTitle";
import CategoryImages from "./CategoryImages";
import Pagination from "./Pagination";

const PopularVenue = () => {
  return (
    <>
      <div className="categoryCard">
        <CategoryTitle headerText="Popular Venue" paraText="view all (1000) " />
        <div className="category-image">
          <CategoryImages title="maldives" imageTitle="lorem ipsum" />
          <CategoryImages title="abhu dhabi" imageTitle="lorem ipsum" />
          <CategoryImages title="india" imageTitle="lorem ipsum" />
          <CategoryImages title="dubai" imageTitle="lorem ipsum" />
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default PopularVenue;
