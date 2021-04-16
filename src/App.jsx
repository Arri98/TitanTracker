import './App.css';
import React, {useEffect} from 'react';
import ArmyContainer from './Components/ArmyContainer';

function App() {

  useEffect(() => {
	window.addEventListener('beforeunload', alertUser)
	return () => {
		window.removeEventListener('beforeunload', alertUser);
	}
  }, [])
  
 let alertUser = ()=>{
 	event.preventDefault();
 	return event.returnValue = "¿Quieres salir?";
 };

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
