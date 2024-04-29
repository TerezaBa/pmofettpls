import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import OneDayForecast from "./OneDayForecast";
import { UnitSwitchContext } from "./UnitSwitchContext";

import "./styles/Forecast.css";

export default function Forecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const { unit } = useContext(UnitSwitchContext);

  const fetchForecast = async (coords) => {
    const { latitude, longitude } = coords;
    const apiKey = "b36tedd42903o5c6c68a4a10b4b1953f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    const response = await axios.get(apiUrl);
    setForecastData(response.data.daily);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchForecast(props.coords);
    }, 10);

    return () => clearTimeout(timer);
  }, [props.coords]);

  return (
    <div className="row Forecast">
      {forecastData &&
        forecastData.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div key={index} className="col-2 mt-4">
                <OneDayForecast forecastData={dailyForecast} unit={unit} />
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
}
