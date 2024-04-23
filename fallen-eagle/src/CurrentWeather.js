import React, { useState, useEffect } from "react";
import axios from "axios";
import Temperature from "./Temperature";
import moment from "moment-timezone";

import "./styles/CurrentWeather.css";

export default function CurrentWeather(props) {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    // setSearched(false);
    setCurrentTime(null);
    async function search() {
      let lat = props.weatherInfo.coords.latitude;
      let lon = props.weatherInfo.coords.longitude;
      let apiKey = "OA2X7WH81GI9";
      let apiUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`;
      const response = await axios.get(apiUrl);
      showTime(response);
    }
    search();
  }, [props.weatherInfo.coords]);

  function showTime(response) {
    let localTime = response.data.formatted;
    setCurrentTime(localTime);
    // setSearched(true);
  }

  async function search() {
    let lat = props.weatherInfo.coords.latitude;
    let lon = props.weatherInfo.coords.longitude;
    let apiKey = "OA2X7WH81GI9";
    let apiUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`;
    const response = await axios.get(apiUrl);
    showTime(response);
  }

  return (
    <div className="row CurrentWeather">
      <div className="col-6">
        <h1>{props.weatherInfo.city}</h1>
        <h6>
          {currentTime
            ? moment(currentTime).format("ddd Do MMMM, hh:mm A")
            : "Loading..."}
        </h6>
        <h4 className="text-capitalize">{props.weatherInfo.desc}</h4>
      </div>
      <div className="col-6 align-self-center">
        <Temperature
          metric={props.weatherInfo.temp}
          icon={props.weatherInfo.icon}
        />
        <ul>
          <li>
            <span className="info-text">Humidity:</span> {props.weatherInfo.hum}
            %
          </li>
          <li>
            <span className="info-text">Wind:</span> {props.weatherInfo.wind}{" "}
            m/s
          </li>
        </ul>
      </div>
    </div>
  );
  // } else {
  //   // search();
  //   return null;
  // }
}
