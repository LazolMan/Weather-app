import React, { useState } from "react";
import CitiesList from "../citiesList/";
import WeatherDisplay from "../weatherDisplay/";

export default function App() {
  const CITIES = ["Odesa", "Kiev", "Moscow", "Minsk"];
  const [cityID, setCityID] = useState(0);

  return (
    <div className="content">
      <header className="header">
        <h1 className="header__title">Weather App</h1>

        <CitiesList cities={CITIES} setCityID={setCityID} />
      </header>

      <WeatherDisplay city={CITIES[cityID]} />
    </div>
  );
}
