import React from 'react';
import logo from './logo.svg';
import ScoreCard from './components/ScoreCard'
import GameInterface from './components/GameInterface'
import './App.css';

function App() {
  return (
    <div className="App">
      <ScoreCard />
      <GameInterface />
    </div>
  );
}

export default App;
