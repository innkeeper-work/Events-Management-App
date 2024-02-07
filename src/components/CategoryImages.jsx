import React from "react";
import CategoryImage from "../images/image-2.jpg";

const CategoryImages = (props) => {
  const { title, imageTitle } = props;
  return (
    <>
      <div className="categoryImageCard">
        <img src={CategoryImage} alt="card" />
        <h5>{imageTitle} </h5>
        <p>{title}</p>
      </div>
    </>
  );
};

export default CategoryImages;
