import React, { useState } from 'react';
import { TfiLocationArrow } from 'react-icons/tfi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LocationSearch() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ea2ebba4214c311f36ba1cc2619ed14b`;
  // const forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=ea2ebba4214c311f36ba1cc2619ed14b`;
  const autocomplete = `https://api.openweathermap.org/data/2.5/find?cnt=5&q=${location}&appid=ea2ebba4214c311f36ba1cc2619ed14b`;
  
  const searchLocation = () => {
    if (!location) {
      setErrorMessage('*Please enter a city*');
      return;
    }
    axios.get(url)
      .then((response) => {
        console.log('Data from API:', response.data);
        navigate(`/weather?location=${location}`, { state: response.data });
      });
    setLocation('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchLocation();
    }
  };

  const handleAutocomplete = () => {
    axios.get(autocomplete)
      .then((response) => {
        setSuggestions(response.data.list);
      });
  };

  return (
    <>
      <h4 className='entercity'>Enter City Name</h4>
      <input
        type='text'
        placeholder='Enter location'
        className='fontstyle searchbox'
        onChange={(event) => { setLocation(event.target.value); handleAutocomplete(); }}

        value={location}
        onKeyDown={handleKeyPress}
      />

      <button
        className='searchButton'
        onClick={searchLocation}
      >
        <TfiLocationArrow className='icon' />
      </button>

    <div className='errormsg'>{errorMessage}</div>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <ul key={suggestion.id} onClick={() => {
              setLocation(suggestion.name);
              setSuggestions([]);
            }}>
              {suggestion.name}
              <p>, </p>
              {suggestion.sys.country}
            </ul>
          ))}
        </ul>
      )}
      
    </>
  )
}
