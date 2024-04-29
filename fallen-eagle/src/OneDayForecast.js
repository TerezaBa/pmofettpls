import React from "react";
import Metric from "./Metric";
import Imperial from "./Imperial";
import FormatForecastDate from "./FormatForecastDate";

import "./styles/Forecast.css";

export default function OneDayForecast(props) {
  if (props.unit === "metric") {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <FormatForecastDate time={props.forecastData.time} />
            </h5>
            <img
              className="forecast-icon"
              src={props.forecastData.condition.icon_url}
              alt={props.forecastData.condition.icon}
              width="54px"
            ></img>
            <div className="forecast-temps">
              <span className="forecast-temp-max">
                <Metric temp={props.forecastData.temperature.maximum} />°
              </span>
              {"   "}
              <span className="forecast-temp-min">
                <Metric temp={props.forecastData.temperature.minimum} />°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <FormatForecastDate time={props.forecastData.time} />
            </h5>
            <img
              src={props.forecastData.condition.icon_url}
              alt={props.forecastData.condition.icon}
              width="54px"
            ></img>
            <div className="forecast-temps">
              <span className="forecast-temp-max">
                <Imperial temp={props.forecastData.temperature.maximum} />°
              </span>
              {"   "}
              <span className="forecast-temp-min">
                <Imperial temp={props.forecastData.temperature.minimum} />°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
