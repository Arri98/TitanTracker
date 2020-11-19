import React, { useState, useEffect } from 'react';

function Army(props) {
  const [title, setTitle] = useState('');
  const [state, setState] = useState(props.addingArmy);

  const handleChange = (event) => setTitle(event.target.value);

  useEffect(() => {
    setState(props.addingArmy);
  }, [props.addingArmy]);

  return state ? (
    <div className="Army Picker" style={{ display: { state }, marginTop: '5px' }}>
      Nombre del ejercito
      <br />
      <input type="text" style={{ margin: '5px' }} onChange={handleChange} value={title} />
      <br />
      <button onClick={() => { props.dispatch({ type: 'addArmy', army: title }); }}>Añadir</button>
      <button onClick={() => { props.setAddingArmy(false); }}>Cerrar</button>
    </div>
  )
    : null;
}

export default Army;
