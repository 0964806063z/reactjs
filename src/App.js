
import './App.css';
import React, { Component } from 'react';
import FirstHook from './ex/firsthook';
import FirstOne from './ex/first-one-way';
import CardsApp from './ex/github-card';
import StarGame from './ex/star-game';
function App() {
  return (
    <div className="">
      <header className="">
        <div className='container'>
          <h1> Bài tập</h1>
        </div>
      </header>
      <main>
        <div className='container'>
          <h2>1: The Basics</h2>
          <FirstHook />
          <FirstOne />

          <h2>2: The GitHub Cards App</h2>
          <CardsApp />

          <h2>3: The Start Match Game</h2>
          <StarGame />
        </div>

      </main>
    </div>
  );
}

export default App;
