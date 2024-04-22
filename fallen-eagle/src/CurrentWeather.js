import React, { useState, useEffect } from "react";
// import FormatCurrentDate from "./FormatCurrentDate";
import axios from "axios";
import Temperature from "./Temperature";
import moment from "moment-timezone";

import "./styles/CurrentWeather.css";

export default function CurrentWeather(props) {
  const [searched, setSearched] = useState(false);
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    setSearched(false);
    setCurrentTime(null);
    search();
  }, [props.weatherInfo.coords]);

  function showTime(response) {
    console.log(response.data);
    console.log(response.data.zoneName);
    let localTime = response.data.formatted;
    // let formattedLocalTime = localTime.format("LLLL");
    setCurrentTime(localTime);
    setSearched(true);
  }

  function search() {
    // if (searched) return;

    let lat = props.weatherInfo.coords.latitude;
    let lon = props.weatherInfo.coords.longitude;
    let apiKey = "OA2X7WH81GI9";
    let apiUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`;
    axios.get(apiUrl).then(showTime);
  }

  if (searched) {
    return (
      <div className="row CurrentWeather">
        <div className="col-6">
          <h1>{props.weatherInfo.city}</h1>
          <h6>
            {moment(currentTime).format("ddd Do MMMM")}
            {moment(currentTime).format(", hh:mm A")}
          </h6>
          <h4 className="text-capitalize">{props.weatherInfo.desc}</h4>
          <ul>
            <li>
              <span className="info-text">Humidity:</span>{" "}
              {props.weatherInfo.hum}%
            </li>
            <li>
              <span className="info-text">Wind:</span> {props.weatherInfo.wind}{" "}
              m/s
            </li>
          </ul>
        </div>
        <div className="col-6 align-self-center">
          <Temperature
            metric={props.weatherInfo.temp}
            icon={props.weatherInfo.icon}
          />
        </div>
      </div>
    );
  } else {
    // search();
    return null;
  }
}
