import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function WeatherDisplay({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getData(city);
  }, [city]);

  function getData(zipCode) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${zipCode}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`
    )
      .then((res) => res.json())
      .then((json) => setWeatherData(json))
      .then(() => setLoading(false));
  }

  if (loading) return <div />;

  const iconUrl =
    "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";

  return (
    <main className="main">
      <div className="main__top-line">
        <h2 className="main__title">{weatherData.name}</h2>
        <img src={iconUrl} alt={weatherData.description} />
      </div>

      <div className="main__data">
        <p className="lead">Температура: {weatherData.main.temp}°</p>
        <p className="lead">Влажность: {weatherData.main.humidity}%</p>
        <p className="lead">Ветер: {weatherData.wind.speed}м/с</p>{" "}
      </div>
    </main>
  );
}

WeatherDisplay.propTypes = {
  city: PropTypes.string,
};

export default WeatherDisplay;
