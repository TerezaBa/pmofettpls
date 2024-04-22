import React from "react";
// import WeatherIcon from "./WeatherIcon";
import Metric from "./Metric";
import Imperial from "./Imperial";
import FormatForecastDate from "./FormatForecastDate";

export default function OneDayForecast(props) {
  if (props.unit === "metric") {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <FormatForecastDate time={props.forecastData.time} />
            </h5>
            {/* <WeatherIcon
              iconInfo={props.forecastData.condition.icon}
              alt={props.forecastData.condition.description}
              size={42}
            /> */}
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
            {/* <WeatherIcon
              iconInfo={props.forecastData.condition.icon}
              alt={props.forecastData.condition.description}
              size={42}
            /> */}
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
