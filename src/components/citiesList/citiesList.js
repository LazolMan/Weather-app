import React from "react";
import PropTypes from "prop-types"
import CitiesItem from "../citiesItem/";

function CitiesList({cities, setCityID}) {
  return (
    <div className="header__list">
      {cities.map((item, index) => (
        <CitiesItem key={index} index={index} item={item} setCityID={setCityID} />
      ))}
    </div>
  );
}

CitiesItem.propTypes = {
  cities: PropTypes.array,
  setCityID: PropTypes.func
}

export default CitiesList;