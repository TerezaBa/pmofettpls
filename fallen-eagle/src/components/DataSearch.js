import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentTime from "./CurrentTime";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

import "../styles/DataSearch.css";

export default function DataSearch(props) {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState({ searched: false });

  const fetchWeatherData = async (city) => {
    const apiKey = "b36tedd42903o5c6c68a4a10b4b1953f";
    const units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    const response = await axios.get(apiUrl);
    setWeatherData({
      searched: true,
      time: response.data.time,
      coords: response.data.coordinates,
      city: response.data.city,
      desc: response.data.condition.description,
      weather_info: {
        metric: response.data.temperature.current,
        hum: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        icon: {
          src: response.data.condition.icon_url,
          alt: response.data.condition.icon,
        },
      },
    });
  };

  useEffect(() => {
    fetchWeatherData(props.defaultCity);
  }, [props.defaultCity]);

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeatherData(input);
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  let form = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city"
              autoFocus={true}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-3">
            <input type="submit" className="btn btn-dark" value="Search" />
          </div>
        </div>
      </form>
    </div>
  );

  if (weatherData.searched) {
    return (
      <div className="DataSearch">
        <div>{form}</div>
        <div className="flex-container">
          <div className="flex-item">
            <h1>{weatherData.city}</h1>
            <CurrentTime coords={weatherData.coords} />
            <div className="text-capitalize">{weatherData.desc}</div>
          </div>
          <div className="flex-item">
            <Temperature weather_info={weatherData.weather_info} />
          </div>
        </div>
        <Forecast coords={weatherData.coords} icon={weatherData.icon} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
