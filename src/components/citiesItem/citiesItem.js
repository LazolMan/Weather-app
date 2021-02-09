import React from "react";
import PropTypes from "prop-types";

function CitiesItem({ index, item, setCityID }) {
  return (
    <span className="header__item" key={index} onClick={() => setCityID(index)}>
      {item}
    </span>
  );
}

CitiesItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.string,
  setCityID: PropTypes.func,
};

export default CitiesItem;
