import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TempMap from '../MapsRadarPage/TempMap';

export default function MapsAndRadar() {
  const [map, setMap] = useState('map1');

  const renderMap = () => {
    switch (map) {
      case 'map1':
        return <TempMap />;
      default:
        return <TempMap />;
    }
  };
  

  return (
    <>
      <div className="d-flex justify-content-center my-0">
        <button className="btn btn-primary mx-1" style={{position: 'absolute', zIndex: '999'}} onClick={() => setMap('TempMap')}>
          Temp Map
        </button>
      </div>
      {renderMap()}
    </>
  );
}
