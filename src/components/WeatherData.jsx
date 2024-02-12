import { Table } from "react-bootstrap";

const WeatherData = ({cityWeather}) => {
    const imageUrl = `https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`;

    return (
        <>
            <div>Current weather in <b>{cityWeather.name}, {cityWeather.sys.country}</b></div>
            <div>Longitude: {cityWeather.coord.lon}, Latitude: {cityWeather.coord.lat}</div>
            <Table striped bordered hover={true} variant="dark">
                <tbody>
                    <tr>
                        <td>Description: </td>
                        <td>{cityWeather.weather[0].main}, {cityWeather.weather[0].description}</td>
                        <td rowSpan={5}><img src={imageUrl} height="150" width="150" /></td>
                    </tr>
                    <tr>
                        <td>Temperature: </td>
                        <td>{cityWeather.main.temp} °C</td>
                    </tr>
                    <tr>
                        <td>Feels like: </td>
                        <td>{cityWeather.main.feels_like} °C</td>
                    </tr>
                    <tr>
                        <td>Humidity: </td>
                        <td>{cityWeather.main.humidity} %</td>
                    </tr>
                    <tr>
                        <td>Wind: </td>
                        <td>{cityWeather.wind.speed} m/s</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default WeatherData;