export default function FormatForecastDate(props) {
  let time = new Date(props.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[time.getDay()];
  return day;
}
