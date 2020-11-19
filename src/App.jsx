import './App.css';
import React from 'react';
import ArmyContainer from './Components/ArmyContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ArmyContainer title="Mi ejercito" />
        <ArmyContainer title="Ejercitos enemigos" />
      </header>
    </div>
  );
}

export default App;
