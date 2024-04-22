import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

import "./styles/DataSearch.css";

export default function DataSearch(props) {
  const [query, setQuery] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ searched: false });

  function displayTemp(response) {
    console.log(response);
    setWeatherData({
      searched: true,
      date: response.data.time,
      coords: response.data.coordinates,
      city: response.data.city,
      desc: response.data.condition.description,
      temp: response.data.temperature.current,
      hum: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: {
        src: response.data.condition.icon_url,
        alt: response.data.condition.icon,
      },
    });
  }

  function search() {
    const apiKey = "b36tedd42903o5c6c68a4a10b4b1953f";
    const units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayTemp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleQuery(event) {
    console.log(event.target.value);
    setQuery(event.target.value);
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
              onChange={handleQuery}
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
        <CurrentWeather weatherInfo={weatherData} />
        <Forecast coords={weatherData.coords} />
      </div>
    );
  } else {
    search(query);
    return <div>Loading...</div>;
  }
}
