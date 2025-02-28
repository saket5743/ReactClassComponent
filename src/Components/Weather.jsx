import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`7b678cdf5c72d7a08f36ea76a0361be9`}`
      );
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(weather, "weather");
  const handleClick = () => {
    fetchWeather();
  };

  return (
    <div className="px-4 py-4 justify-center flex">
      <div className="bg-blue-300 mt-8 h-[60vh] mr-10 ml-10 justify-center w-[100vh] rounded-lg">
        <div className="text-center py-5">
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={handleCityChange}
            className="border-b h-[6vh] w-[60vh] rounded-lg px-4"
          />
        </div>
        <div className="mt-5 flex justify-center">
          <button
            className="bg-gray-300 px-5 h-[5vh] border-b"
            onClick={handleClick}
          >
            Get Weather
          </button>
        </div>
        {weather && (
          <>
            <div className="h-[20vh] mt-8 justify-center text-center font-bold">
              <h3>{weather.name}</h3>
              <p>Temp is {weather.main.temp}</p>
              <p>{weather.weather[0].description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
