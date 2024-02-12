import { useState, useEffect } from "react";
import WeatherData from "./WeatherData.jsx";
import {getLocationCoordinates} from "../controllers/geography.js"
import { getCurrentWeather } from "../controllers/weather.js";

const WeatherDataAll = ({searchConditions}) => {
    const [weatherData, setWeatherData] = useState([]);

    const fetchWeatherData = async () => {
        let locationResponse = [];

        try {
            locationResponse = await getLocationCoordinates(searchConditions.city, searchConditions.country);

            // Promise.all, because multiple different requests are made and weatherData is dependant on all of them
            const weatherDataArray = await Promise.all(
                locationResponse.data.map(async (city) => {
                    const weatherResponse = await getCurrentWeather(city.lat, city.lon);
                    return weatherResponse.data;
                })
            );

            setWeatherData(weatherDataArray);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeatherData();
    }, [searchConditions]); // useEffect callback function is executed every time searchConditions change
    
    if (weatherData.length > 0) {
        const len = weatherData.length;
        
        return (
            <>
                <h3><b>Found {len} result{(len === 1) ? "" : "s"}</b></h3>
                {weatherData.map((cityWeather, index) => (
                    <>
                        <WeatherData key={index} cityWeather={cityWeather} />
                        <br />
                    </>
                ))}
            </>
        );
    } else {
        return (
            // eslint-disable-next-line react/no-unescaped-entities
            <h2>No results found for "{searchConditions.city}, {searchConditions.country}". Please try again with a different search.</h2>
        )
    }
}

export default WeatherDataAll;