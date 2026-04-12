"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type WeatherDataType = {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  name: string;
};

export default function WeatherData() {
  const [data, setData] = useState<WeatherDataType | null>(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Dhaka,bd&units=metric&APPID=be37f6245c6fe9bd677580da817c1ca8"
    )
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  if (!data || !data.weather) return null;

//   const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="text-white p-3">
      <div className="flex items-center justify-center gap-4">
        <div>
             <p className="text-2xl">
            {data.main.temp.toFixed(1)}°C ({data.main.humidity}%)
        </p>
            <div>Wind: {data.wind.speed} m/s ({data.wind.deg}°)</div>
      <div>{data.name}, Bangladesh</div>
        </div>
       
        <Image src="/haze.png" width={60} height={60} alt="weather icon" />
      </div>

      
    </div>
  );
}
