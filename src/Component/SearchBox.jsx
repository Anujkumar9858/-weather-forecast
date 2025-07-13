import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbox.css";
import InfoBox from "./InfoBox";

function SearchBox() {
  let [city, setCity] = useState("");
  let [weatherInfo, setWeatherInfo] = useState(null); // 👈 New state

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ac473898249d5424980b0c0ad9fcff37";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      setWeatherInfo(result); // 👈 Set dynamic data here
    } catch (err) {
      console.error("Error fetching weather data", err);
      setWeatherInfo(null);
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    getWeatherInfo();
    setCity("");
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
  <h3 className="fw-bold fs-1 SearchBox2">Search for the Weather</h3>
    <TextField
      id="City"
      label="City Name"
      variant="outlined"
      required
      value={city}
      onChange={handleChange}
    />
    <Button className="btn btn-outline-primary" variant="contained" type="Submit">
      Search
    </Button>
  </div>
</form>


      {/* 👇 Pass weatherInfo to InfoBox */}
      {weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  );
}

export default SearchBox;
