export default function Imperial(props) {
  let fahrTemp = Math.round(props.temp * 1.8 + 32);
  return fahrTemp;
}
