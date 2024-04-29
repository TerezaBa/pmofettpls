export default function formatDate(timestamp) {
  let time = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[time.getDay()];
  return day;
}
