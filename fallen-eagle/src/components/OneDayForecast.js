import React from "react";
import getMetricTemp from "../helpers/Metric";
import getImperialTemp from "../helpers/Imperial";
import formatDate from "../helpers/FormatForecastDate";

import "../styles/Forecast.css";

export default function OneDayForecast(props) {
  if (props.unit === "metric") {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {formatDate(props.forecastData.time)}
            </h5>
            <img
              className="forecast-icon"
              src={props.forecastData.condition.icon_url}
              alt={props.forecastData.condition.icon}
            ></img>
            <div className="forecast-temps">
              <span className="forecast-temp-max">
                {getMetricTemp(props.forecastData.temperature.maximum)}°
              </span>
              {"   "}
              <span className="forecast-temp-min">
                {getMetricTemp(props.forecastData.temperature.minimum)}°
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
              {formatDate(props.forecastData.time)}
            </h5>
            <img
              src={props.forecastData.condition.icon_url}
              alt={props.forecastData.condition.icon}
            ></img>
            <div className="forecast-temps">
              <span className="forecast-temp-max">
                {getImperialTemp(props.forecastData.temperature.maximum)}°
              </span>
              {"   "}
              <span className="forecast-temp-min">
                {getImperialTemp(props.forecastData.temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
