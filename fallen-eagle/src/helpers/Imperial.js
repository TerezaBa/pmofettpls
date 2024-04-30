export default function getImperialTemp(temp) {
  let fahrTemp = Math.round(temp * 1.8 + 32);
  return fahrTemp;
}
