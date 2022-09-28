import React from "react";
import { FaSistrix } from "react-icons/fa";
import TrendsKeyword from "./TrendsKeyword";
const Trends = () => {
  return (
    <div className="trends">
      <div className="trends__search">
        <input
          type="text"
          className="trend__control"
          placeholder="Search Twitter"
        />
        <div className="trend__icon">
          <FaSistrix className="search" />
        </div>
      </div>
      <TrendsKeyword />
    </div>
  );
};

export default Trends;
