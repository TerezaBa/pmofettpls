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
      <span className="Temperature">
        <span className="icon">
          <img src={props.icon.src} alt={props.icon.alt}></img>
        </span>
        <span className="temp">
          <Metric temp={props.metric} />
        </span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahr}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="Temperature">
        <span className="temp">
          <Imperial temp={props.metric} />
        </span>
        <span className="units">
          <a href="/" onClick={showCels}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
