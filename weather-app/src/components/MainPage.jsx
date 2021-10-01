import { InputGroup, FormControl, Container, Row, Col } from "react-bootstrap";
import React from "react";
import DisplayWeather from "./DisplayWeather";
export default function MainPage() {
  const searchRef = React.createRef();
  const [searchValue, setSearchValue] = React.useState(null);
  const [weather, setWeather] = React.useState([]);

  const fetchWeather = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=e48940e6267ee80fa1540403a0fd971b`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="search-field">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1"></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button onClick={(e) => fetchWeather(e)}>Search</button>
      </InputGroup>

      <Container>
        <Row>
          <Col md={2}>{weather && <DisplayWeather data={weather} />}</Col>
        </Row>
      </Container>
    </div>
  );
}
