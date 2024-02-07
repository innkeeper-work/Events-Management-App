import React from "react";
import CategoryImages from "./CategoryImages";
import "../css/category_cards.css";
import "../css/styleguide.css";
import CategoryTitle from "./CategoryTitle";

const BrowseByCategoryCards = () => {
  return (
    <>
      <div className="categoryCard">
        <CategoryTitle
          headerText="Browse By Category"
          paraText="view all (10)"
        />
        <div className="category-image">
          <CategoryImages title="vacation" />
          <CategoryImages title="honeymoon & travel weddings" />
          <CategoryImages title="videographers wedding" />
          <CategoryImages title="celebrant" />
        </div>
      </div>
    </>
  );
};

export default BrowseByCategoryCards;
