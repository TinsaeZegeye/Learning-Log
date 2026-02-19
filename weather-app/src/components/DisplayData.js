export default function DisplayData({ data }) {
  if (!data || !data.location || !data.current) return null;
  return (
    <div>
      <h2 className="city-name">
        {data.location?.name}, {data.location?.country}
      </h2>

      <h3 className="date">
        {new Date(data.location?.localtime).toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </h3>

      <div className="weather-icon">
        <img
          src={data.current.condition?.icon}
          alt={data.current.condition?.text}
          className="icon-temp"
        />

        <span className="deg">
          {Math.round(data.current?.temp_c)}
          <sup>°c</sup>
        </span>
      </div>

      <div className="des-wind">
        <p>{data.current.condition?.text}</p>
        <p>Wind Speed: {data.current?.wind_mph} m/h</p>
      </div>
    </div>
  );
}
