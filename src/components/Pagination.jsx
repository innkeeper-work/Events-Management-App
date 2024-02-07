import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import "../css/pagination.css";

const Pagination = () => {
  return (
    <>
      <div className="pagination">
        <FontAwesomeIcon className="icon" icon={faAngleDoubleLeft} />
        <p>
          <a href="/" className="active">
            1
          </a>
        </p>
        <p>
          <a href="/">2</a>
        </p>
        <p>
          <a href="/">3</a>
        </p>
        <p>
          <a href="/">4</a>
        </p>
        <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
      </div>
    </>
  );
};

export default Pagination;
