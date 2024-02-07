import React from "react";
import "../css/category_cards.css";
import "../css/styleguide.css";
import CategoryTitle from "./CategoryTitle";
import CategoryImages from "./CategoryImages";

const FeaturedVideos = () => {
  return (
    <>
      <div className="categoryCard">
        <CategoryTitle headerText="Featured Videos" paraText="view all (50)" />
        <div className="category-image ">
          <CategoryImages imageTitle="lorem ipsum" />
          <CategoryImages imageTitle="lorem ipsum" />
          <CategoryImages imageTitle="lorem ipsum" />
          <CategoryImages imageTitle="lorem ipsum" />
        </div>
        <div className="category-image ">
          <CategoryImages imageTitle="lorem ipsum" />
          <CategoryImages imageTitle="lorem ipsum" />
          <CategoryImages imageTitle="lorem ipsum" />
          <CategoryImages imageTitle="lorem ipsum" />
        </div>
      </div>
    </>
  );
};

export default FeaturedVideos;
