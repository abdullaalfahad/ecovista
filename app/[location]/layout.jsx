export default function LocationLayout({
  children,
  aqi,
  temperature,
  wind,
  weather,
}) {
  return (
    <div>
      {children}
      {aqi}
      {temperature}
      {wind}
      {weather}
    </div>
  );
}
