import React from "react";
import "../css/category_cards.css";

const CategoryTitle = (props) => {
  const { headerText, paraText } = props;
  return (
    <>
      <div className="category-title">
        <h3>{headerText}</h3>
        <p>{paraText} </p>
      </div>
    </>
  );
};

export default CategoryTitle;
