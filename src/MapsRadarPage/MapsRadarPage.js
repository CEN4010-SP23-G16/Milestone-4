import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapsRadar.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiamVoYWQzOTIiLCJhIjoiY2xnOGh2Z200MGc4eTNsbmJ4bzk2b3ViayJ9.dxzPL3F1mQsRYs8_35d_fA';

export default function MapsRadarPage() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-98.5795, 39.8283],
      zoom: 3
    });

    setMap(newMap);

    return () => newMap.remove();
  }, []);

// Map done being generated

  useEffect(() => {
    if (!map) return;

    const getWeatherData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/box/city?bbox=-180,-90,180,90,10&appid=ea2ebba4214c311f36ba1cc2619ed14b`);
      const data = await response.json();

  
    };

    getWeatherData();
    console.log(getWeatherData)
  }, [map]);

  return (
    <>
      <div id="map" style={{ width: '100%', height: '600px'}} />
    </>
  );
}