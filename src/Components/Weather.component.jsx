import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Lahore");
  const [weather,setWeather]=useState(null)

  useEffect(() => {
    const fetchAPI = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=21e5dce19268dc4c3a9a04f3fddb5187&units=metric`;
      const response= await fetch(URL)
      const resp=await response.json();
      setCity(resp.main)
      setWeather(resp.weather)
      // console.log(resp);
      // console.log(resp.weather);
    };

    fetchAPI();
  },[search]);
  return (
    <>
      <Container className="">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <h1 className="alert alert-danger text-center mt-2">
              HMJ Weather's App
            </h1>
            <div className="box">
              <input
                type="text"
                className="form-control input_data"
                placeholder="Search City"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <br/>
              {!city || !weather ? (
                <>
                  <br />
                  <p className="Error text-center">No Data Found</p>
                </>
              ) : (
                <Card className="CardStyle">
                  <Card.Body>
                    <h1 className="location text-center">{search}</h1>
                    <br />
                    
                    <div className="img">
                    <img className="img-fluid"
                      src={
                        `http://openweathermap.org/img/wn/`+weather[0].icon+`@2x.png`
                      }
                      />
                    </div>
 
                    <h2 className="temp text-center">
                      {weather[0].main} | {city.temp}&deg;C
                    </h2>
                    <br />
                    <br />

                    <h4 className="minMax_temp text-center">
                      Min: {city.temp_min}&deg;C | Max: {city.temp_max}&deg;C
                    </h4>
                  </Card.Body>
                </Card>
              )}
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Weather;
