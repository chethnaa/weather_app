import React from "react";
import "./displayweather.css";

function DisplayWeather(props) {
  const { data } = props;
    const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
    
  
  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country}
            </span>
            <span className="cardsubtitle">
            {new Date().toLocaleString() + ''}
            </span>
          </div>

          <div className="sec"> 
          <div> 
            <h1>  
            <img className="weather-icon" src={iconurl} alt="" srcset="" />
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup><br/>
            </h1>
            </div>
            <div className="weather-description">
              {data.weather[0].description}
            </div>
          </div>

          <div className="line">
          <hr size="1" width="100%" color="white"/>
          </div>
            

          <div className="weatherdetails">
              <table>
                <tr>
                  <td>Min - Max</td>
                  <td>Humidity</td>
                  <td>Wind</td>
                  <td>Visibility</td>
                </tr>
                <tr>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}-
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                  </td>
                  <td>
                    <span>{data.main.humidity} %</span>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                  <td>
                    <span>{data.visibility / 1000} Km</span>
                  </td>
                </tr>
              
              </table>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;