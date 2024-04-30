import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment-timezone";
import getUtcOffset from "../helpers/FormatUtcOffset";

import "../styles/CurrentTime.css";

export default function CurrentTime(props) {
  const [currentTime, setCurrentTime] = useState(props.time);
  const [offset, setOffset] = useState(null);

  const fetchDate = async (coords) => {
    const { latitude, longitude } = coords;
    const apiKey = "OA2X7WH81GI9";
    const apiUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`;
    const response = await axios.get(apiUrl);
    console.log(response.data);

    const offsetSeconds = response.data.gmtOffset - response.data.dst * 3600;
    setOffset(offsetSeconds);
    setCurrentTime(response.data.formatted);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchDate(props.coords);
    }, 100);

    return () => clearTimeout(timer);
  }, [props.coords]);

  return (
    <div className="CurrentTime">
      <h6>
        {moment(currentTime).format("ddd Do MMMM, HH:mm") +
          " " +
          getUtcOffset(offset) || "Loading time..."}
      </h6>
    </div>
  );
}
