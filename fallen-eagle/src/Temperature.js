import React, { useContext } from "react";
import { UnitSwitchContext } from "./UnitSwitchContext";
import Metric from "./Metric";
import Imperial from "./Imperial";

import "./styles/Temperature.css";

export default function Temperature(props) {
  const { unit, setUnit } = useContext(UnitSwitchContext);

  function showCels(event) {
    event.preventDefault();
    setUnit(`metric`);
  }

  function showFahr(event) {
    event.preventDefault();
    setUnit();
  }

  if (unit === `metric`) {
    return (
      <div className="Temperature">
        <div className="item icon">
          <img
            src={props.weather_info.icon.src}
            alt={props.weather_info.icon.alt}
          ></img>
        </div>
        <div className="item">
          <div className="temp-figure">
            <Metric temp={props.weather_info.metric} />
          </div>
        </div>
        <div className="item item-4">
          <div className="units">
            °C |{" "}
            <a href="/" onClick={showFahr}>
              °F
            </a>
          </div>
        </div>
        <div className="item item-4">
          <ul>
            <li>
              <span className="info-text">Humidity:</span>{" "}
              {props.weather_info.hum}%
            </li>
            <li>
              <span className="info-text">Wind:</span> {props.weather_info.wind}{" "}
              m/s
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <div className="item icon">
          <img
            src={props.weather_info.icon.src}
            alt={props.weather_info.icon.alt}
          ></img>
        </div>
        <div className="item">
          <div className="temp-figure">
            <Imperial temp={props.weather_info.metric} />
          </div>
        </div>
        <div className="item item-4">
          <div className="units">
            <a href="/" onClick={showCels}>
              °C
            </a>{" "}
            | °F
          </div>
        </div>
        <div className="item item-4">
          <ul>
            <li>
              <span className="info-text">Humidity:</span>{" "}
              {props.weather_info.hum}%
            </li>
            <li>
              <span className="info-text">Wind:</span> {props.weather_info.wind}{" "}
              m/s
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
