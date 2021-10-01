import React from "react";

export default function DisplayWeather(props) {
  console.log(props);
  return (
    <div className="weather-card">
      <div>{props.data.name}</div>
      <p>{props.data.main.temp}</p>
    </div>
  );
}
