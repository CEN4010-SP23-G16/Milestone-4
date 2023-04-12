import React, { useState, useEffect } from 'react';

export default function App() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }
  
  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Today is {date.toLocaleDateString()}</p>
      <p>The time is {date.toLocaleTimeString()}</p>
    </div>
  );
  
  date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }