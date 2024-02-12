import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const rootUrl = "https://api.openweathermap.org/data/2.5/weather";

const getCurrentWeather = async (lat, lon) => {
    const response = await axios.get(rootUrl + `?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

    return response;
}

export {getCurrentWeather};