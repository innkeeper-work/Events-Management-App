import React from "react";
import "../css/sales-banner.css";
import salesImage from "../images/image-2.jpg";

const SalesBanner = () => {
  return (
    <>
      <div className="sales-banner">
        <div className="salesImg">
          <img src={salesImage} alt="sales-banner" />
        </div>

        <div className="sales-text">
          <h2>Get an Exclusive discount this summer</h2>
          <p>
            We're offering a special discount to all customers when you purchase
            above $200 from our women category.
          </p>
          <button type="button">Get Discount</button>
        </div>
      </div>
    </>
  );
};

export default SalesBanner;
