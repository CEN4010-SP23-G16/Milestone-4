import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlinePercentage } from 'react-icons/ai';
import { useLocation } from 'react-router';
import LocationSearch from '../0_Components/LocationSearch';

export default function Info() {
  const location = useLocation();
  const unixTimestamp = location.state.dt; // replace with the `dt` attribute value from your API response
  const time = new Date(unixTimestamp * 1000);
  const formattedDate = time.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); // format the date as Month/Day/Year
  const formattedTime = time.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true });

  return (
    <>
      <Container>
        <div><LocationSearch location={location}/></div>
        <Row>
          <Col md={6}>
            <h1>{location.state.name}, {location.state.sys.country}</h1>
            <h3>Time: {formattedDate}, {formattedTime}</h3>
          </Col>
          <Col md={6}>
            <div className='d-inline-flex'>
              <img
                src={`https://openweathermap.org/img/wn/${location.state.weather[0].icon}.png`}
                alt={location.state.weather[0].main}
                width="100%"
              />
              <h1>Temperature: {location.state.main.temp.toFixed()}ºF</h1>
            </div>
          </Col>
          <Col>
            <h2>Feels like: {location.state.main.feels_like.toFixed()}ºF</h2>
          </Col>
          <Col>
            <h2>Humidity: {location.state.main.humidity.toFixed()}<AiOutlinePercentage className='percent'/></h2>
          </Col>
          <Col>
            <h2>Wind Speed: {location.state.wind.speed} m/s</h2>
          </Col>
          <Col>
            <h2>Precipitation: {location.state.rain ? location.state.rain['1h'] + ' mm' : 'N/A'}</h2>
          </Col>
          
        </Row>

        <Row>
          <Col>
            <h2>Forcast</h2>
          </Col>
        </Row>
        
      </Container>
      
    </>
  )
}
