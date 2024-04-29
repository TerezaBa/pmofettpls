export default function getUtcOffset(offset) {
  const hours = Math.floor(Math.abs(offset / 3600));
  const secondsLeft = Math.abs(offset % 3600);
  const minutes = Math.floor(secondsLeft / 60);

  const sign = offset >= 0 ? "+" : "-";
  const offsetHours = hours < 10 ? "0" + hours : hours;
  const offsetMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `(UTC${sign}${offsetHours}:${offsetMinutes})`;
}
