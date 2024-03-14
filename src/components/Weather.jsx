import { useEffect, useState } from "react";

export default function Weather(){
    const [weather,setWeather] = useState(null)
    useEffect(()=>{
        fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=9HQmZuttb5HxE9uODAqBq9QP7jJr6r3V')
        .then((data) => data.json())
        .then((data)=> setWeather(data))
        .catch((error)=> console.log(error))

    },[])
    console.log(weather);
    return (
        <div
          style={{
            background: " #5746EA ",
            width: "25vw",
            padding: "16px",
            color: "white",
            marginTop:"20px",
            borderRadius:"20px"

          }}>
          <p>Weather</p>
          {weather ? weather.timelines.daily[0].values.temperatureAvg > 20 ? "sunny" : "winter" :"Loading..."}
          <p>Temperature</p>
          {weather ? weather.timelines.daily[0].values.temperatureAvg : "Loading..."}
          <p>Humidity</p>
          {weather ? weather.timelines.daily[0].values.humidityAvg : "Loading..."}
          <p>Wind</p>
          {weather ? weather.timelines.daily[0].values.windGustAvg : "Loading..."}
        </div>);
}