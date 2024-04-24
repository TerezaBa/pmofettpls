import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment-timezone";

export default function CurrentTime(props) {
  const [currentTime, setCurrentTime] = useState(props.time);
  const [timer, setTimer] = useState(null);

  const fetchDate = async (coords) => {
    const { latitude, longitude } = coords;
    const apiKey = "OA2X7WH81GI9";
    const apiUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`;
    const response = await axios.get(apiUrl);
    console.log(response.data);
    setCurrentTime(response.data.formatted);
  };

  useEffect(() => {
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      fetchDate(props.coords);
    }, 1000);

    setTimer(newTimer);
    return () => clearTimeout(newTimer);
  }, [props.coords]);

  return (
    <div>
      <h6>
        {moment(currentTime).format("ddd Do MMMM, HH:mm") || "Loading time..."}
      </h6>
    </div>
  );
}
