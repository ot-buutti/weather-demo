import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY; // This is how you read environmental variables with Vite
const rootUrl = "http://api.openweathermap.org/geo/1.0/direct";

const getLocationCoordinates = async (city, country) => {
    // Note: limit parameter defines how many results are returned at most
    const response = await axios.get(rootUrl + `?q=${city},${country}&limit=5&appid=${apiKey}`);

    return response;
}

export {getLocationCoordinates};