import React from 'react';
import './App.css';
import Gamecard from './components/gamecard';

function App() {
  return (
    <div className="App">
      <Gamecard
      image='https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1636489113'
      title= 'Forza Horizon 5'
      description="Sua maior aventura Horizon te espera! Explore o mundo aberto vibrante e em constante evolução nas terras mexicanas..." 
      />
      <Gamecard
      image='https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1636489113'
      title= 'Forza Horizon 5'
      description="Sua maior aventura Horizon te espera! Explore o mundo aberto vibrante e em constante evolução nas terras mexicanas..." 
      />
      
    </div>
    
  );
}

export default App;
