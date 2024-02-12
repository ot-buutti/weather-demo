import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Don't forget to import this if using react-bootstrap!
import UserControls from "./components/UserControls"
import WeatherDataAll from "./components/WeatherDataAll";

const App = () => {
    const initialValues = {city: "", country: ""};

    const [searchConditions, setSearchConditions] = useState(initialValues);

    useEffect(() => {
        if (searchConditions.city !== "") document.title = `Weather in ${searchConditions.city}`;
        else document.title = "Weather app demo";
    }, [searchConditions]);

    return (
        <Container fluid="md">
            <Row>
                <Col xs={4}>  
                    <UserControls setSearchConditions={setSearchConditions}/>
                </Col>
                <Col xs={7}>
                    {(searchConditions.city !== "") ?
                    <WeatherDataAll searchConditions={searchConditions} />
                    :
                    <h2><b>Input search conditions to display current weather</b></h2>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default App
