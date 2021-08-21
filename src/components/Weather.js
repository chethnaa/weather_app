import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "Enter api key here";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add city name");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    if (name === "city") {
      setForm({ ...form, city: value });
    }
    
  };

  return (
    <div className="weather">
      <span className="title">WEATHER</span>
      <form>
        <input
          type="text"
          placeholder="Search city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
       
        <button className="getweather" onClick={(e) => weatherData(e)}>submit
        </button>
      </form><br/>

      <div class="tab">
        <button class="tablinks" id="defaultOpen">Home</button>
        <button class="tablinks">Favorite</button>
        <button class="tablinks" onclick>Search</button>
      </div>
      <hr size="1" width="100%" color="white"/>  

      {/* {console.log(weather)} */}
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
