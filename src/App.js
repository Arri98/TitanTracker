import './App.css';
import React,{useState} from 'react'
import ArmyContainer from './Components/ArmyContainer'
import Army from './Components/Army'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <ArmyContainer title={'Mi ejercito'}/>
        <ArmyContainer title={'Ejercitos enemigos'}/>
      </header>
    </div>
  );
}

export default App;
