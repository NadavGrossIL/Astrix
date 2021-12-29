import React from 'react';
import './App.css';
import {CharactersList} from "./features/characters/CharactersList";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <CharactersList />
        </header>
      </div>
  );
}

export default App;
